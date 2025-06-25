let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar-menu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

//menu ditutup saat klik di luar menu
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !navbar.contains(event.target)) {
    navbar.classList.remove("open");
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
    menu.classList.remove("bx-x");
  }
});

//AOS & GSAP

AOS.init();