let u = document.querySelector('.main').offsetWidth / 64;

const updateU = () => {
    u = document.querySelector('.main').offsetWidth / 64
    console.log("u now " + u + " px");
};

const resize = () => {
    updateU();
}

window.addEventListener('resize', resize);






document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");

    menu.addEventListener("mouseenter", () => {
        menu.style.width = "512px";
        menu.style.height = "192px";
        menu.style.marginBottom = "96px";
    });

    menu.addEventListener("mouseleave", () => {
        menu.style.width = "128px";
        menu.style.height = "128px";
        menu.style.marginBottom = "64px";
    });
});


window.addEventListener('load', () => {
    const filters = document.querySelectorAll('filter feImage');
    filters.forEach(img => {
        const src = img.getAttribute('href');
        img.setAttribute('href', src);
    });
});
