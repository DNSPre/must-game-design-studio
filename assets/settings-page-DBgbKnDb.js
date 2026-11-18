import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{Ca as t,Ct as n,Da as r,Dt as i,En as a,Gr as o,Ia as s,Lr as c,Ma as l,Na as u,Oa as d,On as f,Ta as p,V as m,Wn as h,Wt as g,X as _,Xr as v,ci as y,da as b,ia as x,in as S,ja as C,la as w,nt as T,pa as E,qr as ee,rn as D,st as te,tt as ne,ua as re,w as ie,wa as ae,x as O,y as oe}from"./routes-CeJ2y_gz.js";import{t as se}from"./add-DdBkFIDd.js";import{a as ce,n as le,o as k,p as ue,r as de}from"./model-selector-BOo7oM2b.js";import{n as A,t as fe}from"./trash-bin-trash-z8p0RdG5.js";import{i as pe,n as j,o as me,r as M,t as N}from"./server-OQgMvV2J.js";import{t as he}from"./markdown-content-CTRV_F8V.js";import{t as ge}from"./copy-ChPbotFF.js";import{a as _e,r as ve,t as ye}from"./window-drag-region-xftxhVCr.js";import{t as be}from"./restart-CDSv0kR_.js";import{t as xe}from"./square-arrow-right-up-BVqg3xmw.js";import{n as Se,r as Ce,t as we}from"./chat-layout-B6aWoKzZ.js";import{t as P}from"./ohmygame-mark-v2-BBSnHDKd.js";import{n as F,t as Te}from"./agent-usage-svZIEGi3.js";import{a as I,i as Ee,n as De,o as L,r as Oe}from"./appearance-BK5FRBsM.js";var R=e(s(),1),z=u(),ke=(0,R.forwardRef)((e,t)=>(0,z.jsxs)(l,{ref:t,...e,iconName:`bot-linear`,children:[(0,z.jsx)(`path`,{d:`M19.9458 12.5732C20.5207 12.6331 20.9393 12.7418 21.268 12.9391C22.0003 13.3784 22.0003 14.0855 22.0003 15.4997C22.0003 16.9139 22.0003 17.621 21.268 18.0604C20.9393 18.2576 20.5207 18.3663 19.9458 18.4262`,stroke:`currentColor`,strokeLinecap:`round`}),(0,z.jsx)(`path`,{d:`M4.05448 18.4262C3.47962 18.3663 3.06096 18.2576 2.73223 18.0604C2 17.621 2 16.9139 2 15.4997C2 14.0855 2 13.3784 2.73223 12.9391C3.06096 12.7418 3.47962 12.6331 4.05448 12.5732`,stroke:`currentColor`,strokeLinecap:`round`}),(0,z.jsx)(`path`,{d:`M4 15.5C4 14.3131 4 13.356 4.05448 12.5735C4.14064 11.336 4.36306 10.5351 4.93726 9.9519C5.87452 9 7.38301 9 10.4 9H13.6C16.617 9 18.1255 9 19.0627 9.9519C19.6369 10.5351 19.8594 11.336 19.9455 12.5735C20 13.356 20 14.3131 20 15.5C20 16.6869 20 17.644 19.9455 18.4265C19.8594 19.664 19.6369 20.4649 19.0627 21.0481C18.1255 22 16.617 22 13.6 22H10.4C7.38301 22 5.87452 22 4.93726 21.0481C4.36306 20.4649 4.14064 19.664 4.05448 18.4265C4 17.644 4 16.6869 4 15.5Z`,stroke:`currentColor`,strokeLinecap:`round`}),(0,z.jsx)(`circle`,{cx:`12`,cy:`3.5`,r:`1.5`,stroke:`currentColor`,strokeLinecap:`round`}),(0,z.jsx)(`path`,{d:`M12 5V9`,stroke:`currentColor`,strokeLinecap:`round`}),(0,z.jsx)(`path`,{d:`M9 18C9.85038 18.6303 10.8846 19 12 19C13.1154 19 14.1496 18.6303 15 18`,stroke:`currentColor`,strokeLinecap:`round`}),(0,z.jsx)(`path`,{d:`M15.5 13.5C15.5 14.0523 15.2761 14.5 15 14.5C14.7239 14.5 14.5 14.0523 14.5 13.5C14.5 12.9477 14.7239 12.5 15 12.5C15.2761 12.5 15.5 12.9477 15.5 13.5Z`,stroke:`currentColor`,strokeLinecap:`round`}),(0,z.jsx)(`ellipse`,{cx:`9`,cy:`13.5`,rx:`0.5`,ry:`1`,stroke:`currentColor`,strokeLinecap:`round`})]}));function Ae({runtime:e,defaultProfileId:t,onDefault:n,onLogin:r,onRemoved:i,disabled:a}){let[o,s]=(0,R.useState)([]),[c,l]=(0,R.useState)(!1),[u,d]=(0,R.useState)(),[f,m]=(0,R.useState)(``),[h,g]=(0,R.useState)(``),[v,y]=(0,R.useState)(!1),x=v||a,[S,w]=(0,R.useState)();(0,R.useEffect)(()=>{let t=!1,n=()=>void D(e).then(e=>{t||s(e)}).catch(e=>{t||w(String(e))});return n(),window.addEventListener(`focus`,n),()=>{t=!0,window.removeEventListener(`focus`,n)}},[e]);async function T(e){if(!x){y(!0),w(void 0);try{await e()}catch(e){w(e instanceof Error?e.message:String(e))}finally{y(!1)}}}function E(t){t.preventDefault(),T(async()=>{let t=await ie(e,f.trim(),h.trim()||void 0);s(e=>[...e,{...t,auth:{status:h.trim()?`unknown`:`signed-out`,billing:`unknown`}}]),l(!1),m(``),g(``),h.trim()?s(await D(e)):await r(t.id)})}return(0,z.jsxs)(`section`,{className:`settings-detail-section provider-models agent-account-profiles`,children:[(0,z.jsxs)(`div`,{className:`provider-models-heading`,children:[(0,z.jsx)(`h4`,{children:b(`codingAgents.profiles`)}),(0,z.jsxs)(`div`,{className:`provider-models-heading-actions`,children:[(0,z.jsx)(`button`,{className:`icon-button settings-provider-setting-edit`,type:`button`,"aria-label":b(`codingAgents.profileRecheck`),title:b(`codingAgents.profileRecheck`),disabled:x,onClick:()=>void T(async()=>{s(await D(e,!0))}),children:(0,z.jsx)(p,{size:14})}),(0,z.jsx)(`button`,{className:`icon-button settings-provider-setting-edit`,type:`button`,"aria-label":b(c?`common.cancel`:`codingAgents.profileAdd`),title:b(c?`common.cancel`:`codingAgents.profileAdd`),"aria-expanded":c,disabled:x,onClick:()=>{l(!c),m(``),g(``),w(void 0)},children:c?(0,z.jsx)(C,{size:14}):(0,z.jsx)(se,{size:14})})]})]}),(0,z.jsx)(`div`,{className:`provider-models-list agent-account-profile-list`,role:`radiogroup`,"aria-label":b(`codingAgents.profileDefault`),children:o.map(i=>{let a=i.id===`system`?b(`codingAgents.profileSystem`):i.name,o=i.id===t,s=i.auth.status===`signed-out`;return(0,z.jsxs)(`div`,{className:`provider-model-row is-compact`,children:[(0,z.jsxs)(`label`,{title:i.configDirectory,children:[(0,z.jsx)(`input`,{type:`radio`,name:`${e}-account-default`,"aria-label":b(`codingAgents.profileUseDefault`,{name:a}),checked:o,disabled:x,onChange:()=>void T(()=>n(i.id))}),(0,z.jsxs)(`span`,{className:`provider-model-copy`,children:[(0,z.jsx)(`strong`,{children:a}),o?(0,z.jsx)(`small`,{className:`provider-model-default`,title:b(`codingAgents.profileDefault`),children:b(`agents.default`)}):null,(0,z.jsx)(`small`,{title:i.auth.account,children:i.auth.account??b(s?`codingAgents.signedOut`:i.auth.status===`signed-in`?`codingAgents.signedIn`:`codingAgents.accountUnknown`)})]})]}),i.limits?.length?(0,z.jsx)(F,{limits:i.limits,compact:!0}):null,(0,z.jsx)(`button`,{className:s?`agent-account-sign-in`:`icon-button agent-account-reauth`,type:`button`,"aria-label":b(s?`common.signIn`:`codingAgents.switchAccount`),title:b(s?`common.signIn`:`codingAgents.switchAccount`),disabled:x,onClick:()=>void r(i.id),children:s?b(`common.signIn`):(0,z.jsx)(be,{size:14})}),i.id===`system`?null:(0,z.jsx)(`button`,{className:`icon-button settings-provider-setting-edit settings-provider-delete`,type:`button`,"aria-label":b(`codingAgents.profileDelete`,{name:a}),title:b(`codingAgents.profileDelete`,{name:a}),"aria-expanded":u?.id===i.id,disabled:x,onClick:()=>{d(i),w(void 0)},children:(0,z.jsx)(fe,{size:14})})]},i.id)})}),u?(0,z.jsxs)(`div`,{className:`settings-provider-delete-confirmation`,role:`group`,"aria-label":b(`codingAgents.profileDelete`,{name:u.name}),children:[(0,z.jsx)(`span`,{children:b(u.managed?`codingAgents.profileDeleteManaged`:`codingAgents.profileDeleteImported`,{name:u.name})}),(0,z.jsx)(`button`,{className:`settings-danger-button`,type:`button`,disabled:x,onClick:()=>void T(async()=>{await _(e,u.id),s(e=>e.filter(e=>e.id!==u.id)),d(void 0),await i()}),children:b(v?`common.deleting`:`common.delete`)}),(0,z.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,disabled:x,onClick:()=>d(void 0),children:b(`common.cancel`)})]}):null,c?(0,z.jsxs)(`form`,{className:`agent-account-profile-form`,onSubmit:E,children:[(0,z.jsxs)(`div`,{className:`settings-detail-inline`,children:[(0,z.jsx)(`input`,{className:`settings-search-input`,"aria-label":b(`codingAgents.profileName`),placeholder:b(`codingAgents.profileName`),value:f,maxLength:80,required:!0,autoFocus:!0,disabled:x,onChange:e=>m(e.target.value)}),(0,z.jsx)(`button`,{className:`settings-add-button`,type:`submit`,disabled:x||!f.trim(),children:b(`common.add`)})]}),(0,z.jsxs)(`details`,{className:`settings-provider-advanced`,children:[(0,z.jsxs)(`summary`,{children:[(0,z.jsx)(ue,{size:12}),b(`codingAgents.profileImport`)]}),(0,z.jsx)(`input`,{className:`settings-search-input`,"aria-label":b(`codingAgents.profileDirectory`),placeholder:b(`codingAgents.profileDirectory`),value:h,disabled:x,onChange:e=>g(e.target.value)})]})]}):null,S?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:S}):null]})}var je=[{value:`standard`,label:b(`codingAgents.permissionStandard`)},{value:`full`,label:b(`codingAgents.permissionFull`)}];function Me({models:e,defaultAgent:t,onOpen:n}){let[r,i]=(0,R.useState)(),[a,s]=(0,R.useState)(),[c,l]=(0,R.useState)(new Set);(0,R.useEffect)(()=>{let e=!0,t=()=>void S().then(t=>{e&&(i(t),s(void 0))}).catch(t=>{e&&s(U(t))});return t(),window.addEventListener(O,t),window.addEventListener(`focus`,t),()=>{e=!1,window.removeEventListener(O,t),window.removeEventListener(`focus`,t)}},[e]);async function u(e,t){l(t=>new Set(t).add(e.id)),i(n=>n?.map(n=>n.id===e.id?{...n,enabled:t}:n));try{let n=await o(e.id,{enabled:t});i(t=>t?.map(t=>t.id===e.id?n:t)),f()}catch(t){i(t=>t?.map(t=>t.id===e.id?e:t)),s(U(t))}finally{l(t=>{let n=new Set(t);return n.delete(e.id),n})}}return(0,z.jsxs)(`section`,{className:`settings-provider-group coding-agents-group`,"aria-label":b(`codingAgents.title`),children:[(0,z.jsx)(`h4`,{children:b(`codingAgents.title`)}),!r&&!a?(0,z.jsxs)(`div`,{className:`settings-loading`,children:[(0,z.jsx)(p,{className:`spin`,size:18}),b(`codingAgents.checking`)]}):null,(r??[]).map(e=>{let r=e.installed?b(`codingAgents.manage`,{name:e.name}):b(`codingAgents.setUp`,{name:e.name});return(0,z.jsxs)(`div`,{className:`settings-provider-row`,children:[(0,z.jsx)(V,{id:e.id}),(0,z.jsxs)(`span`,{className:`settings-provider-copy`,children:[(0,z.jsxs)(`strong`,{className:`settings-provider-name`,children:[(0,z.jsx)(`span`,{children:e.name}),e.id===t?(0,z.jsx)(`small`,{children:b(`agents.default`)}):null]}),(0,z.jsx)(`span`,{className:`settings-provider-details`,children:(0,z.jsx)(`span`,{className:`settings-provider-description`,children:H(e)})}),e.limits?.length?(0,z.jsx)(F,{limits:e.limits}):null]}),e.installed?(0,z.jsxs)(`label`,{className:`settings-toggle settings-provider-toggle`,title:e.enabled?b(`common.enabled`):b(`common.disabled`),children:[(0,z.jsx)(`input`,{type:`checkbox`,role:`switch`,"aria-label":b(`codingAgents.enable`,{name:e.name}),checked:e.enabled,disabled:c.has(e.id),onChange:t=>void u(e,t.target.checked)}),(0,z.jsx)(`span`,{"aria-hidden":`true`})]}):(0,z.jsx)(`em`,{className:`settings-provider-status is-not_configured`,children:b(`codingAgents.notInstalled`)}),(0,z.jsx)(`button`,{className:`icon-button settings-provider-action`,type:`button`,"data-tooltip":r,"aria-label":r,onClick:()=>n(e.id),children:(0,z.jsx)(ae,{size:17,"aria-hidden":`true`})})]},e.id)}),a?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:a}):null]})}function Ne({id:e,onBack:t}){let[n,r]=(0,R.useState)(),[i,s]=(0,R.useState)(),[c,l]=(0,R.useState)(),[u,d]=(0,R.useState)(),[m,g]=(0,R.useState)(``);(0,R.useEffect)(()=>{let t=!0;return S().then(n=>{let i=n.find(t=>t.id===e);t&&i&&(r(i),g(i.configuredBinaryPath??``))}).catch(e=>{t&&s(U(e))}),()=>{t=!1}},[e]);async function _(e,t){if(!c){l(e),s(void 0);try{await t()}catch(e){s(U(e))}finally{l(void 0)}}}let v=()=>_(`recheck`,async()=>{let t=await h(e);r(t),g(t.configuredBinaryPath??``),f()}),y=t=>_(`login`,async()=>{let n=await a(e,t);d(n),n.url&&await I(n.url).catch(()=>void 0)}),x=t=>_(`save`,async()=>{let n=await o(e,t);r(n),g(n.configuredBinaryPath??``),f()});function C(e){e.preventDefault(),x({binaryPath:m.trim()})}if(!n)return(0,z.jsxs)(`section`,{className:`settings-panel settings-provider-detail`,children:[(0,z.jsx)(`header`,{className:`settings-provider-detail-header`,children:(0,z.jsx)(`button`,{className:`icon-button settings-provider-back`,type:`button`,onClick:t,"aria-label":b(`common.back`),children:(0,z.jsx)(A,{size:16})})}),i?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:i}):(0,z.jsxs)(`div`,{className:`settings-loading`,children:[(0,z.jsx)(p,{className:`spin`,size:18}),b(`codingAgents.checking`)]})]});let w=n.diagnostics;return(0,z.jsxs)(`section`,{className:`settings-panel settings-provider-detail coding-agent-detail`,children:[(0,z.jsxs)(`header`,{className:`settings-provider-detail-header`,children:[(0,z.jsx)(`button`,{className:`icon-button settings-provider-back`,type:`button`,onClick:t,"aria-label":b(`common.back`),children:(0,z.jsx)(A,{size:16})}),(0,z.jsx)(V,{id:n.id}),(0,z.jsx)(`span`,{className:`settings-provider-heading`,children:(0,z.jsx)(`h3`,{children:n.name})}),n.installed?(0,z.jsx)(`div`,{className:`settings-provider-enable-control`,children:(0,z.jsxs)(`label`,{className:`settings-provider-enable-label`,children:[(0,z.jsx)(`small`,{children:n.enabled?b(`common.enabled`):b(`common.disabled`)}),(0,z.jsxs)(`span`,{className:`settings-toggle`,children:[(0,z.jsx)(`input`,{type:`checkbox`,role:`switch`,"aria-label":b(`codingAgents.enable`,{name:n.name}),checked:n.enabled,disabled:c!==void 0,onChange:e=>void x({enabled:e.target.checked})}),(0,z.jsx)(`span`,{"aria-hidden":`true`})]})]})}):null]}),(0,z.jsxs)(`div`,{className:`settings-provider-connection`,children:[(0,z.jsxs)(`div`,{className:`settings-provider-setting-row`,children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`codingAgents.status`)}),(0,z.jsx)(`span`,{className:`settings-provider-setting-value`,children:H(n)}),(0,z.jsx)(`button`,{type:`button`,className:`icon-button settings-provider-setting-edit`,disabled:c!==void 0,onClick:()=>void v(),"aria-label":b(`codingAgents.recheck`),"data-tooltip":b(`codingAgents.recheck`),children:(0,z.jsx)(p,{size:15,className:c===`recheck`?`spin`:void 0,"aria-hidden":`true`})})]}),n.installed&&n.id===`opencode-cli`?(0,z.jsxs)(`div`,{className:`settings-provider-setting-row settings-provider-auth-row`,children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`codingAgents.account`)}),(0,z.jsx)(`span`,{className:`settings-provider-setting-value`,children:b(`codingAgents.openCodeAccounts`)})]}):null]}),ce(n.id)?(0,z.jsx)(Ae,{runtime:n.id,defaultProfileId:n.defaultProfileId??`system`,onDefault:e=>x({defaultProfileId:e}),onLogin:y,onRemoved:async()=>{r((await S()).find(t=>t.id===e)),f()},disabled:c!==void 0},n.id):null,u?(0,z.jsx)(Pe,{login:u}):null,n.installed&&n.id!==`opencode-cli`?(0,z.jsxs)(`section`,{className:`settings-detail-section`,children:[(0,z.jsx)(`h4`,{children:b(`agentUsage.title`)}),n.limits?.length?(0,z.jsx)(Te,{limits:n.limits}):(0,z.jsx)(`p`,{className:`cloud-quota-note`,children:b(`agentUsage.empty`,{name:n.name})})]}):null,w.length?(0,z.jsx)(`section`,{className:`settings-detail-section`,"aria-label":b(`codingAgents.diagnostics`),children:w.map(e=>(0,z.jsx)(Fe,{agent:n,diagnostic:e},e.code))}):null,n.installed?(0,z.jsxs)(`section`,{className:`settings-detail-section`,children:[(0,z.jsx)(`h4`,{children:b(`codingAgents.configuration`)}),(0,z.jsxs)(`div`,{className:`coding-agent-permission`,children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`codingAgents.permissions`)}),(0,z.jsx)(L,{className:`settings-chat-layout-control`,label:b(`codingAgents.permissions`),options:je,value:n.permissionMode,onChange:e=>void x({permissionMode:e})})]}),n.permissionMode===`full`?(0,z.jsx)(`p`,{className:`coding-agent-warning`,role:`note`,children:b(`codingAgents.permissionFullHint`,{name:n.name})}):null,(0,z.jsx)(`p`,{className:`settings-detail-hint`,children:b(`codingAgents.cliConfigHint`,{name:n.name})})]}):null,(0,z.jsxs)(`section`,{className:`settings-detail-section`,children:[(0,z.jsxs)(`form`,{className:`settings-detail-field`,onSubmit:C,children:[(0,z.jsx)(`label`,{className:`settings-search-field-label`,htmlFor:`${n.id}-executable`,children:b(`codingAgents.executable`)}),(0,z.jsxs)(`div`,{className:`settings-detail-inline`,children:[(0,z.jsx)(`input`,{id:`${n.id}-executable`,"aria-describedby":`${n.id}-executable-hint`,className:`settings-search-input`,value:m,placeholder:b(`codingAgents.executablePlaceholder`),spellCheck:!1,onChange:e=>g(e.target.value)}),(0,z.jsx)(`button`,{type:`submit`,className:`settings-secondary-button`,disabled:c!==void 0||m.trim()===(n.configuredBinaryPath??``),children:b(`common.save`)})]})]}),(0,z.jsx)(`p`,{className:`settings-detail-hint`,id:`${n.id}-executable-hint`,children:b(`codingAgents.executableHint`)}),n.binaryPath?(0,z.jsxs)(`p`,{className:`settings-detail-hint coding-agent-executable-path`,children:[n.binarySource?`${b(`codingAgents.binarySource.${n.binarySource}`)}: `:``,(0,z.jsx)(`code`,{children:n.binaryPath})]}):null]}),i?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:i}):null]})}function Pe({login:e}){return e.url?(0,z.jsxs)(`p`,{className:`settings-detail-hint`,role:`status`,children:[b(`codingAgents.loginOpened`),` `,(0,z.jsx)(`button`,{type:`button`,className:`coding-agent-link`,onClick:()=>void I(e.url),children:b(`codingAgents.openAgain`)})]}):e.command?(0,z.jsxs)(`div`,{className:`settings-detail-hint`,role:`status`,children:[b(`codingAgents.loginCommand`),` `,(0,z.jsx)(B,{command:e.command})]}):null}function Fe({agent:e,diagnostic:t}){let n=Ie(e,t);return(0,z.jsxs)(`div`,{className:`coding-agent-diagnostic is-${t.code}`,role:t.code===`not-installed`||t.code===`runtime-incompatible`?`alert`:`status`,children:[(0,z.jsx)(j,{size:14,"aria-hidden":`true`}),(0,z.jsxs)(`span`,{children:[n,t.command&&t.code===`not-installed`?(0,z.jsxs)(z.Fragment,{children:[` `,(0,z.jsx)(`button`,{type:`button`,className:`coding-agent-link`,onClick:()=>void I(t.command),children:b(`codingAgents.installGuide`)})]}):null,t.command&&t.code===`signed-out`?(0,z.jsxs)(z.Fragment,{children:[` `,(0,z.jsx)(B,{command:t.command})]}):null,e.id===`codex-cli`&&t.capability===`Windows sandbox filesystem read restrictions`?(0,z.jsxs)(z.Fragment,{children:[` `,(0,z.jsx)(`button`,{type:`button`,className:`coding-agent-link`,onClick:()=>void I(`https://learn.chatgpt.com/docs/windows/windows-sandbox`),children:b(`codingAgents.sandboxGuide`)})]}):null]})]})}function B({command:e}){let[t,n]=(0,R.useState)(!1);return(0,R.useEffect)(()=>{if(!t)return;let e=window.setTimeout(()=>n(!1),1500);return()=>window.clearTimeout(e)},[t]),(0,z.jsxs)(`span`,{className:`coding-agent-command`,children:[(0,z.jsx)(`code`,{children:e}),(0,z.jsx)(`button`,{type:`button`,className:`icon-button`,"aria-label":b(`codingAgents.copyCommand`),"data-tooltip":b(t?`codingAgents.copied`:`codingAgents.copyCommand`),onClick:()=>void navigator.clipboard.writeText(e).then(()=>n(!0),()=>void 0),children:t?(0,z.jsx)(E,{size:13,"aria-hidden":`true`}):(0,z.jsx)(ge,{size:13,"aria-hidden":`true`})})]})}function V({id:e}){let t=de[e];return t?(0,z.jsx)(`span`,{className:`settings-provider-mark is-${t.tone}`,"aria-hidden":`true`,children:(0,z.jsx)(`img`,{src:t.src,alt:``})}):(0,z.jsx)(`span`,{className:`settings-provider-mark-slot`,"aria-hidden":`true`,children:(0,z.jsx)(j,{size:20})})}function H(e){if(!e.installed)return b(e.diagnostics.some(e=>e.code===`invalid-executable`)?`codingAgents.invalidExecutable`:`codingAgents.notFound`);let t=e.version?`v${e.version}`:b(`codingAgents.versionUnknown`);return e.diagnostics.some(e=>e.code===`runtime-incompatible`)?b(`codingAgents.needsUpdate`,{version:t}):e.diagnostics.some(e=>e.code===`probe-failed`)?b(`codingAgents.checkFailed`,{version:t}):e.auth.status===`signed-out`?b(`codingAgents.installedSignedOut`,{version:t}):b(`codingAgents.installed`,{version:t})}function Ie(e,t){switch(t.code){case`not-installed`:return b(`codingAgents.diagnostic.notInstalled`,{name:e.name});case`invalid-executable`:return b(`codingAgents.diagnostic.invalidExecutable`);case`runtime-incompatible`:return e.id===`codex-cli`&&t.capability===`Windows sandbox filesystem read restrictions`?b(`codingAgents.diagnostic.codexWindowsSandbox`):e.id===`opencode-cli`&&t.capability===`no saved OpenCode permissions for this project`?b(`codingAgents.diagnostic.openCodeSavedPermissions`):b(t.capability?`codingAgents.diagnostic.capabilityMissing`:`codingAgents.diagnostic.runtimeIncompatible`,{name:e.name,capability:t.capability});case`signed-out`:return b(`codingAgents.diagnostic.signedOut`,{name:e.name});case`models-unavailable`:return b(`codingAgents.diagnostic.modelsUnavailable`,{name:e.name});default:return b(`codingAgents.diagnostic.probeFailed`,{name:e.name})}}function U(e){return e instanceof Error?e.message:String(e)}function Le({view:e,onViewChange:t,onOpenProviders:n}){return e.page===`agent`?(0,z.jsx)(Ne,{id:e.id,onBack:()=>t({page:`agents`})}):(0,z.jsx)(Re,{onOpen:e=>t({page:`agent`,id:e}),onOpenProviders:n})}function Re({onOpen:e,onOpenProviders:t}){let n=le({agentRuntimes:!0}),[r,i]=(0,R.useState)(!1),[a,o]=(0,R.useState)();async function s(){i(!0),o(void 0);try{await S(!0),f()}catch(e){o(e instanceof Error?e.message:String(e))}finally{i(!1)}}let c=n.defaultModel,l=n.status===`ready`&&!n.loadingRuntimes?.length,u=c&&k(c.provider)?c.provider:void 0,d=n.status===`ready`&&!n.models.some(e=>!k(e.provider));return(0,z.jsxs)(`section`,{className:`settings-panel settings-overview-panel`,children:[(0,z.jsxs)(`header`,{className:`settings-panel-header`,children:[(0,z.jsx)(`h3`,{children:b(`agents.title`)}),(0,z.jsx)(`button`,{className:`icon-button`,type:`button`,disabled:r,"aria-label":b(`agents.rescan`),"data-tooltip":b(`agents.rescan`),onClick:()=>void s(),children:(0,z.jsx)(p,{size:15,className:r?`spin`:void 0,"aria-hidden":`true`})})]}),(0,z.jsxs)(`div`,{className:`settings-provider-list`,children:[(0,z.jsxs)(`section`,{className:`settings-provider-group`,children:[(0,z.jsx)(`h4`,{children:b(`agents.builtIn`)}),(0,z.jsxs)(`div`,{className:`settings-provider-row is-featured`,children:[(0,z.jsx)(`span`,{className:`settings-provider-mark is-brand`,"aria-hidden":`true`,children:(0,z.jsx)(`img`,{src:P,alt:``})}),(0,z.jsxs)(`span`,{className:`settings-provider-copy`,children:[(0,z.jsxs)(`strong`,{className:`settings-provider-name`,children:[(0,z.jsx)(`span`,{children:`OhMyGame`}),l&&!u?(0,z.jsx)(`small`,{children:b(`agents.default`)}):null]}),d?(0,z.jsx)(`span`,{className:`settings-provider-details`,children:(0,z.jsx)(`span`,{className:`settings-provider-description`,children:b(`agents.ohmygameNoModels`)})}):null]}),(0,z.jsx)(`button`,{className:`icon-button settings-provider-action`,type:`button`,"data-tooltip":b(`agents.manageModels`),"aria-label":b(`agents.manageModels`),onClick:t,children:(0,z.jsx)(N,{size:17,"aria-hidden":`true`})})]})]}),(0,z.jsx)(Me,{models:n.models,defaultAgent:u,onOpen:e}),a?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:a}):null]})]})}function ze(){let e=x(),[t,n]=(0,R.useState)(),[r,i]=(0,R.useState)(),[a,o]=(0,R.useState)(),[s,c]=(0,R.useState)(!1),[l,u]=(0,R.useState)(!1);(0,R.useEffect)(()=>{let e=!1;return g().then(t=>{e||(n(t),o(void 0),i(e=>e??G(t)))}).catch(t=>{e||o(K(t))}),()=>{e=!0}},[e]);async function d(){if(r&&!l){u(!0),o(void 0),c(!1);try{let e=await y(Be(r));n(e),i(G(e)),c(!0)}catch(e){o(K(e))}finally{u(!1)}}}if(!r||!t)return(0,z.jsx)(`section`,{className:`settings-panel settings-overview-panel`,children:(0,z.jsx)(`p`,{className:a?`settings-error`:`settings-loading`,children:a??b(`webSearch.loading`)})});function f(e){c(!1),i(t=>t&&{...t,...e})}return(0,z.jsxs)(`form`,{className:`settings-panel settings-overview-panel settings-web-search-panel`,onSubmit:e=>{e.preventDefault(),d()},children:[(0,z.jsx)(`header`,{className:`settings-panel-header`,children:(0,z.jsx)(`h3`,{children:b(`webSearch.title`)})}),(0,z.jsxs)(`div`,{className:`settings-search-row`,children:[(0,z.jsx)(`strong`,{children:b(`webSearch.toggle`)}),(0,z.jsxs)(`label`,{className:`settings-toggle`,children:[(0,z.jsx)(`input`,{type:`checkbox`,checked:r.enabled,onChange:e=>f({enabled:e.target.checked})}),(0,z.jsx)(`span`,{})]})]}),(0,z.jsxs)(`section`,{className:`settings-search-section`,children:[(0,z.jsxs)(`div`,{className:`settings-search-section-header`,children:[(0,z.jsx)(`h4`,{children:b(`webSearch.provider`)}),(0,z.jsx)(`p`,{children:b(`webSearch.providerDescription`)})]}),(0,z.jsx)(`div`,{className:`settings-provider-options`,role:`radiogroup`,"aria-label":b(`webSearch.providerLabel`),children:[[`auto`,b(`webSearch.auto`),b(`webSearch.autoDescription`)],[`exa`,`Exa`,b(`webSearch.exaDescription`)],[`parallel`,`Parallel`,b(`webSearch.parallelDescription`)],[`custom`,b(`webSearch.customMcp`),b(`webSearch.customDescription`)]].map(([e,t,n])=>(0,z.jsxs)(`label`,{className:`settings-provider-option`,children:[(0,z.jsx)(`input`,{type:`radio`,name:`web-search-provider`,value:e,checked:r.provider===e,disabled:!r.enabled,onChange:()=>f({provider:e})}),(0,z.jsx)(`span`,{className:`settings-provider-option-label`,children:t}),(0,z.jsx)(`span`,{className:`settings-provider-option-description`,children:n})]},e))}),(0,z.jsxs)(`div`,{className:`settings-search-option-row`,children:[(0,z.jsxs)(`span`,{children:[(0,z.jsx)(`strong`,{children:b(`webSearch.fallback`)}),(0,z.jsx)(`small`,{children:b(`webSearch.fallbackDescription`)})]}),(0,z.jsxs)(`label`,{className:`settings-toggle`,children:[(0,z.jsx)(`input`,{type:`checkbox`,checked:r.fallback,disabled:!r.enabled||r.provider!==`auto`,onChange:e=>f({fallback:e.target.checked})}),(0,z.jsx)(`span`,{})]})]})]}),(0,z.jsxs)(`section`,{className:`settings-search-section`,children:[(0,z.jsxs)(`div`,{className:`settings-search-section-header`,children:[(0,z.jsx)(`h4`,{children:b(`webSearch.apiKeys`)}),(0,z.jsx)(`p`,{children:b(`webSearch.apiKeysDescription`)})]}),(0,z.jsxs)(`div`,{className:`settings-search-credentials`,children:[(0,z.jsx)(W,{label:b(`webSearch.exaKey`),configured:t.exaApiKeyConfigured,value:r.exaApiKey,clear:r.clearExaApiKey,disabled:!r.enabled,onChange:e=>f({exaApiKey:e,clearExaApiKey:!1}),onClear:e=>f({clearExaApiKey:e,exaApiKey:``})}),(0,z.jsx)(W,{label:b(`webSearch.parallelKey`),configured:t.parallelApiKeyConfigured,value:r.parallelApiKey,clear:r.clearParallelApiKey,disabled:!r.enabled,onChange:e=>f({parallelApiKey:e,clearParallelApiKey:!1}),onClear:e=>f({clearParallelApiKey:e,parallelApiKey:``})})]})]}),r.provider===`custom`?(0,z.jsxs)(`section`,{className:`settings-search-section settings-custom-search-section`,children:[(0,z.jsxs)(`div`,{className:`settings-search-section-header`,children:[(0,z.jsx)(`h4`,{children:b(`webSearch.customMcp`)}),(0,z.jsx)(`p`,{children:b(`webSearch.customDescriptionLong`)})]}),(0,z.jsxs)(`div`,{className:`settings-search-fields`,children:[(0,z.jsxs)(`label`,{children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`webSearch.name`)}),(0,z.jsx)(`input`,{className:`settings-search-input`,value:r.customName,disabled:!r.enabled,onChange:e=>f({customName:e.target.value})})]}),(0,z.jsxs)(`label`,{children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`webSearch.endpoint`)}),(0,z.jsx)(`input`,{className:`settings-search-input`,type:`url`,value:r.customEndpoint,disabled:!r.enabled,placeholder:`https://search.example.com/mcp`,onChange:e=>f({customEndpoint:e.target.value})})]}),(0,z.jsxs)(`label`,{children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`webSearch.toolName`)}),(0,z.jsx)(`input`,{className:`settings-search-input`,value:r.customToolName,disabled:!r.enabled,placeholder:`web_search`,onChange:e=>f({customToolName:e.target.value})})]}),(0,z.jsx)(W,{label:b(`webSearch.bearerToken`),configured:t.custom?.apiKeyConfigured??!1,value:r.customApiKey,clear:r.clearCustomApiKey,disabled:!r.enabled,onChange:e=>f({customApiKey:e,clearCustomApiKey:!1}),onClear:e=>f({clearCustomApiKey:e,customApiKey:``})})]})]}):null,a?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:a}):null,s?(0,z.jsx)(`p`,{className:`settings-success`,children:b(`webSearch.saved`)}):null,(0,z.jsx)(`div`,{className:`settings-form-actions`,children:(0,z.jsx)(`button`,{className:`settings-primary-button`,type:`submit`,disabled:l,children:b(l?`common.saving`:`common.save`)})})]})}function W({label:e,configured:t,value:n,clear:r,disabled:i,onChange:a,onClear:o}){return(0,z.jsxs)(`div`,{className:`settings-search-credential`,children:[(0,z.jsxs)(`label`,{children:[(0,z.jsxs)(`span`,{className:`settings-search-field-label`,children:[(0,z.jsx)(`span`,{children:e}),t&&!r?(0,z.jsx)(`span`,{className:`settings-search-field-status`,children:b(`common.saved`)}):null]}),(0,z.jsx)(`input`,{className:`settings-search-input`,type:`password`,autoComplete:`off`,value:n,disabled:i||r,placeholder:b(t&&!r?`webSearch.replacePlaceholder`:`webSearch.optional`),onChange:e=>a(e.target.value)})]}),t?(0,z.jsxs)(`label`,{className:`settings-checkbox-row`,children:[(0,z.jsx)(`input`,{type:`checkbox`,checked:r,disabled:i,onChange:e=>o(e.target.checked)}),(0,z.jsx)(`span`,{children:b(`webSearch.removeKey`)})]}):null]})}function G(e){return{enabled:e.enabled,provider:e.provider,fallback:e.fallback,exaApiKey:``,parallelApiKey:``,clearExaApiKey:!1,clearParallelApiKey:!1,customName:e.custom?.name??``,customEndpoint:e.custom?.endpoint??``,customToolName:e.custom?.toolName??`web_search`,customApiKey:``,clearCustomApiKey:!1}}function Be(e){let t=(e,t)=>t?null:e.trim()||void 0;return{enabled:e.enabled,provider:e.provider,fallback:e.fallback,exaApiKey:t(e.exaApiKey,e.clearExaApiKey),parallelApiKey:t(e.parallelApiKey,e.clearParallelApiKey),...e.provider===`custom`?{custom:{name:e.customName,endpoint:e.customEndpoint,toolName:e.customToolName,apiKey:t(e.customApiKey,e.clearCustomApiKey)}}:{}}}function K(e){return e instanceof Error?e.message:String(e)}var q={manual:b(`network.source.manual`),environment:b(`network.source.environment`),system:b(`network.source.system`),direct:b(`network.source.direct`)},Ve={direct:b(`network.hints.direct`),manual:b(`network.hints.manual`),auto:b(`network.hints.auto`)};function He(){let e=x(),[t,n]=(0,R.useState)(),[r,a]=(0,R.useState)(),[o,s]=(0,R.useState)(),[l,u]=(0,R.useState)(),[d,f]=(0,R.useState)(!1),[p,m]=(0,R.useState)();(0,R.useEffect)(()=>{let e=!1;return i().then(t=>{e||(n(t),u(void 0),a(e=>e??t.settings))}).catch(t=>{e||u(J(t))}),()=>{e=!0}},[e]);function h(e){a(t=>t&&{...t,...e}),f(!1),m(void 0),u(void 0)}async function g(e){if(r&&!o){s(e),u(void 0),f(!1);try{if(e===`save`){let e=await v(r);n(e),a(e.settings),f(!0),m(void 0)}else e===`detect`?(n(await ne()),m(void 0)):m(await c(r))}catch(e){u(J(e))}finally{s(void 0)}}}async function _(){if(!o&&window.ohMyGameDesktop?.restartApp){s(`restart`),u(void 0);try{await window.ohMyGameDesktop.restartApp()}catch(e){u(J(e)),s(void 0)}}}if(!t||!r)return(0,z.jsx)(`section`,{className:`settings-panel settings-overview-panel`,children:(0,z.jsx)(`p`,{className:l?`settings-error`:`settings-loading`,children:l??b(`network.loading`)})});let y=r.mode===`manual`,S=r.mode!==t.settings.mode||r.proxyUrl!==t.settings.proxyUrl||r.noProxy!==t.settings.noProxy,C=t.systemProxyAvailable&&t.detected.source!==`environment`&&t.settings.mode===`auto`&&r.mode===`auto`;return(0,z.jsxs)(`form`,{className:`settings-panel settings-overview-panel settings-network-panel`,onSubmit:e=>{e.preventDefault(),g(`save`)},children:[(0,z.jsx)(`header`,{className:`settings-panel-header`,children:(0,z.jsx)(`h3`,{children:b(`network.title`)})}),(0,z.jsxs)(`fieldset`,{className:`settings-network-fields`,disabled:!!o,children:[(0,z.jsxs)(`div`,{className:`settings-network-mode`,children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`network.proxy`)}),(0,z.jsx)(`div`,{className:`settings-provider-options`,role:`radiogroup`,"aria-label":b(`network.modeLabel`),"aria-describedby":`network-proxy-mode-hint`,children:[[`direct`,b(`network.direct`)],[`manual`,b(`network.manual`)],[`auto`,b(`network.automatic`)]].map(([e,t])=>(0,z.jsxs)(`label`,{className:`settings-provider-option`,children:[(0,z.jsx)(`input`,{type:`radio`,name:`network-proxy-mode`,value:e,checked:r.mode===e,onChange:()=>h({mode:e})}),(0,z.jsx)(`span`,{className:`settings-provider-option-label`,children:t})]},e))})]}),(0,z.jsx)(`p`,{className:`settings-detail-hint settings-network-mode-hint`,id:`network-proxy-mode-hint`,children:Ve[r.mode]}),y?(0,z.jsxs)(`label`,{className:`settings-detail-field`,children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`network.proxyUrl`)}),(0,z.jsx)(`input`,{className:`settings-search-input`,type:`url`,required:!0,placeholder:`http://127.0.0.1:7890`,value:r.proxyUrl,onChange:e=>h({proxyUrl:e.target.value}),spellCheck:!1,autoComplete:`off`}),(0,z.jsx)(`small`,{className:`settings-detail-hint`,children:b(`network.clashHint`)})]}):null,(0,z.jsxs)(`details`,{children:[(0,z.jsx)(`summary`,{children:b(`common.advanced`)}),(0,z.jsxs)(`div`,{className:`settings-network-advanced`,children:[(0,z.jsxs)(`label`,{className:`settings-detail-field`,children:[(0,z.jsx)(`span`,{className:`settings-search-field-label`,children:b(`network.bypass`)}),(0,z.jsx)(`input`,{className:`settings-search-input`,value:r.noProxy,onChange:e=>h({noProxy:e.target.value}),placeholder:`example.com, .internal.example`,spellCheck:!1,autoComplete:`off`}),(0,z.jsx)(`small`,{className:`settings-detail-hint`,children:b(`network.bypassHint`)})]}),C?(0,z.jsx)(`button`,{className:`settings-add-button`,type:`button`,onClick:()=>void g(`detect`),children:b(o===`detect`?`network.detecting`:`network.detect`)}):null]})]})]}),S||t.requiresRestart||d||t.detected.warning?(0,z.jsxs)(`div`,{className:`settings-network-status`,"aria-label":b(`network.status`),children:[S?(0,z.jsx)(`p`,{children:b(`network.unsaved`)}):null,t.requiresRestart?(0,z.jsxs)(`div`,{className:`settings-network-restart`,children:[(0,z.jsxs)(`p`,{role:`status`,children:[d?b(`network.savedPrefix`):``,window.ohMyGameDesktop?.restartApp?b(`network.restartToApply`):window.ohMyGameDesktop?b(`network.restartAppToApply`):b(`network.restartServiceToApply`)]}),window.ohMyGameDesktop?.restartApp?(0,z.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,disabled:!!o,onClick:()=>void _(),children:b(o===`restart`?`network.restarting`:`network.restartNow`)}):null]}):d?(0,z.jsx)(`p`,{role:`status`,children:b(`network.saved`)}):null,t.detected.warning?(0,z.jsx)(`p`,{children:t.detected.warning}):null]}):null,p?(0,z.jsx)(`p`,{className:p.reachable?`settings-success`:`settings-error`,role:`status`,title:`HTTP ${p.statusCode??`—`} · ${Ue(p.route)}`,children:p.reachable?b(`network.reachable`,{ms:p.elapsedMs}):p.error??b(`providers.status.failed`)}):null,l?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:l}):null,(0,z.jsxs)(`div`,{className:`settings-form-actions`,children:[(0,z.jsx)(`button`,{className:`settings-add-button`,type:`button`,title:b(`network.testHint`),disabled:!!o||y&&!r.proxyUrl.trim(),onClick:()=>void g(`test`),children:b(o===`test`?`network.testing`:`network.test`)}),(0,z.jsx)(`button`,{className:`settings-primary-button`,type:`submit`,disabled:!!o||!S||y&&!r.proxyUrl.trim(),children:b(o===`save`?`common.saving`:`common.save`)})]})]})}function Ue(e){return e.httpProxy?`${q[e.source]} · ${e.httpProxy}${e.httpsProxy===e.httpProxy?``:` / ${e.httpsProxy}`}`:q[e.source]}function J(e){return e instanceof Error?e.message:String(e)}var We=`ohmygame-studio`,Ge={"claude-code":{name:`Claude Code`,runtime:`claude-code-cli`},codex:{name:`Codex`,runtime:`codex-cli`}};function Ke(){let[e,t]=(0,R.useState)(),[r,i]=(0,R.useState)(),[a,o]=(0,R.useState)();(0,R.useEffect)(()=>{let e=!0;return n().then(n=>e&&t(n)).catch(t=>e&&i(Y(t))),()=>{e=!1}},[]);async function s(e,n){o(e),i(void 0);try{t(await n())}catch(e){i(Y(e))}finally{o(void 0)}}return(0,z.jsxs)(`section`,{className:`settings-panel settings-overview-panel external-agents-settings`,children:[(0,z.jsx)(`header`,{className:`settings-panel-header`,children:(0,z.jsx)(`h3`,{children:b(`externalAgents.title`)})}),(0,z.jsxs)(`div`,{className:`settings-provider-list`,children:[!e&&!r?(0,z.jsxs)(`div`,{className:`settings-loading`,children:[(0,z.jsx)(p,{className:`spin`,size:18}),b(`externalAgents.loading`)]}):null,e?(0,z.jsx)(`section`,{className:`settings-provider-group`,children:(0,z.jsxs)(`div`,{className:`settings-provider-row is-featured`,children:[(0,z.jsx)(`span`,{className:`settings-provider-mark-slot`,"aria-hidden":`true`,children:(0,z.jsx)(j,{size:20})}),(0,z.jsxs)(`span`,{className:`settings-provider-copy`,children:[(0,z.jsx)(`strong`,{className:`settings-provider-name`,children:(0,z.jsx)(`span`,{children:b(`externalAgents.enable`)})}),(0,z.jsx)(`span`,{className:`settings-provider-details`,children:(0,z.jsx)(`span`,{className:`settings-provider-description`,children:b(`externalAgents.description`)})})]}),(0,z.jsxs)(`label`,{className:`settings-toggle settings-provider-toggle`,title:e.enabled?b(`common.enabled`):b(`common.disabled`),children:[(0,z.jsx)(`input`,{type:`checkbox`,role:`switch`,"aria-label":b(`externalAgents.enable`),checked:e.enabled,disabled:a!==void 0,onChange:e=>{let t=e.target.checked;s(`enabled`,()=>ee({enabled:t}))}}),(0,z.jsx)(`span`,{"aria-hidden":`true`})]})]})}):null,e?.enabled&&!e.launcher?(0,z.jsx)(`p`,{className:`settings-provider-description`,children:b(`externalAgents.desktopOnly`)}):null,e?.enabled&&e.launcher?(0,z.jsxs)(`section`,{className:`settings-provider-group external-agents-clients`,"aria-label":b(`externalAgents.clients`),children:[(0,z.jsx)(`h4`,{children:b(`externalAgents.clients`)}),e.clients.map(e=>{let{name:t,runtime:n}=Ge[e.id],r=a===e.id,i=b(e.connected?`externalAgents.disconnect`:`externalAgents.connect`);return(0,z.jsxs)(`div`,{className:`settings-provider-row`,children:[(0,z.jsx)(V,{id:n}),(0,z.jsxs)(`span`,{className:`settings-provider-copy`,children:[(0,z.jsx)(`strong`,{className:`settings-provider-name`,children:(0,z.jsx)(`span`,{children:t})}),(0,z.jsx)(`span`,{className:`settings-provider-details`,children:(0,z.jsx)(`span`,{className:`settings-provider-description`,children:e.available?e.connected?b(`externalAgents.connected`):b(`externalAgents.notConnected`):b(`codingAgents.notFound`)})})]}),e.available?(0,z.jsx)(`button`,{type:`button`,className:`external-agent-action${e.connected?` is-danger`:``}`,"aria-label":i,title:i,"aria-busy":r,disabled:a!==void 0,onClick:()=>void s(e.id,()=>e.connected?T(e.id):m(e.id)),children:r?(0,z.jsx)(p,{className:`spin`,size:14,"aria-hidden":`true`}):e.connected?(0,z.jsx)(me,{size:16,"aria-hidden":`true`}):(0,z.jsx)(M,{size:16,"aria-hidden":`true`})}):null]},e.id)}),(0,z.jsx)(qe,{launcher:e.launcher})]}):null,r?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:r}):null]})]})}function qe({launcher:e}){let t=Object.entries(e.env).map(([e,t])=>`${e}=${t}`);return(0,z.jsxs)(`details`,{className:`external-agents-manual`,children:[(0,z.jsx)(`summary`,{children:b(`externalAgents.otherClients`)}),(0,z.jsx)(`p`,{className:`settings-provider-description`,children:b(`externalAgents.otherClientsHint`,{name:We})}),(0,z.jsx)(B,{command:[e.command,...e.args].map(Je).join(` `)}),t.length?(0,z.jsx)(`p`,{className:`settings-provider-description`,children:b(`externalAgents.environment`,{value:t.join(` `)})}):null]})}function Je(e){return/[\s"']/.test(e)?`"${e.replaceAll(`"`,`\\"`)}"`:e}function Y(e){return e instanceof Error?e.message:String(e)}var Ye=`https://github.com/WhiteTowerAI/ohmygame/releases`;function Xe({currentVersion:e,availableRelease:t}){let[n,r]=(0,R.useState)(),i=[{version:`0.0.0-beta.4.15`,date:`2026-10-27`,notes:`### Added

- Manage separate Claude Code and Codex account configurations, choose the
  default for new chats, and switch accounts in a chat while keeping sign-ins,
  models, usage limits, and native sessions separate.
  ([#403](https://github.com/WhiteTowerAI/ohmygame/pull/403) by @dogxii)
- Opt in to continue a chat once a reported usage limit resets. OhMyGame sends
  one continuation 30 seconds after the last exhausted window resets while the
  conversation stays open; sending a message or cancelling clears the schedule.
  ([#424](https://github.com/WhiteTowerAI/ohmygame/pull/424) by @dogxii)
- Preview horizontal phone games with a Mobile landscape preset, including a
  saved project default and a 667 × 375 Play window.
  ([#399](https://github.com/WhiteTowerAI/ohmygame/pull/399) by @grootbro)
- Prepare a TapTap Maker game's store page, Spark version binding, precheck,
  and review with the new TapTap Release Skill and the official TapTap CLI.
  ([#422](https://github.com/WhiteTowerAI/ohmygame/pull/422) by @dogxii)

### Changed

- Follow project activity and automatic naming over an event stream, and pause
  Canvas polling while the window is hidden until it becomes visible again.
  ([#425](https://github.com/WhiteTowerAI/ohmygame/pull/425) by @dogxii)
- Reuse running Canvas generations and current output from unchanged settings
  when an agent requests media, avoiding another paid run unless a new variation
  is explicitly requested. The Canvas Generate button still starts a new run.
  ([#423](https://github.com/WhiteTowerAI/ohmygame/pull/423) by @dogxii)

### Fixed

- Keep a user-started Canvas generation running when an agent following that
  job is stopped; stopping a generation the agent started still cancels it.
  ([#426](https://github.com/WhiteTowerAI/ohmygame/pull/426) by @dogxii)
- Capture Scene thumbnails after restoring a workspace, show capture failures
  without repeatedly retrying the same version, and use a video's opening frame
  as the fallback cover for video-only Scenes.
  ([#428](https://github.com/WhiteTowerAI/ohmygame/pull/428) by @dihuangdh)
- Discover custom MCP search tool schemas before sending supported arguments,
  and parse multiline event-stream search results and errors correctly.
  ([#419](https://github.com/WhiteTowerAI/ohmygame/pull/419) by @dogxii,
  [#401](https://github.com/WhiteTowerAI/ohmygame/pull/401) by @grootbro)
- Load hosted Community covers directly from their HTTPS URLs while keeping
  local debug covers available through the daemon.
  ([#408](https://github.com/WhiteTowerAI/ohmygame/pull/408) by @dihuangdh)
- Serve static preview scripts, stylesheets, and WebAssembly with the correct
  media types when filename extensions use uppercase or mixed case.
  ([#400](https://github.com/WhiteTowerAI/ohmygame/pull/400) by @grootbro)
- Open General Game workspaces with the conversation pane expanded, and
  recalculate the input's height when the pane is expanded or resized.
  ([#421](https://github.com/WhiteTowerAI/ohmygame/pull/421) by @dogxii)
- Check native process identities asynchronously so CLI and image startup do
  not block on PowerShell, while preserving identity checks during recovery.
  ([#420](https://github.com/WhiteTowerAI/ohmygame/pull/420) by @dogxii)`},{version:`0.0.0-beta.4.14`,date:`2026-10-26`,notes:`### Added

- Create a new chat from a completed agent response, carrying the conversation
  through that response into an independent chat.
  ([#404](https://github.com/WhiteTowerAI/ohmygame/pull/404) by @dogxii)
- Drop a project ZIP onto the Projects page to import it as a new project.
  ([#389](https://github.com/WhiteTowerAI/ohmygame/pull/389) by @dogxii)
- Like Community games directly from their cards without signing in.
  ([#397](https://github.com/WhiteTowerAI/ohmygame/pull/397) by @dogxii)
- Export a diagnostics ZIP with redacted desktop logs and system information
  from Settings → About.
  ([#354](https://github.com/WhiteTowerAI/ohmygame/pull/354) by @xuhongbo)
- Add refreshed, localized Story scene templates with bundled Last Bus artwork
  copied into each project that uses it.
  ([#379](https://github.com/WhiteTowerAI/ohmygame/pull/379) by @82228,
  [#411](https://github.com/WhiteTowerAI/ohmygame/pull/411) by @xinyang6879)

### Changed

- Refresh configured Pi model catalogs in the background and offer a manual
  refresh in provider settings.
  ([#392](https://github.com/WhiteTowerAI/ohmygame/pull/392) by @dogxii)
- Update bundled 3D model versions and provider operation limits, including
  Meshy T2.5 and Tripo v3.
  ([#391](https://github.com/WhiteTowerAI/ohmygame/pull/391) by @dogxii)
- Load non-home screens on demand to reduce the initial renderer payload.
  ([#394](https://github.com/WhiteTowerAI/ohmygame/pull/394) by @dogxii,
  [#393](https://github.com/WhiteTowerAI/ohmygame/pull/393) by @dogxii)

### Fixed

- Keep Meshy animation selections and previews stable while the 3D catalog
  refreshes, and use Canvas node titles for downloaded media filenames.
  ([#395](https://github.com/WhiteTowerAI/ohmygame/pull/395) by @dogxii,
  [#398](https://github.com/WhiteTowerAI/ohmygame/pull/398) by @dogxii)
- Explain why a Story cannot start and provide a path back to its editor.
  ([#367](https://github.com/WhiteTowerAI/ohmygame/pull/367) by @xuhongbo)
- Improve Windows Codex discovery and sandbox diagnostics, protect Pi credential
  folders from coding agents, and keep the daemon access token off the renderer
  command line.
  ([#409](https://github.com/WhiteTowerAI/ohmygame/pull/409) by @82228,
  [#359](https://github.com/WhiteTowerAI/ohmygame/pull/359) by @xuhongbo,
  [#363](https://github.com/WhiteTowerAI/ohmygame/pull/363) by @xuhongbo)`},{version:`0.0.0-beta.4.13`,date:`2026-10-23`,notes:`### Added

- Export any project as a ZIP with its settings, cover, and workspace, and import
  it as a new project on another computer. Interactive Story exports include
  referenced Library assets, and older Story project ZIPs remain importable.
  ([#355](https://github.com/WhiteTowerAI/ohmygame/pull/355) by @xuhongbo)
- Drop, paste, or upload text documents, CSV/TSV tables, and more image, audio,
  video, and 3D formats into the canvas. Keep other files, including source,
  fonts, and ZIPs, as project file nodes with a desktop file-location action.
  ([#380](https://github.com/WhiteTowerAI/ohmygame/pull/380) by @dogxii,
  [#381](https://github.com/WhiteTowerAI/ohmygame/pull/381) by @dogxii)
- Confirm folder imports before copying files, with choices to preserve the
  directory structure as one folder node, import files separately, or cancel.
  Repeated file and folder names are kept without overwriting existing imports.
  ([#382](https://github.com/WhiteTowerAI/ohmygame/pull/382) by @dogxii)

### Changed

- Claude Code, Codex, and OpenCode now load your existing CLI settings, Hooks,
  MCP servers, Skills, and instructions while retaining OhMyGame's selected
  permissions. OpenCode requires version 2.1.0 or newer in the 2.x series;
  upgrade v1 before using it. If OpenCode reports saved project grants, remove
  those grants in OpenCode and check again.
  ([#376](https://github.com/WhiteTowerAI/ohmygame/pull/376) by @dogxii)
- Community view counts now measure successful game-entry requests, including
  repeat visits, refreshes, and direct shared links, rather than unique visitors.
  Counts start at zero with the matching Cloud migration and survive updates to
  the same published game. Hosted deployments need the matching Cloud API and
  play-count migration.
  ([#353](https://github.com/WhiteTowerAI/ohmygame/pull/353) by @dogxii)

### Fixed

- Keep Library and Community controls, plugin cards, and external-agent actions
  usable in narrow windows, including long plugin names and translated labels.
  ([#372](https://github.com/WhiteTowerAI/ohmygame/pull/372) by @dogxii)`},{version:`0.0.0-beta.4.12`,date:`2026-10-22`,notes:`### Added

- Connect external Claude Code, Codex, and other MCP clients to OhMyGame's
  media, canvas, project, and playtesting tools through Settings → MCP Server.
  ([#325](https://github.com/WhiteTowerAI/ohmygame/pull/325) by @dogxii)
- Explore optional Beta plugins for Blender, Godot, TapTap Maker, Cocos Creator,
  Unity, Unreal Engine, Aseprite, Tiled, WeChat Mini Games, and Douyin Mini Games.
  Enable them from the sidebar's Plugins library; these workflows remain experimental.
  ([#278](https://github.com/WhiteTowerAI/ohmygame/pull/278) by @dogxii)

### Changed

- Set up a model provider or installed coding agent during first-run onboarding,
  choose a default model, and optionally connect creative tools before starting.
  ([#331](https://github.com/WhiteTowerAI/ohmygame/pull/331) by @dogxii)
- Browse Community in a responsive cover grid with visible titles, creators,
  engagement counts, search, sorting, and matching cards on creator profiles.
  ([#357](https://github.com/WhiteTowerAI/ohmygame/pull/357) by @dogxii)
- Publish Interactive Stories up to 100 MiB, with a longer upload timeout and
  media optimization in a temporary copy that preserves the original assets.
  ([#333](https://github.com/WhiteTowerAI/ohmygame/pull/333) by @82228)
- Connect Codex Image using its saved sign-in without an extra capability check,
  and simplify provider detail controls. Availability and quota errors are reported
  when generating an image.
  ([#356](https://github.com/WhiteTowerAI/ohmygame/pull/356) by @dogxii)
- The Windows installer is shown in English or Simplified Chinese, matching the
  app's languages; other system languages get English.
  ([#377](https://github.com/WhiteTowerAI/ohmygame/pull/377) by @dihuangdh)

### Fixed

- Preserve recoverable canvas drafts when concurrent changes would merge into
  invalid node references, and offer conflict choices instead of losing edits.
  ([#342](https://github.com/WhiteTowerAI/ohmygame/pull/342) by @jsdhwfmax)
- Avoid a Windows checkpoint write failure when multiple files have the same
  contents and are saved at the same time.
  ([#373](https://github.com/WhiteTowerAI/ohmygame/pull/373) by @xinyang6879)
- Keep the previous story picture visible while the next node's media loads,
  reducing black flashes between story nodes.
  ([#343](https://github.com/WhiteTowerAI/ohmygame/pull/343) by @82228)
- Improve Windows title bar and sidebar appearance, keep installer progress
  moving forward, allow more time for first-start plugin preparation, and
  prevent a failed process check from incorrectly blocking installation.
  ([#352](https://github.com/WhiteTowerAI/ohmygame/pull/352) by @82228,
  [#369](https://github.com/WhiteTowerAI/ohmygame/pull/369) by @82228,
  [#377](https://github.com/WhiteTowerAI/ohmygame/pull/377) by @dihuangdh)
- Keep composer attachment and context menus usable near window edges and in
  short viewports, with scrolling when the full menu does not fit.
  ([#352](https://github.com/WhiteTowerAI/ohmygame/pull/352) by @82228,
  [#361](https://github.com/WhiteTowerAI/ohmygame/pull/361) by @xinyang6879)
- Make plugin Skills available to installed coding agents and prevent Codex
  startup failures caused by reserved tool names.
  ([#278](https://github.com/WhiteTowerAI/ohmygame/pull/278) by @dogxii)
- Remove the confusing Off map badge from scene cards while keeping visibility
  controls available.
  ([#346](https://github.com/WhiteTowerAI/ohmygame/pull/346) by @82228)`},{version:`0.0.0-beta.4.11`,date:`2026-10-20`,notes:`### Added

- Generate images with Codex CLI using its saved sign-in, independently of the
  conversation agent, from canvas image nodes or any agent's \`generate_image\` tool.
  ([#332](https://github.com/WhiteTowerAI/ohmygame/pull/332) by @dogxii)
- Use Gemini 4 Argon with Google Gemini and Vertex AI, including Low, Medium,
  and High reasoning, through the bundled Pi 1.3 upgrade.
  ([#316](https://github.com/WhiteTowerAI/ohmygame/pull/316) by @dihuangdh)
- Preview Markdown files with project-relative links and images in Code, and
  start publishing with the \`/publish\` command.
  ([#309](https://github.com/WhiteTowerAI/ohmygame/pull/309) by @dogxii)

### Changed

- Load long conversation histories, generate Scene thumbnails, and export
  media-heavy projects more efficiently.
  ([#329](https://github.com/WhiteTowerAI/ohmygame/pull/329) by @82228)
- Label coding-agent quota percentages as used, keep slash-menu usage compact,
  and show agent brand icons in model selection.
  ([#326](https://github.com/WhiteTowerAI/ohmygame/pull/326) by @dogxii)
- Kimi Coding now uses OpenAI Chat Completions through Pi 1.3; existing custom
  Base URL overrides for \`kimi-coding\` must include \`/v1\`.
  ([#316](https://github.com/WhiteTowerAI/ohmygame/pull/316) by @dihuangdh)

### Fixed

- Merge uncontested canvas node conversions without reporting a board conflict,
  while preserving conflict choices for incompatible concurrent edits.
  ([#336](https://github.com/WhiteTowerAI/ohmygame/pull/336) by @dihuangdh)
- Keep canvas connections available after importing images and saving. Generation
  prompts support Enter to generate and Shift+Enter for a new line, with input-method
  composition and video reference selection protected from accidental submission.
  ([#334](https://github.com/WhiteTowerAI/ohmygame/pull/334) by @dogxii)
- Include prebuilt Interactive Story runtime resources in desktop packages so
  story creation, legacy upgrades, and previews work inside the packaged app.
  ([#328](https://github.com/WhiteTowerAI/ohmygame/pull/328) by @ElenaYU-77)
- Discover Codex CLIs bundled with the macOS Codex and ChatGPT apps, refresh
  discovery on rescan, and explain unavailable manually selected executables.
  ([#327](https://github.com/WhiteTowerAI/ohmygame/pull/327) by @ElenaYU-77)
- Keep differential update downloads within bounded multipart Range batches to
  reduce CDN-triggered full-download fallbacks. This takes effect after installing
  this version; older installed versions keep their existing downloader.
  ([#323](https://github.com/WhiteTowerAI/ohmygame/pull/323) by @dihuangdh)
- Prevent the Design canvas viewport from flashing when opened, and correct
  project settings typography and copy.
  ([#335](https://github.com/WhiteTowerAI/ohmygame/pull/335) by @dihuangdh,
  [#324](https://github.com/WhiteTowerAI/ohmygame/pull/324) by @82228)`},{version:`0.0.0-beta.4.10`,date:`2026-10-19`,notes:`### Added

- Use installed Claude Code, Codex, and OpenCode CLIs in conversations, with
  their own accounts and models, native reasoning controls, and OhMyGame's
  tools, checkpoints, and Undo.
  ([#299](https://github.com/WhiteTowerAI/ohmygame/pull/299) by @dogxii)
- Manage coding agents in Settings → Agents, choose Standard or Full access
  permissions, and view reported Claude Code and Codex account usage limits.
  ([#302](https://github.com/WhiteTowerAI/ohmygame/pull/302) by @dogxii,
  [#304](https://github.com/WhiteTowerAI/ohmygame/pull/304) by @dogxii,
  [#305](https://github.com/WhiteTowerAI/ohmygame/pull/305) by @dogxii)
- A Visual Novel template with editable scripts, choices, save slots, Auto,
  Skip, Log, and Settings, plus cross-Scene music and richer Main menu controls.
  ([#284](https://github.com/WhiteTowerAI/ohmygame/pull/284) by @dihuangdh)
- Trim videos in the Library and on Asset Canvas, preview the selected range,
  and save it as a new video while keeping the original.
  ([#265](https://github.com/WhiteTowerAI/ohmygame/pull/265) by @dihuangdh)
- Trim a Scene's background video without changing the original asset or other
  Scenes, with precise time controls and Undo/Redo.
  ([#312](https://github.com/WhiteTowerAI/ohmygame/pull/312) by @82228)
- Generate sound effects and instrumental music with Volcengine Seed Audio.
  A compatible connected provider is required.
  ([#288](https://github.com/WhiteTowerAI/ohmygame/pull/288) by @82228)
- Open a project's workspace folder from recent-project and Projects menus
  in the desktop app, replacing the obsolete Game design shortcut.
  ([#315](https://github.com/WhiteTowerAI/ohmygame/pull/315) by @dogxii)

### Changed

- New Interactive Stories run as independent web pages, with a project-owned
  runtime, persistent saves, and static publishing and HTML export. Existing
  stories keep working and can upgrade with an option to undo the upgrade.
  ([#284](https://github.com/WhiteTowerAI/ohmygame/pull/284) by @dihuangdh)
- New projects can be named automatically from the first meaningful request;
  stable icon and color placeholders make projects easier to recognize.
  ([#291](https://github.com/WhiteTowerAI/ohmygame/pull/291) by @dogxii)
- Checkpoints respect workspace \`.gitignore\` rules and prune unreferenced
  snapshots without removing recorded turn history.
  ([#280](https://github.com/WhiteTowerAI/ohmygame/pull/280) by @xuhongbo)
- The Windows setup wizard lets users choose the installation directory and
  current-user or all-users installation, preserving existing upgrade settings.
  ([#306](https://github.com/WhiteTowerAI/ohmygame/pull/306) by @82228)
- Seedance video generation includes audio.
  ([#271](https://github.com/WhiteTowerAI/ohmygame/pull/271) by @82228)
- Release notes credit the authors of linked contributions.
  ([#283](https://github.com/WhiteTowerAI/ohmygame/pull/283) by @xuhongbo)

### Fixed

- Codex's macOS command sandbox can read the system OpenSSL configuration
  required by Node/npm when installing project dependencies.
  ([#321](https://github.com/WhiteTowerAI/ohmygame/pull/321) by @dihuangdh)
- Compatible coding-agent CLIs are checked for required capabilities instead
  of rejected solely by version; local compatibility and startup failures have
  clearer diagnostics.
  ([#317](https://github.com/WhiteTowerAI/ohmygame/pull/317) by @dogxii)
- Codex-generated images appear in the conversation and are available to the
  project.
  ([#318](https://github.com/WhiteTowerAI/ohmygame/pull/318) by @dihuangdh)
- Preview servers keep running during checkpoint snapshots, and file reads
  remain available while writes wait for a consistent snapshot.
  ([#268](https://github.com/WhiteTowerAI/ohmygame/pull/268) by @dihuangdh,
  [#273](https://github.com/WhiteTowerAI/ohmygame/pull/273) by @dihuangdh)
- Static video previews support seeking, and HEAD requests ignore byte ranges.
  ([#272](https://github.com/WhiteTowerAI/ohmygame/pull/272) by @dihuangdh,
  [#300](https://github.com/WhiteTowerAI/ohmygame/pull/300) by @jsdhwfmax)
- AI plugin authoring validates required Skill metadata and supports configuring
  and testing drafts before installation.
  ([#277](https://github.com/WhiteTowerAI/ohmygame/pull/277) by @dogxii)
- Git Changes compares files removed from the index against HEAD, and project
  exports avoid asset-name collisions on case-insensitive file systems.
  ([#281](https://github.com/WhiteTowerAI/ohmygame/pull/281) by @jsdhwfmax,
  [#269](https://github.com/WhiteTowerAI/ohmygame/pull/269) by @jsdhwfmax)
- Pages keep their horizontal alignment when scrollbars appear, and the plan
  mode label no longer wraps in narrow composer toolbars.
  ([#303](https://github.com/WhiteTowerAI/ohmygame/pull/303) by @dogxii,
  [#308](https://github.com/WhiteTowerAI/ohmygame/pull/308) by @dogxii)
- The extra-high reasoning level is translated in the Simplified Chinese UI.
  ([#282](https://github.com/WhiteTowerAI/ohmygame/pull/282) by @dogxii)

**Full Changelog**: https://github.com/WhiteTowerAI/ohmygame/compare/v0.0.0-beta.4.9...v0.0.0-beta.4.10`},{version:`0.0.0-beta.4.9`,date:`2026-10-16`,notes:`### Added

- Per-turn file diffs with Undo and Reapply, plus a read-only Git Changes view
  in Code.
  ([#246](https://github.com/WhiteTowerAI/ohmygame/pull/246) by @dogxii)
- Export Interactive Stories as editable projects.
  ([#253](https://github.com/WhiteTowerAI/ohmygame/pull/253) by @dihuangdh)
- A background video timeline in the Scene workbench, with playback, scrubbing,
  and Mark to attach a specific moment to an agent message.
  ([#264](https://github.com/WhiteTowerAI/ohmygame/pull/264) by @dihuangdh)
- Doubao speech generation with voice selection and preview, plus speech,
  sound-effect, and music nodes on Asset Canvas. Audio generation requires a
  compatible connected provider.
  ([#259](https://github.com/WhiteTowerAI/ohmygame/pull/259) by @82228)
- Skills in the composer's slash menu.
  ([#257](https://github.com/WhiteTowerAI/ohmygame/pull/257) by @dogxii)

### Changed

- Plugins have Public and Personal collections, separate AI setup sessions,
  enable/disable controls, Personal plugin editing, and ZIP import/export.
  ([#250](https://github.com/WhiteTowerAI/ohmygame/pull/250) by @dogxii)
- Model selection and reasoning controls share a compact composer control.
  ([#252](https://github.com/WhiteTowerAI/ohmygame/pull/252) by @dogxii)
- The Asset Canvas Library picker starts with the current project selected.
  ([#261](https://github.com/WhiteTowerAI/ohmygame/pull/261) by @dogxii)
- OpenAI and Anthropic browser sign-in options explain subscription limits.
  ([#267](https://github.com/WhiteTowerAI/ohmygame/pull/267) by @dihuangdh)

### Fixed

- Desktop apps check for updates periodically and on return to the window,
  with retries after failed checks.
  ([#260](https://github.com/WhiteTowerAI/ohmygame/pull/260) by @82228)
- Provider settings open without waiting for cloud verification.
  ([#262](https://github.com/WhiteTowerAI/ohmygame/pull/262) by @dogxii)
- Leaked thinking tags no longer appear in agent conversations or Canvas text.
  ([#263](https://github.com/WhiteTowerAI/ohmygame/pull/263) by @dogxii)
- The mouse wheel pans the canvas over node content.
  ([#255](https://github.com/WhiteTowerAI/ohmygame/pull/255) by @dihuangdh)
- New project can open an existing workspace folder.
  ([#251](https://github.com/WhiteTowerAI/ohmygame/pull/251) by @dihuangdh)
- Removed the empty-state prompt overlay from the Story canvas.
  ([#254](https://github.com/WhiteTowerAI/ohmygame/pull/254) by @dogxii)

**Full Changelog**: https://github.com/WhiteTowerAI/ohmygame/compare/v0.0.0-beta.4.8...v0.0.0-beta.4.9`},{version:`0.0.0-beta.4.8`,date:`2026-10-14`,notes:`### Added

- Community search, sorting, and time filters, creator profiles, and owner
  controls to edit or unpublish a game.
  ([#242](https://github.com/WhiteTowerAI/ohmygame/pull/242) by @dogxii)
- MiniMax H3 and H3-Max video generation with your own MiniMax China or Global
  API key. ([#240](https://github.com/WhiteTowerAI/ohmygame/pull/240) by @82228)
- Release notes in Settings → About, available offline and shown with
  available updates.
  ([#239](https://github.com/WhiteTowerAI/ohmygame/pull/239) by @dogxii)
- Option-drag (Alt-drag on Windows and Linux) duplicates canvas nodes.
  ([#230](https://github.com/WhiteTowerAI/ohmygame/pull/230) by @LZWcc)
- Image generation accepts a resolution and aspect ratio.
  ([#244](https://github.com/WhiteTowerAI/ohmygame/pull/244) by @82228)

### Changed

- New installations connect directly by default, and network settings are
  simpler, with clear mode hints and unsaved-change feedback.
  ([#238](https://github.com/WhiteTowerAI/ohmygame/pull/238) by @dogxii)
- Provider detail pages are reorganized, with a breadcrumb, a single connection
  row, a compact model list, and an Advanced section.
  ([#231](https://github.com/WhiteTowerAI/ohmygame/pull/231) by @dihuangdh)
- First-run setup selects the connected provider's recommended model, and
  Settings and setup list providers in the same order.
  ([#228](https://github.com/WhiteTowerAI/ohmygame/pull/228) by @dihuangdh,
  [#229](https://github.com/WhiteTowerAI/ohmygame/pull/229) by @dihuangdh)
- Back from a project returns to the page it was opened from.
  ([#241](https://github.com/WhiteTowerAI/ohmygame/pull/241) by @dogxii)
- The agent runtime is updated to Pi 1.2.0, and Azure provider settings are
  migrated automatically.
  ([#237](https://github.com/WhiteTowerAI/ohmygame/pull/237) by @dihuangdh)

### Fixed

- New projects show the empty preview instead of an error.
  ([#232](https://github.com/WhiteTowerAI/ohmygame/pull/232) by @dihuangdh)
- A preview stopped while restarting no longer stays marked as ready.
  ([#243](https://github.com/WhiteTowerAI/ohmygame/pull/243) by @dogxii)
- The light canvas background outside onboarding is restored.
  ([#245](https://github.com/WhiteTowerAI/ohmygame/pull/245) by @dogxii)

**Full Changelog**: https://github.com/WhiteTowerAI/ohmygame/compare/v0.0.0-beta.4.7...v0.0.0-beta.4.8`},{version:`0.0.0-beta.4.7`,date:`2026-10-13`,notes:`### Added

- A first-run welcome and model connection flow, with an option to reopen setup
  from About.
  ([#227](https://github.com/WhiteTowerAI/ohmygame/pull/227) by @dogxii)
- A Simplified Chinese interface and README.
  ([#223](https://github.com/WhiteTowerAI/ohmygame/pull/223) by @dihuangdh,
  [#215](https://github.com/WhiteTowerAI/ohmygame/pull/215) by @dihuangdh)
- Preset and custom plugin icons.
  ([#216](https://github.com/WhiteTowerAI/ohmygame/pull/216) by @dogxii)
- Independent OpenAI image connections alongside chat sign-in.
  ([#226](https://github.com/WhiteTowerAI/ohmygame/pull/226) by @dogxii)
- A switch for automatic publishing covers.
  ([#214](https://github.com/WhiteTowerAI/ohmygame/pull/214) by @dogxii)

### Changed

- Model and reasoning controls are separate in the composer.
  ([#225](https://github.com/WhiteTowerAI/ohmygame/pull/225) by @dogxii)
- Playtest controls stay outside the game's input surface.
  ([#222](https://github.com/WhiteTowerAI/ohmygame/pull/222) by @dogxii)

### Fixed

- Interrupted Responses WebSocket streams can recover.
  ([#212](https://github.com/WhiteTowerAI/ohmygame/pull/212) by @dogxii)
- Closing playtest windows, broken Windows output pipes, and interrupted update
  downloads no longer crash the desktop app.
  ([#218](https://github.com/WhiteTowerAI/ohmygame/pull/218) by @dihuangdh,
  [#219](https://github.com/WhiteTowerAI/ohmygame/pull/219) by @dihuangdh,
  [#220](https://github.com/WhiteTowerAI/ohmygame/pull/220) by @dihuangdh)
- Windows title bars use the bundled application icon.
  ([#217](https://github.com/WhiteTowerAI/ohmygame/pull/217) by @82228)
- Static preview directories redirect to trailing-slash URLs.
  ([#210](https://github.com/WhiteTowerAI/ohmygame/pull/210) by @jsdhwfmax)
- Deleted canvas images with parentheses in their names are removed from embeds.
  ([#167](https://github.com/WhiteTowerAI/ohmygame/pull/167) by @xuhongbo)
- File operations preserve truncated UTF-8 text and allow case-only renames.
  ([#162](https://github.com/WhiteTowerAI/ohmygame/pull/162) by @xuhongbo,
  [#166](https://github.com/WhiteTowerAI/ohmygame/pull/166) by @xuhongbo)
- Scene backgrounds preserve quoted attributes, and Scenes without saved
  positions are placed clear of other cards.
  ([#160](https://github.com/WhiteTowerAI/ohmygame/pull/160) by @xuhongbo,
  [#169](https://github.com/WhiteTowerAI/ohmygame/pull/169) by @xuhongbo)

**Full Changelog**: https://github.com/WhiteTowerAI/ohmygame/compare/v0.0.0-beta.4.6...v0.0.0-beta.4.7`},{version:`0.0.0-beta.4.6`,date:`2026-10-12`,notes:`### Added

- An AI plugin builder workspace with persistent configuration, installation,
  deletion, and uninstall controls.
  ([#205](https://github.com/WhiteTowerAI/ohmygame/pull/205) by @dogxii)
- Canvas media nodes use recorded image and video dimensions for their initial
  size.
  ([#198](https://github.com/WhiteTowerAI/ohmygame/pull/198) by @dihuangdh)

### Changed

- Image history is bounded to reduce request size, with optimized OpenAI image
  requests.
  ([#203](https://github.com/WhiteTowerAI/ohmygame/pull/203) by @dogxii)
- Image reference limits use model-specific defaults.
  ([#204](https://github.com/WhiteTowerAI/ohmygame/pull/204) by @dogxii)

### Fixed

- Windows updates avoid installer conflicts and provide recovery actions when
  an update fails.
  ([#200](https://github.com/WhiteTowerAI/ohmygame/pull/200) by @82228)
- Canvas boards keep opening when older content nodes have saved sizes.
  ([#197](https://github.com/WhiteTowerAI/ohmygame/pull/197) by @dihuangdh)
- Generated images use file extensions matching their actual format.
  ([#201](https://github.com/WhiteTowerAI/ohmygame/pull/201) by @dihuangdh)
- Repeated attachment names are numbered instead of rejected.
  ([#199](https://github.com/WhiteTowerAI/ohmygame/pull/199) by @dihuangdh)
- Recent project cards show project activity.
  ([#207](https://github.com/WhiteTowerAI/ohmygame/pull/207) by @dogxii)
- Canvas reference removal icons are centered.
  ([#206](https://github.com/WhiteTowerAI/ohmygame/pull/206) by @dogxii)

**Full Changelog**: https://github.com/WhiteTowerAI/ohmygame/compare/v0.0.0-beta.4.5...v0.0.0-beta.4.6`}];if(i.some(t=>t.version===e)||i.unshift({version:e,notes:``}),t&&t.version!==e){let e=i.findIndex(e=>e.version===t.version),n=i[e];e>=0&&i.splice(e,1),i.unshift({...n,...t,notes:t.notes||n?.notes||``})}let a=i.find(e=>e.version===n)??i.find(e=>e.version===t?.version)??i.find(t=>t.version===e);return(0,z.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-changelog-panel`,"aria-label":b(`settings.about.changelog`),children:[(0,z.jsxs)(`header`,{className:`settings-changelog-header`,children:[(0,z.jsx)(`h3`,{children:b(`settings.about.changelog`)}),(0,z.jsxs)(`div`,{className:`settings-changelog-meta`,children:[i.length>1?(0,z.jsx)(`select`,{className:`settings-changelog-version`,"aria-label":b(`settings.about.releaseVersion`),value:a.version,onChange:e=>r(e.target.value),children:i.map(e=>(0,z.jsxs)(`option`,{value:e.version,children:[`v`,e.version]},e.version))}):(0,z.jsxs)(`span`,{children:[`v`,a.version]}),a.date?(0,z.jsx)(`time`,{dateTime:a.date,children:a.date}):null]})]}),a.notes?(0,z.jsx)(he,{className:`settings-changelog-content`,text:a.notes}):(0,z.jsxs)(`p`,{className:`settings-changelog-empty`,children:[b(`settings.about.notesUnavailable`),` `,(0,z.jsx)(`a`,{href:`${Ye}/tag/v${encodeURIComponent(a.version)}`,target:`_blank`,rel:`noreferrer`,children:b(`settings.about.viewRelease`)})]})]})}var X=`https://account.ohmygame.ai/account/billing`,Ze=[{value:`left`,label:b(`settings.appearance.left`)},{value:`right`,label:b(`settings.appearance.right`)}],Qe=[{value:`system`,label:b(`settings.appearance.system`)},{value:`en`,label:`English`},{value:`zh-CN`,label:`简体中文`}],$e=[{section:`providers`,label:b(`settings.nav.providers`),icon:N},{section:`agents`,label:b(`settings.nav.agents`),icon:ke},{section:`account`,label:b(`settings.nav.account`),icon:t},{section:`appearance`,label:b(`settings.nav.appearance`),icon:pe},{section:`web-search`,label:b(`settings.nav.webSearch`),icon:d},{section:`network`,label:b(`settings.nav.network`),icon:Ce},{section:`mcp-server`,label:b(`settings.nav.mcpServer`),icon:M},{section:`about`,label:b(`settings.nav.about`),icon:r}];function et({section:e,onBack:t,onSectionChange:n,onOpenOnboarding:r}){let[i,a]=(0,R.useState)({page:`providers`}),[o,s]=(0,R.useState)({page:`agents`}),c=(0,R.useRef)(null),l={"--sidebar-width":`${ve()}px`};(0,R.useEffect)(()=>{window.matchMedia(`(max-width: 720px)`).matches&&c.current?.querySelector(`[aria-current="page"]`)?.scrollIntoView({block:`nearest`,inline:`nearest`})},[e]);function u(e){e===`providers`&&a({page:`providers`}),e===`agents`&&s({page:`agents`}),n(e)}return(0,z.jsxs)(`main`,{className:`home-shell settings-page-shell`,style:l,children:[(0,z.jsxs)(`aside`,{className:`home-sidebar settings-page-sidebar`,children:[(0,z.jsx)(`div`,{className:`home-sidebar-header-spacer`,"aria-hidden":`true`}),(0,z.jsxs)(`button`,{className:`settings-page-back`,type:`button`,onClick:t,children:[(0,z.jsx)(A,{size:17}),(0,z.jsx)(`span`,{children:b(`settings.backToApp`)})]}),(0,z.jsxs)(`nav`,{className:`settings-page-nav`,"aria-label":b(`settings.nav.label`),ref:c,children:[(0,z.jsx)(`div`,{className:`home-nav-label`,children:b(`settings.nav.heading`)}),$e.map(t=>{let n=t.icon,r=e===t.section;return(0,z.jsxs)(`button`,{className:`settings-page-nav-item${r?` is-active`:``}`,type:`button`,"aria-current":r?`page`:void 0,onClick:()=>u(t.section),children:[(0,z.jsx)(n,{size:17}),(0,z.jsx)(`span`,{children:t.label})]},t.section)})]})]}),(0,z.jsxs)(`section`,{className:`settings-page-content`,children:[(0,z.jsx)(ye,{}),(0,z.jsxs)(`div`,{className:`settings-page-inner`,children:[e===`account`?(0,z.jsx)(at,{}):null,e===`billing`?(0,z.jsx)(nt,{}):null,e===`appearance`?(0,z.jsx)(rt,{}):null,e===`providers`?(0,z.jsx)(Ee,{view:i,onViewChange:a,onOpenAgents:()=>u(`agents`)}):null,e===`agents`?(0,z.jsx)(Le,{view:o,onViewChange:s,onOpenProviders:()=>u(`providers`)}):null,e===`web-search`?(0,z.jsx)(ze,{}):null,e===`network`?(0,z.jsx)(He,{}):null,e===`mcp-server`?(0,z.jsx)(Ke,{}):null,e===`about`?(0,z.jsx)(ot,{onOpenNetwork:()=>u(`network`),onOpenOnboarding:r}):null]})]})]})}async function tt(){window.ohMyGameDesktop?.openExternal?await window.ohMyGameDesktop.openExternal(X):window.open(X,`_blank`,`noopener,noreferrer`)}function nt(){return(0,z.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-billing-panel`,children:[(0,z.jsx)(`header`,{className:`settings-panel-header`,children:(0,z.jsx)(`h3`,{children:b(`settings.billing.title`)})}),(0,z.jsx)(`p`,{children:b(`settings.billing.description`)}),(0,z.jsxs)(`button`,{className:`settings-primary-button`,type:`button`,onClick:()=>void tt(),children:[(0,z.jsx)(`span`,{children:b(`settings.billing.open`)}),(0,z.jsx)(xe,{size:14,"aria-hidden":`true`})]})]})}function rt(){let[e,t]=(0,R.useState)(De),[n,r]=(0,R.useState)(we),[i,a]=(0,R.useState)(w);function o(e){t(e),Oe(e)}function s(e){r(e),Se(e)}function c(e){a(e),re(e)}return(0,z.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-appearance-panel`,children:[(0,z.jsx)(`header`,{className:`settings-panel-header`,children:(0,z.jsx)(`h3`,{children:b(`settings.nav.appearance`)})}),(0,z.jsxs)(`div`,{className:`settings-appearance-group`,children:[(0,z.jsx)(`h4`,{className:`settings-section-heading`,children:b(`settings.appearance.theme`)}),(0,z.jsxs)(`fieldset`,{className:`settings-theme-options`,"aria-label":b(`settings.appearance.theme`),children:[(0,z.jsx)(Z,{appearance:`system`,selected:e===`system`,onSelect:o}),(0,z.jsx)(Z,{appearance:`light`,selected:e===`light`,onSelect:o}),(0,z.jsx)(Z,{appearance:`dark`,selected:e===`dark`,onSelect:o})]})]}),(0,z.jsxs)(`div`,{className:`settings-appearance-group`,children:[(0,z.jsx)(`h4`,{className:`settings-section-heading`,children:b(`settings.appearance.workspace`)}),(0,z.jsxs)(`div`,{className:`settings-chat-layout-row`,children:[(0,z.jsx)(`span`,{className:`settings-chat-layout-label`,children:b(`settings.appearance.chatPosition`)}),(0,z.jsx)(L,{className:`settings-chat-layout-control`,label:b(`settings.appearance.chatPositionLabel`),options:Ze,value:n,onChange:s})]}),(0,z.jsxs)(`div`,{className:`settings-chat-layout-row`,children:[(0,z.jsx)(`span`,{className:`settings-chat-layout-label`,children:b(`settings.appearance.language`)}),(0,z.jsx)(L,{className:`settings-chat-layout-control`,label:b(`settings.appearance.languageLabel`),options:Qe,value:i,onChange:c})]})]})]})}function Z({appearance:e,selected:t,onSelect:n}){let r=b(`settings.appearance.${e}`);return(0,z.jsxs)(`button`,{className:`settings-theme-option is-${e}${t?` is-selected`:``}`,type:`button`,"aria-pressed":t,onClick:()=>n(e),children:[(0,z.jsx)(it,{appearance:e}),(0,z.jsxs)(`span`,{className:`settings-theme-option-label`,children:[(0,z.jsx)(`span`,{children:r}),t?(0,z.jsx)(E,{size:16,"aria-hidden":`true`}):null]})]})}function it({appearance:e}){return e===`system`?(0,z.jsxs)(`span`,{className:`settings-theme-preview is-system`,"aria-hidden":`true`,children:[(0,z.jsxs)(`span`,{className:`settings-theme-system-layer`,children:[(0,z.jsx)(`span`,{className:`settings-theme-preview-sidebar`}),(0,z.jsx)(Q,{})]}),(0,z.jsxs)(`span`,{className:`settings-theme-system-layer is-dark`,children:[(0,z.jsx)(`span`,{className:`settings-theme-preview-sidebar`}),(0,z.jsx)(Q,{})]})]}):(0,z.jsxs)(`span`,{className:`settings-theme-preview`,"aria-hidden":`true`,children:[(0,z.jsx)(`span`,{className:`settings-theme-preview-sidebar`}),(0,z.jsx)(Q,{})]})}function Q(){return(0,z.jsxs)(`span`,{className:`settings-theme-preview-content`,children:[(0,z.jsx)(`i`,{}),(0,z.jsx)(`i`,{}),(0,z.jsx)(`i`,{})]})}function at(){let e=oe(),[t,n]=(0,R.useState)();return(0,z.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-account-panel`,children:[(0,z.jsx)(`header`,{className:`settings-panel-header`,children:(0,z.jsx)(`h3`,{children:b(`settings.nav.account`)})}),e.state.status===`signed-in`?(0,z.jsxs)(`div`,{className:`settings-account-row`,children:[(0,z.jsxs)(`div`,{className:`settings-account-profile`,children:[(0,z.jsx)(_e,{className:`settings-account-avatar`,name:e.state.user.name,avatarUrl:e.state.user.avatarUrl}),(0,z.jsxs)(`span`,{className:`settings-account-copy`,children:[(0,z.jsx)(`small`,{children:b(`settings.account.signedInAs`)}),(0,z.jsx)(`strong`,{children:e.state.user.name}),e.state.user.email?(0,z.jsx)(`span`,{children:e.state.user.email}):null]})]}),(0,z.jsx)(`button`,{className:`settings-danger-button`,type:`button`,onClick:()=>void e.signOut().catch(e=>n($(e))),children:b(`common.signOut`)})]}):(0,z.jsx)(`button`,{className:`settings-primary-button`,type:`button`,onClick:e.openSignIn,children:b(`common.signIn`)}),t?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:t}):null]})}function ot({onOpenNetwork:e,onOpenOnboarding:t}){let[n,r]=(0,R.useState)(null),[i,a]=(0,R.useState)(!1),o=window.ohMyGameDesktop?.updates;(0,R.useEffect)(()=>{if(!o)return;let e=!1;o.state().then(t=>{e||r(t)}).catch(()=>void 0);let t=o.onState(r);return()=>{e=!0,t()}},[o]);let s=n?.status,c=s?.type===`up-to-date`?b(`settings.about.upToDate`):s?.type===`checking`?b(`settings.about.checking`):s?.type===`available`?b(`settings.about.available`,{version:s.version}):s?.type===`downloading`?b(`settings.about.downloading`,{percent:s.percent}):s?.type===`ready`?b(`settings.about.ready`,{version:s.version}):s?.type===`installing`?b(`settings.about.installing`):s?.type===`error`?s.title:null,l=()=>{s?.type===`error`&&o&&(s.retry===`download`?o.download():s.retry===`install`?o.install():o.check())},u=async()=>{s?.type===`error`&&(await navigator.clipboard.writeText([`OhMyGame ${n?.currentVersion??`0.0.0-beta.4.15`}`,`Update ${s.phase}/${s.code}`,s.detail].join(`
`)),a(!0),window.setTimeout(()=>a(!1),2e3))};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`section`,{className:`settings-panel settings-overview-panel`,children:[(0,z.jsx)(`header`,{className:`settings-panel-header`,children:(0,z.jsx)(`h3`,{children:b(`settings.nav.about`)})}),(0,z.jsxs)(`div`,{className:`settings-about-summary`,children:[(0,z.jsxs)(`div`,{className:`settings-about-identity`,children:[(0,z.jsx)(`img`,{className:`settings-about-logo`,src:P,alt:``}),(0,z.jsxs)(`div`,{className:`settings-about-copy`,children:[(0,z.jsxs)(`div`,{className:`settings-about-product`,children:[(0,z.jsx)(`strong`,{children:`OhMyGame`}),(0,z.jsxs)(`span`,{children:[`v`,n?.currentVersion??`0.0.0-beta.4.15`]})]}),o&&c?(0,z.jsx)(`p`,{className:`settings-about-status`,role:`status`,children:c}):null]})]}),o&&s?.type!==`downloading`&&s?.type!==`installing`?(0,z.jsx)(`div`,{className:`settings-about-actions`,children:s?.type===`available`?(0,z.jsx)(`button`,{className:`settings-primary-button`,type:`button`,onClick:()=>void o.download(),children:b(`settings.about.download`)}):s?.type===`ready`?(0,z.jsx)(`button`,{className:`settings-primary-button`,type:`button`,onClick:()=>void o.install(),children:b(`settings.about.restart`)}):s?.type===`error`?(0,z.jsx)(`button`,{className:`settings-primary-button`,type:`button`,onClick:l,children:b(`common.tryAgain`)}):(0,z.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,disabled:s?.type===`checking`,onClick:()=>void o.check(),children:b(`settings.about.check`)})}):null]}),s?.type===`error`?(0,z.jsxs)(`div`,{className:`settings-update-error`,role:`alert`,children:[(0,z.jsx)(`p`,{children:s.message}),s.dataSafe?(0,z.jsx)(`p`,{className:`settings-update-data-safe`,children:b(`settings.about.dataSafe`)}):null,(0,z.jsxs)(`details`,{children:[(0,z.jsx)(`summary`,{children:b(`common.technicalDetails`)}),(0,z.jsx)(`code`,{children:s.detail})]}),(0,z.jsxs)(`div`,{className:`settings-about-actions`,children:[s.code===`network`?(0,z.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,onClick:e,children:b(`settings.about.networkSettings`)}):null,(0,z.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,onClick:()=>void u(),children:b(i?`common.copied`:`common.copyDetails`)})]})]}):null,(0,z.jsxs)(`nav`,{className:`settings-about-links`,"aria-label":b(`settings.about.projectLinks`),children:[(0,z.jsx)(`a`,{href:`https://github.com/WhiteTowerAI/ohmygame`,target:`_blank`,rel:`noreferrer`,children:`GitHub`}),(0,z.jsx)(`a`,{href:`https://ohmygame.ai`,target:`_blank`,rel:`noreferrer`,children:b(`settings.about.website`)}),(0,z.jsx)(`a`,{href:`https://github.com/WhiteTowerAI/ohmygame/issues`,target:`_blank`,rel:`noreferrer`,children:b(`settings.about.reportIssue`)})]}),t?(0,z.jsx)(`div`,{children:(0,z.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,onClick:t,children:b(`onboarding.reopen`)})}):null]}),(0,z.jsx)(st,{}),(0,z.jsx)(Xe,{currentVersion:n?.currentVersion??`0.0.0-beta.4.15`,availableRelease:n?.availableRelease})]})}function st(){let[e,t]=(0,R.useState)(!1),[n,r]=(0,R.useState)(),i=window.ohMyGameDesktop?.openLogsDirectory,a=async()=>{r(void 0);try{await i?.()}catch(e){r(b(`settings.diagnostics.openLogsFailed`,{message:$(e)}))}},o=async()=>{t(!0),r(void 0);try{let{blob:e,fileName:t}=await te(),n=URL.createObjectURL(e),r=window.document.createElement(`a`);r.href=n,r.download=t,r.click(),window.setTimeout(()=>URL.revokeObjectURL(n),0)}catch(e){r(b(`settings.diagnostics.exportFailed`,{message:$(e)}))}finally{t(!1)}};return(0,z.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-diagnostics-panel`,children:[(0,z.jsx)(`header`,{className:`settings-panel-header`,children:(0,z.jsx)(`h3`,{children:b(`settings.diagnostics.title`)})}),(0,z.jsx)(`p`,{children:b(`settings.diagnostics.description`)}),(0,z.jsxs)(`div`,{className:`settings-diagnostics-actions`,children:[(0,z.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,disabled:e,onClick:()=>void o(),children:b(e?`settings.diagnostics.exporting`:`settings.diagnostics.export`)}),i?(0,z.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,onClick:()=>void a(),children:b(`settings.diagnostics.openLogs`)}):null]}),n?(0,z.jsx)(`p`,{className:`settings-error`,role:`alert`,children:n}):null]})}function $(e){return e instanceof Error?e.message:String(e)}export{et as SettingsPage};