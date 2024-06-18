// menu mobile
const icons = document.getElementById('icons');
const nav = document.getElementById('nav');
const links = document.querySelectorAll('nav ul li a');

icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
  // gallerie
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }
});

// Image 360°
document.addEventListener('DOMContentLoaded', function() {
    var backgroundImage = document.getElementById('background-image');
    if (backgroundImage) {
        backgroundImage.addEventListener('click', function() {
            console.log('Background image clicked');
            window.open('\image-360.html', '_blank');
        });
    } else {
        console.log('Element not found');
    }
});

