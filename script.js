// Modern Google-style JavaScript with enhanced functionality

// Try Extension function
function tryExtension() {
    trackEvent('CTA', 'try_extension_from_demo', 'YouTube Demo Section');
    // Replace with actual marketplace URL when available
    alert('🚀 Redirecting to Google Workspace Marketplace...\n\nYour add-on will be available soon!');
}

// Track YouTube video interactions
document.addEventListener('DOMContentLoaded', () => {
    // Track when YouTube iframe is loaded
    const iframe = document.querySelector('iframe[src*="youtube.com"]');
    if (iframe) {
        iframe.addEventListener('load', () => {
            trackEvent('Video', 'youtube_direct_embed_load', 'iatiricuU4U');
        });
    }
});

// Marketplace button click handler
document.getElementById('marketplace-btn').addEventListener('click', function() {
    // Add loading state
    this.classList.add('loading');
    this.innerHTML = 'Opening Marketplace...';
    
    // Simulate marketplace redirect (replace with actual URL when available)
    setTimeout(() => {
        alert('Google Workspace Marketplace link will be added once your add-on is published!');
        this.classList.remove('loading');
        this.innerHTML = 'Try it for Free now';
    }, 1000);
    
    // In production, replace alert with:
    // window.open('YOUR_MARKETPLACE_URL_HERE', '_blank');
});

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

// Header scroll effect
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
    
    lastScrollY = currentScrollY;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .stat, .step');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counter animations when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                const text = statNumber.textContent;
                const number = parseInt(text.match(/\d+/)?.[0] || '0');
                if (number > 0) {
                    statNumber.textContent = '0';
                    setTimeout(() => {
                        animateCounter(statNumber, number);
                    }, 200);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => statsObserver.observe(stat));
});

// Feature card interactions
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Mobile menu toggle (if needed for responsive design)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-open');
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        document.querySelectorAll('.mobile-open').forEach(el => {
            el.classList.remove('mobile-open');
        });
    }
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Failed to load image:', this.src);
    });
});

// Analytics event tracking with Vercel Analytics integration
function trackEvent(category, action, label, value) {
    // Vercel Analytics tracking
    if (window.va) {
        window.va('track', action, {
            category: category,
            label: label,
            value: value
        });
    }
    
    // Console log for debugging
    console.log('Event tracked:', { category, action, label, value });
    
    // Google Analytics 4 (if you add it later)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
}

// Track CTA clicks
document.querySelectorAll('button, .cta-link').forEach(element => {
    element.addEventListener('click', function() {
        const text = this.textContent.trim();
        trackEvent('CTA', 'click', text);
    });
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}