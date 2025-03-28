const menuBtn = document.querySelector("#menu-btn");
const navLink = document.querySelector("#nav-link");
const menuIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLink.classList.toggle("open");
    const isOpen = navLink.classList.contains("open")
    menuIcon.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars" )
})  

navLink.addEventListener("click", (e) => {
    navLink.classList.remove("open")
    menuIcon.setAttribute("class", "fas fa-bars")
})

const scrollRevealOption = {
    origin:"bottom",
    distance:"50px",
    duration:1000,
};
ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
})
ScrollReveal().reveal(".header-btns", {
    ...scrollRevealOption,
    origin: 1500,
})
ScrollReveal().reveal(".destination-card", {
    ...scrollRevealOption,
    interval: 500,
})
ScrollReveal().reveal(".banner-card", {
    ...scrollRevealOption,
    interval: 500,
})
ScrollReveal().reveal(".showcase-image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase-content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase-content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase-btns", {
  ...scrollRevealOption,
  origin: 1500,
});
ScrollReveal().reveal(".discover-card", {
  ...scrollRevealOption,
  interval: 500,
});
const swiper = new Swiper(".swiper",{
    slidesPerView:3,
    spaceBetween:20,
    loop: true,
})