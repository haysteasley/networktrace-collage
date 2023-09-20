// script.js
window.addEventListener("scroll", function() {
    const foregroundImages = document.querySelectorAll(".foreground-image");
    let scrollPosition = window.pageYOffset;

    foregroundImages.forEach(function(image, index) {
        const speed = 0.5 * (index + 1); 
        image.style.transform = "translateY(" + scrollPosition * speed + "px)";
    });
});
