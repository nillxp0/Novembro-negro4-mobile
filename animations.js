const progress=document.querySelector(".scroll-progress");
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+"%"}
addEventListener("scroll",updateProgress,{passive:true});updateProgress();
const menuButton=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.setAttribute("aria-label",open?"Fechar menu":"Abrir menu")});
function closeMenu(){nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Abrir menu")}
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});
document.addEventListener("click",e=>{if(nav.classList.contains("open")&&!nav.contains(e.target)&&!menuButton.contains(e.target))closeMenu()});
matchMedia("(min-width:651px)").addEventListener("change",e=>{if(e.matches)closeMenu()});
addEventListener("resize",updateProgress,{passive:true});
if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}else{document.querySelectorAll(".reveal").forEach(el=>el.classList.add("is-visible"))}
