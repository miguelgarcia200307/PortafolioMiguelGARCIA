// Sistema de cambio de idioma
class LanguageSystem {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'es';
        this.translations = {
            es: {
                // Navegación
                nav_home: "Inicio",
                nav_about: "Sobre Mí",
                nav_skills: "Habilidades",
                nav_portfolio: "Proyectos",
                nav_contact: "Contacto",
                
                // Hero Section
                hero_badge: "Disponible para proyectos",
                hero_title: "Hola, soy",
                hero_typewriter_prefix: "Especialista en",
                hero_description: "Transformo ideas en experiencias digitales excepcionales, combinando diseño moderno con desarrollo técnico avanzado.",
                hero_btn_projects: "Ver Proyectos",
                hero_btn_contact: "Contáctame",
                hero_social_label: "Sígueme en",
                hero_stats_projects: "Proyectos",
                hero_stats_technologies: "Tecnologías",
                hero_stats_satisfaction: "Satisfacción",
                
                // About Section
                about_title: "Sobre Mí",
                about_subtitle: "Conóceme mejor",
                about_main_title: "Desarrollador Web Creativo y Apasionado",
                about_description: "Soy estudiante de Ingeniería de Sistemas en sexto semestre con interés en el desarrollo de software. En mis primeros años de carrera, he trabajado en diversos proyectos, incluyendo una página web con la que gané una hackatón organizada por Talentotech. Tengo conocimientos en Python, C++, Java, JavaScript, CSS y HTML, y me encuentro en el quinto semestre de mi carrera. Mi objetivo profesional es especializarme en Full Stack Development, combinando habilidades en frontend y backend para crear aplicaciones funcionales. Además, he obtenido varios certificados que respaldan mis conocimientos en el área. Soy una persona dedicada al aprendizaje continuo, con interés en aplicar nuevas tecnologías para resolver problemas de manera eficiente.",
                about_experience_title: "Experiencia práctica",
                about_experience_desc: "+3 años en desarrollo web",
                about_education_title: "Educación",
                about_education_desc: "Ingeniería en Sistemas Computacionales",
                about_languages_title: "Idiomas",
                about_languages_desc: "Español (nativo), Inglés (Básico)",
                about_availability_title: "Disponibilidad",
                about_availability_desc: "Freelance, Tiempo Completo, Proyectos",
                about_projects_completed: "Proyectos Completados",
                about_satisfied_clients: "Clientes Satisfechos",
                about_awards_received: "Premios Recibidos",
                about_cv_view: "Ver CV",
                about_years_experience: "Años de Experiencia",
                
                // Skills Section
                skills_title: "Habilidades",
                skills_subtitle: "Mis especialidades",
                skills_frontend_title: "Frontend Development",
                skills_frontend_desc: "Creando interfaces modernas y responsivas",
                skills_backend_title: "Backend Development",
                skills_backend_desc: "Construyendo APIs robustas y escalables",
                skills_tools_title: "Herramientas & Otras Habilidades",
                skills_tools_desc: "Tecnologías adicionales que manejo",
                skills_level_advanced: "Avanzado",
                skills_level_intermediate: "Intermedio",
                skills_level_basic: "Básico",
                skills_certifications_title: "Certificaciones y Educación Técnica",
                skills_view_certificate: "Ver certificado",
                
                // Portfolio Section
                portfolio_title: "Portafolio",
                portfolio_subtitle: "Trabajos seleccionados",
                portfolio_category_web: "Desarrollo Web",
                portfolio_category_app: "Programa de Escritorio",
                portfolio_featured: "Destacado",
                portfolio_view_more: "Ver Más",
                portfolio_code: "Código",
                portfolio_view_details: "Ver detalles",
                portfolio_view_demo: "Ver Demo",
                
                // CTA Section
                cta_badge: "Disponible para nuevos proyectos",
                cta_title: "¿Tienes un <span class=\"highlight\">proyecto</span> en mente?",
                cta_description: "Estoy disponible para proyectos freelance y colaboraciones. Convirtamos tu idea en una realidad digital excepcional.",
                cta_feature_custom: "Desarrollo personalizado",
                cta_feature_responsive: "Diseño moderno y responsivo",
                cta_feature_delivery: "Entrega rápida y eficiente",
                cta_btn_contact: "Contáctame",
                cta_btn_whatsapp: "WhatsApp",
                cta_stats_completed: "Proyectos completados",
                cta_stats_satisfied: "Clientes satisfechos",
                cta_stats_response: "Tiempo de respuesta",
                
                // Contact Section
                contact_title: "Contacto",
                contact_subtitle: "Trabajemos juntos",
                contact_card_desc: "¡Conversemos sobre tu proyecto! Envíame un mensaje y te responderé inmediatamente.",
                contact_form_name: "Nombre completo",
                contact_form_email: "Correo electrónico",
                contact_form_subject: "Asunto",
                contact_form_message: "Mensaje",
                contact_form_send: "Enviar Mensaje",
                contact_info_title: "Información de Contacto",
                contact_whatsapp: "WhatsApp",
                contact_email: "Email",
                contact_location: "Ubicación",
                contact_immediate_response: "Respuesta inmediata",
                contact_fluid_conversation: "Conversación fluida",
                contact_direct_title: "Contacto Directo",
                contact_direct_description: "¡Conversemos sobre tu proyecto! Envíame un mensaje y te responderé inmediatamente.",
                contact_any_device: "Desde cualquier dispositivo",
                contact_preview_message: "¡Hola! 👋 Gracias por contactarme. Cuéntame sobre tu proyecto y trabajemos juntos para hacerlo realidad.",
                contact_open_whatsapp: "Abrir WhatsApp",
                contact_alternative: "O también puedes:",
                contact_secure_communication: "Comunicación segura",
                contact_personalized_attention: "Atención personalizada",
                contact_secure_connection: "Conexión segura",
                contact_faq_title: "Preguntas Frecuentes",
                contact_faq_subtitle: "Algunas respuestas que podrían ser útiles",
                contact_faq_process: "¿Cómo es tu proceso de trabajo?",
                contact_faq_process_answer: "Mi proceso comienza con una reunión inicial para entender tus necesidades, seguido de una propuesta detallada. Trabajo con metodologías ágiles, entregando avances periódicos y manteniendo comunicación constante durante todo el proyecto.",
                contact_faq_rates: "¿Cuáles son tus tarifas?",
                contact_faq_rates_answer: "Mis tarifas varían según el tipo y alcance del proyecto. Puedo trabajar con presupuestos por proyecto o por hora, adaptándome a tus necesidades. Contáctame para recibir una cotización personalizada.",
                contact_faq_delivery: "¿Cuál es tu tiempo de entrega promedio?",
                contact_faq_delivery_answer: "Los tiempos de entrega dependen de la complejidad del proyecto. Un sitio web básico puede estar listo en 2-3 semanas, mientras que proyectos más complejos pueden tomar entre 1-3 meses. Siempre acordamos un cronograma realista al inicio.",
                
                // Footer
                footer_copyright: "© 2025 Miguel Garcia. Todos los derechos reservados.",
                footer_made_with: "Hecho con",
                footer_using_tech: "usando HTML, CSS & JavaScript",
                footer_back_to_top: "Volver arriba",
                footer_quick_links: "Enlaces Rápidos",
                footer_services: "Servicios",
                footer_web_development: "Desarrollo Web",
                footer_mobile_apps: "Aplicaciones Móviles",
                footer_ui_design: "Diseño UI/UX",
                footer_backend: "Backend Development",
                footer_seo: "SEO & Optimización",
                footer_contact_info: "Contacto",
                footer_phone: "Teléfono",
                footer_location_name: "Colombia",
                footer_privacy_policy: "Política de Privacidad",
                footer_terms_of_use: "Términos de Uso",
                footer_cookies: "Cookies",
                footer_available_for_projects: "Disponible para proyectos",
                footer_tagline: "Transformando ideas en experiencias digitales excepcionales",
                
                // Modal texts
                modal_download: "Descargar",
                modal_fullscreen: "Pantalla completa",
                modal_close: "Cerrar",
                modal_cv_title: "Currículum Vitae - Miguel Garcia",
                modal_loading: "Cargando CV...",
                modal_preview_not_available: "Vista previa no disponible",
                modal_browser_not_support: "Tu navegador no soporta la vista previa de PDF. Puedes descargar el archivo directamente o abrirlo en una nueva pestaña.",
                modal_download_cv: "Descargar CV",
                modal_open_new_tab: "Abrir en nueva pestaña",
                
                // Project data
                project_svfupc_title: "SVFUPC - Simulador de Viabilidad Financiera",
                project_svfupc_description: "Este proyecto tiene como objetivo crear una aplicación web que simule el cálculo de la nómina de docentes universitarios; tanto de planta, como ocasionales, según el Decreto 1279 de 2002 y el Acuerdo 006 de 2018.",
                project_domibot_title: "DomiBot: Tu Asistente Virtual para Pedidos y Reservas en Restaurantes",
                project_domibot_description: "Aplicativo de escritorio para restaurantes que automatiza la atención al cliente mediante un asistente virtual de Telegram. Integra módulos para gestionar pedidos, reservas con seguro, promociones, pagos y configuración dinámica del menú.",
                project_portfolio_title: "Mi Portafolio WEB",
                project_portfolio_description: "Sitio web desarrollado desde cero para mostrar mis proyectos, habilidades y experiencia como desarrollador. Implementado con HTML, CSS y JavaScript, con diseño responsivo y enfoque en rendimiento, accesibilidad y presentación profesional.",
                project_conversation_title: "Proyecto de Conversación",
                project_conversation_description: "Sistema de chat y conversación interactivo con funcionalidades avanzadas de comunicación.",
                
                // Certificaciones
                cert_java_title: "Curso: JAVA FUNDAMENTAL",
                cert_java_provider: "ORACLE ACADEMY",
                cert_java_description: "Certificación oficial de Oracle en Java Fundamental, enfocada en Programación Orientada a Objetos. Ideal para iniciar tu carrera como desarrollador con una base sólida y reconocida a nivel internacional.",
                cert_java_date: "Noviembre 2024",
                cert_java_credential: "CERTIFICADO",
                
                cert_talento_title: "Curso: PROGRAMACIÓN BÁSICO",
                cert_talento_provider: "Talento Tech",
                cert_talento_description: "Certificación en programación básica proporcionada por Talento Tech. Fundamentos sólidos de programación, lógica computacional y primeros pasos en desarrollo de software.",
                cert_talento_date: "Noviembre 2024",
                cert_talento_credential: "CERTIFICADO",
                
                cert_sql_title: "SQL & Databases",
                cert_sql_provider: "Coursera",
                cert_sql_description: "Especialización en diseño de bases de datos relacionales y SQL avanzado.",
                cert_sql_date: "Diciembre 2023",
                cert_sql_credential: "Credencial: SQL-2023-5678",
                
                cert_html_title: "HTML Desde Cero",
                cert_html_provider: "EDteam",
                cert_html_description: "Certificación en HTML desde Cero por EDteam: Formación completa y práctica para dominar la estructura de páginas web.",
                cert_html_date: "Noviembre 2022",
                cert_html_credential: "CERTIFICADO",
                
                cert_python_title: "Python desde cero 2023",
                cert_python_provider: "EDteam",
                cert_python_description: "Certificación en Python desde Cero 2023: Aprende a programar con uno de los lenguajes más demandados del mundo. Curso práctico y actualizado.",
                cert_python_date: "Noviembre 2024",
                cert_python_credential: "CERTIFICADO",
                
                cert_javascript_title: "JavaScript desde cero",
                cert_javascript_provider: "EDteam",
                cert_javascript_description: "Certificación en JavaScript desde Cero: Domina el lenguaje clave del desarrollo web. Aprende de forma práctica a crear sitios interactivos.",
                cert_javascript_date: "Noviembre 2024",
                cert_javascript_credential: "CERTIFICADO",
                
                // Typewriter texts
                typewriter_texts: [
                    "Desarrollo Full Stack",
                    "Diseño Web Moderno",
                    "Soluciones Digitales",
                    "Programación Avanzada"
                ],
                
                // Test QA keys
                test_status: "✓ Test de idiomas - Todos los elementos configurados correctamente",
                test_title: "Test Final QA - Sistema de Idiomas",
                test_nav_title: "Navegación",
                test_hero_title: "Sección Hero",
                test_cert_title: "Certificaciones",
                test_projects_title: "Proyectos",
                test_modal_title: "Modal y Botones",
                test_contact_title: "Contacto",
                test_faq_title: "FAQ",
                test_footer_title: "Footer",
                test_open_modal: "Abrir Modal de Prueba",
                test_modal_header: "Modal de Prueba",
                test_modal_content: "Este es un modal de prueba para verificar que los botones y contenido se traducen correctamente."
            },
            en: {
                // Navigation
                nav_home: "Home",
                nav_about: "About Me",
                nav_skills: "Skills",
                nav_portfolio: "Projects",
                nav_contact: "Contact",
                
                // Hero Section
                hero_badge: "Available for projects",
                hero_title: "Hello, I'm",
                hero_typewriter_prefix: "Specialist in",
                hero_description: "I transform ideas into exceptional digital experiences, combining modern design with advanced technical development.",
                hero_btn_projects: "View Projects",
                hero_btn_contact: "Contact Me",
                hero_social_label: "Follow me on",
                hero_stats_projects: "Projects",
                hero_stats_technologies: "Technologies",
                hero_stats_satisfaction: "Satisfaction",
                
                // About Section
                about_title: "About Me",
                about_subtitle: "Get to know me better",
                about_main_title: "Creative and Passionate Web Developer",
                about_description: "I'm a sixth-semester Systems Engineering student with an interest in software development. In my early career years, I've worked on various projects, including a website that won a hackathon organized by Talentotech. I have knowledge in Python, C++, Java, JavaScript, CSS, and HTML, and I'm in my fifth semester. My professional goal is to specialize in Full Stack Development, combining frontend and backend skills to create functional applications. Additionally, I've obtained several certificates that support my knowledge in the area. I'm a person dedicated to continuous learning, with interest in applying new technologies to solve problems efficiently.",
                about_experience_title: "Practical Experience",
                about_experience_desc: "+3 years in web development",
                about_education_title: "Education",
                about_education_desc: "Computer Systems Engineering",
                about_languages_title: "Languages",
                about_languages_desc: "Spanish (native), English (Basic)",
                about_availability_title: "Availability",
                about_availability_desc: "Freelance, Full Time, Projects",
                about_projects_completed: "Completed Projects",
                about_satisfied_clients: "Satisfied Clients",
                about_awards_received: "Awards Received",
                about_cv_view: "View CV",
                about_years_experience: "Years of Experience",
                
                // Skills Section
                skills_title: "Skills",
                skills_subtitle: "My specialties",
                skills_frontend_title: "Frontend Development",
                skills_frontend_desc: "Creating modern and responsive interfaces",
                skills_backend_title: "Backend Development",
                skills_backend_desc: "Building robust and scalable APIs",
                skills_tools_title: "Tools & Other Skills",
                skills_tools_desc: "Additional technologies I handle",
                skills_level_advanced: "Advanced",
                skills_level_intermediate: "Intermediate",
                skills_level_basic: "Basic",
                skills_certifications_title: "Certifications and Technical Education",
                skills_view_certificate: "View certificate",
                
                // Portfolio Section
                portfolio_title: "Portfolio",
                portfolio_subtitle: "Selected works",
                portfolio_category_web: "Web Development",
                portfolio_category_app: "Desktop Program",
                portfolio_featured: "Featured",
                portfolio_view_more: "View More",
                portfolio_code: "Code",
                portfolio_view_details: "View details",
                portfolio_view_demo: "View Demo",
                
                // CTA Section
                cta_badge: "Available for new projects",
                cta_title: "Do you have a <span class=\"highlight\">project</span> in mind?",
                cta_description: "I'm available for freelance projects and collaborations. Let's turn your idea into an exceptional digital reality.",
                cta_feature_custom: "Custom development",
                cta_feature_responsive: "Modern and responsive design",
                cta_feature_delivery: "Fast and efficient delivery",
                cta_btn_contact: "Contact Me",
                cta_btn_whatsapp: "WhatsApp",
                cta_stats_completed: "Completed projects",
                cta_stats_satisfied: "Satisfied clients",
                cta_stats_response: "Response time",
                
                // Contact Section
                contact_title: "Contact",
                contact_subtitle: "Let's work together",
                contact_card_desc: "Let's talk about your project! Send me a message and I'll respond immediately.",
                contact_form_name: "Full name",
                contact_form_email: "Email address",
                contact_form_subject: "Subject",
                contact_form_message: "Message",
                contact_form_send: "Send Message",
                contact_info_title: "Contact Information",
                contact_whatsapp: "WhatsApp",
                contact_email: "Email",
                contact_location: "Location",
                contact_immediate_response: "Immediate response",
                contact_fluid_conversation: "Fluid conversation",
                contact_direct_title: "Direct Contact",
                contact_direct_description: "Let's talk about your project! Send me a message and I'll respond immediately.",
                contact_any_device: "From any device",
                contact_preview_message: "Hello! 👋 Thanks for contacting me. Tell me about your project and let's work together to make it a reality.",
                contact_open_whatsapp: "Open WhatsApp",
                contact_alternative: "Or you can also:",
                contact_secure_communication: "Secure communication",
                contact_personalized_attention: "Personalized attention",
                contact_secure_connection: "Secure connection",
                contact_faq_title: "Frequently Asked Questions",
                contact_faq_subtitle: "Some answers that might be helpful",
                contact_faq_process: "What is your work process?",
                contact_faq_process_answer: "My process begins with an initial meeting to understand your needs, followed by a detailed proposal. I work with agile methodologies, delivering periodic progress and maintaining constant communication throughout the project.",
                contact_faq_rates: "What are your rates?",
                contact_faq_rates_answer: "My rates vary depending on the type and scope of the project. I can work with project-based or hourly budgets, adapting to your needs. Contact me to receive a personalized quote.",
                contact_faq_delivery: "What is your average delivery time?",
                contact_faq_delivery_answer: "Delivery times depend on project complexity. A basic website can be ready in 2-3 weeks, while more complex projects can take 1-3 months. We always agree on a realistic timeline at the start.",
                
                // Footer
                footer_copyright: "© 2025 Miguel Garcia. All rights reserved.",
                footer_made_with: "Made with",
                footer_using_tech: "using HTML, CSS & JavaScript",
                footer_back_to_top: "Back to top",
                footer_quick_links: "Quick Links",
                footer_services: "Services",
                footer_web_development: "Web Development",
                footer_mobile_apps: "Mobile Applications",
                footer_ui_design: "UI/UX Design",
                footer_backend: "Backend Development",
                footer_seo: "SEO & Optimization",
                footer_contact_info: "Contact",
                footer_phone: "Phone",
                footer_location_name: "Colombia",
                footer_privacy_policy: "Privacy Policy",
                footer_terms_of_use: "Terms of Use",
                footer_cookies: "Cookies",
                footer_available_for_projects: "Available for projects",
                footer_tagline: "Transforming ideas into exceptional digital experiences",
                
                // Modal texts
                modal_download: "Download",
                modal_fullscreen: "Fullscreen",
                modal_close: "Close",
                modal_cv_title: "Resume - Miguel Garcia",
                modal_loading: "Loading CV...",
                modal_preview_not_available: "Preview not available",
                modal_browser_not_support: "Your browser doesn't support PDF preview. You can download the file directly or open it in a new tab.",
                modal_download_cv: "Download CV",
                modal_open_new_tab: "Open in new tab",
                
                // Project data
                project_svfupc_title: "SVFUPC - Financial Viability Simulator",
                project_svfupc_description: "This project aims to create a web application that simulates the calculation of university teacher payroll; both permanent and occasional, according to Decree 1279 of 2002 and Agreement 006 of 2018.",
                project_domibot_title: "DomiBot: Your Virtual Assistant for Restaurant Orders and Reservations",
                project_domibot_description: "Desktop application for restaurants that automates customer service through a Telegram virtual assistant. Integrates modules to manage orders, reservations with insurance, promotions, payments and dynamic menu configuration.",
                project_portfolio_title: "My WEB Portfolio",
                project_portfolio_description: "Website developed from scratch to showcase my projects, skills and experience as a developer. Implemented with HTML, CSS and JavaScript, with responsive design and focus on performance, accessibility and professional presentation.",
                project_conversation_title: "Conversation Project",
                project_conversation_description: "Interactive chat and conversation system with advanced communication functionalities.",
                
                // Certificaciones
                cert_java_title: "Course: JAVA FUNDAMENTAL",
                cert_java_provider: "ORACLE ACADEMY",
                cert_java_description: "Official Oracle certification in Java Fundamental, focused on Object-Oriented Programming. Ideal for starting your career as a developer with a solid and internationally recognized foundation.",
                cert_java_date: "November 2024",
                cert_java_credential: "CERTIFICATE",
                
                cert_talento_title: "Course: BASIC PROGRAMMING",
                cert_talento_provider: "Talento Tech",
                cert_talento_description: "Basic programming certification provided by Talento Tech. Solid programming fundamentals, computational logic and first steps in software development.",
                cert_talento_date: "November 2024",
                cert_talento_credential: "CERTIFICATE",
                
                cert_sql_title: "SQL & Databases",
                cert_sql_provider: "Coursera",
                cert_sql_description: "Specialization in relational database design and advanced SQL.",
                cert_sql_date: "December 2023",
                cert_sql_credential: "Credential: SQL-2023-5678",
                
                cert_html_title: "HTML From Scratch",
                cert_html_provider: "EDteam",
                cert_html_description: "HTML From Scratch certification by EDteam: Complete and practical training to master web page structure.",
                cert_html_date: "November 2022",
                cert_html_credential: "CERTIFICATE",
                
                cert_python_title: "Python from scratch 2023",
                cert_python_provider: "EDteam",
                cert_python_description: "Python From Scratch 2023 certification: Learn to program with one of the world's most in-demand languages. Practical and updated course.",
                cert_python_date: "November 2024",
                cert_python_credential: "CERTIFICATE",
                
                cert_javascript_title: "JavaScript from scratch",
                cert_javascript_provider: "EDteam",
                cert_javascript_description: "JavaScript From Scratch certification: Master the key language of web development. Learn practically to create interactive sites.",
                cert_javascript_date: "November 2024",
                cert_javascript_credential: "CERTIFICATE",
                
                // Typewriter texts
                typewriter_texts: [
                    "Full Stack Development",
                    "Modern Web Design",
                    "Digital Solutions",
                    "Advanced Programming"
                ],
                
                // Test QA keys
                test_status: "✓ Language test - All elements configured correctly",
                test_title: "Final QA Test - Language System",
                test_nav_title: "Navigation",
                test_hero_title: "Hero Section",
                test_cert_title: "Certifications",
                test_projects_title: "Projects",
                test_modal_title: "Modal and Buttons",
                test_contact_title: "Contact",
                test_faq_title: "FAQ",
                test_footer_title: "Footer",
                test_open_modal: "Open Test Modal",
                test_modal_header: "Test Modal",
                test_modal_content: "This is a test modal to verify that buttons and content are translated correctly."
            },
            pt: {
                // Navegação
                nav_home: "Início",
                nav_about: "Sobre Mim",
                nav_skills: "Habilidades",
                nav_portfolio: "Projetos",
                nav_contact: "Contato",
                
                // Hero Section
                hero_badge: "Disponível para projetos",
                hero_title: "Olá, eu sou",
                hero_typewriter_prefix: "Especialista em",
                hero_description: "Transformo ideias em experiências digitais excepcionais, combinando design moderno com desenvolvimento técnico avançado.",
                hero_btn_projects: "Ver Projetos",
                hero_btn_contact: "Entre em Contato",
                hero_social_label: "Siga-me em",
                hero_stats_projects: "Projetos",
                hero_stats_technologies: "Tecnologias",
                hero_stats_satisfaction: "Satisfação",
                
                // About Section
                about_title: "Sobre Mim",
                about_subtitle: "Conheça-me melhor",
                about_main_title: "Desenvolvedor Web Criativo e Apaixonado",
                about_description: "Sou estudante de Engenharia de Sistemas no sexto semestre com interesse no desenvolvimento de software. Em meus primeiros anos de carreira, trabalhei em diversos projetos, incluindo um site com o qual ganhei um hackathon organizado pela Talentotech. Tenho conhecimento em Python, C++, Java, JavaScript, CSS e HTML, e estou no quinto semestre. Meu objetivo profissional é me especializar em Desenvolvimento Full Stack, combinando habilidades de frontend e backend para criar aplicações funcionais. Além disso, obtive vários certificados que respaldam meus conhecimentos na área. Sou uma pessoa dedicada ao aprendizado contínuo, com interesse em aplicar novas tecnologias para resolver problemas de forma eficiente.",
                about_experience_title: "Experiência Prática",
                about_experience_desc: "+3 anos em desenvolvimento web",
                about_education_title: "Educação",
                about_education_desc: "Engenharia em Sistemas Computacionais",
                about_languages_title: "Idiomas",
                about_languages_desc: "Espanhol (nativo), Inglês (Básico)",
                about_availability_title: "Disponibilidade",
                about_availability_desc: "Freelance, Tempo Integral, Projetos",
                about_projects_completed: "Projetos Concluídos",
                about_satisfied_clients: "Clientes Satisfeitos",
                about_awards_received: "Prêmios Recebidos",
                about_cv_view: "Ver CV",
                about_years_experience: "Anos de Experiência",
                
                // Skills Section
                skills_title: "Habilidades",
                skills_subtitle: "Minhas especialidades",
                skills_frontend_title: "Desenvolvimento Frontend",
                skills_frontend_desc: "Criando interfaces modernas e responsivas",
                skills_backend_title: "Desenvolvimento Backend",
                skills_backend_desc: "Construindo APIs robustas e escaláveis",
                skills_tools_title: "Ferramentas e Outras Habilidades",
                skills_tools_desc: "Tecnologias adicionais que domino",
                skills_level_advanced: "Avançado",
                skills_level_intermediate: "Intermediário",
                skills_level_basic: "Básico",
                skills_certifications_title: "Certificações e Educação Técnica",
                skills_view_certificate: "Ver certificado",
                
                // Portfolio Section
                portfolio_title: "Portfólio",
                portfolio_subtitle: "Trabalhos selecionados",
                portfolio_category_web: "Desenvolvimento Web",
                portfolio_category_app: "Programa Desktop",
                portfolio_featured: "Destaque",
                portfolio_view_more: "Ver Mais",
                portfolio_code: "Código",
                portfolio_view_details: "Ver detalhes",
                portfolio_view_demo: "Ver Demo",
                
                // CTA Section
                cta_badge: "Disponível para novos projetos",
                cta_title: "Você tem um <span class=\"highlight\">projeto</span> em mente?",
                cta_description: "Estou disponível para projetos freelance e colaborações. Vamos transformar sua ideia em uma realidade digital excepcional.",
                cta_feature_custom: "Desenvolvimento personalizado",
                cta_feature_responsive: "Design moderno e responsivo",
                cta_feature_delivery: "Entrega rápida e eficiente",
                cta_btn_contact: "Entre em Contato",
                cta_btn_whatsapp: "WhatsApp",
                cta_stats_completed: "Projetos concluídos",
                cta_stats_satisfied: "Clientes satisfeitos",
                cta_stats_response: "Tempo de resposta",
                
                // Contact Section
                contact_title: "Contato",
                contact_subtitle: "Vamos trabalhar juntos",
                contact_card_desc: "Vamos conversar sobre seu projeto! Envie-me uma mensagem e responderei imediatamente.",
                contact_form_name: "Nome completo",
                contact_form_email: "Endereço de email",
                contact_form_subject: "Assunto",
                contact_form_message: "Mensagem",
                contact_form_send: "Enviar Mensagem",
                contact_info_title: "Informações de Contato",
                contact_whatsapp: "WhatsApp",
                contact_email: "Email",
                contact_location: "Localização",
                contact_immediate_response: "Resposta imediata",
                contact_fluid_conversation: "Conversa fluida",
                contact_direct_title: "Contato Direto",
                contact_direct_description: "Vamos conversar sobre seu projeto! Me envie uma mensagem e respondo imediatamente.",
                contact_any_device: "De qualquer dispositivo",
                contact_preview_message: "Olá! 👋 Obrigado por entrar em contato. Conte-me sobre seu projeto e vamos trabalhar juntos para torná-lo realidade.",
                contact_open_whatsapp: "Abrir WhatsApp",
                contact_alternative: "Ou você também pode:",
                contact_secure_communication: "Comunicação segura",
                contact_personalized_attention: "Atendimento personalizado",
                contact_secure_connection: "Conexão segura",
                contact_faq_title: "Perguntas Frequentes",
                contact_faq_subtitle: "Algumas respostas que podem ser úteis",
                contact_faq_process: "Como é seu processo de trabalho?",
                contact_faq_process_answer: "Meu processo começa com uma reunião inicial para entender suas necessidades, seguida de uma proposta detalhada. Trabalho com metodologias ágeis, entregando progresso periódico e mantendo comunicação constante durante todo o projeto.",
                contact_faq_rates: "Quais são suas tarifas?",
                contact_faq_rates_answer: "Minhas tarifas variam conforme o tipo e escopo do projeto. Posso trabalhar com orçamentos por projeto ou por hora, adaptando-me às suas necessidades. Entre em contato para receber uma cotação personalizada.",
                contact_faq_delivery: "Qual é seu tempo médio de entrega?",
                contact_faq_delivery_answer: "Os tempos de entrega dependem da complexidade do projeto. Um site básico pode estar pronto em 2-3 semanas, enquanto projetos mais complexos podem levar de 1-3 meses. Sempre acordamos um cronograma realista no início.",
                
                // Footer
                footer_copyright: "© 2025 Miguel Garcia. Todos os direitos reservados.",
                footer_made_with: "Feito com",
                footer_using_tech: "usando HTML, CSS & JavaScript",
                footer_back_to_top: "Voltar ao topo",
                footer_quick_links: "Links Rápidos",
                footer_services: "Serviços",
                footer_web_development: "Desenvolvimento Web",
                footer_mobile_apps: "Aplicações Móveis",
                footer_ui_design: "Design UI/UX",
                footer_backend: "Desenvolvimento Backend",
                footer_seo: "SEO e Otimização",
                footer_contact_info: "Contato",
                footer_phone: "Telefone",
                footer_location_name: "Colômbia",
                footer_privacy_policy: "Política de Privacidade",
                footer_terms_of_use: "Termos de Uso",
                footer_cookies: "Cookies",
                footer_available_for_projects: "Disponível para projetos",
                footer_tagline: "Transformando ideias em experiências digitais excepcionais",
                
                // Modal texts
                modal_download: "Baixar",
                modal_fullscreen: "Tela cheia",
                modal_close: "Fechar",
                modal_cv_title: "Currículo - Miguel Garcia",
                modal_loading: "Carregando CV...",
                modal_preview_not_available: "Visualização não disponível",
                modal_browser_not_support: "Seu navegador não suporta visualização de PDF. Você pode baixar o arquivo diretamente ou abri-lo em uma nova aba.",
                modal_download_cv: "Baixar CV",
                modal_open_new_tab: "Abrir em nova aba",
                
                // Project data
                project_svfupc_title: "SVFUPC - Simulador de Viabilidade Financeira",
                project_svfupc_description: "Este projeto tem como objetivo criar uma aplicação web que simule o cálculo da folha de pagamento de professores universitários; tanto efetivos quanto ocasionais, segundo o Decreto 1279 de 2002 e o Acordo 006 de 2018.",
                project_domibot_title: "DomiBot: Seu Assistente Virtual para Pedidos e Reservas em Restaurantes",
                project_domibot_description: "Aplicativo de desktop para restaurantes que automatiza o atendimento ao cliente através de um assistente virtual do Telegram. Integra módulos para gerenciar pedidos, reservas com seguro, promoções, pagamentos e configuração dinâmica do menu.",
                project_portfolio_title: "Meu Portfólio WEB",
                project_portfolio_description: "Site desenvolvido do zero para mostrar meus projetos, habilidades e experiência como desenvolvedor. Implementado com HTML, CSS e JavaScript, com design responsivo e foco em performance, acessibilidade e apresentação profissional.",
                project_conversation_title: "Projeto de Conversação",
                project_conversation_description: "Sistema de chat e conversação interativo com funcionalidades avançadas de comunicação.",
                
                // Certificações
                cert_java_title: "Curso: JAVA FUNDAMENTAL",
                cert_java_provider: "ORACLE ACADEMY",
                cert_java_description: "Certificação oficial da Oracle em Java Fundamental, focada em Programação Orientada a Objetos. Ideal para iniciar sua carreira como desenvolvedor com uma base sólida e reconhecida internacionalmente.",
                cert_java_date: "Novembro 2024",
                cert_java_credential: "CERTIFICADO",
                
                cert_talento_title: "Curso: PROGRAMAÇÃO BÁSICA",
                cert_talento_provider: "Talento Tech",
                cert_talento_description: "Certificação em programação básica fornecida pela Talento Tech. Fundamentos sólidos de programação, lógica computacional e primeiros passos no desenvolvimento de software.",
                cert_talento_date: "Novembro 2024",
                cert_talento_credential: "CERTIFICADO",
                
                cert_sql_title: "SQL & Databases",
                cert_sql_provider: "Coursera",
                cert_sql_description: "Especialização em design de bancos de dados relacionais e SQL avançado.",
                cert_sql_date: "Dezembro 2023",
                cert_sql_credential: "Credencial: SQL-2023-5678",
                
                cert_html_title: "HTML do Zero",
                cert_html_provider: "EDteam",
                cert_html_description: "Certificação em HTML do Zero pela EDteam: Formação completa e prática para dominar a estrutura de páginas web.",
                cert_html_date: "Novembro 2022",
                cert_html_credential: "CERTIFICADO",
                
                cert_python_title: "Python do zero 2023",
                cert_python_provider: "EDteam",
                cert_python_description: "Certificação em Python do Zero 2023: Aprenda a programar com uma das linguagens mais demandadas do mundo. Curso prático e atualizado.",
                cert_python_date: "Novembro 2024",
                cert_python_credential: "CERTIFICADO",
                
                cert_javascript_title: "JavaScript do zero",
                cert_javascript_provider: "EDteam",
                cert_javascript_description: "Certificação em JavaScript do Zero: Domine a linguagem chave do desenvolvimento web. Aprenda de forma prática a criar sites interativos.",
                cert_javascript_date: "Novembro 2024",
                cert_javascript_credential: "CERTIFICADO",
                
                // Typewriter texts
                typewriter_texts: [
                    "Desenvolvimento Full Stack",
                    "Design Web Moderno",
                    "Soluções Digitais",
                    "Programação Avançada"
                ],
                
                // Test QA keys
                test_status: "✓ Teste de idiomas - Todos os elementos configurados corretamente",
                test_title: "Teste Final QA - Sistema de Idiomas",
                test_nav_title: "Navegação",
                test_hero_title: "Seção Hero",
                test_cert_title: "Certificações",
                test_projects_title: "Projetos",
                test_modal_title: "Modal e Botões",
                test_contact_title: "Contato",
                test_faq_title: "FAQ",
                test_footer_title: "Rodapé",
                test_open_modal: "Abrir Modal de Teste",
                test_modal_header: "Modal de Teste",
                test_modal_content: "Este é um modal de teste para verificar se os botões e conteúdo são traduzidos corretamente."
            }
        };
        
