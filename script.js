const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.style.right = mobileMenu.style.right === "0px" ? "-100%" : "0px";
    });
}

document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        if (mobileMenu) mobileMenu.style.right = "-100%";
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("text-accent");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("text-accent");
        }
    });
});