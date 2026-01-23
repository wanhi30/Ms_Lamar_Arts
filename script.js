// --- PRELOADER LOGIC (FOR GIF) ---
window.addEventListener('load', function() {
    // Since GIFs loop and don't signal when they end, 
    // we use a simple timer to close the preloader.
    
    // Change '3000' to match how long your GIF lasts (in milliseconds)
    // 3000 = 3 seconds
    setTimeout(closePreloader, 3000); 
});

function closePreloader() {
    const preloader = document.getElementById('preloader');
    if(preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => { preloader.style.display = 'none'; }, 500);
    }
}

// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
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
