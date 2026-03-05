const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const phoneSelect = document.querySelector("#phone-select");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Cierra el menú al tocar un link (móvil)
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

phoneSelect?.addEventListener("change", event => {
  const selected = event.target.value;

  if (!selected) return;

  window.location.href = selected;
  event.target.selectedIndex = 0;
});