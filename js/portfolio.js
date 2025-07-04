document.addEventListener('DOMContentLoaded', function() {
    const projectsData = {
        svfupc: {
            title: 'SVFUPC - Simulador de Viabilidad Financiera',
            category: 'Desarrollo Web',
            description: 'Este proyecto tiene como objetivo crear una aplicación web que simule el cálculo de la nómina de docentes universitarios; tanto de planta, como ocasionales, según el Decreto 1279 de 2002 y el Acuerdo 006 de 2018.',
            images: [
                'assets/proyectos/NOMINA3.png',
                'assets/proyectos/NOMINA1.png',
                'assets/proyectos/NOMINA2.png'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubLink: 'https://github.com/JhonJ-G/NominaUPC.git',
            demoLink: 'https://jhonj-g.github.io/NominaU/'
        },
        taskmanager: {
            title: 'DomiBot: Tu Asistente Virtual para Pedidos y Reservas en Restaurantes',
            category: 'Programa de Escritorio',
            description: 'Aplicativo de escritorio para restaurantes que automatiza la atención al cliente mediante un asistente virtual de Telegram. Integra módulos para gestionar pedidos, reservas con seguro, promociones, pagos y configuración dinámica del menú.',
            images: [
                'assets/proyectos/DOMIBOT1.png',
                'assets/proyectos/DOMIBOT2.png',
                'assets/proyectos/DOMIBOT3.png',
                'assets/proyectos/DOMIBOT4.png',
                'assets/proyectos/DOMIBOT5.png',
                'assets/proyectos/DOMIBOT6.png',
                 'assets/proyectos/CONVERSACION1.png',
                'assets/proyectos/CONVERSACION2.png'
            ],
            technologies: ['C#', '.NET Framework', 'Telegram.Bot (librería)', 'SQL Server'],
            githubLink: '#',
            demoLink: '#'
        },
        fintech: {
            title: 'Proyecto de Conversación',
            category: 'Aplicación',
            description: 'Sistema de chat y conversación interactivo con funcionalidades avanzadas de comunicación.',
            images: [
                'assets/proyectos/CONVERSACION1.png',
                'assets/proyectos/CONVERSACION2.png'
            ],
            technologies: ['JavaScript', 'HTML', 'CSS'],
            githubLink: '#',
            demoLink: '#'
        },
        dashboard: {
            title: 'Dashboard Analytics',
            category: 'Desarrollo Web',
            description: 'Panel de control analítico con visualización de datos en tiempo real, informes personalizables y exportación de datos.',
            images: [
                'assets/proyectos/NOMINA1.png' // Placeholder hasta que agregues imágenes específicas
            ],
            technologies: ['Angular', 'D3.js', 'Node.js'],
            githubLink: '#',
            demoLink: '#'
        },
        chatbot: {
            title: 'Asistente Virtual IA',
            category: 'IA',
            description: 'Chatbot impulsado por inteligencia artificial para atención al cliente, integrable en múltiples plataformas.',
            images: [
                'assets/proyectos/NOMINA2.png' // Placeholder hasta que agregues imágenes específicas
            ],
            technologies: ['Python', 'TensorFlow', 'API.ai'],
            githubLink: '#',
            demoLink: '#'
        },
        healthtracker: {
            title: 'HealthTracker',
            category: 'Aplicación',
            description: 'Aplicación móvil para seguimiento de hábitos saludables, integración con dispositivos wearables y análisis personalizado.',
            images: [
                'assets/proyectos/NOMINA3.png'
            ],
            technologies: ['React Native', 'GraphQL', 'AWS'],
            githubLink: '#',
            demoLink: '#'
        }
    };

    let currentProject = null;
    let currentImageIndex = 0;
    let scrollPosition = 0;

    window.openProjectModal = function(projectId) {
        currentProject = projectsData[projectId];
        if (!currentProject) return;

        // Guardar la posición de scroll actual
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        currentImageIndex = 0;
        
        document.getElementById('modal-project-title').textContent = currentProject.title;
        document.getElementById('modal-project-category').textContent = currentProject.category;
        document.getElementById('modal-project-description').textContent = currentProject.description;
        
        document.getElementById('modal-github-link').href = currentProject.githubLink;
        document.getElementById('modal-demo-link').href = currentProject.demoLink;
        
        const techContainer = document.getElementById('modal-project-tech');
        techContainer.innerHTML = '';
        currentProject.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techContainer.appendChild(techTag);
        });
        
        // Actualizar galería de imágenes
        updateModalGallery();
        
        // Mostrar modal
        const modal = document.getElementById('projectModal');
        modal.style.display = 'flex';
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
        document.body.style.top = `-${scrollPosition}px`;
    }

    window.closeProjectModal = function() {
        const modal = document.getElementById('projectModal');
        modal.style.display = 'none';
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.top = '';
        document.body.style.position = '';
        document.body.style.width = '';
        
        // Restaurar la posición de scroll
        window.scrollTo(0, scrollPosition);
        
        currentProject = null;
        currentImageIndex = 0;
        
        // Prevenir cualquier navegación adicional
        return false;
    }

    function updateModalGallery() {
        if (!currentProject) return;

        // Actualizar imagen principal
        const mainImage = document.getElementById('modal-main-image');
        mainImage.src = currentProject.images[currentImageIndex];
        mainImage.alt = currentProject.title;

        // Actualizar contador
        document.getElementById('current-image').textContent = currentImageIndex + 1;
        document.getElementById('total-images').textContent = currentProject.images.length;

        // Generar miniaturas
        const thumbnailsContainer = document.getElementById('modal-thumbnails');
        thumbnailsContainer.innerHTML = '';

        currentProject.images.forEach((image, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = `thumbnail-item ${index === currentImageIndex ? 'active' : ''}`;
            thumbnailDiv.onclick = () => changeImage(index);

            const thumbnailImg = document.createElement('img');
            thumbnailImg.src = image;
            thumbnailImg.alt = `${currentProject.title} - Imagen ${index + 1}`;

            thumbnailDiv.appendChild(thumbnailImg);
            thumbnailsContainer.appendChild(thumbnailDiv);
        });
    }

    function changeImage(index) {
        if (!currentProject || index < 0 || index >= currentProject.images.length) return;
        
        currentImageIndex = index;
        updateModalGallery();
    }

    // Función para navegar entre imágenes con botones
    window.navigateImage = function(direction) {
        if (!currentProject) return;
        
        const newIndex = currentImageIndex + direction;
        if (newIndex >= 0 && newIndex < currentProject.images.length) {
            changeImage(newIndex);
        }
    }

    // Navegación con teclado en el modal
    document.addEventListener('keydown', function(e) {
        if (currentProject) {
            if (e.key === 'Escape') {
                closeProjectModal();
            } else if (e.key === 'ArrowLeft') {
                navigateImage(-1);
            } else if (e.key === 'ArrowRight') {
                navigateImage(1);
            }
        }
    });

    // Cerrar modal al hacer clic fuera del contenido
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('projectModal');
        if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
            e.preventDefault();
            closeProjectModal();
            return false;
        }
    });

    // Prevenir navegación en enlaces del modal
    document.addEventListener('click', function(e) {
        if (e.target.closest('.portfolio-action.live-demo')) {
            e.preventDefault();
            return false;
        }
    });
});