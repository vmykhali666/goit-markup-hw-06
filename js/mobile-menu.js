const refs = {
  mobileMenu: document.querySelector(".js-menu-container"),
  openMenuBtn: document.querySelector(".js-open-menu"),
  closeMenuBtn: document.querySelector(".js-close-menu"),
  body: document.querySelector("body"),
};

const toggleMenu = () => {
  const isMenuOpen =
    refs.openMenuBtn.getAttribute("aria-expanded") === "true" || false;

  refs.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);

  refs.mobileMenu.classList.toggle("is-open");
  refs.body.classList.toggle("fixed");
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  refs.mobileMenu.classList.remove("is-open");
    refs.openMenuBtn.setAttribute("aria-expanded", false);
      refs.body.classList.remove("fixed");
});
