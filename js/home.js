document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('typewriter-text');
    const texts = ['Desarrollador Web', 'Diseñador UI/UX', 'Creador Digital'];
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
    
    typeEffect();
});