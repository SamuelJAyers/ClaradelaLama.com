const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const title = document.querySelector('.title');
const clara = document.querySelector('.clara')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    title.classList.toggle("active");
    clara.classList.toggle("active");
})

