const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.hidden = filter !== "all" && !card.dataset.category.split(" ").includes(filter);
    });
  });
});

document.querySelectorAll(".order-icon").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = `Hello MARUDER FOOTWEAR, I am interested in ${product}. Please share details, sizes and price.`;
    window.open(`https://wa.me/916376004627?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();