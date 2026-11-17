import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{B as t,C as n,Ca as r,Da as i,Dn as a,Et as o,Fa as s,Ir as c,Kr as l,Ma as u,Na as d,Oa as f,St as p,Ta as m,Tn as h,Un as g,Ut as _,Wr as v,Y as y,Yr as b,b as x,ca as S,et as C,ja as ee,la as w,nn as T,ot as E,pa as D,ra as O,rn as k,si as te,tt as ne,ua as A,v as re,wa as ie}from"./routes-CBMwIe7x.js";import{t as ae}from"./add-Do8Cm4b7.js";import{a as oe,n as se,o as j,p as ce,r as le}from"./model-selector-DBGjZRiP.js";import{n as M,t as ue}from"./trash-bin-trash-BNtdfBMh.js";import{i as de,n as N,o as fe,r as P,t as F}from"./server-CucMwPAf.js";import{t as pe}from"./markdown-content-Bg6Z0ui2.js";import{t as me}from"./copy-kgYmrd3B.js";import{a as he,r as ge,t as _e}from"./window-drag-region-BnMbkTDn.js";import{t as ve}from"./restart-C935oGDQ.js";import{t as ye}from"./square-arrow-right-up-DOJ4V9cj.js";import{n as be,r as xe,t as Se}from"./chat-layout-GiI0xPPP.js";import{t as I}from"./ohmygame-mark-v2-BBSnHDKd.js";import{n as L,t as Ce}from"./agent-usage-OX7oK7At.js";import{a as R,i as we,n as Te,o as z,r as Ee}from"./appearance-CmjNScPV.js";var B=e(s(),1),V=d(),De=(0,B.forwardRef)((e,t)=>(0,V.jsxs)(u,{ref:t,...e,iconName:`bot-linear`,children:[(0,V.jsx)(`path`,{d:`M19.9458 12.5732C20.5207 12.6331 20.9393 12.7418 21.268 12.9391C22.0003 13.3784 22.0003 14.0855 22.0003 15.4997C22.0003 16.9139 22.0003 17.621 21.268 18.0604C20.9393 18.2576 20.5207 18.3663 19.9458 18.4262`,stroke:`currentColor`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M4.05448 18.4262C3.47962 18.3663 3.06096 18.2576 2.73223 18.0604C2 17.621 2 16.9139 2 15.4997C2 14.0855 2 13.3784 2.73223 12.9391C3.06096 12.7418 3.47962 12.6331 4.05448 12.5732`,stroke:`currentColor`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M4 15.5C4 14.3131 4 13.356 4.05448 12.5735C4.14064 11.336 4.36306 10.5351 4.93726 9.9519C5.87452 9 7.38301 9 10.4 9H13.6C16.617 9 18.1255 9 19.0627 9.9519C19.6369 10.5351 19.8594 11.336 19.9455 12.5735C20 13.356 20 14.3131 20 15.5C20 16.6869 20 17.644 19.9455 18.4265C19.8594 19.664 19.6369 20.4649 19.0627 21.0481C18.1255 22 16.617 22 13.6 22H10.4C7.38301 22 5.87452 22 4.93726 21.0481C4.36306 20.4649 4.14064 19.664 4.05448 18.4265C4 17.644 4 16.6869 4 15.5Z`,stroke:`currentColor`,strokeLinecap:`round`}),(0,V.jsx)(`circle`,{cx:`12`,cy:`3.5`,r:`1.5`,stroke:`currentColor`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M12 5V9`,stroke:`currentColor`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M9 18C9.85038 18.6303 10.8846 19 12 19C13.1154 19 14.1496 18.6303 15 18`,stroke:`currentColor`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M15.5 13.5C15.5 14.0523 15.2761 14.5 15 14.5C14.7239 14.5 14.5 14.0523 14.5 13.5C14.5 12.9477 14.7239 12.5 15 12.5C15.2761 12.5 15.5 12.9477 15.5 13.5Z`,stroke:`currentColor`,strokeLinecap:`round`}),(0,V.jsx)(`ellipse`,{cx:`9`,cy:`13.5`,rx:`0.5`,ry:`1`,stroke:`currentColor`,strokeLinecap:`round`})]}));function Oe({runtime:e,defaultProfileId:t,onDefault:r,onLogin:i,onRemoved:a,disabled:o}){let[s,c]=(0,B.useState)([]),[l,u]=(0,B.useState)(!1),[d,f]=(0,B.useState)(),[p,h]=(0,B.useState)(``),[g,_]=(0,B.useState)(``),[v,b]=(0,B.useState)(!1),x=v||o,[S,C]=(0,B.useState)();(0,B.useEffect)(()=>{let t=!1,n=()=>void T(e).then(e=>{t||c(e)}).catch(e=>{t||C(String(e))});return n(),window.addEventListener(`focus`,n),()=>{t=!0,window.removeEventListener(`focus`,n)}},[e]);async function w(e){if(!x){b(!0),C(void 0);try{await e()}catch(e){C(e instanceof Error?e.message:String(e))}finally{b(!1)}}}function E(t){t.preventDefault(),w(async()=>{let t=await n(e,p.trim(),g.trim()||void 0);c(e=>[...e,{...t,auth:{status:g.trim()?`unknown`:`signed-out`,billing:`unknown`}}]),u(!1),h(``),_(``),g.trim()?c(await T(e)):await i(t.id)})}return(0,V.jsxs)(`section`,{className:`settings-detail-section provider-models agent-account-profiles`,children:[(0,V.jsxs)(`div`,{className:`provider-models-heading`,children:[(0,V.jsx)(`h4`,{children:A(`codingAgents.profiles`)}),(0,V.jsxs)(`div`,{className:`provider-models-heading-actions`,children:[(0,V.jsx)(`button`,{className:`icon-button settings-provider-setting-edit`,type:`button`,"aria-label":A(`codingAgents.profileRecheck`),title:A(`codingAgents.profileRecheck`),disabled:x,onClick:()=>void w(async()=>{c(await T(e,!0))}),children:(0,V.jsx)(m,{size:14})}),(0,V.jsx)(`button`,{className:`icon-button settings-provider-setting-edit`,type:`button`,"aria-label":A(l?`common.cancel`:`codingAgents.profileAdd`),title:A(l?`common.cancel`:`codingAgents.profileAdd`),"aria-expanded":l,disabled:x,onClick:()=>{u(!l),h(``),_(``),C(void 0)},children:l?(0,V.jsx)(ee,{size:14}):(0,V.jsx)(ae,{size:14})})]})]}),(0,V.jsx)(`div`,{className:`provider-models-list agent-account-profile-list`,role:`radiogroup`,"aria-label":A(`codingAgents.profileDefault`),children:s.map(n=>{let a=n.id===`system`?A(`codingAgents.profileSystem`):n.name,o=n.id===t,s=n.auth.status===`signed-out`;return(0,V.jsxs)(`div`,{className:`provider-model-row is-compact`,children:[(0,V.jsxs)(`label`,{title:n.configDirectory,children:[(0,V.jsx)(`input`,{type:`radio`,name:`${e}-account-default`,"aria-label":A(`codingAgents.profileUseDefault`,{name:a}),checked:o,disabled:x,onChange:()=>void w(()=>r(n.id))}),(0,V.jsxs)(`span`,{className:`provider-model-copy`,children:[(0,V.jsx)(`strong`,{children:a}),o?(0,V.jsx)(`small`,{className:`provider-model-default`,title:A(`codingAgents.profileDefault`),children:A(`agents.default`)}):null,(0,V.jsx)(`small`,{title:n.auth.account,children:n.auth.account??A(s?`codingAgents.signedOut`:n.auth.status===`signed-in`?`codingAgents.signedIn`:`codingAgents.accountUnknown`)})]})]}),n.limits?.length?(0,V.jsx)(L,{limits:n.limits,compact:!0}):null,(0,V.jsx)(`button`,{className:s?`agent-account-sign-in`:`icon-button agent-account-reauth`,type:`button`,"aria-label":A(s?`common.signIn`:`codingAgents.switchAccount`),title:A(s?`common.signIn`:`codingAgents.switchAccount`),disabled:x,onClick:()=>void i(n.id),children:s?A(`common.signIn`):(0,V.jsx)(ve,{size:14})}),n.id===`system`?null:(0,V.jsx)(`button`,{className:`icon-button settings-provider-setting-edit settings-provider-delete`,type:`button`,"aria-label":A(`codingAgents.profileDelete`,{name:a}),title:A(`codingAgents.profileDelete`,{name:a}),"aria-expanded":d?.id===n.id,disabled:x,onClick:()=>{f(n),C(void 0)},children:(0,V.jsx)(ue,{size:14})})]},n.id)})}),d?(0,V.jsxs)(`div`,{className:`settings-provider-delete-confirmation`,role:`group`,"aria-label":A(`codingAgents.profileDelete`,{name:d.name}),children:[(0,V.jsx)(`span`,{children:A(d.managed?`codingAgents.profileDeleteManaged`:`codingAgents.profileDeleteImported`,{name:d.name})}),(0,V.jsx)(`button`,{className:`settings-danger-button`,type:`button`,disabled:x,onClick:()=>void w(async()=>{await y(e,d.id),c(e=>e.filter(e=>e.id!==d.id)),f(void 0),await a()}),children:A(v?`common.deleting`:`common.delete`)}),(0,V.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,disabled:x,onClick:()=>f(void 0),children:A(`common.cancel`)})]}):null,l?(0,V.jsxs)(`form`,{className:`agent-account-profile-form`,onSubmit:E,children:[(0,V.jsxs)(`div`,{className:`settings-detail-inline`,children:[(0,V.jsx)(`input`,{className:`settings-search-input`,"aria-label":A(`codingAgents.profileName`),placeholder:A(`codingAgents.profileName`),value:p,maxLength:80,required:!0,autoFocus:!0,disabled:x,onChange:e=>h(e.target.value)}),(0,V.jsx)(`button`,{className:`settings-add-button`,type:`submit`,disabled:x||!p.trim(),children:A(`common.add`)})]}),(0,V.jsxs)(`details`,{className:`settings-provider-advanced`,children:[(0,V.jsxs)(`summary`,{children:[(0,V.jsx)(ce,{size:12}),A(`codingAgents.profileImport`)]}),(0,V.jsx)(`input`,{className:`settings-search-input`,"aria-label":A(`codingAgents.profileDirectory`),placeholder:A(`codingAgents.profileDirectory`),value:g,disabled:x,onChange:e=>_(e.target.value)})]})]}):null,S?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:S}):null]})}var ke=[{value:`standard`,label:A(`codingAgents.permissionStandard`)},{value:`full`,label:A(`codingAgents.permissionFull`)}];function Ae({models:e,defaultAgent:t,onOpen:n}){let[r,i]=(0,B.useState)(),[o,s]=(0,B.useState)(),[c,l]=(0,B.useState)(new Set);(0,B.useEffect)(()=>{let e=!0,t=()=>void k().then(t=>{e&&(i(t),s(void 0))}).catch(t=>{e&&s(G(t))});return t(),window.addEventListener(x,t),window.addEventListener(`focus`,t),()=>{e=!1,window.removeEventListener(x,t),window.removeEventListener(`focus`,t)}},[e]);async function u(e,t){l(t=>new Set(t).add(e.id)),i(n=>n?.map(n=>n.id===e.id?{...n,enabled:t}:n));try{let n=await v(e.id,{enabled:t});i(t=>t?.map(t=>t.id===e.id?n:t)),a()}catch(t){i(t=>t?.map(t=>t.id===e.id?e:t)),s(G(t))}finally{l(t=>{let n=new Set(t);return n.delete(e.id),n})}}return(0,V.jsxs)(`section`,{className:`settings-provider-group coding-agents-group`,"aria-label":A(`codingAgents.title`),children:[(0,V.jsx)(`h4`,{children:A(`codingAgents.title`)}),!r&&!o?(0,V.jsxs)(`div`,{className:`settings-loading`,children:[(0,V.jsx)(m,{className:`spin`,size:18}),A(`codingAgents.checking`)]}):null,(r??[]).map(e=>{let r=e.installed?A(`codingAgents.manage`,{name:e.name}):A(`codingAgents.setUp`,{name:e.name});return(0,V.jsxs)(`div`,{className:`settings-provider-row`,children:[(0,V.jsx)(U,{id:e.id}),(0,V.jsxs)(`span`,{className:`settings-provider-copy`,children:[(0,V.jsxs)(`strong`,{className:`settings-provider-name`,children:[(0,V.jsx)(`span`,{children:e.name}),e.id===t?(0,V.jsx)(`small`,{children:A(`agents.default`)}):null]}),(0,V.jsx)(`span`,{className:`settings-provider-details`,children:(0,V.jsx)(`span`,{className:`settings-provider-description`,children:W(e)})}),e.limits?.length?(0,V.jsx)(L,{limits:e.limits}):null]}),e.installed?(0,V.jsxs)(`label`,{className:`settings-toggle settings-provider-toggle`,title:e.enabled?A(`common.enabled`):A(`common.disabled`),children:[(0,V.jsx)(`input`,{type:`checkbox`,role:`switch`,"aria-label":A(`codingAgents.enable`,{name:e.name}),checked:e.enabled,disabled:c.has(e.id),onChange:t=>void u(e,t.target.checked)}),(0,V.jsx)(`span`,{"aria-hidden":`true`})]}):(0,V.jsx)(`em`,{className:`settings-provider-status is-not_configured`,children:A(`codingAgents.notInstalled`)}),(0,V.jsx)(`button`,{className:`icon-button settings-provider-action`,type:`button`,"data-tooltip":r,"aria-label":r,onClick:()=>n(e.id),children:(0,V.jsx)(ie,{size:17,"aria-hidden":`true`})})]},e.id)}),o?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:o}):null]})}function je({id:e,onBack:t}){let[n,r]=(0,B.useState)(),[i,o]=(0,B.useState)(),[s,c]=(0,B.useState)(),[l,u]=(0,B.useState)(),[d,f]=(0,B.useState)(``);(0,B.useEffect)(()=>{let t=!0;return k().then(n=>{let i=n.find(t=>t.id===e);t&&i&&(r(i),f(i.configuredBinaryPath??``))}).catch(e=>{t&&o(G(e))}),()=>{t=!1}},[e]);async function p(e,t){if(!s){c(e),o(void 0);try{await t()}catch(e){o(G(e))}finally{c(void 0)}}}let _=()=>p(`recheck`,async()=>{let t=await g(e);r(t),f(t.configuredBinaryPath??``),a()}),y=t=>p(`login`,async()=>{let n=await h(e,t);u(n),n.url&&await R(n.url).catch(()=>void 0)}),b=t=>p(`save`,async()=>{let n=await v(e,t);r(n),f(n.configuredBinaryPath??``),a()});function x(e){e.preventDefault(),b({binaryPath:d.trim()})}if(!n)return(0,V.jsxs)(`section`,{className:`settings-panel settings-provider-detail`,children:[(0,V.jsx)(`header`,{className:`settings-provider-detail-header`,children:(0,V.jsx)(`button`,{className:`icon-button settings-provider-back`,type:`button`,onClick:t,"aria-label":A(`common.back`),children:(0,V.jsx)(M,{size:16})})}),i?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:i}):(0,V.jsxs)(`div`,{className:`settings-loading`,children:[(0,V.jsx)(m,{className:`spin`,size:18}),A(`codingAgents.checking`)]})]});let S=n.diagnostics;return(0,V.jsxs)(`section`,{className:`settings-panel settings-provider-detail coding-agent-detail`,children:[(0,V.jsxs)(`header`,{className:`settings-provider-detail-header`,children:[(0,V.jsx)(`button`,{className:`icon-button settings-provider-back`,type:`button`,onClick:t,"aria-label":A(`common.back`),children:(0,V.jsx)(M,{size:16})}),(0,V.jsx)(U,{id:n.id}),(0,V.jsx)(`span`,{className:`settings-provider-heading`,children:(0,V.jsx)(`h3`,{children:n.name})}),n.installed?(0,V.jsx)(`div`,{className:`settings-provider-enable-control`,children:(0,V.jsxs)(`label`,{className:`settings-provider-enable-label`,children:[(0,V.jsx)(`small`,{children:n.enabled?A(`common.enabled`):A(`common.disabled`)}),(0,V.jsxs)(`span`,{className:`settings-toggle`,children:[(0,V.jsx)(`input`,{type:`checkbox`,role:`switch`,"aria-label":A(`codingAgents.enable`,{name:n.name}),checked:n.enabled,disabled:s!==void 0,onChange:e=>void b({enabled:e.target.checked})}),(0,V.jsx)(`span`,{"aria-hidden":`true`})]})]})}):null]}),(0,V.jsxs)(`div`,{className:`settings-provider-connection`,children:[(0,V.jsxs)(`div`,{className:`settings-provider-setting-row`,children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`codingAgents.status`)}),(0,V.jsx)(`span`,{className:`settings-provider-setting-value`,children:W(n)}),(0,V.jsx)(`button`,{type:`button`,className:`icon-button settings-provider-setting-edit`,disabled:s!==void 0,onClick:()=>void _(),"aria-label":A(`codingAgents.recheck`),"data-tooltip":A(`codingAgents.recheck`),children:(0,V.jsx)(m,{size:15,className:s===`recheck`?`spin`:void 0,"aria-hidden":`true`})})]}),n.installed&&n.id===`opencode-cli`?(0,V.jsxs)(`div`,{className:`settings-provider-setting-row settings-provider-auth-row`,children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`codingAgents.account`)}),(0,V.jsx)(`span`,{className:`settings-provider-setting-value`,children:A(`codingAgents.openCodeAccounts`)})]}):null]}),oe(n.id)?(0,V.jsx)(Oe,{runtime:n.id,defaultProfileId:n.defaultProfileId??`system`,onDefault:e=>b({defaultProfileId:e}),onLogin:y,onRemoved:async()=>{r((await k()).find(t=>t.id===e)),a()},disabled:s!==void 0},n.id):null,l?(0,V.jsx)(Me,{login:l}):null,n.installed&&n.id!==`opencode-cli`?(0,V.jsxs)(`section`,{className:`settings-detail-section`,children:[(0,V.jsx)(`h4`,{children:A(`agentUsage.title`)}),n.limits?.length?(0,V.jsx)(Ce,{limits:n.limits}):(0,V.jsx)(`p`,{className:`cloud-quota-note`,children:A(`agentUsage.empty`,{name:n.name})})]}):null,S.length?(0,V.jsx)(`section`,{className:`settings-detail-section`,"aria-label":A(`codingAgents.diagnostics`),children:S.map(e=>(0,V.jsx)(Ne,{agent:n,diagnostic:e},e.code))}):null,n.installed?(0,V.jsxs)(`section`,{className:`settings-detail-section`,children:[(0,V.jsx)(`h4`,{children:A(`codingAgents.configuration`)}),(0,V.jsxs)(`div`,{className:`coding-agent-permission`,children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`codingAgents.permissions`)}),(0,V.jsx)(z,{className:`settings-chat-layout-control`,label:A(`codingAgents.permissions`),options:ke,value:n.permissionMode,onChange:e=>void b({permissionMode:e})})]}),n.permissionMode===`full`?(0,V.jsx)(`p`,{className:`coding-agent-warning`,role:`note`,children:A(`codingAgents.permissionFullHint`,{name:n.name})}):null,(0,V.jsx)(`p`,{className:`settings-detail-hint`,children:A(`codingAgents.cliConfigHint`,{name:n.name})})]}):null,(0,V.jsxs)(`section`,{className:`settings-detail-section`,children:[(0,V.jsxs)(`form`,{className:`settings-detail-field`,onSubmit:x,children:[(0,V.jsx)(`label`,{className:`settings-search-field-label`,htmlFor:`${n.id}-executable`,children:A(`codingAgents.executable`)}),(0,V.jsxs)(`div`,{className:`settings-detail-inline`,children:[(0,V.jsx)(`input`,{id:`${n.id}-executable`,"aria-describedby":`${n.id}-executable-hint`,className:`settings-search-input`,value:d,placeholder:A(`codingAgents.executablePlaceholder`),spellCheck:!1,onChange:e=>f(e.target.value)}),(0,V.jsx)(`button`,{type:`submit`,className:`settings-secondary-button`,disabled:s!==void 0||d.trim()===(n.configuredBinaryPath??``),children:A(`common.save`)})]})]}),(0,V.jsx)(`p`,{className:`settings-detail-hint`,id:`${n.id}-executable-hint`,children:A(`codingAgents.executableHint`)}),n.binaryPath?(0,V.jsxs)(`p`,{className:`settings-detail-hint coding-agent-executable-path`,children:[n.binarySource?`${A(`codingAgents.binarySource.${n.binarySource}`)}: `:``,(0,V.jsx)(`code`,{children:n.binaryPath})]}):null]}),i?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:i}):null]})}function Me({login:e}){return e.url?(0,V.jsxs)(`p`,{className:`settings-detail-hint`,role:`status`,children:[A(`codingAgents.loginOpened`),` `,(0,V.jsx)(`button`,{type:`button`,className:`coding-agent-link`,onClick:()=>void R(e.url),children:A(`codingAgents.openAgain`)})]}):e.command?(0,V.jsxs)(`div`,{className:`settings-detail-hint`,role:`status`,children:[A(`codingAgents.loginCommand`),` `,(0,V.jsx)(H,{command:e.command})]}):null}function Ne({agent:e,diagnostic:t}){let n=Pe(e,t);return(0,V.jsxs)(`div`,{className:`coding-agent-diagnostic is-${t.code}`,role:t.code===`not-installed`||t.code===`runtime-incompatible`?`alert`:`status`,children:[(0,V.jsx)(N,{size:14,"aria-hidden":`true`}),(0,V.jsxs)(`span`,{children:[n,t.command&&t.code===`not-installed`?(0,V.jsxs)(V.Fragment,{children:[` `,(0,V.jsx)(`button`,{type:`button`,className:`coding-agent-link`,onClick:()=>void R(t.command),children:A(`codingAgents.installGuide`)})]}):null,t.command&&t.code===`signed-out`?(0,V.jsxs)(V.Fragment,{children:[` `,(0,V.jsx)(H,{command:t.command})]}):null,e.id===`codex-cli`&&t.capability===`Windows sandbox filesystem read restrictions`?(0,V.jsxs)(V.Fragment,{children:[` `,(0,V.jsx)(`button`,{type:`button`,className:`coding-agent-link`,onClick:()=>void R(`https://learn.chatgpt.com/docs/windows/windows-sandbox`),children:A(`codingAgents.sandboxGuide`)})]}):null]})]})}function H({command:e}){let[t,n]=(0,B.useState)(!1);return(0,B.useEffect)(()=>{if(!t)return;let e=window.setTimeout(()=>n(!1),1500);return()=>window.clearTimeout(e)},[t]),(0,V.jsxs)(`span`,{className:`coding-agent-command`,children:[(0,V.jsx)(`code`,{children:e}),(0,V.jsx)(`button`,{type:`button`,className:`icon-button`,"aria-label":A(`codingAgents.copyCommand`),"data-tooltip":A(t?`codingAgents.copied`:`codingAgents.copyCommand`),onClick:()=>void navigator.clipboard.writeText(e).then(()=>n(!0),()=>void 0),children:t?(0,V.jsx)(D,{size:13,"aria-hidden":`true`}):(0,V.jsx)(me,{size:13,"aria-hidden":`true`})})]})}function U({id:e}){let t=le[e];return t?(0,V.jsx)(`span`,{className:`settings-provider-mark is-${t.tone}`,"aria-hidden":`true`,children:(0,V.jsx)(`img`,{src:t.src,alt:``})}):(0,V.jsx)(`span`,{className:`settings-provider-mark-slot`,"aria-hidden":`true`,children:(0,V.jsx)(N,{size:20})})}function W(e){if(!e.installed)return A(e.diagnostics.some(e=>e.code===`invalid-executable`)?`codingAgents.invalidExecutable`:`codingAgents.notFound`);let t=e.version?`v${e.version}`:A(`codingAgents.versionUnknown`);return e.diagnostics.some(e=>e.code===`runtime-incompatible`)?A(`codingAgents.needsUpdate`,{version:t}):e.diagnostics.some(e=>e.code===`probe-failed`)?A(`codingAgents.checkFailed`,{version:t}):e.auth.status===`signed-out`?A(`codingAgents.installedSignedOut`,{version:t}):A(`codingAgents.installed`,{version:t})}function Pe(e,t){switch(t.code){case`not-installed`:return A(`codingAgents.diagnostic.notInstalled`,{name:e.name});case`invalid-executable`:return A(`codingAgents.diagnostic.invalidExecutable`);case`runtime-incompatible`:return e.id===`codex-cli`&&t.capability===`Windows sandbox filesystem read restrictions`?A(`codingAgents.diagnostic.codexWindowsSandbox`):e.id===`opencode-cli`&&t.capability===`no saved OpenCode permissions for this project`?A(`codingAgents.diagnostic.openCodeSavedPermissions`):A(t.capability?`codingAgents.diagnostic.capabilityMissing`:`codingAgents.diagnostic.runtimeIncompatible`,{name:e.name,capability:t.capability});case`signed-out`:return A(`codingAgents.diagnostic.signedOut`,{name:e.name});case`models-unavailable`:return A(`codingAgents.diagnostic.modelsUnavailable`,{name:e.name});default:return A(`codingAgents.diagnostic.probeFailed`,{name:e.name})}}function G(e){return e instanceof Error?e.message:String(e)}function Fe({view:e,onViewChange:t,onOpenProviders:n}){return e.page===`agent`?(0,V.jsx)(je,{id:e.id,onBack:()=>t({page:`agents`})}):(0,V.jsx)(Ie,{onOpen:e=>t({page:`agent`,id:e}),onOpenProviders:n})}function Ie({onOpen:e,onOpenProviders:t}){let n=se({agentRuntimes:!0}),[r,i]=(0,B.useState)(!1),[o,s]=(0,B.useState)();async function c(){i(!0),s(void 0);try{await k(!0),a()}catch(e){s(e instanceof Error?e.message:String(e))}finally{i(!1)}}let l=n.defaultModel,u=n.status===`ready`&&!n.loadingRuntimes?.length,d=l&&j(l.provider)?l.provider:void 0,f=n.status===`ready`&&!n.models.some(e=>!j(e.provider));return(0,V.jsxs)(`section`,{className:`settings-panel settings-overview-panel`,children:[(0,V.jsxs)(`header`,{className:`settings-panel-header`,children:[(0,V.jsx)(`h3`,{children:A(`agents.title`)}),(0,V.jsx)(`button`,{className:`icon-button`,type:`button`,disabled:r,"aria-label":A(`agents.rescan`),"data-tooltip":A(`agents.rescan`),onClick:()=>void c(),children:(0,V.jsx)(m,{size:15,className:r?`spin`:void 0,"aria-hidden":`true`})})]}),(0,V.jsxs)(`div`,{className:`settings-provider-list`,children:[(0,V.jsxs)(`section`,{className:`settings-provider-group`,children:[(0,V.jsx)(`h4`,{children:A(`agents.builtIn`)}),(0,V.jsxs)(`div`,{className:`settings-provider-row is-featured`,children:[(0,V.jsx)(`span`,{className:`settings-provider-mark is-brand`,"aria-hidden":`true`,children:(0,V.jsx)(`img`,{src:I,alt:``})}),(0,V.jsxs)(`span`,{className:`settings-provider-copy`,children:[(0,V.jsxs)(`strong`,{className:`settings-provider-name`,children:[(0,V.jsx)(`span`,{children:`OhMyGame`}),u&&!d?(0,V.jsx)(`small`,{children:A(`agents.default`)}):null]}),f?(0,V.jsx)(`span`,{className:`settings-provider-details`,children:(0,V.jsx)(`span`,{className:`settings-provider-description`,children:A(`agents.ohmygameNoModels`)})}):null]}),(0,V.jsx)(`button`,{className:`icon-button settings-provider-action`,type:`button`,"data-tooltip":A(`agents.manageModels`),"aria-label":A(`agents.manageModels`),onClick:t,children:(0,V.jsx)(F,{size:17,"aria-hidden":`true`})})]})]}),(0,V.jsx)(Ae,{models:n.models,defaultAgent:d,onOpen:e}),o?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:o}):null]})]})}function Le(){let e=O(),[t,n]=(0,B.useState)(),[r,i]=(0,B.useState)(),[a,o]=(0,B.useState)(),[s,c]=(0,B.useState)(!1),[l,u]=(0,B.useState)(!1);(0,B.useEffect)(()=>{let e=!1;return _().then(t=>{e||(n(t),o(void 0),i(e=>e??q(t)))}).catch(t=>{e||o(J(t))}),()=>{e=!0}},[e]);async function d(){if(r&&!l){u(!0),o(void 0),c(!1);try{let e=await te(Re(r));n(e),i(q(e)),c(!0)}catch(e){o(J(e))}finally{u(!1)}}}if(!r||!t)return(0,V.jsx)(`section`,{className:`settings-panel settings-overview-panel`,children:(0,V.jsx)(`p`,{className:a?`settings-error`:`settings-loading`,children:a??A(`webSearch.loading`)})});function f(e){c(!1),i(t=>t&&{...t,...e})}return(0,V.jsxs)(`form`,{className:`settings-panel settings-overview-panel settings-web-search-panel`,onSubmit:e=>{e.preventDefault(),d()},children:[(0,V.jsx)(`header`,{className:`settings-panel-header`,children:(0,V.jsx)(`h3`,{children:A(`webSearch.title`)})}),(0,V.jsxs)(`div`,{className:`settings-search-row`,children:[(0,V.jsx)(`strong`,{children:A(`webSearch.toggle`)}),(0,V.jsxs)(`label`,{className:`settings-toggle`,children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:r.enabled,onChange:e=>f({enabled:e.target.checked})}),(0,V.jsx)(`span`,{})]})]}),(0,V.jsxs)(`section`,{className:`settings-search-section`,children:[(0,V.jsxs)(`div`,{className:`settings-search-section-header`,children:[(0,V.jsx)(`h4`,{children:A(`webSearch.provider`)}),(0,V.jsx)(`p`,{children:A(`webSearch.providerDescription`)})]}),(0,V.jsx)(`div`,{className:`settings-provider-options`,role:`radiogroup`,"aria-label":A(`webSearch.providerLabel`),children:[[`auto`,A(`webSearch.auto`),A(`webSearch.autoDescription`)],[`exa`,`Exa`,A(`webSearch.exaDescription`)],[`parallel`,`Parallel`,A(`webSearch.parallelDescription`)],[`custom`,A(`webSearch.customMcp`),A(`webSearch.customDescription`)]].map(([e,t,n])=>(0,V.jsxs)(`label`,{className:`settings-provider-option`,children:[(0,V.jsx)(`input`,{type:`radio`,name:`web-search-provider`,value:e,checked:r.provider===e,disabled:!r.enabled,onChange:()=>f({provider:e})}),(0,V.jsx)(`span`,{className:`settings-provider-option-label`,children:t}),(0,V.jsx)(`span`,{className:`settings-provider-option-description`,children:n})]},e))}),(0,V.jsxs)(`div`,{className:`settings-search-option-row`,children:[(0,V.jsxs)(`span`,{children:[(0,V.jsx)(`strong`,{children:A(`webSearch.fallback`)}),(0,V.jsx)(`small`,{children:A(`webSearch.fallbackDescription`)})]}),(0,V.jsxs)(`label`,{className:`settings-toggle`,children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:r.fallback,disabled:!r.enabled||r.provider!==`auto`,onChange:e=>f({fallback:e.target.checked})}),(0,V.jsx)(`span`,{})]})]})]}),(0,V.jsxs)(`section`,{className:`settings-search-section`,children:[(0,V.jsxs)(`div`,{className:`settings-search-section-header`,children:[(0,V.jsx)(`h4`,{children:A(`webSearch.apiKeys`)}),(0,V.jsx)(`p`,{children:A(`webSearch.apiKeysDescription`)})]}),(0,V.jsxs)(`div`,{className:`settings-search-credentials`,children:[(0,V.jsx)(K,{label:A(`webSearch.exaKey`),configured:t.exaApiKeyConfigured,value:r.exaApiKey,clear:r.clearExaApiKey,disabled:!r.enabled,onChange:e=>f({exaApiKey:e,clearExaApiKey:!1}),onClear:e=>f({clearExaApiKey:e,exaApiKey:``})}),(0,V.jsx)(K,{label:A(`webSearch.parallelKey`),configured:t.parallelApiKeyConfigured,value:r.parallelApiKey,clear:r.clearParallelApiKey,disabled:!r.enabled,onChange:e=>f({parallelApiKey:e,clearParallelApiKey:!1}),onClear:e=>f({clearParallelApiKey:e,parallelApiKey:``})})]})]}),r.provider===`custom`?(0,V.jsxs)(`section`,{className:`settings-search-section settings-custom-search-section`,children:[(0,V.jsxs)(`div`,{className:`settings-search-section-header`,children:[(0,V.jsx)(`h4`,{children:A(`webSearch.customMcp`)}),(0,V.jsx)(`p`,{children:A(`webSearch.customDescriptionLong`)})]}),(0,V.jsxs)(`div`,{className:`settings-search-fields`,children:[(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`webSearch.name`)}),(0,V.jsx)(`input`,{className:`settings-search-input`,value:r.customName,disabled:!r.enabled,onChange:e=>f({customName:e.target.value})})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`webSearch.endpoint`)}),(0,V.jsx)(`input`,{className:`settings-search-input`,type:`url`,value:r.customEndpoint,disabled:!r.enabled,placeholder:`https://search.example.com/mcp`,onChange:e=>f({customEndpoint:e.target.value})})]}),(0,V.jsxs)(`label`,{children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`webSearch.toolName`)}),(0,V.jsx)(`input`,{className:`settings-search-input`,value:r.customToolName,disabled:!r.enabled,placeholder:`web_search`,onChange:e=>f({customToolName:e.target.value})})]}),(0,V.jsx)(K,{label:A(`webSearch.bearerToken`),configured:t.custom?.apiKeyConfigured??!1,value:r.customApiKey,clear:r.clearCustomApiKey,disabled:!r.enabled,onChange:e=>f({customApiKey:e,clearCustomApiKey:!1}),onClear:e=>f({clearCustomApiKey:e,customApiKey:``})})]})]}):null,a?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:a}):null,s?(0,V.jsx)(`p`,{className:`settings-success`,children:A(`webSearch.saved`)}):null,(0,V.jsx)(`div`,{className:`settings-form-actions`,children:(0,V.jsx)(`button`,{className:`settings-primary-button`,type:`submit`,disabled:l,children:A(l?`common.saving`:`common.save`)})})]})}function K({label:e,configured:t,value:n,clear:r,disabled:i,onChange:a,onClear:o}){return(0,V.jsxs)(`div`,{className:`settings-search-credential`,children:[(0,V.jsxs)(`label`,{children:[(0,V.jsxs)(`span`,{className:`settings-search-field-label`,children:[(0,V.jsx)(`span`,{children:e}),t&&!r?(0,V.jsx)(`span`,{className:`settings-search-field-status`,children:A(`common.saved`)}):null]}),(0,V.jsx)(`input`,{className:`settings-search-input`,type:`password`,autoComplete:`off`,value:n,disabled:i||r,placeholder:A(t&&!r?`webSearch.replacePlaceholder`:`webSearch.optional`),onChange:e=>a(e.target.value)})]}),t?(0,V.jsxs)(`label`,{className:`settings-checkbox-row`,children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:r,disabled:i,onChange:e=>o(e.target.checked)}),(0,V.jsx)(`span`,{children:A(`webSearch.removeKey`)})]}):null]})}function q(e){return{enabled:e.enabled,provider:e.provider,fallback:e.fallback,exaApiKey:``,parallelApiKey:``,clearExaApiKey:!1,clearParallelApiKey:!1,customName:e.custom?.name??``,customEndpoint:e.custom?.endpoint??``,customToolName:e.custom?.toolName??`web_search`,customApiKey:``,clearCustomApiKey:!1}}function Re(e){let t=(e,t)=>t?null:e.trim()||void 0;return{enabled:e.enabled,provider:e.provider,fallback:e.fallback,exaApiKey:t(e.exaApiKey,e.clearExaApiKey),parallelApiKey:t(e.parallelApiKey,e.clearParallelApiKey),...e.provider===`custom`?{custom:{name:e.customName,endpoint:e.customEndpoint,toolName:e.customToolName,apiKey:t(e.customApiKey,e.clearCustomApiKey)}}:{}}}function J(e){return e instanceof Error?e.message:String(e)}var Y={manual:A(`network.source.manual`),environment:A(`network.source.environment`),system:A(`network.source.system`),direct:A(`network.source.direct`)},ze={direct:A(`network.hints.direct`),manual:A(`network.hints.manual`),auto:A(`network.hints.auto`)};function Be(){let e=O(),[t,n]=(0,B.useState)(),[r,i]=(0,B.useState)(),[a,s]=(0,B.useState)(),[l,u]=(0,B.useState)(),[d,f]=(0,B.useState)(!1),[p,m]=(0,B.useState)();(0,B.useEffect)(()=>{let e=!1;return o().then(t=>{e||(n(t),u(void 0),i(e=>e??t.settings))}).catch(t=>{e||u(X(t))}),()=>{e=!0}},[e]);function h(e){i(t=>t&&{...t,...e}),f(!1),m(void 0),u(void 0)}async function g(e){if(r&&!a){s(e),u(void 0),f(!1);try{if(e===`save`){let e=await b(r);n(e),i(e.settings),f(!0),m(void 0)}else e===`detect`?(n(await C()),m(void 0)):m(await c(r))}catch(e){u(X(e))}finally{s(void 0)}}}async function _(){if(!a&&window.ohMyGameDesktop?.restartApp){s(`restart`),u(void 0);try{await window.ohMyGameDesktop.restartApp()}catch(e){u(X(e)),s(void 0)}}}if(!t||!r)return(0,V.jsx)(`section`,{className:`settings-panel settings-overview-panel`,children:(0,V.jsx)(`p`,{className:l?`settings-error`:`settings-loading`,children:l??A(`network.loading`)})});let v=r.mode===`manual`,y=r.mode!==t.settings.mode||r.proxyUrl!==t.settings.proxyUrl||r.noProxy!==t.settings.noProxy,x=t.systemProxyAvailable&&t.detected.source!==`environment`&&t.settings.mode===`auto`&&r.mode===`auto`;return(0,V.jsxs)(`form`,{className:`settings-panel settings-overview-panel settings-network-panel`,onSubmit:e=>{e.preventDefault(),g(`save`)},children:[(0,V.jsx)(`header`,{className:`settings-panel-header`,children:(0,V.jsx)(`h3`,{children:A(`network.title`)})}),(0,V.jsxs)(`fieldset`,{className:`settings-network-fields`,disabled:!!a,children:[(0,V.jsxs)(`div`,{className:`settings-network-mode`,children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`network.proxy`)}),(0,V.jsx)(`div`,{className:`settings-provider-options`,role:`radiogroup`,"aria-label":A(`network.modeLabel`),"aria-describedby":`network-proxy-mode-hint`,children:[[`direct`,A(`network.direct`)],[`manual`,A(`network.manual`)],[`auto`,A(`network.automatic`)]].map(([e,t])=>(0,V.jsxs)(`label`,{className:`settings-provider-option`,children:[(0,V.jsx)(`input`,{type:`radio`,name:`network-proxy-mode`,value:e,checked:r.mode===e,onChange:()=>h({mode:e})}),(0,V.jsx)(`span`,{className:`settings-provider-option-label`,children:t})]},e))})]}),(0,V.jsx)(`p`,{className:`settings-detail-hint settings-network-mode-hint`,id:`network-proxy-mode-hint`,children:ze[r.mode]}),v?(0,V.jsxs)(`label`,{className:`settings-detail-field`,children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`network.proxyUrl`)}),(0,V.jsx)(`input`,{className:`settings-search-input`,type:`url`,required:!0,placeholder:`http://127.0.0.1:7890`,value:r.proxyUrl,onChange:e=>h({proxyUrl:e.target.value}),spellCheck:!1,autoComplete:`off`}),(0,V.jsx)(`small`,{className:`settings-detail-hint`,children:A(`network.clashHint`)})]}):null,(0,V.jsxs)(`details`,{children:[(0,V.jsx)(`summary`,{children:A(`common.advanced`)}),(0,V.jsxs)(`div`,{className:`settings-network-advanced`,children:[(0,V.jsxs)(`label`,{className:`settings-detail-field`,children:[(0,V.jsx)(`span`,{className:`settings-search-field-label`,children:A(`network.bypass`)}),(0,V.jsx)(`input`,{className:`settings-search-input`,value:r.noProxy,onChange:e=>h({noProxy:e.target.value}),placeholder:`example.com, .internal.example`,spellCheck:!1,autoComplete:`off`}),(0,V.jsx)(`small`,{className:`settings-detail-hint`,children:A(`network.bypassHint`)})]}),x?(0,V.jsx)(`button`,{className:`settings-add-button`,type:`button`,onClick:()=>void g(`detect`),children:A(a===`detect`?`network.detecting`:`network.detect`)}):null]})]})]}),y||t.requiresRestart||d||t.detected.warning?(0,V.jsxs)(`div`,{className:`settings-network-status`,"aria-label":A(`network.status`),children:[y?(0,V.jsx)(`p`,{children:A(`network.unsaved`)}):null,t.requiresRestart?(0,V.jsxs)(`div`,{className:`settings-network-restart`,children:[(0,V.jsxs)(`p`,{role:`status`,children:[d?A(`network.savedPrefix`):``,window.ohMyGameDesktop?.restartApp?A(`network.restartToApply`):window.ohMyGameDesktop?A(`network.restartAppToApply`):A(`network.restartServiceToApply`)]}),window.ohMyGameDesktop?.restartApp?(0,V.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,disabled:!!a,onClick:()=>void _(),children:A(a===`restart`?`network.restarting`:`network.restartNow`)}):null]}):d?(0,V.jsx)(`p`,{role:`status`,children:A(`network.saved`)}):null,t.detected.warning?(0,V.jsx)(`p`,{children:t.detected.warning}):null]}):null,p?(0,V.jsx)(`p`,{className:p.reachable?`settings-success`:`settings-error`,role:`status`,title:`HTTP ${p.statusCode??`—`} · ${Ve(p.route)}`,children:p.reachable?A(`network.reachable`,{ms:p.elapsedMs}):p.error??A(`providers.status.failed`)}):null,l?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:l}):null,(0,V.jsxs)(`div`,{className:`settings-form-actions`,children:[(0,V.jsx)(`button`,{className:`settings-add-button`,type:`button`,title:A(`network.testHint`),disabled:!!a||v&&!r.proxyUrl.trim(),onClick:()=>void g(`test`),children:A(a===`test`?`network.testing`:`network.test`)}),(0,V.jsx)(`button`,{className:`settings-primary-button`,type:`submit`,disabled:!!a||!y||v&&!r.proxyUrl.trim(),children:A(a===`save`?`common.saving`:`common.save`)})]})]})}function Ve(e){return e.httpProxy?`${Y[e.source]} · ${e.httpProxy}${e.httpsProxy===e.httpProxy?``:` / ${e.httpsProxy}`}`:Y[e.source]}function X(e){return e instanceof Error?e.message:String(e)}var He=`ohmygame-studio`,Ue={"claude-code":{name:`Claude Code`,runtime:`claude-code-cli`},codex:{name:`Codex`,runtime:`codex-cli`}};function We(){let[e,n]=(0,B.useState)(),[r,i]=(0,B.useState)(),[a,o]=(0,B.useState)();(0,B.useEffect)(()=>{let e=!0;return p().then(t=>e&&n(t)).catch(t=>e&&i(qe(t))),()=>{e=!1}},[]);async function s(e,t){o(e),i(void 0);try{n(await t())}catch(e){i(qe(e))}finally{o(void 0)}}return(0,V.jsxs)(`section`,{className:`settings-panel settings-overview-panel external-agents-settings`,children:[(0,V.jsx)(`header`,{className:`settings-panel-header`,children:(0,V.jsx)(`h3`,{children:A(`externalAgents.title`)})}),(0,V.jsxs)(`div`,{className:`settings-provider-list`,children:[!e&&!r?(0,V.jsxs)(`div`,{className:`settings-loading`,children:[(0,V.jsx)(m,{className:`spin`,size:18}),A(`externalAgents.loading`)]}):null,e?(0,V.jsx)(`section`,{className:`settings-provider-group`,children:(0,V.jsxs)(`div`,{className:`settings-provider-row is-featured`,children:[(0,V.jsx)(`span`,{className:`settings-provider-mark-slot`,"aria-hidden":`true`,children:(0,V.jsx)(N,{size:20})}),(0,V.jsxs)(`span`,{className:`settings-provider-copy`,children:[(0,V.jsx)(`strong`,{className:`settings-provider-name`,children:(0,V.jsx)(`span`,{children:A(`externalAgents.enable`)})}),(0,V.jsx)(`span`,{className:`settings-provider-details`,children:(0,V.jsx)(`span`,{className:`settings-provider-description`,children:A(`externalAgents.description`)})})]}),(0,V.jsxs)(`label`,{className:`settings-toggle settings-provider-toggle`,title:e.enabled?A(`common.enabled`):A(`common.disabled`),children:[(0,V.jsx)(`input`,{type:`checkbox`,role:`switch`,"aria-label":A(`externalAgents.enable`),checked:e.enabled,disabled:a!==void 0,onChange:e=>{let t=e.target.checked;s(`enabled`,()=>l({enabled:t}))}}),(0,V.jsx)(`span`,{"aria-hidden":`true`})]})]})}):null,e?.enabled&&!e.launcher?(0,V.jsx)(`p`,{className:`settings-provider-description`,children:A(`externalAgents.desktopOnly`)}):null,e?.enabled&&e.launcher?(0,V.jsxs)(`section`,{className:`settings-provider-group external-agents-clients`,"aria-label":A(`externalAgents.clients`),children:[(0,V.jsx)(`h4`,{children:A(`externalAgents.clients`)}),e.clients.map(e=>{let{name:n,runtime:r}=Ue[e.id],i=a===e.id,o=A(e.connected?`externalAgents.disconnect`:`externalAgents.connect`);return(0,V.jsxs)(`div`,{className:`settings-provider-row`,children:[(0,V.jsx)(U,{id:r}),(0,V.jsxs)(`span`,{className:`settings-provider-copy`,children:[(0,V.jsx)(`strong`,{className:`settings-provider-name`,children:(0,V.jsx)(`span`,{children:n})}),(0,V.jsx)(`span`,{className:`settings-provider-details`,children:(0,V.jsx)(`span`,{className:`settings-provider-description`,children:e.available?e.connected?A(`externalAgents.connected`):A(`externalAgents.notConnected`):A(`codingAgents.notFound`)})})]}),e.available?(0,V.jsx)(`button`,{type:`button`,className:`external-agent-action${e.connected?` is-danger`:``}`,"aria-label":o,title:o,"aria-busy":i,disabled:a!==void 0,onClick:()=>void s(e.id,()=>e.connected?ne(e.id):t(e.id)),children:i?(0,V.jsx)(m,{className:`spin`,size:14,"aria-hidden":`true`}):e.connected?(0,V.jsx)(fe,{size:16,"aria-hidden":`true`}):(0,V.jsx)(P,{size:16,"aria-hidden":`true`})}):null]},e.id)}),(0,V.jsx)(Ge,{launcher:e.launcher})]}):null,r?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:r}):null]})]})}function Ge({launcher:e}){let t=Object.entries(e.env).map(([e,t])=>`${e}=${t}`);return(0,V.jsxs)(`details`,{className:`external-agents-manual`,children:[(0,V.jsx)(`summary`,{children:A(`externalAgents.otherClients`)}),(0,V.jsx)(`p`,{className:`settings-provider-description`,children:A(`externalAgents.otherClientsHint`,{name:He})}),(0,V.jsx)(H,{command:[e.command,...e.args].map(Ke).join(` `)}),t.length?(0,V.jsx)(`p`,{className:`settings-provider-description`,children:A(`externalAgents.environment`,{value:t.join(` `)})}):null]})}function Ke(e){return/[\s"']/.test(e)?`"${e.replaceAll(`"`,`\\"`)}"`:e}function qe(e){return e instanceof Error?e.message:String(e)}var Je=`https://github.com/WhiteTowerAI/ohmygame/releases`;function Ye({currentVersion:e,availableRelease:t}){let[n,r]=(0,B.useState)(),i=[{version:`0.0.0-beta.4.15`,date:`2026-10-27`,notes:`### Added

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

**Full Changelog**: https://github.com/WhiteTowerAI/ohmygame/compare/v0.0.0-beta.4.5...v0.0.0-beta.4.6`}];if(i.some(t=>t.version===e)||i.unshift({version:e,notes:``}),t&&t.version!==e){let e=i.findIndex(e=>e.version===t.version),n=i[e];e>=0&&i.splice(e,1),i.unshift({...n,...t,notes:t.notes||n?.notes||``})}let a=i.find(e=>e.version===n)??i.find(e=>e.version===t?.version)??i.find(t=>t.version===e);return(0,V.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-changelog-panel`,"aria-label":A(`settings.about.changelog`),children:[(0,V.jsxs)(`header`,{className:`settings-changelog-header`,children:[(0,V.jsx)(`h3`,{children:A(`settings.about.changelog`)}),(0,V.jsxs)(`div`,{className:`settings-changelog-meta`,children:[i.length>1?(0,V.jsx)(`select`,{className:`settings-changelog-version`,"aria-label":A(`settings.about.releaseVersion`),value:a.version,onChange:e=>r(e.target.value),children:i.map(e=>(0,V.jsxs)(`option`,{value:e.version,children:[`v`,e.version]},e.version))}):(0,V.jsxs)(`span`,{children:[`v`,a.version]}),a.date?(0,V.jsx)(`time`,{dateTime:a.date,children:a.date}):null]})]}),a.notes?(0,V.jsx)(pe,{className:`settings-changelog-content`,text:a.notes}):(0,V.jsxs)(`p`,{className:`settings-changelog-empty`,children:[A(`settings.about.notesUnavailable`),` `,(0,V.jsx)(`a`,{href:`${Je}/tag/v${encodeURIComponent(a.version)}`,target:`_blank`,rel:`noreferrer`,children:A(`settings.about.viewRelease`)})]})]})}var Xe=`https://account.ohmygame.ai/account/billing`,Ze=[{value:`left`,label:A(`settings.appearance.left`)},{value:`right`,label:A(`settings.appearance.right`)}],Qe=[{value:`system`,label:A(`settings.appearance.system`)},{value:`en`,label:`English`},{value:`zh-CN`,label:`简体中文`}],$e=[{section:`providers`,label:A(`settings.nav.providers`),icon:F},{section:`agents`,label:A(`settings.nav.agents`),icon:De},{section:`account`,label:A(`settings.nav.account`),icon:r},{section:`appearance`,label:A(`settings.nav.appearance`),icon:de},{section:`web-search`,label:A(`settings.nav.webSearch`),icon:f},{section:`network`,label:A(`settings.nav.network`),icon:xe},{section:`mcp-server`,label:A(`settings.nav.mcpServer`),icon:P},{section:`about`,label:A(`settings.nav.about`),icon:i}];function et({section:e,onBack:t,onSectionChange:n,onOpenOnboarding:r}){let[i,a]=(0,B.useState)({page:`providers`}),[o,s]=(0,B.useState)({page:`agents`}),c=(0,B.useRef)(null),l={"--sidebar-width":`${ge()}px`};(0,B.useEffect)(()=>{window.matchMedia(`(max-width: 720px)`).matches&&c.current?.querySelector(`[aria-current="page"]`)?.scrollIntoView({block:`nearest`,inline:`nearest`})},[e]);function u(e){e===`providers`&&a({page:`providers`}),e===`agents`&&s({page:`agents`}),n(e)}return(0,V.jsxs)(`main`,{className:`home-shell settings-page-shell`,style:l,children:[(0,V.jsxs)(`aside`,{className:`home-sidebar settings-page-sidebar`,children:[(0,V.jsx)(`div`,{className:`home-sidebar-header-spacer`,"aria-hidden":`true`}),(0,V.jsxs)(`button`,{className:`settings-page-back`,type:`button`,onClick:t,children:[(0,V.jsx)(M,{size:17}),(0,V.jsx)(`span`,{children:A(`settings.backToApp`)})]}),(0,V.jsxs)(`nav`,{className:`settings-page-nav`,"aria-label":A(`settings.nav.label`),ref:c,children:[(0,V.jsx)(`div`,{className:`home-nav-label`,children:A(`settings.nav.heading`)}),$e.map(t=>{let n=t.icon,r=e===t.section;return(0,V.jsxs)(`button`,{className:`settings-page-nav-item${r?` is-active`:``}`,type:`button`,"aria-current":r?`page`:void 0,onClick:()=>u(t.section),children:[(0,V.jsx)(n,{size:17}),(0,V.jsx)(`span`,{children:t.label})]},t.section)})]})]}),(0,V.jsxs)(`section`,{className:`settings-page-content`,children:[(0,V.jsx)(_e,{}),(0,V.jsxs)(`div`,{className:`settings-page-inner`,children:[e===`account`?(0,V.jsx)(at,{}):null,e===`billing`?(0,V.jsx)(nt,{}):null,e===`appearance`?(0,V.jsx)(rt,{}):null,e===`providers`?(0,V.jsx)(we,{view:i,onViewChange:a,onOpenAgents:()=>u(`agents`)}):null,e===`agents`?(0,V.jsx)(Fe,{view:o,onViewChange:s,onOpenProviders:()=>u(`providers`)}):null,e===`web-search`?(0,V.jsx)(Le,{}):null,e===`network`?(0,V.jsx)(Be,{}):null,e===`mcp-server`?(0,V.jsx)(We,{}):null,e===`about`?(0,V.jsx)(ot,{onOpenNetwork:()=>u(`network`),onOpenOnboarding:r}):null]})]})]})}async function tt(){window.ohMyGameDesktop?.openExternal?await window.ohMyGameDesktop.openExternal(Xe):window.open(Xe,`_blank`,`noopener,noreferrer`)}function nt(){return(0,V.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-billing-panel`,children:[(0,V.jsx)(`header`,{className:`settings-panel-header`,children:(0,V.jsx)(`h3`,{children:A(`settings.billing.title`)})}),(0,V.jsx)(`p`,{children:A(`settings.billing.description`)}),(0,V.jsxs)(`button`,{className:`settings-primary-button`,type:`button`,onClick:()=>void tt(),children:[(0,V.jsx)(`span`,{children:A(`settings.billing.open`)}),(0,V.jsx)(ye,{size:14,"aria-hidden":`true`})]})]})}function rt(){let[e,t]=(0,B.useState)(Te),[n,r]=(0,B.useState)(Se),[i,a]=(0,B.useState)(S);function o(e){t(e),Ee(e)}function s(e){r(e),be(e)}function c(e){a(e),w(e)}return(0,V.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-appearance-panel`,children:[(0,V.jsx)(`header`,{className:`settings-panel-header`,children:(0,V.jsx)(`h3`,{children:A(`settings.nav.appearance`)})}),(0,V.jsxs)(`div`,{className:`settings-appearance-group`,children:[(0,V.jsx)(`h4`,{className:`settings-section-heading`,children:A(`settings.appearance.theme`)}),(0,V.jsxs)(`fieldset`,{className:`settings-theme-options`,"aria-label":A(`settings.appearance.theme`),children:[(0,V.jsx)(Z,{appearance:`system`,selected:e===`system`,onSelect:o}),(0,V.jsx)(Z,{appearance:`light`,selected:e===`light`,onSelect:o}),(0,V.jsx)(Z,{appearance:`dark`,selected:e===`dark`,onSelect:o})]})]}),(0,V.jsxs)(`div`,{className:`settings-appearance-group`,children:[(0,V.jsx)(`h4`,{className:`settings-section-heading`,children:A(`settings.appearance.workspace`)}),(0,V.jsxs)(`div`,{className:`settings-chat-layout-row`,children:[(0,V.jsx)(`span`,{className:`settings-chat-layout-label`,children:A(`settings.appearance.chatPosition`)}),(0,V.jsx)(z,{className:`settings-chat-layout-control`,label:A(`settings.appearance.chatPositionLabel`),options:Ze,value:n,onChange:s})]}),(0,V.jsxs)(`div`,{className:`settings-chat-layout-row`,children:[(0,V.jsx)(`span`,{className:`settings-chat-layout-label`,children:A(`settings.appearance.language`)}),(0,V.jsx)(z,{className:`settings-chat-layout-control`,label:A(`settings.appearance.languageLabel`),options:Qe,value:i,onChange:c})]})]})]})}function Z({appearance:e,selected:t,onSelect:n}){let r=A(`settings.appearance.${e}`);return(0,V.jsxs)(`button`,{className:`settings-theme-option is-${e}${t?` is-selected`:``}`,type:`button`,"aria-pressed":t,onClick:()=>n(e),children:[(0,V.jsx)(it,{appearance:e}),(0,V.jsxs)(`span`,{className:`settings-theme-option-label`,children:[(0,V.jsx)(`span`,{children:r}),t?(0,V.jsx)(D,{size:16,"aria-hidden":`true`}):null]})]})}function it({appearance:e}){return e===`system`?(0,V.jsxs)(`span`,{className:`settings-theme-preview is-system`,"aria-hidden":`true`,children:[(0,V.jsxs)(`span`,{className:`settings-theme-system-layer`,children:[(0,V.jsx)(`span`,{className:`settings-theme-preview-sidebar`}),(0,V.jsx)(Q,{})]}),(0,V.jsxs)(`span`,{className:`settings-theme-system-layer is-dark`,children:[(0,V.jsx)(`span`,{className:`settings-theme-preview-sidebar`}),(0,V.jsx)(Q,{})]})]}):(0,V.jsxs)(`span`,{className:`settings-theme-preview`,"aria-hidden":`true`,children:[(0,V.jsx)(`span`,{className:`settings-theme-preview-sidebar`}),(0,V.jsx)(Q,{})]})}function Q(){return(0,V.jsxs)(`span`,{className:`settings-theme-preview-content`,children:[(0,V.jsx)(`i`,{}),(0,V.jsx)(`i`,{}),(0,V.jsx)(`i`,{})]})}function at(){let e=re(),[t,n]=(0,B.useState)();return(0,V.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-account-panel`,children:[(0,V.jsx)(`header`,{className:`settings-panel-header`,children:(0,V.jsx)(`h3`,{children:A(`settings.nav.account`)})}),e.state.status===`signed-in`?(0,V.jsxs)(`div`,{className:`settings-account-row`,children:[(0,V.jsxs)(`div`,{className:`settings-account-profile`,children:[(0,V.jsx)(he,{className:`settings-account-avatar`,name:e.state.user.name,avatarUrl:e.state.user.avatarUrl}),(0,V.jsxs)(`span`,{className:`settings-account-copy`,children:[(0,V.jsx)(`small`,{children:A(`settings.account.signedInAs`)}),(0,V.jsx)(`strong`,{children:e.state.user.name}),e.state.user.email?(0,V.jsx)(`span`,{children:e.state.user.email}):null]})]}),(0,V.jsx)(`button`,{className:`settings-danger-button`,type:`button`,onClick:()=>void e.signOut().catch(e=>n($(e))),children:A(`common.signOut`)})]}):(0,V.jsx)(`button`,{className:`settings-primary-button`,type:`button`,onClick:e.openSignIn,children:A(`common.signIn`)}),t?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:t}):null]})}function ot({onOpenNetwork:e,onOpenOnboarding:t}){let[n,r]=(0,B.useState)(null),[i,a]=(0,B.useState)(!1),o=window.ohMyGameDesktop?.updates;(0,B.useEffect)(()=>{if(!o)return;let e=!1;o.state().then(t=>{e||r(t)}).catch(()=>void 0);let t=o.onState(r);return()=>{e=!0,t()}},[o]);let s=n?.status,c=s?.type===`up-to-date`?A(`settings.about.upToDate`):s?.type===`checking`?A(`settings.about.checking`):s?.type===`available`?A(`settings.about.available`,{version:s.version}):s?.type===`downloading`?A(`settings.about.downloading`,{percent:s.percent}):s?.type===`ready`?A(`settings.about.ready`,{version:s.version}):s?.type===`installing`?A(`settings.about.installing`):s?.type===`error`?s.title:null,l=()=>{s?.type===`error`&&o&&(s.retry===`download`?o.download():s.retry===`install`?o.install():o.check())},u=async()=>{s?.type===`error`&&(await navigator.clipboard.writeText([`OhMyGame ${n?.currentVersion??`0.0.0-beta.4.15`}`,`Update ${s.phase}/${s.code}`,s.detail].join(`
`)),a(!0),window.setTimeout(()=>a(!1),2e3))};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`section`,{className:`settings-panel settings-overview-panel`,children:[(0,V.jsx)(`header`,{className:`settings-panel-header`,children:(0,V.jsx)(`h3`,{children:A(`settings.nav.about`)})}),(0,V.jsxs)(`div`,{className:`settings-about-summary`,children:[(0,V.jsxs)(`div`,{className:`settings-about-identity`,children:[(0,V.jsx)(`img`,{className:`settings-about-logo`,src:I,alt:``}),(0,V.jsxs)(`div`,{className:`settings-about-copy`,children:[(0,V.jsxs)(`div`,{className:`settings-about-product`,children:[(0,V.jsx)(`strong`,{children:`OhMyGame`}),(0,V.jsxs)(`span`,{children:[`v`,n?.currentVersion??`0.0.0-beta.4.15`]})]}),o&&c?(0,V.jsx)(`p`,{className:`settings-about-status`,role:`status`,children:c}):null]})]}),o&&s?.type!==`downloading`&&s?.type!==`installing`?(0,V.jsx)(`div`,{className:`settings-about-actions`,children:s?.type===`available`?(0,V.jsx)(`button`,{className:`settings-primary-button`,type:`button`,onClick:()=>void o.download(),children:A(`settings.about.download`)}):s?.type===`ready`?(0,V.jsx)(`button`,{className:`settings-primary-button`,type:`button`,onClick:()=>void o.install(),children:A(`settings.about.restart`)}):s?.type===`error`?(0,V.jsx)(`button`,{className:`settings-primary-button`,type:`button`,onClick:l,children:A(`common.tryAgain`)}):(0,V.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,disabled:s?.type===`checking`,onClick:()=>void o.check(),children:A(`settings.about.check`)})}):null]}),s?.type===`error`?(0,V.jsxs)(`div`,{className:`settings-update-error`,role:`alert`,children:[(0,V.jsx)(`p`,{children:s.message}),s.dataSafe?(0,V.jsx)(`p`,{className:`settings-update-data-safe`,children:A(`settings.about.dataSafe`)}):null,(0,V.jsxs)(`details`,{children:[(0,V.jsx)(`summary`,{children:A(`common.technicalDetails`)}),(0,V.jsx)(`code`,{children:s.detail})]}),(0,V.jsxs)(`div`,{className:`settings-about-actions`,children:[s.code===`network`?(0,V.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,onClick:e,children:A(`settings.about.networkSettings`)}):null,(0,V.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,onClick:()=>void u(),children:A(i?`common.copied`:`common.copyDetails`)})]})]}):null,(0,V.jsxs)(`nav`,{className:`settings-about-links`,"aria-label":A(`settings.about.projectLinks`),children:[(0,V.jsx)(`a`,{href:`https://github.com/WhiteTowerAI/ohmygame`,target:`_blank`,rel:`noreferrer`,children:`GitHub`}),(0,V.jsx)(`a`,{href:`https://ohmygame.ai`,target:`_blank`,rel:`noreferrer`,children:A(`settings.about.website`)}),(0,V.jsx)(`a`,{href:`https://github.com/WhiteTowerAI/ohmygame/issues`,target:`_blank`,rel:`noreferrer`,children:A(`settings.about.reportIssue`)})]}),t?(0,V.jsx)(`div`,{children:(0,V.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,onClick:t,children:A(`onboarding.reopen`)})}):null]}),(0,V.jsx)(st,{}),(0,V.jsx)(Ye,{currentVersion:n?.currentVersion??`0.0.0-beta.4.15`,availableRelease:n?.availableRelease})]})}function st(){let[e,t]=(0,B.useState)(!1),[n,r]=(0,B.useState)(),i=window.ohMyGameDesktop?.openLogsDirectory,a=async()=>{r(void 0);try{await i?.()}catch(e){r(A(`settings.diagnostics.openLogsFailed`,{message:$(e)}))}},o=async()=>{t(!0),r(void 0);try{let{blob:e,fileName:t}=await E(),n=URL.createObjectURL(e),r=window.document.createElement(`a`);r.href=n,r.download=t,r.click(),window.setTimeout(()=>URL.revokeObjectURL(n),0)}catch(e){r(A(`settings.diagnostics.exportFailed`,{message:$(e)}))}finally{t(!1)}};return(0,V.jsxs)(`section`,{className:`settings-panel settings-overview-panel settings-diagnostics-panel`,children:[(0,V.jsx)(`header`,{className:`settings-panel-header`,children:(0,V.jsx)(`h3`,{children:A(`settings.diagnostics.title`)})}),(0,V.jsx)(`p`,{children:A(`settings.diagnostics.description`)}),(0,V.jsxs)(`div`,{className:`settings-diagnostics-actions`,children:[(0,V.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,disabled:e,onClick:()=>void o(),children:A(e?`settings.diagnostics.exporting`:`settings.diagnostics.export`)}),i?(0,V.jsx)(`button`,{className:`settings-secondary-button`,type:`button`,onClick:()=>void a(),children:A(`settings.diagnostics.openLogs`)}):null]}),n?(0,V.jsx)(`p`,{className:`settings-error`,role:`alert`,children:n}):null]})}function $(e){return e instanceof Error?e.message:String(e)}export{et as SettingsPage};