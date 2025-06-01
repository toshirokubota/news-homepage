
const nav_icon = document.getElementById('nav-icon');
const nav_close_icon = document.getElementById('nav-close-icon');
const navbar = document.getElementById('navbar');

nav_icon?.addEventListener('click', () => {
    navbar?.classList.toggle('hidden');
    navbar?.setAttribute("aria-expanded", "true");
})
nav_close_icon?.addEventListener('click', () => {
    navbar?.classList.toggle('hidden');
    navbar?.setAttribute("aria-expanded", "false");
})
window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) {
        navbar?.setAttribute("aria-expanded", "true"); // Correct usage
    } else {
        navbar?.setAttribute("aria-expanded", "false");
    }
});
