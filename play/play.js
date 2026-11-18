const get = (id) => document.getElementById(id);
const model = get("model");
const connection = get("connect");
const generate = get("generate");
const status = get("status");
const board = get("board");
const ctx = board.getContext("2d");
const endpoint = "http://127.0.0.1:11434";
const textLimits = { title: 40, player: 16, item: 16, obstacle: 16 };
const ranges = { size: [6, 10], goal: [3, 10], obstacles: [0, 12], moves: [25, 100] };
const themes = {
  forest: ["#10291e", "#244b35", "#b9fbc0", "#ffd76e", "#ec847b"],
  space: ["#16132c", "#2e2851", "#b5c6ff", "#ffe998", "#ff88bd"],
  ocean: ["#092934", "#185064", "#b1f5ed", "#ffd987", "#ff9d98"],
  city: ["#20283b", "#3d4c67", "#92e5ff", "#ffdf7f", "#ff9393"],
};
const sample = { title: "月光森林", player: "狐狸", item: "星星", obstacle: "幽靈", theme: "forest", size: 8, goal: 5, obstacles: 8, moves: 45 };
const schema = {
  type: "object",
  additionalProperties: false,
  required: Object.keys(sample),
  properties: {
    ...Object.fromEntries(Object.entries(textLimits).map(([key, maxLength]) => [key, { type: "string", minLength: 1, maxLength }])),
    ...Object.fromEntries(Object.entries(ranges).map(([key, [minimum, maximum]]) => [key, { type: "integer", minimum, maximum }])),
    theme: { enum: Object.keys(themes) },
  },
};
const directions = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
let game;

function validate(spec) {
  for (const [key, limit] of Object.entries(textLimits)) {
    if (typeof spec?.[key] !== "string" || !spec[key].trim() || spec[key].length > limit) {
      throw new Error("模型沒有回傳有效的遊戲名稱或角色。請重試。");
    }
  }
  for (const [key, [min, max]] of Object.entries(ranges)) {
    if (!Number.isInteger(spec[key]) || spec[key] < min || spec[key] > max) {
      throw new Error("模型回傳的遊戲規則超出範圍。請重試。");
    }
  }
  if (!Object.hasOwn(themes, spec.theme)) throw new Error("模型回傳了不支援的場景。請重試。");
  return spec;
}

async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(endpoint + path, {
      ...options, credentials: "omit", redirect: "error",
      signal: AbortSignal.timeout(options.method === "POST" ? 180000 : 8000),
    });
  } catch (error) {
    if (error.name === "TimeoutError") throw new Error("本機模型回應逾時。請重試或換一個較小的模型。");
    throw new Error("無法連接本機 Ollama。請確認服務已啟動、允許本站來源，並在瀏覽器允許本機網路存取。");
  }
  if (!response.ok) throw new Error("Ollama 回傳錯誤（" + response.status + "）。請確認已安裝所選模型。");
  return response.json();
}

connection.addEventListener("click", async () => {
  connection.disabled = true;
  generate.disabled = true;
  model.disabled = true;
  model.replaceChildren(new Option("正在連接…", ""));
  status.textContent = "正在連接本機 Ollama…";
  try {
    const result = await request("/api/tags");
    const names = (result.models ?? [])
      .filter((entry) => !entry.remote_host && typeof entry.name === "string" && !/:cloud$|-cloud(?:$|:)/i.test(entry.name))
      .map((entry) => entry.name);
    if (!names.length) throw new Error("沒有找到本機模型。請先在 Ollama 下載一個模型。");
    model.replaceChildren(...names.map((name) => new Option(name)));
    model.disabled = false;
    generate.disabled = false;
    status.textContent = "本機模型已連接。";
  } catch (error) {
    model.replaceChildren(new Option("請先連接", ""));
    status.textContent = error.message;
  } finally {
    connection.disabled = false;
  }
});

