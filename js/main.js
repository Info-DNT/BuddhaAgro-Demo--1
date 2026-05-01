/**
 * BuddhaAgro - Main JavaScript
 * Includes Tailwind Configuration and Application Logic
 */

// 1. Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-tertiary-fixed": "#111d21",
                "surface-container-high": "#ede9d1",
                "error-container": "#ffdad6",
                "on-primary-fixed-variant": "#065043",
                "secondary-fixed": "#ffdcbd",
                "primary-fixed": "#afefdd",
                "on-error": "#ffffff",
                "surface-tint": "#29695b",
                "secondary-container": "#fe9901",
                "surface-container-lowest": "#ffffff",
                "tertiary-fixed-dim": "#bcc9ce",
                "tertiary": "#232f33",
                "primary-container": "#004d40",
                "inverse-primary": "#94d3c1",
                "on-secondary-container": "#643900",
                "on-primary-fixed": "#00201a",
                "on-surface": "#1d1c0e",
                "tertiary-container": "#39454a",
                "surface-variant": "#e8e3cc",
                "on-secondary-fixed": "#2c1600",
                "secondary-fixed-dim": "#ffb86e",
                "on-error-container": "#93000a",
                "surface-bright": "#fffae2",
                "on-surface-variant": "#3f4945",
                "error": "#ba1a1a",
                "on-tertiary": "#ffffff",
                "surface-container-highest": "#e8e3cc",
                "inverse-surface": "#323121",
                "outline": "#707975",
                "on-primary-container": "#7ebdac",
                "primary": "#00342b",
                "surface-dim": "#dfdac3",
                "surface": "#fffae2",
                "inverse-on-surface": "#f6f1d9",
                "on-secondary": "#ffffff",
                "on-tertiary-fixed-variant": "#3d494d",
                "background": "#fffae2",
                "on-tertiary-container": "#a5b2b7",
                "on-secondary-fixed-variant": "#693c00",
                "surface-container": "#f3eed7",
                "on-primary": "#ffffff",
                "on-background": "#1d1c0e",
                "primary-fixed-dim": "#94d3c1",
                "tertiary-fixed": "#d8e5ea",
                "secondary": "#8a5100",
                "surface-container-low": "#f9f4dc",
                "outline-variant": "#bfc9c4"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "base": "8px",
                "section-padding": "80px",
                "container-max": "1280px",
                "gutter": "24px",
                "margin-mobile": "16px"
            },
            "fontFamily": {
                "headline-lg": ["Manrope"],
                "body-md": ["Inter"],
                "headline-xl": ["Manrope"],
                "body-lg": ["Inter"],
                "headline-md": ["Manrope"],
                "label-md": ["Inter"]
            },
            "fontSize": {
                "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "headline-xl": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
                "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }]
            }
        }
    }
};

// 2. Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            mobileMenuBtn.classList.toggle('open', isOpen);
            
            const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.textContent = isOpen ? 'close' : 'menu';
            }
        });
        
        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileMenuBtn.classList.remove('open');
                const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'menu';
            });
        });
    }

    // Sticky Nav Shadow
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (nav) {
            nav.classList.toggle('nav-scrolled', window.scrollY > 20);
        }
    });

    // Intersection Observer for Reveal Animations
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's a lifecycle section, animate children too
                if (entry.target.id === 'lifecycle-journey') {
                    animateLifecycle();
                }
                
                // If it's the tech section, animate chart
                if (entry.target.id === 'technology') {
                    animateChart();
                }

                // If it contains counters, animate them
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => animateCounter(counter));

                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal, section').forEach(el => {
        revealObserver.observe(el);
    });

    // Counter Animation
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad
            const easedProgress = progress * (2 - progress);
            const currentCount = Math.floor(easedProgress * target);
            
            counter.textContent = currentCount + (counter.getAttribute('data-suffix') || '');
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    // Lifecycle Animation
    function animateLifecycle() {
        const fill = document.querySelector('.lifecycle-line-fill');
        if (fill) fill.classList.add('animated');
        
        const steps = document.querySelectorAll('.lifecycle-step');
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('animated');
            }, index * 300);
        });
    }

    // Bar Chart Animation
    function animateChart() {
        const bars = document.querySelectorAll('.chart-bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.classList.add('animated');
            }, index * 100);
        });
    }

    // Form Validation and Success State
    const contactForm = document.querySelector('form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                const errorMsg = input.parentElement.querySelector('.field-error-msg');
                if (!input.value.trim()) {
                    input.classList.add('field-error');
                    if (errorMsg) errorMsg.classList.add('visible');
                    isValid = false;
                } else {
                    input.classList.remove('field-error');
                    if (errorMsg) errorMsg.classList.remove('visible');
                    
                    // Simple email validation
                    if (input.type === 'email' && !input.value.includes('@')) {
                        input.classList.add('field-error');
                        if (errorMsg) errorMsg.classList.add('visible');
                        isValid = false;
                    }
                }
            });
            
            if (isValid) {
                contactForm.style.display = 'none';
                formSuccess.classList.add('visible');
                // Scroll success message into view
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        // Clear error on input
        contactForm.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('field-error');
                const errorMsg = input.parentElement.querySelector('.field-error-msg');
                if (errorMsg) errorMsg.classList.remove('visible');
            });
        });
    }
});
