const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body;let a=null;function n(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,a=setInterval(n,1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.58e35119.js.map