# 🚀 Portafolio Personal - Miguel Garcia

![Portafolio Preview](https://img.shields.io/badge/Estado-Activo-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Un sitio web de portafolio personal moderno y completamente responsivo diseñado para mostrar proyectos, habilidades y experiencia profesional. Desarrollado con tecnologías web puras y enfoque en la experiencia del usuario.

## 📋 Tabla de Contenidos

- [🌟 Características](#-características)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [📱 Secciones del Sitio](#-secciones-del-sitio)
- [🎨 Personalización](#-personalización)
- [📞 Contacto](#-contacto)
- [📄 Licencia](#-licencia)

## 🌟 Características

### ✨ Diseño y UX
- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y efectos visuales
- **Completamente Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Animaciones Suaves**: Efectos de transición y animaciones CSS/JS personalizadas
- **Tema Coherente**: Paleta de colores profesional y tipografía moderna

### 🔧 Funcionalidades Técnicas
- **Arquitectura Modular**: Código organizado en módulos separados para fácil mantenimiento
- **Navegación Suave**: Scroll suave entre secciones con indicadores activos
- **Modales Interactivos**: Galerías de proyectos con navegación de imágenes
- **Formularios Funcionales**: Integración con servicios de contacto
- **Optimización SEO**: Meta tags y estructura semántica optimizada

### 🎯 Características Específicas
- **Efecto Typewriter**: Animación de texto dinámico en la sección hero
- **Contador Animado**: Estadísticas con animaciones de conteo
- **Galería de Certificados**: Modal para visualizar certificaciones
- **Vista Previa de CV**: Visualizador integrado de PDF
- **Integración WhatsApp**: Contacto directo mediante WhatsApp

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript (ES6+)**: Interactividad y funcionalidades dinámicas

### Librerías y Frameworks
- **Font Awesome 6.4.0**: Iconografía profesional
- **AOS (Animate On Scroll)**: Animaciones al hacer scroll
- **Google Fonts**: Tipografías Poppins y Montserrat

### Herramientas de Desarrollo
- **CSS Custom Properties**: Variables CSS para theming
- **Responsive Design**: Media queries y diseño adaptativo
- **Intersection Observer API**: Detección de elementos visibles

## 📁 Estructura del Proyecto

```
portfolio-website/
├── index.html                    # Archivo principal del sitio
├── README.md                     # Documentación del proyecto
├── LIMPIEZA_REALIZADA.md        # Log de optimizaciones realizadas
│
├── 📁 css/                      # Hojas de estilo organizadas por sección
│   ├── styles.css               # Estilos globales y variables CSS
│   ├── home.css                 # Estilos de la sección Hero/Inicio
│   ├── about.css                # Estilos de la sección Sobre Mí
│   ├── skills.css               # Estilos de habilidades y certificaciones
│   ├── portfolio.css            # Estilos de proyectos y modales
│   ├── cta-section.css          # Estilos de llamadas a la acción
│   ├── contact.css              # Estilos de la sección de contacto
│   └── footer.css               # Estilos del pie de página
│
├── 📁 js/                       # Scripts JavaScript modulares
│   ├── main.js                  # Funcionalidades principales y navegación
│   ├── home.js                  # Efecto typewriter y animaciones hero
│   ├── about.js                 # Contadores animados y efectos parallax
│   ├── skills.js                # Animaciones de barras de progreso
│   ├── portfolio.js             # Modales de proyectos y galerías
│   ├── cta-section.js           # Animaciones de elementos flotantes
│   ├── contact.js               # Funcionalidades de contacto y FAQ
│   └── cv-modal.js              # Visualizador de CV en PDF
│
└── 📁 assets/                   # Recursos multimedia
    ├── 📁 img/                  # Imágenes principales
    │   ├── Miguel.jpeg          # Foto de perfil principal
    │   ├── Miguel2.png          # Foto secundaria para About
    │   ├── MIGUELSINFONDO.png   # Foto con fondo transparente
    │   ├── coursera-logo.png    # Logo de Coursera
    │   ├── edteam.png           # Logo de EDteam
    │   └── oracle.jpg           # Logo de Oracle Academy
    │
    ├── 📁 certificates/         # Certificaciones profesionales
    │   ├── JAVA.png             # Certificado Java Oracle
    │   ├── Certificado-talento.jpg  # Certificado Talento Tech
    │   ├── certificado-ruta-html-2020.png    # Certificado HTML
    │   ├── certificado-ruta-javascript.png   # Certificado JavaScript
    │   ├── certificado-ruta-python.png       # Certificado Python
    │   └── tech.jpg             # Logo Talento Tech
    │
    ├── 📁 proyectos/            # Capturas de pantalla de proyectos
    │   ├── NOMINA1.png          # SVFUPC - Vista 1
    │   ├── NOMINA2.png          # SVFUPC - Vista 2
    │   ├── NOMINA3.png          # SVFUPC - Vista 3
    │   ├── DOMIBOT1.png         # DomiBot - Vista 1
    │   ├── DOMIBOT2.png         # DomiBot - Vista 2
    │   ├── DOMIBOT3.png         # DomiBot - Vista 3
    │   ├── DOMIBOT4.png         # DomiBot - Vista 4
    │   ├── DOMIBOT5.png         # DomiBot - Vista 5
    │   ├── DOMIBOT6.png         # DomiBot - Vista 6
    │   ├── CONVERSACION1.png    # Sistema de chat - Vista 1
    │   ├── CONVERSACION2.png    # Sistema de chat - Vista 2
    │   └── PORTAFOLIO.png       # Captura del portafolio actual
    │
    └── 📁 pdf/                  # Documentos
        └── cv1.pdf              # Currículum Vitae en PDF
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- Navegador web moderno (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Servidor web local (opcional, para desarrollo)

### Instalación Rápida

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/miguelg-dev/portfolio-website.git
   cd portfolio-website
   ```

2. **Abrir directamente en el navegador**
   ```bash
   # Método 1: Abrir index.html directamente
   open index.html
   
   # Método 2: Usar servidor local con Python
   python -m http.server 8000
   
   # Método 3: Usar Live Server (VS Code extension)
   # Clic derecho en index.html > "Open with Live Server"
   ```

3. **Acceder al sitio**
   - Directo: `file:///ruta/al/portfolio-website/index.html`
   - Servidor local: `http://localhost:8000`

### Configuración de Desarrollo

```bash
# Para desarrolladores que deseen modificar el código
git clone https://github.com/miguelg-dev/portfolio-website.git
cd portfolio-website

# Instalar extensiones recomendadas para VS Code:
# - Live Server
# - Auto Rename Tag
# - CSS Peek
# - JavaScript (ES6) code snippets
```

## 📱 Secciones del Sitio

### 🏠 **Inicio (Hero)**
- Presentación personal con efecto typewriter
- Estadísticas profesionales animadas
- Enlaces a redes sociales
- Botones de acción principales

### 👤 **Sobre Mí**
- Biografía profesional detallada
- Información de contacto y disponibilidad
- Contadores animados de logros
- Botones para ver/descargar CV

### 🛠️ **Habilidades**
- **Frontend**: HTML5, CSS3, JavaScript, React
- **Backend**: Python, Java, Node.js, Bases de Datos
- **Herramientas**: Git, GitHub, Figma, VS Code
- **Certificaciones**: Visualización modal de certificados

### 💼 **Proyectos**
- **SVFUPC**: Simulador de viabilidad financiera universitaria
- **DomiBot**: Asistente virtual para restaurantes (Telegram Bot)
- **Portafolio Web**: Este mismo sitio web
- Modal con galería de imágenes navegable

### 📞 **Contacto**
- Información de contacto profesional
- Integración directa con WhatsApp
- Sección de preguntas frecuentes
- Enlaces a redes sociales

## 🎨 Personalización

### Cambiar Colores del Tema

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #6c5ce7;        /* Color principal */
    --secondary-color: #a29bfe;      /* Color secundario */
    --accent-color: #fd79a8;         /* Color de acento */
    --text-primary: #2d3436;         /* Texto principal */
    --text-secondary: #636e72;       /* Texto secundario */
    --background: #ffffff;           /* Fondo principal */
    --surface: #f8f9fa;             /* Superficie de cards */
}
```

### Agregar Nuevos Proyectos

1. **Agregar imágenes** en `assets/proyectos/`

2. **Actualizar datos** en `js/portfolio.js`:
```javascript
const projectsData = {
    nuevoProyecto: {
        title: 'Título del Proyecto',
        category: 'Categoría',
        description: 'Descripción detallada...',
        images: [
            'assets/proyectos/proyecto1.png',
            'assets/proyectos/proyecto2.png'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/usuario/repo',
        demoLink: 'https://demo-url.com'
    }
};
```

3. **Agregar HTML** en `index.html`:
```html
<div class="portfolio-item" data-category="web">
    <div class="portfolio-card">
        <!-- Contenido del proyecto -->
        <a href="javascript:void(0)" onclick="openProjectModal('nuevoProyecto')">
            Ver Más
        </a>
    </div>
</div>
```

### Actualizar Información Personal

- **Datos personales**: Editar directamente en `index.html`
- **CV**: Reemplazar `assets/pdf/cv1.pdf`
- **Fotos**: Reemplazar imágenes en `assets/img/`
- **Certificados**: Actualizar `assets/certificates/`
- **Favicon**: Cambiar el icono del sitio modificando las etiquetas `<link rel="icon">` en `index.html`

## 🔧 Mantenimiento y Updates

### Limpieza de Código
- Se ha realizado una limpieza completa documentada en `LIMPIEZA_REALIZADA.md`
- Eliminados archivos obsoletos y comentarios innecesarios
- Optimizado rendimiento y estructura de archivos

### Buenas Prácticas Implementadas
- Código modular y mantenible
- Nombres de archivos descriptivos
- Comentarios en funciones complejas
- Estructura CSS organizada por componentes

## 📊 Rendimiento y Optimización

- **Carga Rápida**: Imágenes optimizadas y código minimalista
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Atributos aria y navegación por teclado
- **Cross-Browser**: Compatible con navegadores modernos

## 📞 Contacto

**Miguel Garcia** - Desarrollador Full Stack

- 🌐 **Sitio Web**: [Portafolio](https://miguelg-dev.github.io/portfolio)
- 💼 **LinkedIn**: [@miguelgarcia-dev-740b1b346](https://www.linkedin.com/in/miguelgarcia-dev-740b1b346)
- 🐱 **GitHub**: [@miguelg-dev](https://github.com/miguelg-dev)
- 📱 **WhatsApp**: [+57 311 731 2426](https://wa.me/573117312426?text=Hola%20Miguel,%20estoy%20interesado%20en%20tus%20servicios%20de%20desarrollo.)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

### 🌟 ¿Te gusta el proyecto?

Si este portafolio te ha sido útil o te ha gustado, considera:

- ⭐ **Dar una estrella** al repositorio
- 🍴 **Hacer un fork** para tu propio uso
- 📢 **Compartir** con otros desarrolladores
- 💬 **Abrir un issue** para sugerencias

---

**Desarrollado con ❤️ por Miguel Garcia • © 2025**#  