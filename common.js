/* ===== Shared code: navigation, footer, icons, cards, hover + reveal effects ===== */
document.documentElement.classList.add("js");
const $=(s,r=document)=>r.querySelector(s);
const ICONS={arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',up:'<path d="M7 7h10v10M7 17 17 7"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7"/>',
github:'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.250-.3-2.500-1-3.500.3-1.150.3-2.350 0-3.500 0 0-1 0-3 1.500a13.400 13.400 0 0 0-8 0C6 2 5 2 5 2c-.3 1.150-.3 2.350 0 3.500A5.400 5.400 0 0 0 4 9c0 3.500 3 5.500 6 5.500-.4.500-.7 1.100-.8 1.700-.2.600-.2 1.200-.2 1.800v4M9 18c-4.500 2-5-2-7-2"/>',
linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',pen:'<path d="M17 3a2.850 2.830 0 1 1 4 4L7.500 20.500 2 22l1.500-5.500Z"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.900 4.900 7 7M17 17l2.100 2.100M2 12h3M19 12h3M4.900 19.100 7 17M17 7l2.100-2.100"/>',
laptop:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',calendar:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/>',send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',handshake:'<path d="m11 17 2 2a1 1 0 1 0 3-3M14 14l2.500 2.500a1 1 0 1 0 3-3l-3.880-3.880a3 3 0 0 0-4.240 0l-.88.88a1 1 0 1 1-3-3l2.810-2.810a5.790 5.790 0 0 1 7.060-.87l.47.28a2 2 0 0 0 1.420.25L21 4M21 3l1 11h-2M3 3 2 14l6.500 6.500a1 1 0 1 0 3-3M3 4h8"/>',pentool:'<path d="M15.700 21.300a1 1 0 0 1-1.400 0l-1.600-1.600a1 1 0 0 1 0-1.400l5.600-5.600a1 1 0 0 1 1.400 0l1.600 1.600a1 1 0 0 1 0 1.400z"/><path d="m18 13-1.400-6.900a1 1 0 0 0-.7-.8L3.200 2a1 1 0 0 0-1.200 1.200L5.300 15.900a1 1 0 0 0 .8.700L13 18"/><path d="m2.300 2.300 7.300 7.300"/><circle cx="11" cy="11" r="2"/>',devices:'<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/>',layout:'<rect width="18" height="16" x="3" y="4" rx="2"/><path d="M3 9h18M7 13h4M7 16.500h10M14 13h3"/>',brush:'<path d="M18.370 2.630 14 7l-1.590-1.590a2 2 0 0 0-2.820 0L8 7l9 9 1.590-1.590a2 2 0 0 0 0-2.820L17 10l4.370-4.370a2.120 2.120 0 1 0-3-3Z"/><path d="M9 8c-2 3-4 3.500-7 4l8 10c2-1 6-5 6-7"/><path d="M14.500 17.500 4.500 15"/>',refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.750 9.750 0 0 1 6.740 2.740L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.750 9.750 0 0 1-6.740-2.740L3 16"/><path d="M8 16H3v5"/>',image:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.090-3.090a2 2 0 0 0-2.830 0L6 21"/>',cart:'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.050 2.050h2l2.660 12.420a2 2 0 0 0 2 1.580h9.780a2 2 0 0 0 1.950-1.570l1.650-7.430H5.120"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',whatsapp:'<path d="M7.900 20A9 9 0 1 0 4 16.100L2 22Z"/><path d="M9 9.500c0 3 2.500 5.500 5.500 5.500l1.500-1.500-2-1-1 .8c-.9-.4-1.800-1.300-2.200-2.200l.8-1-1-2z"/>',bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',prev:'<path d="m15 18-6-6 6-6"/>',next:'<path d="m9 18 6-6-6-6"/>'};
const icon=n=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const IS_HOME=document.body.dataset.page==="home";
const HOME_URL=IS_HOME?"":"index.html";
const catName=id=>CATS.find(c=>c.id===id).name;

/* nav / footer / social */
const socialHTML=`<a aria-label="LinkedIn" href="#" data-link="linkedin" target="_blank" rel="noreferrer">${icon("linkedin")}</a><a aria-label="WhatsApp" href="#" data-link="whatsapp" target="_blank" rel="noreferrer">${icon("whatsapp")}</a><a aria-label="Email" href="#" data-link="email">${icon("mail")}</a>`;
["navSocial","mobileSocial"].forEach(id=>$("#"+id).innerHTML=socialHTML);
const navItems=NAV.map(n=>`<li><a href="${HOME_URL}#${n.toLowerCase()}" data-nav="${n.toLowerCase()}">${n}</a></li>`).join("");
$("#navLinks").innerHTML=navItems;$("#mobileLinks").innerHTML=navItems;
$("#footLinks").innerHTML=NAV.map(n=>`<li><a href="${HOME_URL}#${n.toLowerCase()}">${n}</a></li>`).join("");
document.querySelectorAll("[data-link]").forEach(a=>a.href=LINKS[a.dataset.link]);
document.querySelectorAll("i[data-i]").forEach(e=>e.outerHTML=icon(e.dataset.i));
$("#burger").innerHTML=icon("menu");

/* mobile menu */
const menu=$("#mobileMenu"),burger=$("#burger");
const setMenu=o=>{menu.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.innerHTML=icon(o?"x":"menu")};
burger.addEventListener("click",()=>setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a[data-nav]").forEach(a=>a.addEventListener("click",()=>setMenu(false)));

/* project cards (web projects = big preview + tech pills, designs = preview + category) */
const cardHTML=(p,n)=>{
const isWeb=p.kind==="web";
const href=isWeb?p.url:`projects.html#${p.cat}`;
const ar=href?`<a class="arrow" href="${href}"${isWeb?' target="_blank" rel="noreferrer"':""} aria-label="${isWeb?"Open":"See more in"} ${isWeb?p.title:catName(p.cat)}">${icon("up")}</a>`:`<span class="arrow" aria-hidden="true">${icon("up")}</span>`;
const src=isWeb?p.image:p.thumb;
const dim=isWeb?'width="800" height="380"':`width="${p.w}" height="${p.h}"`;
const media=src?`<img src="${src}" alt="${p.title} preview" ${dim} loading="lazy" decoding="async" data-ph>`:`<b>Image placeholder</b><span>Preview coming soon</span>`;
return `<article class="card reveal"><div class="card-img${isWeb?"":" is-design"}">${media}</div>
<div class="card-row"><div><span class="card-n">${String(n).padStart(2,"0")}</span><div style="display:block"><h3>${p.title}</h3><p>${p.type}</p></div></div>${ar}</div>
${isWeb?`<ul class="pills">${p.tech.map(t=>`<li>${t}</li>`).join("")}</ul>`:""}</article>`};

/* effects */
const revObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");revObs.unobserve(e.target)}}),{threshold:.15});
const observeReveals=()=>document.querySelectorAll(".reveal:not(.in)").forEach(e=>reduce?e.classList.add("in"):revObs.observe(e));
const applyHover=()=>document.querySelectorAll("main h1,main h2,main h3,main p,footer p,.hero-tech li,.pills li,.job-pts li,.skills li,.foot-links a").forEach(el=>{
if(!el.closest(".orbit-center,.lightbox,.ph,.hv"))el.classList.add("hv")});

/* if an image path is wrong, show a clear placeholder instead of a broken image */
document.addEventListener("error",e=>{const t=e.target;if(t.tagName==="IMG"&&t.hasAttribute("data-ph")){const d=document.createElement("div");d.className="ph";d.textContent="Image not found: "+t.getAttribute("src");t.replaceWith(d)}},true);
