"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["63623"],{40801:function(e,l,t){t.r(l),t.d(l,{metadata:()=>n,contentTitle:()=>d,default:()=>m,assets:()=>u,toc:()=>v,frontMatter:()=>c});var n=JSON.parse('{"id":"toc/toc-test-good","title":"toc-test-good","description":"Test the TOC behavior of a real-world MD doc with valid headings","source":"@site/_dogfooding/_docs tests/toc/toc-test-good.mdx","sourceDirName":"toc","slug":"/toc/toc-test-good","permalink":"/tests/docs/toc/toc-test-good","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1732609287000,"frontMatter":{"toc_min_heading_level":2,"toc_max_heading_level":6},"sidebar":"sidebar","previous":{"title":"toc-test-bad","permalink":"/tests/docs/toc/toc-test-bad"}}'),s=t("24246"),o=t("80980"),a=t("14522"),i=t("78596"),r=t("57589");let c={toc_min_heading_level:2,toc_max_heading_level:6},d=void 0,u={},v=[{value:"lvl 2",id:"lvl-2",level:2},{value:"lvl 3",id:"lvl-3",level:3},{value:"lvl 4",id:"lvl-4",level:4},{value:"lvl 5",id:"lvl-5",level:5},{value:"lvl 6",id:"lvl-6",level:6},{value:"lvl 2",id:"lvl-2-1",level:2},{value:"lvl 3",id:"lvl-3-1",level:3},{value:"lvl 4",id:"lvl-4-1",level:4},{value:"lvl 5",id:"lvl-5-1",level:5},{value:"lvl 6",id:"lvl-6-1",level:6}];function h(e){let l={h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.p,{children:"Test the TOC behavior of a real-world MD doc with valid headings"}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.h2,{id:"lvl-2",children:"lvl 2"}),"\n",(0,s.jsx)(l.h3,{id:"lvl-3",children:"lvl 3"}),"\n",(0,s.jsx)(l.h4,{id:"lvl-4",children:"lvl 4"}),"\n",(0,s.jsx)(l.h5,{id:"lvl-5",children:"lvl 5"}),"\n",(0,s.jsx)(l.h6,{id:"lvl-6",children:"lvl 6"}),"\n",(0,s.jsx)(l.h2,{id:"lvl-2-1",children:"lvl 2"}),"\n",(0,s.jsx)(l.h3,{id:"lvl-3-1",children:"lvl 3"}),"\n",(0,s.jsx)(l.h4,{id:"lvl-4-1",children:"lvl 4"}),"\n",(0,s.jsx)(l.h5,{id:"lvl-5-1",children:"lvl 5"}),"\n",(0,s.jsx)(l.h6,{id:"lvl-6-1",children:"lvl 6"}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.p,{children:"INLINE:"}),"\n","\n","\n",(0,s.jsx)(a.Z,{children:(0,s.jsx)(i.Z,{toc:v,minHeadingLevel:2,maxHeadingLevel:6})}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.p,{children:"COLLAPSIBLE:"}),"\n","\n",(0,s.jsx)(a.Z,{children:(0,s.jsx)(r.Z,{toc:v,minHeadingLevel:2,maxHeadingLevel:6})})]})}function m(e={}){let{wrapper:l}={...(0,o.a)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}m.displayName="MDXContent(_dogfooding/_docs tests/toc/toc-test-good.mdx)"},57589:function(e,l,t){t.d(l,{Z:()=>u});var n=t("24246");t("27378");var s=t("90496"),o=t("97812"),a=t("89477"),i=t("77827");let r={tocCollapsibleButton:"tocCollapsibleButton_IbtT",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Nor3"};function c(e){let{collapsed:l,...t}=e;return(0,n.jsx)("button",{type:"button",...t,className:(0,s.Z)("clean-btn",r.tocCollapsibleButton,!l&&r.tocCollapsibleButtonExpanded,t.className),children:(0,n.jsx)(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let d={tocCollapsible:"tocCollapsible_BEWm",tocCollapsibleContent:"tocCollapsibleContent_FG8F",tocCollapsibleExpanded:"tocCollapsibleExpanded_FzA_"};function u(e){let{toc:l,className:t,minHeadingLevel:i,maxHeadingLevel:r}=e,{collapsed:u,toggleCollapsed:v}=(0,o.u)({initialState:!0});return(0,n.jsxs)("div",{className:(0,s.Z)(d.tocCollapsible,!u&&d.tocCollapsibleExpanded,t),children:[(0,n.jsx)(c,{collapsed:u,onClick:v}),(0,n.jsx)(o.z,{lazy:!0,className:d.tocCollapsibleContent,collapsed:u,children:(0,n.jsx)(a.Z,{toc:l,minHeadingLevel:i,maxHeadingLevel:r})})]})}},78596:function(e,l,t){t.d(l,{Z:()=>a});var n=t("24246");t("27378");var s=t("89477");let o="tableOfContentsInline_2sru";function a(e){let{toc:l,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,n.jsx)("div",{className:o,children:(0,n.jsx)(s.Z,{toc:l,minHeadingLevel:t,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null})})}},89477:function(e,l,t){t.d(l,{Z:()=>c});var n=t("24246"),s=t("27378"),o=t("26378");function a(e){let l=e.getBoundingClientRect();return l.top===l.bottom?a(e.parentNode):l}var i=t("35363");let r=s.memo(function e(l){let{toc:t,className:s,linkClassName:o,isChild:a}=l;return t.length?(0,n.jsx)("ul",{className:a?void 0:s,children:t.map(l=>(0,n.jsxs)("li",{children:[(0,n.jsx)(i.Z,{to:`#${l.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:l.value}}),(0,n.jsx)(e,{isChild:!0,toc:l.children,className:s,linkClassName:o})]},l.id))}):null});function c(e){let{toc:l,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...v}=e,h=(0,o.L)(),m=d??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,p=function(e){let{toc:l,minHeadingLevel:t,maxHeadingLevel:n}=e;return(0,s.useMemo)(()=>(function e(l){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=l;return t.flatMap(l=>{var t;let o=e({toc:l.children,minHeadingLevel:n,maxHeadingLevel:s});return(t=l).level>=n&&t.level<=s?[{...l,children:o}]:o})})({toc:function(e){let l=e.map(e=>({...e,parentIndex:-1,children:[]})),t=Array(7).fill(-1);l.forEach((e,l)=>{let n=t.slice(2,e.level);e.parentIndex=Math.max(...n),t[e.level]=l});let n=[];return l.forEach(e=>{let{parentIndex:t,...s}=e;t>=0?l[t].children.push(s):n.push(s)}),n}(l),minHeadingLevel:t,maxHeadingLevel:n}),[l,t,n])}({toc:l,minHeadingLevel:m,maxHeadingLevel:f});return!function(e){let l=(0,s.useRef)(void 0),t=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:l}}=(0,o.L)();return(0,s.useEffect)(()=>{e.current=l?0:document.querySelector(".navbar").clientHeight},[l]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:n,linkActiveClassName:s,minHeadingLevel:o,maxHeadingLevel:i}=e;function r(){var e;let r=(e=n,Array.from(document.getElementsByClassName(e))),c=function(e,l){let{anchorTopOffset:t}=l,n=e.find(e=>a(e).top>=t);if(n){var s;return(s=a(n)).top>0&&s.bottom<window.innerHeight/2?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:l,maxHeadingLevel:t}=e,n=[];for(let e=l;e<=t;e+=1)n.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),{anchorTopOffset:t.current}),d=r.find(e=>{var l;return c&&c.id===decodeURIComponent((l=e).href.substring(l.href.indexOf("#")+1))});r.forEach(e=>{var t;t=e,e===d?(l.current&&l.current!==t&&l.current.classList.remove(s),t.classList.add(s),l.current=t):t.classList.remove(s)})}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}},[e,t])}((0,s.useMemo)(()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:f}},[i,c,m,f])),(0,n.jsx)(r,{toc:p,className:t,linkClassName:i,...v})}},14522:function(e,l,t){t.d(l,{Z:()=>h});var n=t("24246");t("27378");var s=t("90496");let o="browserWindow_my1Q",a="browserWindowHeader_jXSR",i="buttons_uHc7",r="browserWindowAddressBar_Pd8y",c="dot_giz1",d="browserWindowMenuIcon_Vhuh",u="bar_rrRL",v="browserWindowBody_Idgs";function h(e){let{children:l,minHeight:t,url:h="http://localhost:3000",style:m,bodyStyle:f}=e;return(0,n.jsxs)("div",{className:o,style:{...m,minHeight:t},children:[(0,n.jsxs)("div",{className:a,children:[(0,n.jsxs)("div",{className:i,children:[(0,n.jsx)("span",{className:c,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:c,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:c,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,s.Z)(r,"text--truncate"),children:h}),(0,n.jsx)("div",{className:d,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:u}),(0,n.jsx)("span",{className:u}),(0,n.jsx)("span",{className:u})]})})]}),(0,n.jsx)("div",{className:v,style:f,children:l})]})}},80980:function(e,l,t){t.d(l,{Z:function(){return i},a:function(){return a}});var n=t(27378);let s={},o=n.createContext(s);function a(e){let l=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:l},e.children)}}}]);