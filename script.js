document.addEventListener("DOMContentLoaded", () => {
    // This ensures the intro overlay is completely removed from memory 
    // after the CSS animation finishes (3.5 seconds)
    setTimeout(() => {
        const overlay = document.getElementById('intro-overlay');
        if(overlay) {
            overlay.style.display = 'none';
        }
    }, 3500); 
});
