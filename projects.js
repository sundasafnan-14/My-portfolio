/* ===== All Projects page: every project, one section per category ===== */
document.querySelectorAll("[data-nav=projects]").forEach(a=>a.classList.add("on"));

/* design list in page order (used by the popup viewer) */
const DLIST=CATS.flatMap(c=>ALL.filter(p=>p.kind==="design"&&p.cat===c.id));
let nWeb=0;
const body=$("#allBody");
body.innerHTML=CATS.map(c=>{
const items=ALL.filter(p=>p.cat===c.id);if(!items.length)return"";
const inner=c.id==="web"
?`<div class="proj-grid">${items.map(p=>cardHTML(p,++nWeb)).join("")}</div>`
:`<div class="gallery">${items.map(p=>{const i=DLIST.indexOf(p);return `<button class="g reveal" type="button" data-i="${i}" aria-label="Open ${p.title}"><img src="${p.thumb}" alt="${p.title} \u2014 ${c.name}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" data-ph><span class="ov"><b>${p.title}</b><span>${c.name}</span></span></button>`}).join("")}</div>`;
return `<section class="cat" id="${c.id}" data-cat="${c.id}"><div class="cat-head"><h2>${c.name}</h2><span class="cat-count">${items.length} ${items.length>1?"projects":"project"}</span></div>${inner}</section>`}).join("");

/* category filter */
const filter=$("#filter");
filter.innerHTML=[{id:"all",name:"All"},...CATS].map(c=>`<button type="button" role="tab" data-f="${c.id}">${c.name}</button>`).join("");
const apply=id=>{
if(id!=="all"&&!CATS.some(c=>c.id===id))id="all";
filter.querySelectorAll("button").forEach(b=>{const on=b.dataset.f===id;b.classList.toggle("on",on);b.setAttribute("aria-selected",on)});
body.querySelectorAll(".cat").forEach(s=>s.hidden=id!=="all"&&s.dataset.cat!==id);
observeReveals()};
filter.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
history.replaceState(null,"",b.dataset.f==="all"?location.pathname:"#"+b.dataset.f);apply(b.dataset.f);scrollTo({top:0,behavior:reduce?"auto":"smooth"})});
addEventListener("hashchange",()=>apply(location.hash.slice(1)||"all"));
apply(location.hash.slice(1)||"all");

/* design popup viewer (loads the full-size image only when opened) */
const lb=$("#lightbox");let cur=0;
$("#lbClose").innerHTML=icon("x");$("#lbPrev").innerHTML=icon("prev");$("#lbNext").innerHTML=icon("next");
const show=i=>{cur=(i+DLIST.length)%DLIST.length;const d=DLIST[cur];
$("#lbImg").innerHTML=`<img src="${d.full}" alt="${d.title} \u2014 ${catName(d.cat)}" decoding="async">`;
$("#lbTitle").textContent=d.title;$("#lbCat").textContent=catName(d.cat);
const n=DLIST[(cur+1)%DLIST.length];if(n)new Image().src=n.full};
let opener=null;
const openLb=(i,el)=>{opener=el;show(i);lb.hidden=false;document.body.style.overflow="hidden";$("#lbClose").focus()};
const closeLb=()=>{lb.hidden=true;document.body.style.overflow="";if(opener)opener.focus()};
body.addEventListener("click",e=>{const b=e.target.closest(".g");if(b)openLb(+b.dataset.i,b)});
$("#lbClose").onclick=closeLb;$("#lbPrev").onclick=()=>show(cur-1);$("#lbNext").onclick=()=>show(cur+1);
lb.addEventListener("click",e=>{if(e.target===lb)closeLb()});
addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")closeLb();if(e.key==="ArrowRight")show(cur+1);if(e.key==="ArrowLeft")show(cur-1)});

observeReveals();applyHover();
