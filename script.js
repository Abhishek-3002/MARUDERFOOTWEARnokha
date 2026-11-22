const WHATSAPP_NUMBER = "916376004627";
const GENERAL_MESSAGE = "Namaste MARUDER Shoes Store! Mujhe aapki website par shoes pasand aaye hain. Kripya available brands, designs, price, sizes, colours aur delivery details share karein.";
function openWhatsApp(message = GENERAL_MESSAGE) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}
document.querySelectorAll("[data-whatsapp-general]").forEach(link => link.addEventListener("click", e => { e.preventDefault(); openWhatsApp(); }));
const menuToggle=document.getElementById("menuToggle"), nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active")); btn.classList.add("active");
 const f=btn.dataset.filter; document.querySelectorAll(".product-card").forEach(card=>card.hidden=f!=="all"&&!card.dataset.category.split(" ").includes(f));
}));
document.querySelectorAll(".order-icon").forEach(btn=>btn.addEventListener("click",()=>{
 const p=btn.dataset.product; openWhatsApp(`Namaste MARUDER Shoes Store! Mujhe ${p} ke baare mein jankari chahiye. Kripya iska price, available sizes, colours aur delivery details share karein.`);
}));
document.getElementById("year").textContent=new Date().getFullYear();