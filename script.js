const WHATSAPP_NUMBER="916376004627";
const GENERAL_MESSAGE="Namaste MARUDER Shoes Store! Mujhe shoes/chappal ke designs, sizes, prices aur delivery details chahiye.";
function openWhatsApp(message=GENERAL_MESSAGE){window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank","noopener,noreferrer")}
document.querySelectorAll("[data-whatsapp-general]").forEach(link=>link.addEventListener("click",e=>{e.preventDefault();openWhatsApp()}));
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const extraProducts=[
["campus-sport-2","Campus Active Runner","Campus",1299,"shoes","https://www.campusshoes.com/cdn/shop/files/OG-08_OG-08_WHT-L.GRY_2_1200x1200.jpg?v=1757479590"],
["campus-sport-3","Campus Street Flex","Campus",1499,"shoes","https://www.campusshoes.com/cdn/shop/files/CAMP_CLINT_WHT_GRNG8_3_3ff3eec1-906a-4782-958d-c46740344191.jpg?v=1757479645"],
["campus-sport-4","Campus Neo Walk","Campus",1599,"shoes","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"],
["campus-sport-5","Campus Court Classic","Campus",1799,"shoes","https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900"],
["campus-sport-6","Campus Trail Pro","Campus",1899,"shoes","https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900"],
["nike-air-1","Nike Air Style","Nike",5495,"shoes","https://sneak.fi/cdn/shop/files/sneak-nike-dunk-low-grey-fog-jalassa.webp?v=1742683756&width=1080"],
["nike-air-2","Nike Court Vision Style","Nike",4995,"shoes","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900"],
["nike-air-3","Nike Revolution Style 2","Nike",4295,"shoes","https://product-media.cdn.t1.com/product-channel/12476/2025/7/10/3ecc345768b094496d0c603ac8b8e0b8.jpeg"],
["nike-air-4","Nike Street Low","Nike",5995,"shoes","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=900"],
["nike-air-5","Nike Runner Flex","Nike",4595,"shoes","https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900"],
["adidas-run-1","Adidas Runfalcon Style","Adidas",3999,"shoes","https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=900"],
["adidas-run-2","Adidas Grand Court Style","Adidas",4499,"shoes","https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900"],
["adidas-run-3","Adidas Street Lite","Adidas",3499,"shoes","https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=900"],
["adidas-run-4","Adidas Sports Flex","Adidas",5299,"shoes","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"],
["reebok-run-1","Reebok Energen Style","Reebok",3299,"shoes","https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900"],
["reebok-run-2","Reebok Classic Style","Reebok",3999,"shoes","https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900"],
["reebok-run-3","Reebok Walk Ultra","Reebok",2799,"shoes","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900"],
["reebok-run-4","Reebok Sport Lite","Reebok",3599,"shoes","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=900"],
["puma-run-3","Puma Flyer Runner","Puma",3499,"shoes","https://www.manelsanchez.com/uploads/media/images/puma-shuffle-sd-varsity-green-1.jpg"],
["puma-run-4","Puma Smash Style","Puma",3999,"shoes","https://static.ftshp.digital/img/p/1/8/6/3/6/2/5/1863625.jpg"],
["puma-run-5","Puma Flex Street","Puma",2999,"shoes","https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900"],
["puma-run-6","Puma Active Pro","Puma",4299,"shoes","https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=900"],
["daily-run-1","Everyday Sports Sneaker","Sports",1199,"shoes","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"],
["daily-run-2","Classic Daily Sneaker","Sports",1399,"shoes","https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900"],
["chappal-1","Everyday Comfort Sliders","Chappal",499,"chappal","https://images.unsplash.com/photo-1603487742131-4160ec999306?w=900"],
["chappal-2","Soft Cushion Slides","Chappal",599,"chappal","https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=900"],
["chappal-3","Men's Casual Flip-Flops","Chappal",349,"chappal","https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=900"],
["chappal-4","Sporty Slides","Chappal",699,"chappal","https://images.unsplash.com/photo-1603487742131-4160ec999306?w=900"],
["chappal-5","Daily Wear Sandals","Chappal",799,"chappal","https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=900"],
["chappal-6","Comfort Open-Toe Sandals","Chappal",899,"chappal","https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=900"]
];
const grid=document.querySelector(".product-grid");
extraProducts.forEach((p,n)=>{
 const [id,name,brand,price,type,img]=p;
 const card=document.createElement("article");
 card.className="product-card reveal";
 card.dataset.category=(type==="chappal"?"chappal":brand.toLowerCase()+" shoes");
 const sizeOptions=type==="chappal"?["6","7","8","9","10"]:["6","7","8","9","10","11"];
 card.innerHTML='<div class="product-image"><span class="product-tag">'+brand.toUpperCase()+'</span><img src="'+img+'" alt="'+name+'" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900\'"><span class="image-index">'+String(n+7).padStart(2,"0")+' / 36</span></div><div class="product-info"><div class="product-title"><h3>'+name+'</h3><p>'+(type==="chappal"?"Slides · Sandals":"Everyday · Sport")+'</p></div><div class="price-block"><strong>₹'+price.toLocaleString("en-IN")+'</strong><del>Market reference</del></div></div><div class="product-buy"><label>'+(type==="chappal"?"Size":"UK size")+'<select class="size-select" aria-label="Select size"><option value="">Choose size</option>'+sizeOptions.map(s=>'<option>'+s+'</option>').join("")+'</select></label><button class="add-btn" data-id="'+id+'" data-name="'+name+'" data-price="'+price+'">Add to cart <span>＋</span></button></div>';
 grid.appendChild(card);
});
const filters=[...document.querySelectorAll(".filter")];
filters.forEach(btn=>btn.addEventListener("click",()=>{
 filters.forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 const f=btn.dataset.filter;
 document.querySelectorAll(".product-card").forEach(card=>{
  const cats=(card.dataset.category||"").split(" ");
  card.hidden=f!=="all"&&!cats.includes(f);
 });
}));

const drawer=document.getElementById("cartDrawer"),backdrop=document.getElementById("cartBackdrop"),itemsEl=document.getElementById("cartItems"),countEl=document.getElementById("cartCount"),drawerCount=document.getElementById("drawerCount"),subtotalEl=document.getElementById("cartSubtotal"),checkout=document.getElementById("checkoutWhatsApp");
const deliveryForm=document.getElementById("deliveryForm"),citySelect=document.getElementById("deliveryCity"),deliveryStatus=document.getElementById("deliveryStatus"),placeOrder=document.getElementById("placeOrder");
let orderMode="delivery";
const STORE_ADDRESS="Ke Pass, Tehsil Rd, Man Market, SBI ATM Ke Pass, Bus Stand Rd, Nokha, Rajasthan 334803";
const modeButtons=[...document.querySelectorAll("[data-order-mode]")];
modeButtons.forEach(btn=>btn.addEventListener("click",()=>{orderMode=btn.dataset.orderMode;modeButtons.forEach(b=>{const active=b===btn;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active))});document.getElementById("formHeading").textContent=orderMode==="pickup"?"Store pickup details":"Delivery details";document.getElementById("formIntro").textContent=orderMode==="pickup"?"Apni details bharein. Order ready hone par WhatsApp confirmation milega.":"Apna delivery address bharein. Store team WhatsApp par confirm karegi.";if(orderMode==="pickup"){citySelect.value="Nokha";deliveryForm.elements.pincode.value="334803";deliveryStatus.textContent="✓ Store pickup selected. Collect from MARUDER Shoes Store, Nokha. Please wait for confirmation before visiting.";deliveryStatus.className="delivery-status available";placeOrder.disabled=false;}else{citySelect.value="";deliveryForm.elements.pincode.value="";updateDeliveryStatus();}}));
const SERVICE_CITIES=["nokha","bikaner","nagaur","dungargarh","bajju"];
let cart=[];try{cart=JSON.parse(localStorage.getItem("maruderCart")||"[]")}catch{cart=[]}
const money=n=>"₹"+Number(n).toLocaleString("en-IN");
function save(){localStorage.setItem("maruderCart",JSON.stringify(cart));renderCart()}
function openCart(){drawer.classList.add("open");backdrop.classList.add("open");drawer.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeCart(){drawer.classList.remove("open");backdrop.classList.remove("open");drawer.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
backdrop.addEventListener("click",closeCart);
document.getElementById("continueShopping").addEventListener("click",()=>{closeCart();document.getElementById("collection").scrollIntoView({behavior:"smooth"})});
function renderCart(){
 const count=cart.reduce((s,i)=>s+i.qty,0),total=cart.reduce((s,i)=>s+i.price*i.qty,0);
 countEl.textContent=count;drawerCount.textContent="("+count+")";subtotalEl.textContent=money(total);
 checkout.disabled=!cart.length;deliveryForm.hidden=!cart.length;
 if(!cart.length){
  itemsEl.innerHTML='<div class="empty-cart"><span>🛍</span><h3>Your cart is waiting</h3><p>Add a pair you love and it will appear here.</p><button class="continue-btn" id="continueShopping2">Explore shoes</button></div>';
  document.getElementById("continueShopping2").addEventListener("click",()=>{closeCart();document.getElementById("collection").scrollIntoView({behavior:"smooth"})});
  return;
 }
 itemsEl.innerHTML=cart.map((i,n)=>'<div class="cart-row"><div><h3>'+escapeHTML(i.name)+'</h3><p>UK '+escapeHTML(i.size)+' · '+money(i.price)+' each</p><div class="cart-row-actions"><button class="qty-btn" data-action="minus" data-index="'+n+'">−</button><b>'+i.qty+'</b><button class="qty-btn" data-action="plus" data-index="'+n+'">＋</button><button class="remove-btn" data-action="remove" data-index="'+n+'">Remove</button></div></div><strong>'+money(i.price*i.qty)+'</strong></div>').join("");
 itemsEl.querySelectorAll("[data-action]").forEach(b=>b.addEventListener("click",()=>{
  const n=Number(b.dataset.index),act=b.dataset.action;
  if(act==="plus")cart[n].qty++;if(act==="minus")cart[n].qty--;
  if(act==="remove"||cart[n].qty<=0)cart.splice(n,1);save();
 }));
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),2200)}
grid.addEventListener("click",e=>{
 const btn=e.target.closest(".add-btn");if(!btn)return;
 const card=btn.closest(".product-card"),size=card.querySelector(".size-select").value;
 if(!size){card.querySelector(".size-select").focus();toast("Please select your size first");return}
 const id=btn.dataset.id,found=cart.find(i=>i.id===id&&i.size===size);
 if(found)found.qty++;else cart.push({id,name:btn.dataset.name,price:Number(btn.dataset.price),size,qty:1});
 save();toast(btn.dataset.name+" added to cart");openCart();
});
function updateDeliveryStatus(){
 const city=(citySelect.value||"").trim().toLowerCase();
 const pin=deliveryForm.elements.pincode.value.trim();
 if(orderMode==="pickup"){
  deliveryStatus.textContent="✓ Store pickup selected. Collect from MARUDER Shoes Store, Nokha, Rajasthan 334803. Please wait for WhatsApp confirmation.";
  deliveryStatus.className="delivery-status available";placeOrder.disabled=false;return;
 }
 const available=SERVICE_CITIES.includes(city);
 if(!city){deliveryStatus.textContent="City select karte hi delivery status dikhega.";deliveryStatus.className="delivery-status";placeOrder.disabled=true;return}
 if(!available){deliveryStatus.textContent="✕ Is city mein abhi delivery available nahi hai.";deliveryStatus.className="delivery-status unavailable";placeOrder.disabled=true;return}
 if(pin.length===6&&!/^\d{6}$/.test(pin)){deliveryStatus.textContent="PIN Code 6 digits ka hona chahiye.";deliveryStatus.className="delivery-status unavailable";placeOrder.disabled=true;return}
 deliveryStatus.textContent="✓ "+citySelect.value+" mein delivery available hai. PIN code courier team se confirm hoga.";
 deliveryStatus.className="delivery-status available";placeOrder.disabled=false;
}
citySelect.addEventListener("change",updateDeliveryStatus);
deliveryForm.elements.pincode.addEventListener("input",updateDeliveryStatus);
function createOrderId(){
 const date=new Date(),stamp=[date.getFullYear().toString().slice(-2),String(date.getMonth()+1).padStart(2,"0"),String(date.getDate()).padStart(2,"0")].join("");
 const bytes=new Uint8Array(4);if(window.crypto&&crypto.getRandomValues)crypto.getRandomValues(bytes);else for(let i=0;i<4;i++)bytes[i]=Math.floor(Math.random()*256);
 return "MRD-"+stamp+"-"+Array.from(bytes,b=>b.toString(16).padStart(2,"0")).join("").toUpperCase();
}
deliveryForm.addEventListener("submit",e=>{
 e.preventDefault();if(!cart.length)return;
 const fd=new FormData(deliveryForm),name=String(fd.get("customerName")).trim(),phone=String(fd.get("phone")).trim(),address=String(fd.get("address")).trim(),city=String(fd.get("city")).trim(),pin=String(fd.get("pincode")).trim(),accepted=fd.get("acceptTerms")==="on";
 const cityOK=orderMode==="pickup"||SERVICE_CITIES.includes(city.toLowerCase());
 if(!name||!/^[6-9]\d{9}$/.test(phone)||!address||!cityOK||!/^[0-9]{6}$/.test(pin)||!accepted){toast("Please check details and accept store policies");updateDeliveryStatus();return}
 const orderId=createOrderId();
 const lines=cart.map(i=>"• "+i.name+" | Size "+i.size+" | Qty "+i.qty+" | "+money(i.price*i.qty)).join("\n");
 const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
 const fulfilment=orderMode==="pickup"?"STORE PICKUP":"HOME DELIVERY";
 const msg="Namaste MARUDER Shoes Store! Mujhe ye order place karna hai.\n\nORDER ID: "+orderId+"\nORDER TYPE: "+fulfilment+"\n\nCUSTOMER DETAILS\nName: "+name+"\nMobile: "+phone+"\nAddress / Pickup note: "+address+"\nCity: "+city+"\nPIN Code: "+pin+"\n\n"+(orderMode==="pickup"?"PICKUP LOCATION\n"+STORE_ADDRESS+"\nPlease confirm when the order is ready.\n":"DELIVERY AREA\nPlease confirm PIN-level serviceability and expected delivery date.\n")+"\nORDER ITEMS\n"+lines+"\n\nIndicative subtotal: "+money(total)+"\n\nCustomer has accepted the Terms & Conditions and 7-day Return & Exchange Policy shown on the website. Please confirm stock, exact model, final price and any delivery charges. Dhanyavaad.";
 openWhatsApp(msg);
});
document.getElementById("year").textContent=new Date().getFullYear();
renderCart();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});
