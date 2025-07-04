document.addEventListener('DOMContentLoaded', function() {
    // Datos de proyectos con claves de traducción
    const projectsData = {
        svfupc: {
            titleKey: 'project_svfupc_title',
            categoryKey: 'portfolio_category_web',
            descriptionKey: 'project_svfupc_description',
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
            titleKey: 'project_domibot_title',
            categoryKey: 'portfolio_category_app',
            descriptionKey: 'project_domibot_description',
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
            titleKey: 'project_conversation_title',
            categoryKey: 'portfolio_category_app',
            descriptionKey: 'project_conversation_description',
            images: [
                'assets/proyectos/CONVERSACION1.png',
                'assets/proyectos/CONVERSACION2.png'
            ],
            technologies: ['JavaScript', 'HTML', 'CSS'],
            githubLink: '#',
            demoLink: '#'
        },
        dashboard: {
            titleKey: 'project_portfolio_title',
            categoryKey: 'portfolio_category_web',
            descriptionKey: 'project_portfolio_description',
            images: [
                'assets/proyectos/PORTAFOLIO.png'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubLink: '#',
            demoLink: '#'
        }
    };

    // Función para obtener texto traducido
    function getTranslatedText(key) {
        if (window.languageSystem && window.languageSystem.translations) {
            const currentLang = window.languageSystem.currentLang || 'es';
            return window.languageSystem.translations[currentLang][key] || key;
        }
        return key;
    }
    
    // Hacer función global para acceso desde language.js
    window.getTranslatedText = getTranslatedText;

    let currentProject = null;
    let currentImageIndex = 0;
    let scrollPosition = 0;

    window.openProjectModal = function(projectId) {
        currentProject = projectsData[projectId];
        if (!currentProject) return;

        // Guardar la posición de scroll actual
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        currentImageIndex = 0;
        
        // Usar textos traducidos
        document.getElementById('modal-project-title').textContent = getTranslatedText(currentProject.titleKey);
        document.getElementById('modal-project-category').textContent = getTranslatedText(currentProject.categoryKey);
        document.getElementById('modal-project-description').textContent = getTranslatedText(currentProject.descriptionKey);
        
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
        
        // Hacer el proyecto actual globalmente accesible
        window.currentProject = currentProject;
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
        window.currentProject = null;
        currentImageIndex = 0;
        
        // Prevenir cualquier navegación adicional
        return false;
    }

    function updateModalGallery() {
        if (!currentProject) return;

        // Actualizar imagen principal
        const mainImage = document.getElementById('modal-main-image');
        mainImage.src = currentProject.images[currentImageIndex];
        mainImage.alt = getTranslatedText(currentProject.titleKey);

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
            thumbnailImg.alt = `${getTranslatedText(currentProject.titleKey)} - Imagen ${index + 1}`;

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