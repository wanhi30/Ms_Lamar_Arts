// --- PRELOADER LOGIC ---
window.addEventListener('load', function() {
    const video = document.getElementById('intro-video');
    const preloader = document.getElementById('preloader');

    // Attempt to play video
    video.play().catch(() => { console.log("Autoplay blocked"); });

    // SPEED UP VIDEO 3X
    if(video) {
        video.playbackRate = 4.0; 
    }
    
    // When video ends, fade out preloader
    video.onended = function() { closePreloader(); };
});

function closePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
}

// --- MOBILE MENU TOGGLE (Safe Version) ---
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    if (nav) {
        nav.classList.toggle('active');
        console.log("Menu clicked. Active class toggled.");
    } else {
        console.error("Error: .nav-links element not found!");
    }
}

// --- HERO SLIDESHOW LOGIC ---
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    if (slides.length === 0) return; // Safety check
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Increment index
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    // Show current slide
    slides[slideIndex - 1].classList.add('active');
    
    // Change slide every 4 seconds
    setTimeout(showSlides, 4000); 
}

// Start slideshow
showSlides();


