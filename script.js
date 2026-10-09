/* ===== Home page ===== */
const CONTACT_BG=""; // optional real photo, e.g. "images/contact-bg.jpg" (replaces the illustration)
const HERO_TECH=["HTML","CSS","JavaScript","React.js","Next.js","Bootstrap"];
const CAPS=[["code","Frontend Development",["HTML","CSS","JavaScript","React.js","Next.js","Bootstrap"]],["pen","Design",["Canva","Adobe","Wireframing","UI/UX Design"]],["gear","Tools",["Git","GitHub","VS Code","DevTools"]],["laptop","Programming",["C++","Python"]]];
// ring 0=inner, 1=middle, 2=outer
const TOOLS=[
{name:"React.js",badge:"</>",color:"#61dafb",desc:"Component-based UI",ring:0},{name:"Git",badge:"Git",color:"#f1502f",desc:"Version control",ring:0},
{name:"GitHub",badge:"GH",color:"#ffffff",desc:"Collaboration & hosting",ring:0},{name:"VS Code",badge:"VS",color:"#3b9cff",desc:"Code editor",ring:0},
{name:"HTML",badge:"5",color:"#e44d26",desc:"Semantic structure",ring:1},{name:"CSS",badge:"3",color:"#2d9cdb",desc:"Layout and styling",ring:1},
{name:"JavaScript",badge:"JS",color:"#f7df1e",desc:"Interactivity",ring:1},{name:"Next.js",badge:"N",color:"#ffffff",desc:"React framework",ring:1},
{name:"Bootstrap",badge:"B",color:"#8a5cf6",desc:"Responsive components",ring:1},{name:"DevTools",badge:"DT",color:"#4caf50",desc:"Debugging & testing",ring:2},
{name:"C++",badge:"C+",color:"#5c9ee6",desc:"Programming",ring:2},{name:"Python",badge:"Py",color:"#ffd43b",desc:"Programming",ring:2},
{name:"Canva",badge:"Ca",color:"#19c4d6",desc:"Graphic design",ring:2},{name:"Adobe",badge:"Ai",color:"#ff4d4d",desc:"Design suite",ring:2}];
const RINGS=[{rx:22,ry:19,v:.05},{rx:36,ry:28,v:-.038},{rx:46,ry:40,v:.03}];
const ICON={"React.js":"react","Git":"git","GitHub":"github","VS Code":"vscode","HTML":"html5","CSS":"css3","JavaScript":"javascript","Next.js":"nextjs","Bootstrap":"bootstrap","DevTools":"chrome","C++":"cplusplus","Python":"python","Canva":"canva","Adobe":"adobe"};
const JOBS=[
{role:"Frontend Web Developer",org:"MagentoSoftTech",date:"May 2025 – Jul 2025",icon:{src:"html5"},chips:[{src:"html5"},{src:"css3"},{src:"javascript"},{src:"react"},{src:"nextjs"},{src:"git"},{src:"github-dark"}],pts:["Developed responsive web interfaces using HTML, CSS, JavaScript, React.js, and Next.js.","Built mobile-first layouts using Media Queries, Flexbox, and CSS Grid.","Managed version control and collaboration using Git and GitHub.","Debugged and tested layouts across browsers using DevTools.","Implemented reusable UI components with CSS animations and transitions."]},
{role:"Freelance Bidder",org:"WebExert",date:"Nov 2024 – Mar 2025",icon:{ic:"handshake"},chips:[{ic:"file"},{ic:"chat"},{ic:"send"}],pts:["Wrote project proposals and communicated directly with international clients.","Gathered client requirements and translated them into actionable development tasks."]},
{role:"Graphic Designer",org:"Freelance / Remote",date:"2022 – Present",icon:{ic:"pentool"},chips:[{src:"canva"},{src:"adobe"}],pts:["Designed branding materials including posters, CVs, thumbnails, and digital banners using Canva and Adobe tools."]}];
const NO_PRICE_MSG="Every project is unique. Pricing depends on your specific requirements, project scope, and deliverables. Contact me to discuss your project and receive a customized quotation.";
const SERVICES=[
 {
  "t": "Responsive Websites",
  "d": "Fast, responsive websites built for every screen.",
  "ic": "devices",
  "intro": "Clean, modern websites that look and work great on phones, tablets and desktops. Built with semantic HTML, modern CSS, JavaScript, React.js and Next.js, and tested across browsers.",
  "items": [
   "Mobile-first responsive layouts",
   "Multi-page website structure and navigation",
   "Reusable UI components in HTML, CSS and JavaScript, or React.js and Next.js",
   "Cross-browser and device testing",
   "Performance-minded, optimised images",
   "Basic on-page SEO and accessibility"
  ]
 },
 {
  "t": "Landing Pages",
  "d": "Conversion-focused pages with clear visual hierarchy.",
  "ic": "layout",
  "intro": "Focused single pages designed to turn visitors into enquiries, sign-ups or sales, with a clear message and one obvious next step.",
  "items": [
   "Conversion-focused layout and copy structure",
   "Strong hero section and call-to-action",
   "Sections for benefits, proof and FAQs",
   "Contact or lead-capture form integration",
   "Fast, mobile-friendly build using HTML, CSS and JavaScript, React.js or Next.js",
   "Light animations and polished details"
  ]
 },
 {
  "t": "UI Design",
  "d": "Clean, intuitive interfaces with thoughtful interactions.",
  "ic": "brush",
  "intro": "Interface design that is easy to understand and pleasant to use, from first wireframe to a polished, developer-ready layout.",
  "items": [
   "Wireframes and screen layouts",
   "Colour, typography and spacing system",
   "Reusable component styles",
   "Desktop and mobile versions",
   "Interaction and hover-state details",
   "Design files prepared for development"
  ]
 },
 {
  "t": "Website Redesign",
  "d": "Modernize outdated websites for better usability.",
  "ic": "refresh",
  "intro": "Give an existing website a fresh look and a better user experience, while keeping what already works for your brand and audience.",
  "items": [
   "Review of the current website and its issues",
   "Updated visual design and layout",
   "Improved navigation and user flow",
   "Mobile responsiveness fixes",
   "Faster loading and cleaner code, rebuilt with React.js or Next.js when needed",
   "Content and structure improvements"
  ]
 },
 {
  "t": "Graphic Design",
  "d": "Visual assets that stay consistent with your brand.",
  "ic": "image",
  "intro": "Eye-catching visuals for your brand and social channels, designed in Canva and Adobe tools to stay consistent everywhere you appear.",
  "items": [
   "Logos and branding materials",
   "Social media posts and campaign creatives",
   "Posters, banners and advertisements",
   "YouTube thumbnails",
   "CVs and print-ready designs",
   "Source files and export-ready formats"
  ]
 },
 {
  "t": "Business Ideas & Brand Development",
  "d": "From idea to brand: concept, identity and launch plan.",
  "ic": "bulb",
  "biz": 1,
  "intro": "Have a business idea but not sure where to start? I help you shape the concept, define your audience and stand-out value, and build a brand and launch plan around it.",
  "items": [
   "Business concept and positioning",
   "Audience and competitor insights",
   "Brand name, logo and visual identity",
   "Marketing and launch direction",
   "Social media and advertising creatives",
   "Clear, practical next steps"
  ],
  "note": "Final pricing depends on project scope and the deliverables you select. Website development and extensive research may require a separate quotation.",
  "pkgs": [
   {
    "n": "Idea Starter",
    "price": "PKR 3,000–5,000",
    "items": [
     "Business concept development",
     "Target audience identification",
     "Unique selling proposition (USP)",
     "Basic competitor research",
     "Initial business model outline",
     "Basic launch roadmap"
    ]
   },
   {
    "n": "Brand Launch",
    "price": "PKR 8,000–15,000",
    "items": [
     "Business concept refinement",
     "Brand name suggestions",
     "Logo design and visual identity",
     "Brand colors and typography",
     "Brand identity direction",
     "Selected social media or advertising creatives",
     "Basic marketing strategy"
    ]
   },
   {
    "n": "Complete Business Blueprint",
    "price": "Starting from PKR 20,000",
    "items": [
     "Business concept and positioning",
     "Target audience and market research",
     "Competitor analysis",
     "Brand identity and design direction",
     "Website concept or development plan",
     "Product and pricing strategy",
     "Marketing and customer acquisition plan",
     "Estimated startup budget with assumptions",
     "30/60/90-day launch roadmap",
     "Recommended next steps"
    ]
   }
  ]
 }
];

