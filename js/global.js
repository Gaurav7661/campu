// ===== MOBILE MENU TOGGLE =====
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;
  
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
  
    // Close menu when clicking links (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) navLinks.classList.remove('active');
        });
    });
}
  
// ===== PARTICLES.JS INIT =====
function initParticles() {
    if (typeof particlesJS === 'undefined') return;
    
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#4cc9f0" },
            shape: { type: "circle" },
            line_linked: { enable: true, distance: 150, color: "#4cc9f0", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 1 }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
}
  
// ===== WINDOW RESIZE HANDLER =====
function handleResize() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
}
  
// ===== INITIALIZE EVERYTHING =====
document.addEventListener("DOMContentLoaded", function() {
    setupMobileMenu();
    initParticles();
    handleResize();
    window.addEventListener('resize', handleResize);
});
// ===== PARTICLES.JS INIT =====
function initParticles() {
    if (typeof particlesJS === 'undefined') return;
    
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#4cc9f0"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.4,
                random: true
            },
            size: {
                value: 3, // Optimal medium size
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 140,
                color: "#4cc9f0",
                opacity: 0.25, // Subtle connections
                width: 1
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: true,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",
                    distance: 120
                },
                onclick: {
                    enable: true,
                    mode: "push",
                    distance: 180
                }
            },
            modes: {
                grab: {
                    distance: 120,
                    line_linked: {
                        opacity: 0.35
                    }
                },
                push: {
                    particles_nb: 3
                }
            }
        },
        retina_detect: true
    });
}