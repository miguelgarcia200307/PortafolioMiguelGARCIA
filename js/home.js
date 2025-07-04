document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('typewriter-text');
    
    // Esperamos a que el sistema de idiomas esté cargado
    function initTypewriter() {
        let texts = ['Desarrollador Web', 'Diseñador UI/UX', 'Creador Digital'];
        
        // Si el sistema de idiomas está disponible, usamos los textos traducidos
        if (window.languageSystem) {
            texts = window.languageSystem.getTypewriterTexts();
        }
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeEffect() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typewriterText.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="cursor">|</span>';
                charIndex--;
                typingSpeed = 50;
            } else {
                typewriterText.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        // Guardamos la función en el objeto global para poder reiniciarla
        window.typewriterInstance = {
            restart: function() {
                texts = window.languageSystem.getTypewriterTexts();
                textIndex = 0;
                charIndex = 0;
                isDeleting = false;
                typeEffect();
            }
        };
        
        typeEffect();
    }
    
    // Intentamos inicializar inmediatamente, sino esperamos un poco
    if (window.languageSystem) {
        initTypewriter();
    } else {
        setTimeout(initTypewriter, 100);
    }
});