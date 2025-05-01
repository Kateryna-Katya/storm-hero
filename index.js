/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelectorAll(".faq-acc-el-trigger").forEach(c=>{c.addEventListener("click",()=>{const r=c.closest(".faq-acc-el"),o=r.querySelector(".faq-acc-el-descr-frame"),s=c.querySelector("svg"),e=r.classList.contains("open"),t=`
            <path d="M3.27197 16.0004L15.9999 16.0004M15.9999 16.0004V28.7283M15.9999 16.0004L28.7278 16.0004M15.9999 16.0004V3.27246" 
            stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        `,n=`
            <path d="M7 7L16 16M16 16L7 25M16 16L25 25M16 16L25 7" 
            stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        `;e?(r.classList.remove("open"),o.style.maxHeight="0",s.innerHTML=t):(r.classList.add("open"),o.style.maxHeight=o.scrollHeight+"px",s.innerHTML=n)})});
//# sourceMappingURL=index.js.map
