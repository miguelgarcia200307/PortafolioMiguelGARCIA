document.addEventListener('DOMContentLoaded', function() {
    function animateSkillBars() {
        const progressBars = document.querySelectorAll('.progress');
        
        function animateBar(bar) {
            const width = bar.getAttribute('data-width');
            
            bar.style.width = '0';
            bar.style.width = '0';
            
            setTimeout(() => {
                const targetWidth = parseFloat(width);
                let currentWidth = 0;
                const duration = 1500;
                const startTime = performance.now();
                
                function step(timestamp) {
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const easingBounce = function(t) {
                        const b = 4;
                        return t < 0.8 
                            ? 1.25 * t * t 
                            : 1 - Math.pow(-2 * t + 2, b) * 0.0625;
                    };
                    
                    currentWidth = targetWidth * easingBounce(progress);
                    bar.style.width = `${currentWidth}%`;
                    
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        bar.style.width = width;
                        
                        const pulseEffect = document.createElement('div');
                        pulseEffect.className = 'pulse-effect';
                        pulseEffect.style.cssText = `
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 0;
                            width: 20px;
                            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
                            border-radius: 100px;
                            animation: pulse 1.5s ease-out;
                            pointer-events: none;
                        `;
                        
                        bar.appendChild(pulseEffect);
                        
                        setTimeout(() => {
                            if (bar.contains(pulseEffect)) {
                                bar.removeChild(pulseEffect);
                            }
                        }, 1500);
                    }
                }
                
                requestAnimationFrame(step);
            }, 300);
        }
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(progressBars).indexOf(entry.target);
                    setTimeout(() => {
                        animateBar(entry.target);
                    }, index * 150);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        progressBars.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    function setupTechIconEffects() {
        const techIcons = document.querySelectorAll('.tech-icon');
        
        techIcons.forEach(icon => {
            icon.addEventListener('mousemove', function(e) {
                const { left, top, width, height } = this.getBoundingClientRect();
                const x = ((e.clientX - left) / width) - 0.5;
                const y = ((e.clientY - top) / height) - 0.5;
                
                const distance = Math.sqrt(x * x + y * y);
                const strength = 15 * (1 - distance * 0.5);
                
                this.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.1)`;
                
                const shine = Math.max(0, 1 - distance * 2);
                this.style.boxShadow = `
                    0 10px 25px rgba(var(--primary-rgb), ${0.15 + shine * 0.1}), 
                    0 5px 10px rgba(0, 0, 0, 0.05), 
                    inset 0 0 0 1px rgba(255, 255, 255, ${0.3 + shine * 0.4})
                `;
                
                // Efecto de brillo en los iconos
                const icon = this.querySelector('i');
                icon.style.filter = `brightness(${1 + shine * 0.5})`;
                icon.style.transform = `scale(${1 + shine * 0.1})`;
            });
            
            // Resetear al salir del hover
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0) scale(1)';
                this.style.boxShadow = 'var(--shadow-soft)';
                
                const icon = this.querySelector('i');
                icon.style.filter = 'brightness(1)';
                icon.style.transform = 'scale(1)';
            });
            
            // Efecto visual adicional al hacer clic
            icon.addEventListener('mousedown', function() {
                this.style.transform = 'translate(0, 0) scale(0.95)';
            });
            
            icon.addEventListener('mouseup', function(e) {
                const { left, top, width, height } = this.getBoundingClientRect();
                const x = ((e.clientX - left) / width) - 0.5;
                const y = ((e.clientY - top) / height) - 0.5;
                
                const distance = Math.sqrt(x * x + y * y);
                const strength = 15 * (1 - distance * 0.5);
                
                this.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.1)`;
            });
        });
    }
    
    // Mejorar las certificaciones con efectos de hover
    function enhanceCertifications() {
        const certItems = document.querySelectorAll('.certification-item');
        
        certItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const logo = this.querySelector('.certification-logo');
                logo.style.transform = 'scale(1.1) rotate(5deg)';
                
                // Efecto de destaque para certificaciones
                this.style.backgroundColor = 'rgba(var(--primary-rgb), 0.03)';
                this.style.borderColor = 'rgba(var(--primary-rgb), 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                const logo = this.querySelector('.certification-logo');
                logo.style.transform = 'scale(1) rotate(0)';
                
                this.style.backgroundColor = 'var(--card-bg-light)';
                this.style.borderColor = 'var(--border-color)';
            });
        });
    }
    
    // Efecto de seguimiento del mouse para elementos decorativos
    function setupBackgroundEffects() {
        const section = document.getElementById('skills');
        const shapes = document.querySelectorAll('.skills-bg-shape');
        
        section.addEventListener('mousemove', function(e) {
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            shapes.forEach((shape, index) => {
                const speed = 0.01 + (index * 0.005);
                const moveX = x * speed * 50;
                const moveY = y * speed * 50;
                
                shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }
    
    // Inicializar todo
    function init() {
        // Iniciar animaciones y efectos
        animateSkillBars();
        setupTechIconEffects();
        enhanceCertifications();
        setupBackgroundEffects();
        
        // Añadir estilo de keyframes si no existe
        if (!document.getElementById('skills-keyframes')) {
            const style = document.createElement('style');
            style.id = 'skills-keyframes';
            style.textContent = `
                @keyframes pulse {
                    0% {
                        opacity: 0.8;
                        transform: scale(0.8) translateX(-5px);
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 0;
                        transform: scale(1.2) translateX(20px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Iniciar cuando el DOM esté listo
    init();
});

// Efectos avanzados para el rediseño premium de habilidades

document.addEventListener('DOMContentLoaded', function() {
    // Función para activar las animaciones de las barras de progreso
    function initializeSkills() {
        const skills = document.querySelectorAll('.skill');
        
        skills.forEach((skill, index) => {
            // Extraer el porcentaje de la habilidad
            const percentText = skill.querySelector('.skill-percentage');
            const percentValue = percentText ? parseInt(percentText.textContent) : 0;
            
            // Configurar la barra de progreso
            const progressBar = skill.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = percentValue + '%';
                
                // Añadir la estructura interna necesaria
                const progressIndicator = document.createElement('div');
                progressIndicator.className = 'progress-indicator';
                progressBar.parentNode.appendChild(progressIndicator);
                
                // Calcular y posicionar el indicador en el valor correcto
                const updateIndicator = () => {
                    const containerWidth = progressBar.parentNode.offsetWidth;
                    const position = (percentValue / 100) * containerWidth;
                    progressIndicator.style.left = position + 'px';
                };
                
                // Añadir área sombreada
                const progressArea = document.createElement('div');
                progressArea.className = 'progress-area';
                progressBar.parentNode.insertBefore(progressArea, progressBar);
                
                // Actualizar tamaño del área sombreada cuando cambie el indicador
                const updateArea = () => {
                    const containerWidth = progressBar.parentNode.offsetWidth;
                    const position = (percentValue / 100) * containerWidth;
                    progressArea.style.width = position + 'px';
                };
                
                // Activar la barra con transición
                setTimeout(() => {
                    progressBar.style.transform = 'scaleX(' + (percentValue / 100) + ')';
                    updateIndicator();
                    updateArea();
                    
                    // Asegurar que se mantenga bien posicionado al redimensionar
                    window.addEventListener('resize', () => {
                        updateIndicator();
                        updateArea();
                    });
                }, 300 + index * 150);
            }
            
            // Determinar y aplicar el nivel de habilidad correcto
            const skillLevels = skill.querySelectorAll('.skill-level');
            if (skillLevels.length) {
                let activeIndex = 0;
                
                if (percentValue >= 85) activeIndex = 3; // Experto
                else if (percentValue >= 70) activeIndex = 2; // Avanzado
                else if (percentValue >= 50) activeIndex = 1; // Intermedio
                else activeIndex = 0; // Básico
                
                if (skillLevels[activeIndex]) {
                    skillLevels[activeIndex].classList.add('active');
                }
            }
            
            // Animación de entrada
            setTimeout(() => {
                skill.classList.add('animate-in');
            }, 100 + index * 120);
        });
    }
    
    // Efectos avanzados para los iconos de tecnología
    function initializeTechIcons() {
        const techIcons = document.querySelectorAll('.tech-icon');
        
        techIcons.forEach((icon, index) => {
            // Efecto magnético al mover el cursor
            icon.addEventListener('mousemove', function(e) {
                const { left, top, width, height } = this.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                
                const distance = Math.sqrt(x*x + y*y);
                const intensity = Math.max(0, 1 - distance*1.5);
                
                // Límites de movimiento para que parezca natural
                const moveX = x * 20 * intensity;
                const moveY = y * 20 * intensity;
                const rotate = (x * y) * 5;
                
                this.style.transform = `
                    translateY(${-8 - intensity * 7}px) 
                    translateX(${moveX}px) 
                    translateZ(0) 
                    rotateX(${-y * 10}deg) 
                    rotateY(${x * 10}deg)
                `;
                
                this.style.boxShadow = `
                    0 ${15 + intensity * 10}px 35px rgba(72, 52, 212, ${0.1 + intensity * 0.1}),
                    0 ${5 + intensity * 5}px 15px rgba(0, 0, 0, ${0.03 + intensity * 0.02}),
                    inset 0 0 0 1px rgba(${intensity > 0.5 ? '72, 52, 212' : '255, 255, 255'}, ${0.1 + intensity * 0.1})
                `;
                
                // Ajustar brillo del ícono
                const iconElement = this.querySelector('i');
                if (iconElement) {
                    iconElement.style.transform = `scale(${1 + intensity * 0.2})`;
                    iconElement.style.filter = `drop-shadow(0 ${2 + intensity * 2}px ${3 + intensity * 2}px rgba(72, 52, 212, ${0.1 + intensity * 0.2}))`;
                }
                
                // Ajustar gradiente de fondo
                this.style.background = `
                    linear-gradient(
                        ${135 + x * y * 45}deg,
                        rgba(255, 255, 255, ${0.7 + intensity * 0.1}),
                        rgba(255, 255, 255, ${0.6 + intensity * 0.1})
                    )
                `;
            });
            
            // Restaurar estado al salir
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) translateX(0) rotateX(0) rotateY(0)';
                this.style.boxShadow = `
                    0 15px 35px rgba(0, 0, 0, 0.05),
                    0 5px 15px rgba(0, 0, 0, 0.03),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.15)
                `;
                
                const iconElement = this.querySelector('i');
                if (iconElement) {
                    iconElement.style.transform = '';
                    iconElement.style.filter = '';
                }
                
                this.style.background = 'rgba(255, 255, 255, 0.7)';
            });
            
            // Efecto de clic
            icon.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(-2px) scale(0.95)';
                
                const iconElement = this.querySelector('i');
                if (iconElement) {
                    iconElement.style.transform = 'scale(0.9)';
                }
            });
            
            icon.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-10px) scale(1)';
                
                const iconElement = this.querySelector('i');
                if (iconElement) {
                    iconElement.style.transform = 'scale(1.1)';
                }
            });
            
            // Animación inicial con retraso escalonado
            icon.style.opacity = '0';
            icon.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                icon.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                icon.style.opacity = '1';
                icon.style.transform = 'translateY(0)';
            }, 500 + index * 100);
        });
    }
    
    // Efecto parallax sutil en elementos de fondo
    function initializeParallax() {
        const section = document.querySelector('#skills');
        const decorations = document.querySelectorAll('.skills-bg-shape');
        
        if (section && decorations.length) {
            section.addEventListener('mousemove', function(e) {
                const { left, top, width, height } = this.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                
                decorations.forEach((item, index) => {
                    const speed = 0.02 + (index * 0.01);
                    const moveX = x * speed * 100;
                    const moveY = y * speed * 100;
                    
                    item.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });
            });
            
            // Restablecer posiciones al salir
            section.addEventListener('mouseleave', function() {
                decorations.forEach(item => {
                    item.style.transform = 'translate(0, 0)';
                    item.style.transition = 'transform 0.5s ease-out';
                });
            });
            
            // Eliminar la transición al volver a entrar
            section.addEventListener('mouseenter', function() {
                decorations.forEach(item => {
                    item.style.transition = 'none';
                });
            });
        }
    }
    
    // Observador para animaciones cuando el elemento es visible
    function setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'skills') {
                        initializeSkills();
                        initializeTechIcons();
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, {
            threshold: 0.1
        });
        
        const skillsSection = document.querySelector('#skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }
    
    // Inicializar
    function init() {
        // Preparar la estructura necesaria para los efectos
        prepareDOM();
        
        // Configurar parallax para elementos decorativos
        initializeParallax();
        
        // Configurar observador para activar animaciones cuando sea visible
        setupObserver();
        
        // Para navegadores que no soporten IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            initializeSkills();
            initializeTechIcons();
        }
    }
    
    // Preparar los elementos DOM necesarios
    function prepareDOM() {
        // Añadir estructura para niveles de habilidad si no existen
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            // Verificar si necesitamos crear elementos internos
            if (!skill.querySelector('.skill-inner')) {
                // Guardar el contenido original
                const originalContent = skill.innerHTML;
                
                // Crear nueva estructura interna
                const inner = document.createElement('div');
                inner.className = 'skill-inner';
                skill.appendChild(inner);
                
                // Añadir contenido en la nueva estructura
                inner.innerHTML = originalContent;
                
                // Reorganizar elementos
                const skillInfo = inner.querySelector('.skill-info');
                const progressBar = inner.querySelector('.progress-bar');
                const skillLevel = inner.querySelector('.skill-level');
                
                if (skillInfo) {
                    // Crear header para reorganizar elementos
                    const header = document.createElement('div');
                    header.className = 'skill-header';
                    
                    // Nombre de la habilidad
                    const nameWrapper = document.createElement('div');
                    nameWrapper.className = 'skill-name';
                    
                    // Mover el icono y párrafo al wrapper
                    const icon = skillInfo.querySelector('.skill-icon');
                    const title = skillInfo.querySelector('p');
                    
                    if (icon) nameWrapper.appendChild(icon.cloneNode(true));
                    if (title) {
                        const titleSpan = document.createElement('span');
                        titleSpan.className = 'skill-title';
                        titleSpan.textContent = title.textContent.trim();
                        nameWrapper.appendChild(titleSpan);
                    }
                    
                    header.appendChild(nameWrapper);
                    
                    // Mover el porcentaje
                    const percent = skillInfo.querySelector('span:not(.skill-icon)');
                    if (percent) {
                        percent.className = 'skill-percentage';
                        header.appendChild(percent.cloneNode(true));
                    }
                    
                    // Reemplazar skillInfo con el nuevo header
                    skillInfo.parentNode.replaceChild(header, skillInfo);
                }
                
                // Contenedor para la barra de progreso
                if (progressBar) {
                    const progressContainer = document.createElement('div');
                    progressContainer.className = 'skill-progress';
                    
                    const progressWrapper = document.createElement('div');
                    progressWrapper.className = 'progress-container';
                    
                    // Mover la barra de progreso al nuevo contenedor
                    progressWrapper.appendChild(progressBar.cloneNode(true));
                    progressContainer.appendChild(progressWrapper);
                    
                    // Reemplazar el original
                    progressBar.parentNode.replaceChild(progressContainer, progressBar);
                }
                
                // Convertir skill-level a la nueva estructura
                if (skillLevel) {
                    const levelContainer = document.createElement('div');
                    levelContainer.className = 'skill-levels';
                    
                    // Obtener todos los spans y convertirlos
                    const spans = Array.from(skillLevel.querySelectorAll('span'));
                    spans.forEach(span => {
                        const newLevel = document.createElement('div');
                        newLevel.className = 'skill-level';
                        newLevel.textContent = span.textContent;
                        levelContainer.appendChild(newLevel);
                    });
                    
                    // Reemplazar el original
                    skillLevel.parentNode.replaceChild(levelContainer, skillLevel);
                }
            }
        });
    }
    
    // Iniciar cuando el DOM esté listo
    init();
});

// Funcionalidad para mostrar certificados en modal
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar modal de certificados
    initializeCertificateModal();
});

function initializeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('certificateImage');
    const closeBtn = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');
    const downloadBtn = document.getElementById('downloadCertificate');
    const fullscreenBtn = document.getElementById('fullscreenCertificate');
    
    // Verificar que todos los elementos existen
    if (!modal || !modalImg || !closeBtn || !backdrop) {
        console.warn('Elementos del modal de certificados no encontrados');
        return;
    }
    
    // Enlaces de certificados
    const certificationLinks = document.querySelectorAll('.certification-link');
    
    if (certificationLinks.length === 0) {
        console.warn('No se encontraron enlaces de certificación');
        return;
    }
    
    let lastScrollY = 0;
    
    certificationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const certificateImage = this.getAttribute('data-certificate');
            if (certificateImage) {
                // Guardar la posición de scroll antes de abrir el modal
                lastScrollY = window.scrollY;
                
                // Mostrar loading
                const container = modal.querySelector('.modal-image-container');
                if (container) {
                    container.classList.add('loading');
                }
                
                // Cargar imagen
                modalImg.onload = function() {
                    if (container) {
                        container.classList.remove('loading');
                    }
                };
                
                modalImg.onerror = function() {
                    if (container) {
                        container.classList.remove('loading');
                    }
                    console.error('Error al cargar la imagen:', certificateImage);
                };
                
                modalImg.src = certificateImage;
                modal.style.display = 'flex';
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100vw';
                modal.style.height = '100vh';
                modal.style.zIndex = '10001';
                
                // Prevenir scroll del body
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.top = `-${lastScrollY}px`;
                
                // Usar setTimeout para asegurar que el display se aplique antes de la clase show
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
                
                // Configurar botón de descarga
                if (downloadBtn) {
                    downloadBtn.onclick = function() {
                        downloadCertificate(certificateImage);
                    };
                }
                
                // Configurar botón de pantalla completa
                if (fullscreenBtn) {
                    fullscreenBtn.onclick = function() {
                        openFullscreen(modalImg);
                    };
                }
            }
        });
    });
    
    // Cerrar modal
    function closeModal() {
        modal.classList.remove('show');
        
        // Esperar a que termine la animación antes de ocultar
        setTimeout(() => {
            modal.style.display = 'none';
            modalImg.src = '';
            
            // Restaurar scroll del body
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            // Restaurar la posición de scroll
            window.scrollTo(0, lastScrollY);
        }, 400);
    }
    
    if (closeBtn) {
        // Permitir cerrar el modal haciendo clic en cualquier parte del botón o sus hijos
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }
    
    if (backdrop) {
        backdrop.addEventListener('click', closeModal);
    }
    
    // Delegación de eventos: cerrar modal si se hace clic en cualquier elemento con la clase modal-close
    modal.addEventListener('click', function(e) {
        if (e.target.closest('.modal-close')) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        }
    });
    
    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Función para descargar certificado
    function downloadCertificate(imageSrc) {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageSrc.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Mostrar notificación de descarga
        showNotification('Certificado descargado correctamente', 'success');
    }
    
    // Función para pantalla completa
    function openFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    
    // Función para mostrar notificaciones
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Estilos inline para la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 10003;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-family: 'Roboto', sans-serif;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Mostrar notificación
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Ocultar notificación después de 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Navegación con teclado en el modal
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('show')) {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowRight':
                    // Aquí podrías implementar navegación entre certificados
                    e.preventDefault();
                    break;
                case 'd':
                case 'D':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        if (downloadBtn) downloadBtn.click();
                    }
                    break;
                case 'f':
                case 'F':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        if (fullscreenBtn) fullscreenBtn.click();
                    }
                    break;
            }
        }
    });
    
    // Agregar efecto de zoom en la imagen del modal
    if (modalImg) {
        modalImg.addEventListener('click', function() {
            this.classList.toggle('zoomed');
        });
    }
}