// Modern Google-style JavaScript with enhanced functionality

// Try Extension function
function tryExtension() {
    trackEvent('CTA', 'try_extension_from_demo', 'YouTube Demo Section');
    // Open Google Workspace Marketplace
    window.open('https://workspace.google.com/marketplace/app/slide_buddy/859890262029', '_blank');
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
document.getElementById('marketplace-btn').addEventListener('click', function () {
    // Track the click
    trackEvent('CTA', 'marketplace_install_click', 'Hero Section');

    // Open Google Workspace Marketplace in new tab
    window.open('https://workspace.google.com/marketplace/app/slide_buddy/859890262029', '_blank');
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

    // -- INIT --
    initThreeJS();

    // GSAP Animations for New Layout
    // Hero Title Reveal
    gsap.to('.hero-title span', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2
    });

    // Fade in other elements
    gsap.from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.8
    });

    // ScrollTrigger for Features
    gsap.utils.toArray('.glass').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1
        });
    });

    // Initialize VanillaTilt for 3D Cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02
        });
    } else {
        // Fallback if library not loaded (though we should add it)
        console.warn("VanillaTilt not found. Adding script dynamically...");
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js";
        script.onload = () => {
            VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
                scale: 1.02
            });
        };
        document.body.appendChild(script);
    }
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
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
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
    img.addEventListener('error', function () {
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
    element.addEventListener('click', function () {
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

/* --- 3D & Animation Logic --- */

// 1. Smooth Scroll (Lenis) - REMOVED per user request for native scrolling
// const lenis = new Lenis({ ... });
// function raf(time) { ... }
// Native scrolling restored

gsap.registerPlugin(ScrollTrigger);

// 2. THREE.JS SCENE
const initThreeJS = () => {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    // Light Fog for Light Theme (White)
    scene.fog = new THREE.Fog(0xffffff, 10, 50);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // -- A. INFINITE GRID FLOOR --
    const gridSize = 200;
    const gridDivisions = 100;
    // Grid colors: Center line blue, others faint grey/blue
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x4285F4, 0xe8eaed);
    gridHelper.position.y = -4;
    scene.add(gridHelper);

    // -- B. FLOATING OBJECTS (Google Colors) --
    const group = new THREE.Group();
    scene.add(group);

    // Material: Glassy/Plastic look
    const matBlue = new THREE.MeshPhysicalMaterial({
        color: 0x4285F4, metalness: 0.1, roughness: 0.2, transmission: 0.1, thickness: 1, clearcoat: 1
    });
    const matYellow = new THREE.MeshPhysicalMaterial({
        color: 0xFBBC04, metalness: 0.1, roughness: 0.2, transmission: 0.1, thickness: 1, clearcoat: 1
    });
    const matRed = new THREE.MeshPhysicalMaterial({
        color: 0xEA4335, metalness: 0.1, roughness: 0.2, transmission: 0.1, thickness: 1, clearcoat: 1
    });
    const matGreen = new THREE.MeshPhysicalMaterial({
        color: 0x34A853, metalness: 0.1, roughness: 0.2, transmission: 0.1, thickness: 1, clearcoat: 1
    });

    // Create a stack of floating rounded planes (Slides)
    const planeGeo = new THREE.BoxGeometry(3, 2, 0.1);

    const slide1 = new THREE.Mesh(planeGeo, matBlue);
    slide1.position.z = 0;
    group.add(slide1);

    const slide2 = new THREE.Mesh(planeGeo, matYellow);
    slide2.position.z = -1.5;
    slide2.position.x = 1.5;
    slide2.rotation.z = 0.1;
    group.add(slide2);

    const slide3 = new THREE.Mesh(planeGeo, matRed);
    slide3.position.z = -3;
    slide3.position.x = -1.5;
    slide3.rotation.z = -0.1;
    group.add(slide3);

    // Add some "data particles" floating around
    const particleGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    // Mix of Google colors for particles
    const colors = [0x4285F4, 0xFBBC04, 0xEA4335, 0x34A853];

    for (let i = 0; i < 40; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const p = new THREE.Mesh(particleGeo, new THREE.MeshBasicMaterial({ color: color }));
        p.position.set(
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        group.add(p);
    }

    // -- C. LIGHTING --
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Bright ambient for light mode
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // -- ANIMATION LOOP --
    const clock = new THREE.Clock();

    // Mouse Interactivity
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    const animate = () => {
        const t = clock.getElapsedTime();

        // 1. Move Grid to create "Infinite Forward" illusion
        gridHelper.position.z = (t * 2) % (gridSize / gridDivisions);

        // 2. Animate Group
        group.rotation.y = Math.sin(t * 0.2) * 0.2;
        group.rotation.x = Math.sin(t * 0.3) * 0.05;
        group.position.y = Math.sin(t * 0.5) * 0.3; // Bobbing

        // 3. Mouse Parallax
        group.rotation.y += mouseX * 0.0002;
        group.rotation.x += mouseY * 0.0002;

        // 4. Scroll Parallax (Simple)
        camera.position.y = 2 - window.scrollY * 0.002;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    // Fade in canvas
    container.style.opacity = 1;
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Initialize 3D on load
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
});