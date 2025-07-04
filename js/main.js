document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.querySelector('.back-to-top');
    
    // Event Listeners
    window.addEventListener('scroll', function() {
        handleScroll();
        activateNavOnScroll();
    });
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                toggleMenu();
            }
        });
    });
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (backToTop) backToTop.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            if (backToTop) backToTop.classList.remove('visible');
        }
    }
    
    function toggleMenu() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        const bars = menuToggle.querySelectorAll('.bar');
        if (menuToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }
    
    function activateNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
});