        this.init();
    }
    
    init() {
        // Actualizar el selector visual al cargar
        this.updateLanguageSelector();
        this.applyLanguage(this.currentLang);
        this.setupEventListeners();
    }
    
    updateLanguageSelector() {
        const currentLangElement = document.querySelector('.current-lang');
        if (currentLangElement) {
            const flagIcon = currentLangElement.querySelector('.flag-icon');
            const langText = currentLangElement.querySelector('.lang-text');
            
            if (flagIcon && langText) {
                flagIcon.className = `flag-icon flag-${this.currentLang}`;
                langText.textContent = this.currentLang.toUpperCase();
            }
        }
    }
    
    setupEventListeners() {
        const languageToggle = document.querySelector('.language-toggle');
        const currentLang = document.querySelector('.current-lang');
        const langOptions = document.querySelectorAll('.lang-option');
        
        if (currentLang) {
            currentLang.addEventListener('click', () => {
                languageToggle.classList.toggle('active');
            });
        }
        
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.getAttribute('data-lang');
                this.changeLanguage(selectedLang);
                if (languageToggle) {
                    languageToggle.classList.remove('active');
                }
            });
        });
        
        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector') && languageToggle) {
                languageToggle.classList.remove('active');
            }
        });
    }
    
    changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Actualizar el selector visual
        const currentLangElement = document.querySelector('.current-lang');
        const flagIcon = currentLangElement.querySelector('.flag-icon');
        const langText = currentLangElement.querySelector('.lang-text');
        
        flagIcon.className = `flag-icon flag-${lang}`;
        langText.textContent = lang.toUpperCase();
        
        // Aplicar las traducciones
        this.applyLanguage(lang);
        
        // Actualizar modals si están abiertos
        this.updateModalContent();
        
        // Reiniciar el typewriter si existe
        if (window.typewriterInstance) {
            window.typewriterInstance.restart();
        }
    }
    
    updateModalContent() {
        // Actualizar contenido del modal de proyectos si está abierto
        const projectModal = document.getElementById('projectModal');
        if (projectModal && projectModal.classList.contains('active') && window.currentProject) {
            // Obtener la función de traducción del portfolio
            if (window.getTranslatedText) {
                document.getElementById('modal-project-title').textContent = window.getTranslatedText(window.currentProject.titleKey);
                document.getElementById('modal-project-category').textContent = window.getTranslatedText(window.currentProject.categoryKey);
                document.getElementById('modal-project-description').textContent = window.getTranslatedText(window.currentProject.descriptionKey);
            }
        }
    }
    
    applyLanguage(lang) {
        const translations = this.translations[lang];
        
        // Actualizar atributo lang del HTML
        document.documentElement.lang = lang;
        
        // Aplicar traducciones usando data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });
        
        // Casos especiales para elementos que necesitan innerHTML
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
    }
    
    // Método para obtener texto traducido
    getText(key) {
        return this.translations[this.currentLang][key] || key;
    }
    
    // Método para obtener idioma actual
    getCurrentLang() {
        return this.currentLang;
    }
    
    // Método para obtener textos del typewriter
    getTypewriterTexts() {
        return this.translations[this.currentLang].typewriter_texts || [];
    }
}

// Inicializar el sistema cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.languageSystem = new LanguageSystem();
});
