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
