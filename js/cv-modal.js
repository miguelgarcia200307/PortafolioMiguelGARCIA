function openCVModal() {
    const modal = document.getElementById('cvModal');
    const iframe = document.getElementById('cvPreview');
    const loading = document.querySelector('.cv-loading');
    const fallback = document.querySelector('.cv-fallback');
    
    // Mostrar el modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    loading.style.display = 'block';
    fallback.style.display = 'none';
    
    const pdfUrl = 'assets/pdf/cv1.pdf';
    
    if (canDisplayPDF()) {
        iframe.src = pdfUrl;
        
        // Manejar carga del iframe
        iframe.onload = function() {
            loading.style.display = 'none';
        };
        
        iframe.onerror = function() {
            showFallback();
        };
        
        setTimeout(() => {
            if (loading.style.display !== 'none') {
                showFallback();
            }
        }, 5000);
    } else {
        showFallback();
    }
}

function closeCVModal() {
    const modal = document.getElementById('cvModal');
    const iframe = document.getElementById('cvPreview');
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        iframe.src = '';
    }, 300);
}

/**
 * Descarga el CV directamente
 */
function downloadCV() {
    const pdfUrl = 'assets/pdf/cv1.pdf';
    const fileName = 'CV_Miguel_Garcia.pdf';
    
    try {
        // Método 1: Crear enlace temporal para descarga
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;
        link.target = '_blank'; // Abrir en nueva ventana/pestaña
        
        // Añadir al DOM temporalmente y hacer click
        document.body.appendChild(link);
        link.click();
        
        // Limpiar el enlace temporal
        document.body.removeChild(link);
        
        // Tracking de descarga
        if (typeof trackCVDownload === 'function') {
            trackCVDownload();
        }        } catch (error) {
            // Método alternativo: Abrir directamente en nueva ventana
            window.open(pdfUrl, '_blank');
        
        if (typeof trackCVDownload === 'function') {
            trackCVDownload();
        }
    }
    
    // Opcional: cerrar el modal después de descargar
    // closeCVModal();
}

/**
 * Abre el CV en pantalla completa
 */
function openCVFullscreen() {
    const pdfUrl = 'assets/pdf/cv1.pdf';
    window.open(pdfUrl, '_blank');
    
    // Tracking de vista
    if (typeof trackCVView === 'function') {
        trackCVView();
    }
}

/**
 * Muestra el fallback cuando no se puede mostrar el PDF
 */
function showFallback() {
    const loading = document.querySelector('.cv-loading');
    const fallback = document.querySelector('.cv-fallback');
    
    loading.style.display = 'none';
    fallback.style.display = 'flex';
}

/**
 * Verifica si el navegador puede mostrar PDFs inline
 */
function canDisplayPDF() {
    // Verificar si es un navegador móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Los navegadores móviles generalmente no soportan PDF inline
    if (isMobile) {
        return false;
    }
    
    // Verificar soporte de PDF
    const hasPDFSupport = navigator.mimeTypes && 
                          navigator.mimeTypes['application/pdf'] && 
                          navigator.mimeTypes['application/pdf'].enabledPlugin;
    
    return hasPDFSupport || navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Firefox');
}

/**
 * Detecta si es dispositivo móvil
 */
function isMobileDevice() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('cvModal');
            if (modal.classList.contains('active')) {
                closeCVModal();
            }
        }
    });
    
    // Prevenir scroll del body cuando el modal está abierto
    const modal = document.getElementById('cvModal');
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (modal.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    if (modal) {
        observer.observe(modal, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    
    // Optimizar para dispositivos móviles
    if (isMobileDevice()) {
        // En móviles, mostrar opciones directas sin iframe
        const originalOpenCV = window.openCVModal;
        window.openCVModal = function() {
            const modal = document.getElementById('cvModal');
            const loading = document.querySelector('.cv-loading');
            const fallback = document.querySelector('.cv-fallback');
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // En móviles, mostrar directamente las opciones
            loading.style.display = 'none';
            fallback.style.display = 'flex';
            
            // Actualizar el texto del fallback para móviles
            const fallbackContent = fallback.querySelector('.fallback-content p');
            if (fallbackContent) {
                fallbackContent.textContent = 'En dispositivos móviles, puedes descargar el CV directamente o abrirlo en una nueva pestaña.';
            }
        };
    }
    
    // Añadir analytics/tracking si es necesario
    window.trackCVView = function() {
        // Aquí puedes añadir código de analytics
    };
    
    window.trackCVDownload = function() {
        // Aquí puedes añadir código de analytics
    };
});

// ========================================
// MEJORAS DE ACCESIBILIDAD
// ========================================

/**
 * Mejora la accesibilidad del modal
 */
function enhanceAccessibility() {
    const modal = document.getElementById('cvModal');
    const firstFocusableElement = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    // Manejar el foco
    modal.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}
