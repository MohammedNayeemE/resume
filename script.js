// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("active");
        }, 400 * index); // Adjust the delay for each section
    });
});
