/* ===== Shared details & content (edit here) ===== */
const LINKS={linkedin:"https://www.linkedin.com/in/sundasafnan14",whatsapp:"https://wa.me/923128329131",email:"mailto:sudasafnan9@gmail.com"};
const NAV=["Home","About","Projects","Skills","Experience","Contact"];

/* ---------- PROJECT CATEGORIES (order = order on the "All Projects" page) ---------- */
const CATS=[
{id:"web",name:"Web Development"},
{id:"logo",name:"Logo Design"},
{id:"branding",name:"Branding"},
{id:"social",name:"Social Media Posts"},
{id:"banners",name:"Banners"},
{id:"posters",name:"Poster Designs"},
{id:"campaigns",name:"Campaigns"},
{id:"ads",name:"Advertisements"},
{id:"thumbs",name:"Thumbnails"}];

/* ---------- WEB DEVELOPMENT PROJECTS ----------
   featured:1 = also shown on the home page.  url = link opened by the arrow button. */
const WEB=[
{title:"Tranza Elegance",type:"E-commerce website",tech:["HTML","CSS","JavaScript","Bootstrap"],img:"tranza",url:"https://sundasafnan-14.github.io/Trenza-Elegance/",featured:1},
{title:"LegalHelper.pk",type:"Lawyer/Legal Professional Platform",tech:["Next.js","React","TypeScript","Tailwind CSS"],img:"legalhelper",url:"https://legalhelper-pk.vercel.app/",featured:1},
{title:"Rabia's Portfolio",type:"Portfolio Website",tech:["HTML","CSS","JavaScript","Bootstrap"],img:"rabia",url:"https://sundasafnan-14.github.io/Rabia-Portfolio/"},
{title:"Blood Donation Portal \u{1FA78}",type:"Healthcare / Social Impact",tech:["HTML","CSS","JavaScript","Bootstrap"],img:"blood-donation",url:"https://sundasafnan-14.github.io/BloodLife/",featured:1},
{title:"A F S A R \u00C9",type:"Perfume Brand Website",tech:["HTML","CSS","JavaScript","Bootstrap"],img:"afsare",url:"https://sundasafnan-14.github.io/AFSARE/"}];

/* ---------- DESIGN PROJECTS ----------
   slug = file name in images/designs/ (slug.webp = full size, slug-thumb.webp = small preview) */
const DESIGNS=[
{cat:"logo",title:"Afsar\u00E9 Logo",slug:"afsare-logo",w:640,h:640,featured:1},
{cat:"branding",title:"Cream Branding",slug:"cream-branding",w:640,h:800},
{cat:"social",title:"Social Media Design",slug:"social-media",w:640,h:800},
{cat:"social",title:"Bloom Caf\u00E9 Post",slug:"bloom-cafe",w:640,h:800,featured:1},
{cat:"social",title:"Bun & Bite Post",slug:"bun-bite",w:640,h:640},
{cat:"banners",title:"Banner Design",slug:"banner",w:640,h:237},
{cat:"posters",title:"Nexora Poster",slug:"nexora",w:566,h:800},
{cat:"posters",title:"Streetwear Fashion Poster",slug:"streetwear-poster",w:566,h:800,featured:1},
{cat:"campaigns",title:"Sneaker Campaign",slug:"sneaker-campaign",w:640,h:640},
{cat:"ads",title:"Velora Hair Ad",slug:"velora-hair",w:600,h:800},
{cat:"ads",title:"Aurelle Jewellery Ad",slug:"aurelle-jewellery",w:640,h:800},
{cat:"thumbs",title:"Thumbnail Design",slug:"thumbnail",w:640,h:360}];

/* Everything in one list (used by the home page + the All Projects page) */
const WEB_IMG=p=>p.img?`images/web/${p.img}.webp`:"";
const ALL=[
...WEB.map(p=>({...p,cat:"web",kind:"web",image:WEB_IMG(p)})),
...DESIGNS.map(d=>({...d,kind:"design",type:CATS.find(c=>c.id===d.cat).name,thumb:`images/designs/${d.slug}-thumb.webp`,full:`images/designs/${d.slug}.webp`}))];