const leaf=()=>{const L=(x,y,r)=>`<path transform="rotate(${r} ${x} ${y})" d="M${x} ${y}c-7-9-7-22 0-34 7 12 7 25 0 34zM${x} ${y}v-30"/>`;
return `<svg viewBox="0 0 80 180" fill="none" stroke="#C99A91" stroke-width="1" stroke-linecap="round" aria-hidden="true"><path d="M40 178C38 130 44 80 52 20"/>${L(41,150,-40)+L(42,128,45)+L(44,104,-38)+L(46,82,42)+L(49,58,-34)+L(51,38,36)+L(52,20,0)}</svg>`};

/* ===== Render content ===== */
document.querySelectorAll("[data-leaf]").forEach(e=>e.innerHTML=leaf());
$("#heroTech").innerHTML=HERO_TECH.map(t=>`<li>${t}</li>`).join("");
$("#caps").innerHTML=CAPS.map(([i,t,d])=>`<li><span class="cap-ic">${icon(i)}</span><div class="cap-body"><h3>${t}</h3><ul class="skills">${d.map(x=>`<li>${x}</li>`).join("")}</ul></div></li>`).join("");
const jm=o=>o.src?`<img src="images/icons/${o.src}.svg" alt="">`:icon(o.ic);
$("#jobs").innerHTML=JOBS.map((j,i)=>`<li class="job reveal"><span class="node" aria-hidden="true"></span><div class="job-card"><div class="job-ic">${jm(j.icon)}</div>
<div class="job-main"><span class="job-n">0${i+1}.</span><h3>${j.role}</h3><p class="org">${j.org}</p><p class="date">${icon("calendar")} ${j.date}</p><div class="chips">${j.chips.map(c=>`<span class="chip">${jm(c)}</span>`).join("")}</div></div>
<ul class="job-pts">${j.pts.map(p=>`<li>${p}</li>`).join("")}</ul></div></li>`).join("");
$("#svcGrid").innerHTML=SERVICES.map((v,i)=>`<li class="svc-card reveal" data-svc="${i}" role="button" tabindex="0" aria-haspopup="dialog" aria-label="${v.t}: view details"><span class="svc-ic">${icon(v.ic)}</span><h3>${v.t}</h3><p>${v.d}</p></li>`).join("");
if(CONTACT_BG){const cb=$("#contactBg");cb.classList.add("photo");cb.style.backgroundImage=`url(${CONTACT_BG})`}

