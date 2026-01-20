// Animation Preloader Logic
window.addEventListener('load', function() {
    const video = document.getElementById('intro-video');
    const preloader = document.getElementById('preloader');

    // Try to play video
    video.play().catch(error => {
        console.log("Autoplay blocked, showing play button or skipping");
    });

    // When video ends, fade out preloader
    video.onended = function() {
        closePreloader();
    };
});

function closePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // Wait for fade out
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}