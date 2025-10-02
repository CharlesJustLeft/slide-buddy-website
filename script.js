// script.js

// Marketplace button click handler
document.getElementById('marketplace-btn').addEventListener('click', function() {
    // Replace with your actual Google Workspace Marketplace URL when available
    alert('Google Workspace Marketplace link will be added once your add-on is published!');
    // window.open('YOUR_MARKETPLACE_URL_HERE', '_blank');
});

// Demo video upload functionality
function uploadDemoVideo() {
    alert('To add your demo video:\n\n1. Upload your video file to the assets/ folder\n2. Replace the video placeholder section in index.html\n3. Use the commented example as a guide');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add loading animation to CTA button
document.getElementById('marketplace-btn').addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
});

document.getElementById('marketplace-btn').addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
});
