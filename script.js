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

gsap.from(".navbar-title", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
})

gsap.from(".navbar-menu", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
    stagger: 0.3,
})

gsap.from("#menu-icon", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
    stagger: 0.3,
})

gsap.from(".home-title", {
    opacity: 0,
    y: 20,
    delay: 2,
    duration: 0.5,
})

gsap.from(".home-img", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
})

gsap.from(".facilities-title", {
    opacity: 0,
    y: 20,
    delay: 2,
    duration: 0.5,
})

gsap.from(".facilities-box", {
    opacity: 0,
    y: 20,
    delay: 1.5,
    duration: 0.5,
})

gsap.from(".about-title", {
    opacity: 0,
    y: 20,
    delay: 2,
    duration: 0.5,
})

gsap.from(".testimonial-title", {
    opacity: 0,
    y: 20,
    delay: 2,
    duration: 0.5,
})

gsap.from(".testimonial-container", {
    opacity: 0,
    y: 20,
    delay: 1.2,
    duration: 0.5,
})

gsap.from(".about-content", {
    opacity: 0,
    y: 20,
    delay: 1.2,
    duration: 0.5,
})

gsap.from(".contact-title", {
    opacity: 0,
    y: 20,
    delay: 2,
    duration: 0.5,
})

gsap.from(".contact-map", {
    opacity: 0,
    y: 20,
    delay: 1.2,
    duration: 0.5,
})

gsap.from(".contact-content", {
    opacity: 0,
    y: 20,
    delay: 1.2,
    duration: 0.5,
})

gsap.from(".product-title", {
    opacity: 0,
    y: 20,
    delay: 2,
    duration: 0.5,
})

gsap.from(".product", {
    opacity: 0,
    y: 20,
    delay: 1.5,
    duration: 0.5,
})