/* ===== Active section dot + reveal ===== */
const secObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll("[data-nav]").forEach(a=>a.classList.toggle("on",a.dataset.nav===e.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
["home","about","projects","skills","experience","contact"].forEach(id=>secObs.observe($("#"+id)));


/* ===== Tools orbit ===== */
const orbit=$("#orbit"),center=$("#orbitCenter");
$("#particles").innerHTML=[["o1","34s",0],["o1","34s",-17],["o2","26s",-5],["o2","26s",-18],["o3","20s",-8]].map(([p,d,b])=>
`<circle r="1" fill="#E8A99B" filter="url(#g)"><animateMotion dur="${d}" begin="${b}s" repeatCount="indefinite"><mpath href="#${p}"/></animateMotion></circle><circle r=".4" fill="#ffd9d0"><animateMotion dur="${d}" begin="${b}s" repeatCount="indefinite"><mpath href="#${p}"/></animateMotion></circle>`).join("");
const counts=[0,0,0];TOOLS.forEach(t=>counts[t.ring]++);const seen=[0,0,0];
const btns=TOOLS.map(t=>{t.k=seen[t.ring]++;const b=document.createElement("button");b.className="tool";b.type="button";b.setAttribute("aria-label",`${t.name}: ${t.desc}`);b.setAttribute("aria-pressed","false");
b.innerHTML=`<img src="images/icons/${ICON[t.name]}.svg" alt="" draggable="false"><span>${t.name}</span>`;orbit.appendChild(b);return b});
let time=0,paused=false,active=null;
const place=()=>TOOLS.forEach((t,i)=>{const r=RINGS[t.ring],a=(t.k/counts[t.ring])*Math.PI*2+time*r.v*Math.PI*2+t.ring*.6;btns[i].style.left=50+r.rx*Math.cos(a)+"%";btns[i].style.top=50+r.ry*Math.sin(a)+"%"});
place();
btns.forEach((b,i)=>{b.addEventListener("mouseenter",()=>paused=true);b.addEventListener("mouseleave",()=>paused=false);
b.addEventListener("click",()=>{active=active===i?null:i;btns.forEach((x,j)=>{x.classList.toggle("on",j===active);x.setAttribute("aria-pressed",j===active)});orbit.classList.toggle("has-active",active!==null);
$("#tkName").textContent=active===null?"My Toolkit":TOOLS[i].name;$("#tkDesc").textContent=active===null?"":TOOLS[i].desc;orbit.classList.toggle("has-active",active!==null)})});
let last=0;
if(!reduce)requestAnimationFrame(function f(now){if(last&&!paused)time+=(now-last)/1000;last=now;if(!paused)place();requestAnimationFrame(f)});

/* ===== Hero typing effect ===== */
(function(){
const hero=$("#home");
const seq=[[".hello",70],["h1",95],[".role",42]].map(([s,sp])=>({el:$(s,hero),sp}));
if(reduce){hero.classList.add("typed");return}
seq.forEach(o=>{o.text=o.el.textContent.replace(/\s+/g," ").trim();o.el.setAttribute("aria-label",o.text);
o.el.innerHTML=`<span class="t-on" aria-hidden="true"></span><span class="t-off" aria-hidden="true">${o.text}</span>`});
let i=0;
const run=()=>{if(i>=seq.length){hero.classList.add("typed");setTimeout(()=>seq[seq.length-1].el.classList.remove("typing"),1800);return}
const o=seq[i],on=$(".t-on",o.el),off=$(".t-off",o.el);o.el.classList.add("typing");let n=0;
const tick=()=>{n++;on.textContent=o.text.slice(0,n);off.textContent=o.text.slice(n);
if(n<o.text.length)setTimeout(tick,o.sp);else{if(i<seq.length-1)o.el.classList.remove("typing");i++;setTimeout(run,280)}};
setTimeout(tick,o.sp)};
setTimeout(run,350);
})();

/* ===== Experience timeline: line fills + dot lights up while scrolling ===== */
(function(){
const list=$("#jobs"),jobs=[...list.querySelectorAll(".job")],nodes=jobs.map(j=>$(".node",j));
let ticking=false;
const update=()=>{ticking=false;
const mid=innerHeight*.5,lr=list.getBoundingClientRect();
list.style.setProperty("--prog",Math.max(0,Math.min(mid-lr.top-24,lr.height-48))+"px");
let last=-1;
nodes.forEach((n,i)=>{const r=n.getBoundingClientRect();if(r.top+r.height/2<=mid)last=i});
nodes.forEach((n,i)=>{n.classList.toggle("reached",i<=last);n.classList.toggle("lit",i===last);jobs[i].classList.toggle("lit",i===last)})};
const req=()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}};
addEventListener("scroll",req,{passive:true});addEventListener("resize",req);update();
})();


