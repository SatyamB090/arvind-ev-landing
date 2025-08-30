// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add navbar transition
    navbar.style.transition = 'transform 0.3s ease-in-out';

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-content, .launch-card, .model-card, .offers-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(32, 91, 230, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Video play button interaction
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            // Add video play functionality here
            console.log('Video play clicked');
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }

    // Feature badge hover effects
    const featureBadges = document.querySelectorAll('.feature-badge');
    
    featureBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            const span = this.querySelector('span');
            if (span) {
                span.style.opacity = '1';
                span.style.transform = 'translateY(-50%) translateX(10px)';
            }
        });
        
        badge.addEventListener('mouseleave', function() {
            const span = this.querySelector('span');
            if (span) {
                span.style.opacity = '0';
                span.style.transform = 'translateY(-50%) translateX(0)';
            }
        });
    });

    // Launch cards horizontal scroll
    const launchCards = document.querySelector('.launch-cards');
    if (launchCards) {
        let isDown = false;
        let startX;
        let scrollLeft;

        launchCards.addEventListener('mousedown', function(e) {
            isDown = true;
            startX = e.pageX - launchCards.offsetLeft;
            scrollLeft = launchCards.scrollLeft;
        });

        launchCards.addEventListener('mouseleave', function() {
            isDown = false;
        });

        launchCards.addEventListener('mouseup', function() {
            isDown = false;
        });

        launchCards.addEventListener('mousemove', function(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - launchCards.offsetLeft;
            const walk = (x - startX) * 2;
            launchCards.scrollLeft = scrollLeft - walk;
        });
    }

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroSection && heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }

    // Counter animation for stats
    const statsText = document.querySelector('.stats-text');
    if (statsText) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                }
            });
        });
        
        observer.observe(statsText);
    }

    function animateCounter() {
        const text = statsText.textContent;
        const numberMatch = text.match(/(\d+)/);
        
        if (numberMatch) {
            const targetNumber = parseInt(numberMatch[1]);
            let currentNumber = 0;
            const increment = targetNumber / 50;
            
            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    clearInterval(timer);
                }
                
                const newText = text.replace(/\d+/, Math.floor(currentNumber));
                statsText.textContent = newText;
            }, 50);
        }
    }

    // Smooth reveal animation for sections
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });

    // Add CSS for section animations
    const style = document.createElement('style');
    style.textContent = `
        .section-hidden {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .btn {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-badge span {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Price badge animation
    const priceBadge = document.querySelector('.price-badge');
    if (priceBadge) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'pulse 2s infinite';
                }
            });
        });
        
        observer.observe(priceBadge);
        
        // Add pulse animation CSS
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
                100% {
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(pulseStyle);
    }

    // Offer cards hover effect
    const offerImgs = document.querySelectorAll('.offer-img');
    
    offerImgs.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Explore button animation
    const exploreBtn = document.querySelector('.btn-explore');
    if (exploreBtn) {
        exploreBtn.addEventListener('mouseenter', function() {
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'translateX(5px)';
                svg.style.transition = 'transform 0.3s ease';
            }
        });
        
        exploreBtn.addEventListener('mouseleave', function() {
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'translateX(0)';
            }
        });
    }

    // Mobile menu toggle (if needed for responsive design)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            img.classList.add('lazy');
            imageObserver.observe(img);
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Add loading animation CSS
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        .lazy {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lazy.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll event handling code here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);