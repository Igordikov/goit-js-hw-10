import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as g,f as y}from"./assets/vendor-e76d23d4.js";const r=document.querySelector("[data-start]"),a=document.querySelector("#datetime-picker"),l={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};r.disabled=!0;let c=!1,d,h;r.addEventListener("click",()=>{c=!0,r.disabled=!0,a.disabled=!0,h=setInterval(()=>{const e=Date.now(),n=d-e,t=S(n);p(t)},1e3)});let u=!1;function S(e,n=null){let t=Math.floor(e/1e3),o=Math.floor(t/60)%60,s=Math.floor(t/3600)%24,i=Math.floor(t/86400);return t%=60,o%=60,s%=24,d<Date.now()?(u||(g.error({title:"Помилка",message:"Please choose a date in the future",position:"topRight",onClosing:function(){a.disabled=!1,r.disabled=!1,c=!1}}),u=!0),a.value="",n&&n.stopPropagation(),{d:0,h:0,m:0,s:0}):(u=!1,{d:i,h:s,m:o,s:t})}function T(){if(!c)return;const e=Date.now(),n=d-e;if(n<=0){clearInterval(h),c=!1,a.disabled=!1,r.disabled=!1;return}const t=S(n),o=p(t);console.log(o)}y(a,{enableTime:!0,time_24hr:!0,onClose:e=>{e.length>0&&(d=e[0].getTime()),r.disabled=!1,requestAnimationFrame(T)}});function p({d:e,h:n,m:t,s:o}){const s=e.toString().padStart(2,"0"),i=n.toString().padStart(2,"0"),f=t.toString().padStart(2,"0"),m=o.toString().padStart(2,"0");return l.days.textContent=s,l.hours.textContent=i,l.minutes.textContent=f,l.seconds.textContent=m,`${s}:${i}:${f}:${m}`}
//# sourceMappingURL=commonHelpers.js.map