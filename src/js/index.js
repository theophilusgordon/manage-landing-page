const hamburgerIcon = document.querySelector(".hamburger-icon");
const navbar = document.querySelector(".navbar");
const bgEffect = document.querySelector(".bg-effect");
const slides = document.querySelectorAll("section-testimonial-grid__user");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footerLogo = document.querySelector("#footer-logo");
const links = document.querySelectorAll(".navbar a");

// Toggle open and close menu
hamburgerIcon.addEventListener("click", () => {
 if(hamburgerIcon.classList.contains("fa-bars")){
   hamburgerIcon.classList.remove("fa-bars");
   hamburgerIcon.classList.add("fa-times");
   navbar.style = "display: block";
   bgEffect.classList.add("overlay");

 } else {
   hamburgerIcon.classList.add("fa-bars");
   hamburgerIcon.classList.remove("fa-times");
   navbar.style = "display: none";
   bgEffect.classList.remove("overlay");
 }
});

// Close menu on link select
Array.from(links).forEach(link => link.addEventListener("click", () => {
 hamburgerIcon.classList.add("fa-bars");
   hamburgerIcon.classList.remove("fa-times");
   navbar.style = "display: none";
   bgEffect.classList.remove("overlay");
}));

// Add backgound color to header on scroll
window.addEventListener('scroll', () => {
  if(scrollY > 0) {
    header.style.backgroundColor = "#ffffff";
  }
})

// Slider
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
