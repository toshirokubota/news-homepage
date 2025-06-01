
const nav_icon = document.getElementById('nav-icon');
const nav_close_icon = document.getElementById('nav-close-icon');
const navbar = document.getElementById('navbar');

nav_icon?.addEventListener('click', () => {
    navbar?.classList.toggle('hidden');
    navbar?.setAttribute("aria-expanded", "true");
    nav_icon.classList.toggle('hidden');
    nav_close_icon?.classList.toggle('hidden');
})
nav_close_icon?.addEventListener('click', () => {
    navbar?.classList.toggle('hidden');
    navbar?.setAttribute("aria-expanded", "false");
    nav_icon?.classList.toggle('hidden');
    nav_close_icon.classList.toggle('hidden');
})
window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) {
        navbar?.setAttribute("aria-expanded", "true"); 
    } else {
        navbar?.setAttribute("aria-expanded", "false");
    }
});
