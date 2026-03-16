const headerEl = document.querySelector("header");
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > window.innerHeight - 100) {
        headerEl.classList.add("transparent");
    } else {
        headerEl.classList.remove("transparent");
    }
});