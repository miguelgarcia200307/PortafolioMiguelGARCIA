document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const aboutOffset = aboutSection.offsetTop;
        const distance = scrollPosition - aboutOffset;
        
        if (scrollPosition >= aboutOffset - 500 && scrollPosition <= aboutOffset + aboutSection.offsetHeight) {
            const shapes = document.querySelectorAll('.about-bg-shape');
            shapes.forEach((shape, index) => {
                const speed = shape.getAttribute('data-speed');
                shape.style.transform = `translateY(${distance * speed}px) rotate(${distance * speed * 0.05}deg)`;
            });
        }
    });

    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach((counter, index) => {
            const targetValue = parseInt(counter.getAttribute('data-target'));
            counter.textContent = '0';
            
            setTimeout(() => {
                counter.innerHTML = `<span class="counter-value">0</span><span class="counter-suffix">+</span>`;
                const valueElement = counter.querySelector('.counter-value');
                
                let currentValue = 0;
                const duration = 1500; // ms
                const startTime = performance.now();
                
                function updateCounter(timestamp) {
                    const elapsedTime = timestamp - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    
                    const easing = 1 - Math.pow(1 - progress, 4);
                    currentValue = Math.floor(easing * targetValue);
                    
                    valueElement.textContent = currentValue;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        valueElement.textContent = targetValue;
                        counter.classList.add('counter-completed');
                    }
                }
                
                requestAnimationFrame(updateCounter);
            }, index * 150);
        });
    }
    
    // Timeline avanzado con indicadores de progreso
    function setupTimeline() {
        const timeline = document.querySelector('.timeline');
        const items = document.querySelectorAll('.timeline-item');
        
        // Añadir línea de progreso animada
        const progressLine = document.createElement('div');
        progressLine.className = 'timeline-progress';
        timeline.appendChild(progressLine);
        
        // Configurar observador para animar la línea de progreso
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressLine.style.height = '100%';
                    
                    // Animar los elementos individuales
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('active');
                        }, 300 + (index * 300));
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(timeline);
        
        // Añadir interactividad al pasar el mouse
        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                items.forEach(i => i.classList.add('dimmed'));
                item.classList.remove('dimmed');
                item.classList.add('highlighted');
            });
            
            item.addEventListener('mouseleave', () => {
                items.forEach(i => {
                    i.classList.remove('dimmed');
                    i.classList.remove('highlighted');
                });
            });
        });
    }
    
    // Animación 3D avanzada para la imagen de perfil
    function setupProfileImage() {
        const aboutImage = document.querySelector('.about-image');
        const image = aboutImage.querySelector('img');
        const shadowElement = document.createElement('div');
        shadowElement.className = 'profile-shadow';
        aboutImage.appendChild(shadowElement);
        
        // Efecto 3D avanzado
        aboutImage.addEventListener('mousemove', function(e) {
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = ((e.clientX - left) / width) - 0.5;
            const y = ((e.clientY - top) / height) - 0.5;
            
            const rotateY = x * 15;
            const rotateX = -y * 15;
            
            // Aplicar transformación 3D
            image.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.05)
            `;
            
            // Mover las luces para crear efecto de brillo dinámico
            const glareX = x * 150 + 50;
            const glareY = y * 150 + 50;
            image.style.setProperty('--glare-position', `${glareX}% ${glareY}%`);
            
            // Ajustar sombra de manera dinámica
            shadowElement.style.transform = `translateX(${-x * 15}px) translateY(${-y * 15}px)`;
        });
        
        // Resetear al salir
        aboutImage.addEventListener('mouseleave', function() {
            image.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
            shadowElement.style.transform = 'translateX(0) translateY(0)';
        });
        
        // Añadir efecto de click
        aboutImage.addEventListener('mousedown', function() {
            image.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(0.95)';
        });
        
        aboutImage.addEventListener('mouseup', function() {
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = ((event.clientX - left) / width) - 0.5;
            const y = ((event.clientY - top) / height) - 0.5;
            
            image.style.transform = `
                perspective(1000px) 
                rotateX(${-y * 15}deg) 
                rotateY(${x * 15}deg) 
                scale(1.05)
            `;
        });
    }
    
    // Etiquetas de habilidades interactivas
    function setupSkillTags() {
        const skillTagsContainer = document.querySelector('.about-skills-grid');
        const skillTags = document.querySelectorAll('.skill-tag');
        
        // Añadir animación de entrada
        skillTags.forEach((tag, index) => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            
            // Observador para animar entrada
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            tag.style.transition = `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`;
                            tag.style.opacity = '1';
                            tag.style.transform = 'translateY(0)';
                        }, index * 80);
                        observer.unobserve(tag);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(tag);
            
            // Añadir interactividad
            tag.addEventListener('mouseenter', function() {
                this.classList.add('skill-tag-hover');
                
                // Crear y añadir un elemento de partícula
                for (let i = 0; i < 5; i++) {
                    createParticle(this);
                }
            });
            
            tag.addEventListener('mouseleave', function() {
                this.classList.remove('skill-tag-hover');
            });
        });
        
        // Función para crear partículas dinámicas
        function createParticle(element) {
            const particle = document.createElement('span');
            particle.className = 'skill-particle';
            
            // Posición inicial
            const rect = element.getBoundingClientRect();
            const x = Math.random() * rect.width;
            const y = Math.random() * rect.height;
            
            // Propiedades aleatorias
            const size = Math.floor(Math.random() * 5 + 3);
            const duration = Math.random() * 1 + 0.5;
            const color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
            
            // Establecer estilos
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.animation = `particle ${duration}s ease-out forwards`;
            
            element.appendChild(particle);
            
            // Eliminar después de la animación
            setTimeout(() => {
                if (element.contains(particle)) {
                    element.removeChild(particle);
                }
            }, duration * 1000);
        }
    }
    
    // Botón de CV con animación avanzada
    function setupCVButton() {
        const cvButton = document.querySelector('.cv-button');
        if (!cvButton) return;
        
        cvButton.addEventListener('mouseenter', function() {
            this.classList.add('cv-button-hover');
            this.querySelector('i').classList.add('animate-icon');
        });
        
        cvButton.addEventListener('mouseleave', function() {
            this.classList.remove('cv-button-hover');
            this.querySelector('i').classList.remove('animate-icon');
        });
        
        cvButton.addEventListener('click', function() {
            // Añadir animación de descarga
            this.classList.add('cv-downloading');
            
            // Simular descarga (puedes reemplazar con descarga real)
            setTimeout(() => {
                this.classList.remove('cv-downloading');
                this.classList.add('cv-downloaded');
                
                setTimeout(() => {
                    this.classList.remove('cv-downloaded');
                }, 2000);
            }, 1500);
        });
    }
    
    // Efectos de desplazamiento suave
    function initSmoothScrolling() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            section.setAttribute('data-scroll', '');
            
            // Observar cuando una sección entra en el viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        section.classList.add('section-in-view');
                        
                        // Añadir clase para activar animaciones internas
                        setTimeout(() => {
                            section.classList.add('animate-content');
                        }, 200);
                    }
                });
            }, { threshold: 0.15 });
            
            observer.observe(section);
        });
    }
    
    // Inicializar todas las funciones
    function init() {
        // Añadir formas de fondo para efecto parallax
        createBackgroundShapes();
        
        // Iniciar observadores y animaciones
        setupProfileImage();
        setupTimeline();
        setupSkillTags();
        setupCVButton();
        initSmoothScrolling();
        
        // Iniciar contador con retraso para asegurar que la sección sea visible
        setTimeout(() => {
            animateCounters();
        }, 500);
    }
    
    // Crear formas decorativas de fondo
    function createBackgroundShapes() {
        const aboutSection = document.getElementById('about');
        
        // Crear formas con diferentes velocidades de parallax
        const shapes = [
            { class: 'circle', speed: 0.02, size: '150px', top: '10%', left: '5%', opacity: 0.03 },
            { class: 'square', speed: 0.04, size: '80px', top: '60%', left: '15%', opacity: 0.02 },
            { class: 'triangle', speed: -0.03, size: '120px', top: '20%', right: '10%', opacity: 0.04 },
            { class: 'cross', speed: -0.01, size: '70px', bottom: '15%', right: '20%', opacity: 0.03 }
        ];
        
        shapes.forEach(shape => {
            const element = document.createElement('div');
            element.className = `about-bg-shape ${shape.class}`;
            element.setAttribute('data-speed', shape.speed);
            
            const styles = {
                width: shape.size,
                height: shape.size,
                top: shape.top || 'auto',
                left: shape.left || 'auto',
                right: shape.right || 'auto',
                bottom: shape.bottom || 'auto',
                opacity: shape.opacity
            };
            
            Object.assign(element.style, styles);
            aboutSection.appendChild(element);
        });
    }
    
    // Iniciar todo cuando el DOM esté listo
    init();
});