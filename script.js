// --- PRELOADER LOGIC ---
window.addEventListener('load', function() {
    const video = document.getElementById('intro-video');
    const preloader = document.getElementById('preloader');

    // Play video, then close preloader
    video.play().catch(() => { console.log("Autoplay blocked"); });
    video.onended = function() { closePreloader(); };
});

function closePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
}

// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// --- HERO SLIDESHOW LOGIC ---
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    // Increment index, reset if at end
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    // Show current slide
    slides[slideIndex - 1].classList.add('active');
    // Change slide every 4 seconds
    setTimeout(showSlides, 4000); 
}

// Start slideshow if slides exist
if (slides.length > 0) {
    showSlides();
}
