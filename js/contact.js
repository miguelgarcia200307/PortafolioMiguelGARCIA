document.addEventListener('DOMContentLoaded', function() {
    initContactAnimations();
    initFAQAccordion();
    initSocialLinks();
    initContactInteractions();
});

function initContactAnimations() {
    const contactCards = document.querySelectorAll('.contact-card, .whatsapp-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const infoItems = document.querySelectorAll('.contact-info-item');
    
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const glow = this.querySelector('.icon-glow');
            if (glow) {
                glow.style.opacity = '0.6';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const glow = this.querySelector('.icon-glow');
            if (glow) {
                glow.style.opacity = '0';
            }
        });
    });
}

/* ==============================
   ACORDEÓN FAQ
   ============================== */
function initFAQAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon i');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los otros elementos
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.accordion-content');
                    const otherIcon = otherItem.querySelector('.accordion-icon i');
                    otherContent.style.maxHeight = '0';
                    if (otherIcon) {
                        otherIcon.className = 'fas fa-plus';
                    }
                }
            });
            
            // Toggle del elemento actual
            if (isActive) {
                item.classList.remove('active');
                content.style.maxHeight = '0';
                if (icon) {
                    icon.className = 'fas fa-plus';
                }
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) {
                    icon.className = 'fas fa-minus';
                }
            }
        });
    });
}

/* ==============================
   ENLACES SOCIALES
   ============================== */
function initSocialLinks() {
    const socialBtns = document.querySelectorAll('.social-btn');
    
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('.social-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
                tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.social-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
                tooltip.style.transform = 'translateX(-50%) translateY(0)';
            }
        });
    });
}

/* ==============================
   INTERACCIONES DE CONTACTO
   ============================== */
function initContactInteractions() {
    // Efecto de brillo en botones
    const primaryBtns = document.querySelectorAll('.whatsapp-main-btn');
    
    primaryBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Crear efecto de ripple
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            // Remover el ripple después de la animación
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Animación de carga para botones
    const loadingBtns = document.querySelectorAll('.whatsapp-btn, .whatsapp-main-btn');
    
    loadingBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Agregar clase de carga temporal
            this.classList.add('loading');
            
            // Simular tiempo de carga
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        });
    });

    // Animación de números de contacto
    animateContactNumbers();
}

/* ==============================
   ANIMACIÓN DE NÚMEROS
   ============================== */
function animateContactNumbers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                animateNumber(target);
                observer.unobserve(target);
            }
        });
    });

    // Observar elementos con números (si los hay)
    const numberElements = document.querySelectorAll('.contact-stat-number');
    numberElements.forEach(el => observer.observe(el));
}

function animateNumber(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (target - start) * easeOutCubic(progress));
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

/* ==============================
   EFECTOS VISUALES ADICIONALES
   ============================== */

// Agregar estilos dinámicos para efectos
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .loading {
        position: relative;
        pointer-events: none;
    }
    
    .loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid #fff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

/* ==============================
   FUNCIONES DE UTILIDAD
   ============================== */

// Función para copiar texto al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('¡Copiado al portapapeles!', 'success');
    }).catch(() => {
        showNotification('Error al copiar', 'error');
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar notificación
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}