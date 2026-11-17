"use strict";
const modes = {
  game: { name: "遊戲設計 Agent", label: "遊戲創意", title: "今天想做甚麼遊戲？", description: "從玩法、受眾或一個靈感開始，整理你的遊戲創作需求。", example: "在澳門舊城尋找線索，設計一段五分鐘的解謎體驗。", icon: "must-emblem.png" },
  image: { name: "圖片生成", label: "圖片提示詞", title: "想創作甚麼圖片？", description: "描述主體、構圖和風格，整理你的遊戲素材需求。", example: "水彩風格的澳門街景，有柔和的晨光，適合作為遊戲背景。", icon: "muyu-ai-icon.png" },
  video: { name: "影片生成", label: "影片提示詞", title: "想創作甚麼影片？", description: "描述景別、動作和鏡頭，整理你的遊戲影像需求。", example: "鏡頭緩慢掠過夜晚的澳門街道，霓虹倒映在濕潤的石板上。", icon: "muyu-ai-icon.png" },
};
const el = (id) => document.getElementById(id);
const prompt = el("prompt"), status = el("status");
const drafts = new Map();
let current;
function load(key) {
  if (drafts.has(key)) return drafts.get(key);
  try { return localStorage.getItem("must-pages:draft:" + key) || ""; } catch { return ""; }
}
function updateButtons() {
  el("save").disabled = el("download").disabled = !prompt.value.trim();
}
function switchMode() {
  if (current) drafts.set(current, prompt.value);
  const candidate = location.hash.slice(1);
  current = Object.hasOwn(modes, candidate) ? candidate : "game";
  const mode = modes[current];
  el("title").textContent = mode.title;
  el("subtitle").textContent = mode.description;
  el("mode-name").textContent = mode.name;
  el("prompt-label").textContent = mode.label;
  el("mode-mark").src = "./assets/" + mode.icon;
  prompt.placeholder = mode.example;
  prompt.value = load(current);
  status.textContent = "";
  document.querySelectorAll("[data-mode]").forEach((link) => {
    if (link.dataset.mode === current) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  updateButtons();
}
prompt.addEventListener("input", () => { status.textContent = ""; updateButtons(); });
el("example").addEventListener("click", () => { prompt.value = modes[current].example; status.textContent = ""; updateButtons(); prompt.focus(); });
el("composer").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!prompt.value.trim()) return;
  drafts.set(current, prompt.value);
  try { localStorage.setItem("must-pages:draft:" + current, prompt.value); status.textContent = "草稿已儲存在此瀏覽器。"; }
  catch { status.textContent = "無法儲存草稿，請匯出提示詞。"; }
});
el("download").addEventListener("click", () => {
  if (!prompt.value.trim()) return;
  const a = document.createElement("a");
  const url = URL.createObjectURL(new Blob([prompt.value.trim() + "\n"], { type: "text/plain;charset=utf-8" }));
  a.href = url; a.download = "must-studio-" + current + ".txt";
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
window.addEventListener("hashchange", switchMode);
switchMode();