/* ===== Featured projects (a few web + a few designs; the rest are on projects.html) ===== */
const FEAT=ALL.filter(p=>p.featured);
$("#projGrid").innerHTML=FEAT.map((p,i)=>cardHTML(p,i+1)).join("");
$("#projCats").innerHTML=CATS.map(c=>`<li><a href="projects.html#${c.id}">${c.name}</a></li>`).join("");
$("#projCount").textContent=ALL.length;
observeReveals();applyHover();


/* ===== Service detail view (reuses the lightbox overlay) ===== */
const svcModal=$("#svcModal"),svcBody=$("#svcBody");let svcOpener=null;
$("#svcClose").innerHTML=icon("x");
const esc=t=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const list=a=>`<ul class="svc-list">${a.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
const svcHTML=(v,i)=>{
let h=`<span class="svc-ic">${icon(v.ic)}</span><h3 id="svcTitle">${v.t}</h3><p class="svc-intro">${v.intro}</p>
<h4>What you get</h4>${list(v.items)}`;
if(v.biz){
h+=`<h4>Packages</h4><div class="pkg-grid">${v.pkgs.map((p,k)=>`<div class="pkg"><span class="pkg-n">Package ${k+1}</span><h5>${p.n}</h5><p class="pkg-price">${p.price}</p>${list(p.items)}<button type="button" class="btn btn-fill" data-pkg="${k}">Choose This Package ${icon("arrow")}</button></div>`).join("")}</div>
<p class="svc-note">${v.note}</p>`}
else h+=`<div class="svc-quote"><p>${NO_PRICE_MSG}</p><button type="button" class="btn btn-fill" data-discuss="${i}">Discuss Your Project ${icon("arrow")}</button></div>`;
return h};
const openSvc=(i,el)=>{svcOpener=el;svcBody.innerHTML=svcHTML(SERVICES[i],i);svcModal.hidden=false;document.body.style.overflow="hidden";$(".svc-panel",svcModal).scrollTop=0;$("#svcClose").focus()};
const closeSvc=()=>{svcModal.hidden=true;document.body.style.overflow="";if(svcOpener)svcOpener.focus()};
$("#svcGrid").addEventListener("click",e=>{const c=e.target.closest("[data-svc]");if(c)openSvc(+c.dataset.svc,c)});
$("#svcGrid").addEventListener("keydown",e=>{const c=e.target.closest("[data-svc]");if(c&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openSvc(+c.dataset.svc,c)}});
$("#svcClose").onclick=closeSvc;
svcModal.addEventListener("click",e=>{if(e.target===svcModal)closeSvc()});
addEventListener("keydown",e=>{if(!svcModal.hidden&&e.key==="Escape")closeSvc()});

/* ===== Hand the chosen package / service over to the contact section ===== */
const contactMail=$("#contact [data-link=email]"),chosen=$("#chosenNote"),chosenTxt=$("#chosenTxt");
const setInquiry=(label,subject,body)=>{
chosenTxt.textContent=label;chosen.hidden=false;
contactMail.href=`${LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
svcModal.hidden=true;document.body.style.overflow="";
$("#contact").scrollIntoView({behavior:reduce?"auto":"smooth"})};
$("#chosenClear").onclick=()=>{chosen.hidden=true;contactMail.href=LINKS.email};
svcBody.addEventListener("click",e=>{
const pk=e.target.closest("[data-pkg]"),ds=e.target.closest("[data-discuss]");
if(pk){const v=SERVICES.find(x=>x.biz),p=v.pkgs[+pk.dataset.pkg];
setInquiry(`${p.n} package · ${v.t}`,`Package enquiry: ${p.n} (${v.t})`,`Hi Sundas,\n\nI'm interested in the "${p.n}" package under ${v.t}.\n\nAbout my idea/business:\n\n`)}
if(ds){const v=SERVICES[+ds.dataset.discuss];
setInquiry(`${v.t} · project discussion`,`Project enquiry: ${v.t}`,`Hi Sundas,\n\nI'd like to discuss a ${v.t} project.\n\nProject details:\n\n`)}});
