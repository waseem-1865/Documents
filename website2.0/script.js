// JavaScript for image slider functionality
let currentSlide = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide) ? 'block' : 'none';
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds

console.log('Welcome to our e-commerce store!');