get("generator").addEventListener("submit", async (event) => {
  event.preventDefault();
  const idea = get("idea").value.trim();
  if (!idea || generate.disabled || !model.value) return;
  connection.disabled = generate.disabled = model.disabled = true;
  status.textContent = "本機模型正在設計遊戲…";
  try {
    const result = await request("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: model.value,
        stream: false,
        format: schema,
        options: { num_predict: 700 },
        system: "Design a small grid collection game matching the user's idea. Return only JSON following the supplied schema. Use the user's language for title, player, item, and obstacle. Choose enough moves to collect the goal. Themes: forest, space, ocean, city.",
        prompt: idea,
      }),
    });
    if (typeof result.response !== "string" || result.response.length > 8192) throw new Error("模型回傳無效，請重試。");
    let spec;
    try { spec = JSON.parse(result.response); } catch { throw new Error("模型沒有回傳有效的遊戲設定。請重試或換一個模型。"); }
    start(validate(spec));
    status.textContent = "遊戲已生成，可使用方向鍵或畫面按鈕試玩。";
  } catch (error) {
    status.textContent = error.message;
  } finally {
    connection.disabled = generate.disabled = model.disabled = false;
  }
});

function start(spec) {
  const transpose = Math.random() < 0.5;
  const path = Array.from({ length: spec.size ** 2 }, (_, i) => {
    const row = Math.floor(i / spec.size);
    const col = row % 2 ? spec.size - 1 - i % spec.size : i % spec.size;
    return transpose ? col * spec.size + row : row * spec.size + col;
  });
  const safeSteps = Math.min(path.length - 1, spec.moves - 5, spec.goal * 3);
  const route = path.slice(1, safeSteps + 1);
  const outside = path.slice(safeSteps + 1);
  function shuffle(cells) {
    for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
    }
  }
  shuffle(route);
  shuffle(outside);
  game = { spec, position: 0, remaining: spec.moves, collected: 0, ended: false,
    items: new Set(route.slice(0, spec.goal)),
    hazards: new Set(outside.slice(0, spec.obstacles)),
  };
  get("title").textContent = spec.title;
  get("instructions").textContent = "扮演" + spec.player + "，收集 " + spec.goal + " 個「" + spec.item
    + "」。踏上「" + spec.obstacle + "」會額外扣 2 步。";
  get("game").hidden = false;
  draw();
  board.focus();
}

function draw() {
  const { spec, items, hazards, position, collected, remaining, ended } = game;
  const [bg, grid, playerColor, itemColor, hazardColor] = themes[spec.theme];
  const unit = board.width / spec.size;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, board.width, board.height);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = Math.floor(unit * 0.45) + "px system-ui";
  for (let i = 0; i < spec.size ** 2; i++) {
    const x = i % spec.size * unit;
    const y = Math.floor(i / spec.size) * unit;
    ctx.strokeStyle = grid;
    ctx.strokeRect(x, y, unit, unit);
    const mark = i === position ? [playerColor, spec.player] : items.has(i) ? [itemColor, spec.item]
      : hazards.has(i) ? [hazardColor, spec.obstacle] : null;
    if (mark) {
      ctx.fillStyle = mark[0];
      ctx.fillText(Array.from(mark[1]).slice(0, 2).join(""), x + unit / 2, y + unit / 2, unit * 0.85);
    }
  }
  const result = ended ? collected === spec.goal ? "成功！" : "步數用盡。" : "";
  get("score").textContent = result + " 已收集 " + collected + "／" + spec.goal + "，剩餘 " + remaining + " 步";
}

function move(key) {
  if (!game || game.ended || !Object.hasOwn(directions, key)) return;
  const { spec, position } = game;
  const [dx, dy] = directions[key];
  const x = position % spec.size + dx;
  const y = Math.floor(position / spec.size) + dy;
  if (x < 0 || y < 0 || x >= spec.size || y >= spec.size) return;
  game.position = x + y * spec.size;
  game.remaining = Math.max(0, game.remaining - (game.hazards.has(game.position) ? 3 : 1));
  if (game.items.delete(game.position)) game.collected++;
  game.ended = game.remaining === 0 || game.collected === spec.goal;
  draw();
}

board.addEventListener("keydown", (event) => {
  if (!Object.hasOwn(directions, event.key)) return;
  event.preventDefault();
  move(event.key);
});
for (const button of document.querySelectorAll("[data-move]")) {
  button.addEventListener("click", () => move(button.dataset.move));
}
get("sample").addEventListener("click", () => start(sample));
get("restart").addEventListener("click", () => start(game.spec));
