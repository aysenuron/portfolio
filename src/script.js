document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#about, #webapp-projects, #experience, #education, #websites");
    const menuLinks = document.querySelectorAll(".menu-link");

    const observerOptions = {
        root: null, // Observe within the viewport
        threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const correspondingLink = document.querySelector(`.menu-link[href="#${id}"]`);

            if (entry.isIntersecting) {
                menuLinks.forEach((link) => link.classList.remove("active"));
                correspondingLink.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});

const linkBtn = document.querySelector(".link");
const green = document.querySelector(".green");

//GSAP Button Animation

let hoverTL = gsap.timeline();
hoverTL.pause();

hoverTL.to(green, {width: "130%", right: "-1em", ease: "Elastic.easeOut(1)", duration: 1.5});

linkBtn.addEventListener("mouseenter", () => {
    hoverTL.play();
});

linkBtn.addEventListener("mouseleave", () => {
    hoverTL.reverse();
});


const cursor = new MouseFollower({
    container: window,
    speed: 0.3,
    className: "mf-cursor",
    skewingText: 1,
});