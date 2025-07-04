document.addEventListener('DOMContentLoaded', function() {
    initCTASection();
});

function initCTASection() {
    initFloatingElements();
    initCTAHoverEffects();
    initAnimatedCounters();
    initCTAParallax();
}

// Animaciones de elementos flotantes
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = `translateY(-15px) rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
            this.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Efectos de hover mejorados para toda la sección CTA
function initCTAHoverEffects() {
    const ctaCard = document.querySelector('.portfolio-cta');
    const ctaIcon = document.querySelector('.cta-icon');
    const ctaButtons = document.querySelectorAll('.cta-main-btn, .cta-whatsapp-btn');
    
    if (ctaCard) {
        // Efecto de tilt suave en la tarjeta
        ctaCard.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        ctaCard.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
    
    // Efecto de pulso mejorado en el icono
    if (ctaIcon) {
        setInterval(() => {
            ctaIcon.style.transform = 'scale(1.05)';
            setTimeout(() => {
                ctaIcon.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
    
    // Efectos mejorados en los botones
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Contador animado para las estadísticas
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const ctaSection = document.querySelector('.project-cta-section');
    
    let hasAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });
    
    if (ctaSection) {
        observer.observe(ctaSection);
    }
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = counter.textContent;
            const isPlus = target.includes('+');
            const isPercent = target.includes('%');
            const isTime = target.includes('h');
            
            let numericValue;
            if (isTime) {
                numericValue = parseInt(target);
            } else {
                numericValue = parseInt(target.replace(/[^0-9]/g, ''));
            }
            
            let current = 0;
            const increment = numericValue / 50; // 50 pasos para la animación
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current);
                if (isPlus) displayValue += '+';
                if (isPercent) displayValue += '%';
                if (isTime) displayValue += 'h';
                
                counter.textContent = displayValue;
            }, 30);
        });
    }
}

// Efecto parallax suave para elementos de fondo
function initCTAParallax() {
    const shapes = document.querySelectorAll('.cta-shape');
    const particles = document.querySelector('.cta-particles');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        const rateParticles = scrolled * -0.1;
        
        shapes.forEach((shape, index) => {
            const speed = 0.2 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        if (particles) {
            particles.style.transform = `translateY(${rateParticles}px)`;
        }
    });
}

// Función para manejar clicks en los botones CTA
function handleCTAButtons() {
    const whatsappBtn = document.querySelector('.cta-whatsapp-btn');
    const contactBtn = document.querySelector('.cta-main-btn');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Agregar efecto de ripple
            createRippleEffect(this, e);
            
            // Tracking de evento (si tienes analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'WhatsApp Button'
                });
            }
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            // Agregar efecto de ripple
            createRippleEffect(this, e);
            
            // Scroll suave a la sección de contacto
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Tracking de evento
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Contact Button'
                });
            }
        });
    }
}

// Crear efecto ripple en los botones
function createRippleEffect(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// CSS para la animación ripple (se inyecta dinámicamente)
if (!document.querySelector('#ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Inicializar eventos de botones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', handleCTAButtons);

// Función de utilidad para verificar si un elemento está visible
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Optimización para dispositivos móviles
function initMobileOptimizations() {
    if (window.innerWidth <= 768) {
        // Reducir animaciones en móviles para mejor performance
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach(element => {
            element.style.animation = 'none';
        });
        
        // Simplificar efectos de hover en móvil
        const ctaCard = document.querySelector('.portfolio-cta');
        if (ctaCard) {
            ctaCard.style.transform = 'none';
        }
    }
}

// Ejecutar optimizaciones móviles al cargar y redimensionar
window.addEventListener('load', initMobileOptimizations);
window.addEventListener('resize', initMobileOptimizations);
