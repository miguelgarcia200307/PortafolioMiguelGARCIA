function openCVModal() {
    console.log('openCVModal called');
    
    const modal = document.getElementById('cvModal');
    
    if (!modal) {
        console.error('CV Modal not found');
        // Fallback: abrir en nueva ventana si el modal no existe
        window.open('assets/pdf/cv-miguelgarciadev.pdf', '_blank');
        return;
    }
    
    // Mostrar el modal inmediatamente
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Obtener elementos del modal
    const iframe = document.getElementById('cvPreview');
    const loading = document.querySelector('.cv-loading');
    const fallback = document.querySelector('.cv-fallback');
    
    const pdfUrl = 'assets/pdf/cv-miguelgarciadev.pdf';
    
    // Mostrar loading inicialmente
    if (loading) loading.style.display = 'block';
    if (fallback) fallback.style.display = 'none';
    if (iframe) iframe.style.display = 'block';
    
    // Verificar si es móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // En móviles, mostrar opciones de descarga/visualización
        setTimeout(() => {
            if (loading) loading.style.display = 'none';
            if (fallback) fallback.style.display = 'flex';
        }, 500);
    } else {
        // En desktop, intentar cargar el PDF
        if (iframe) {
            iframe.src = pdfUrl;
            
            // Detectar navegador
            const isFirefox = /firefox/i.test(navigator.userAgent);
            const isSafari = /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent);
            
            let pdfLoaded = false;
            let loadingTimer;
            
            // Función para mostrar el PDF correctamente
            const showPDF = () => {
                if (!pdfLoaded) {
                    pdfLoaded = true;
                    if (loading) loading.style.display = 'none';
                    if (iframe) iframe.style.display = 'block';
                    if (fallback) fallback.style.display = 'none';
                    console.log('PDF displayed successfully');
                }
            };
            
            // Función para mostrar fallback
            const showFallback = () => {
                if (!pdfLoaded) {
                    console.log('Showing fallback options');
                    if (loading) loading.style.display = 'none';
                    if (fallback) fallback.style.display = 'flex';
                    if (iframe) iframe.style.display = 'none';
                }
            };
            
            // Event listeners
            iframe.addEventListener('load', () => {
                console.log('Iframe load event fired');
                clearTimeout(loadingTimer);
                showPDF();
            });
            
            iframe.addEventListener('error', () => {
                console.log('Iframe error event fired');
                clearTimeout(loadingTimer);
                showFallback();
            });
            
            // Timer basado en el navegador
            if (isFirefox) {
                // Para Firefox, ser más permisivo ya que suele cargar PDFs correctamente
                loadingTimer = setTimeout(() => {
                    if (loading) loading.style.display = 'none';
                    // Si no hubo error explícito, mostrar el PDF
                    if (!pdfLoaded) {
                        showPDF();
                    }
                }, 3000);
            } else if (isSafari) {
                // Safari puede tener problemas con PDFs
                loadingTimer = setTimeout(() => {
                    if (loading) loading.style.display = 'none';
                    // Para Safari, ser más conservador
                    if (!pdfLoaded) {
                        try {
                            // Verificar si el iframe tiene contenido
                            if (iframe.contentDocument === null) {
                                showPDF(); // Probable que se cargó (cross-origin)
                            } else {
                                showFallback();
                            }
                        } catch (e) {
                            showPDF(); // Error de acceso = PDF cargado
                        }
                    }
                }, 2500);
            } else {
                // Chrome y otros navegadores
                loadingTimer = setTimeout(() => {
                    if (loading) loading.style.display = 'none';
                    if (!pdfLoaded) {
                        try {
                            if (iframe.contentDocument === null) {
                                showPDF(); // Cross-origin = PDF cargado
                            } else {
                                showFallback();
                            }
                        } catch (e) {
                            showPDF(); // Error de acceso = PDF cargado
                        }
                    }
                }, 2000);
            }
        }
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
    const pdfUrl = 'assets/pdf/cv-miguelgarciadev.pdf';
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
    const pdfUrl = 'assets/pdf/cv-miguelgarciadev.pdf';
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
 * Muestra opciones optimizadas para móviles
 */
function showMobileFriendlyOptions() {
    const loading = document.querySelector('.cv-loading');
    const fallback = document.querySelector('.cv-fallback');
    const iframe = document.getElementById('cvPreview');
    
    loading.style.display = 'none';
    iframe.style.display = 'none';
    fallback.style.display = 'flex';
    
    // Actualizar el mensaje para móviles
    const fallbackTitle = fallback.querySelector('h4');
    const fallbackText = fallback.querySelector('p');
    
    if (isMobileDevice()) {
        fallbackTitle.textContent = 'CV - Miguel Garcia';
        fallbackText.innerHTML = 'En dispositivos móviles es mejor <strong>descargar</strong> o <strong>abrir en nueva pestaña</strong> para una mejor experiencia.';
    }
}

/**
 * Verifica si el navegador puede mostrar PDFs inline
 */
function canDisplayPDF() {
    // Verificar User Agent para navegadores conocidos
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Chrome y navegadores basados en Chromium generalmente soportan PDF
    if (userAgent.includes('chrome') && !userAgent.includes('edge')) {
        return true;
    }
    
    // Firefox también soporta PDF
    if (userAgent.includes('firefox')) {
        return true;
    }
    
    // Safari en desktop suele soportar PDF
    if (userAgent.includes('safari') && !userAgent.includes('mobile')) {
        return true;
    }
    
    // Edge moderno soporta PDF
    if (userAgent.includes('edg/')) {
        return true;
    }
    
    // Verificación adicional con mimeTypes
    try {
        const hasPDFSupport = navigator.mimeTypes && 
                              navigator.mimeTypes['application/pdf'] && 
                              navigator.mimeTypes['application/pdf'].enabledPlugin;
        return hasPDFSupport;
    } catch (e) {
        return false;
    }
}

/**
 * Detecta si es dispositivo móvil
 */
function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'iemobile', 'opera mini', 'mobile'];
    
    // Verificar por user agent
    const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword));
    
    // Verificar por ancho de pantalla
    const isMobileWidth = window.innerWidth <= 768;
    
    // Verificar orientación (solo en móviles)
    const hasOrientation = typeof window.orientation !== 'undefined';
    
    return isMobileUA || (isMobileWidth && hasOrientation);
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

// Inicialización del modal CV
document.addEventListener('DOMContentLoaded', function() {
    console.log('CV Modal script loaded');
    
    // Verificar que todos los elementos necesarios existen
    const modal = document.getElementById('cvModal');
    const iframe = document.getElementById('cvPreview');
    const loading = document.querySelector('.cv-loading');
    const fallback = document.querySelector('.cv-fallback');
    
    if (!modal) console.error('CV Modal not found');
    if (!iframe) console.error('CV Iframe not found');
    if (!loading) console.error('CV Loading element not found');
    if (!fallback) console.error('CV Fallback element not found');
    
    // Agregar evento de clic para cerrar modal
    if (modal) {
        const backdrop = modal.querySelector('.cv-modal-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', closeCVModal);
        }
    }
});
