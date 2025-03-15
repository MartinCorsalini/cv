// Elementos del DOM
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toggleTheme = document.getElementById('toggleTheme');
const toggleLanguage = document.getElementById('toggleLanguage');
const themeIcon = toggleTheme.querySelector('i');
const contactForm = document.getElementById('contactForm');

// Datos para traducción
const translations = {
    es: {
        navLinks: {
            "sobre-mi": "Sobre Mí",
            "habilidades": "Habilidades",
            "proyectos": "Proyectos",
            "experiencia": "Experiencia",
            "educacion": "Educación",
            "contacto": "Contacto"
        },
        profile: {
            title: "Desarrollador Web Full Stack"
        },
        sections: {
            "sobre-mi": {
                title: "Sobre Mí",
                content: [
                    "¡Hola! Soy un desarrollador web apasionado por crear soluciones digitales intuitivas y atractivas. Me especializo en tecnologías frontend y backend para desarrollar aplicaciones web que cumplan con las necesidades del cliente y brinden una excelente experiencia al usuario.",
                    "Mi enfoque se basa en escribir código limpio, mantenible y escalable utilizando las mejores prácticas de la industria. Me encanta aprender nuevas tecnologías y mejorar constantemente mis habilidades."
                ]
            },
            "habilidades": {
                title: "Habilidades"
            },
            "proyectos": {
                title: "Proyectos"
            },
            "experiencia": {
                title: "Experiencia",
                items: [
                    {
                        title: "Desarrollador Frontend",
                        subtitle: "Empresa XYZ | Enero 2022 - Presente",
                        description: "Descripción de tus responsabilidades y logros en este puesto. Incluye tecnologías utilizadas y proyectos destacados."
                    },
                    {
                        title: "Desarrollador Web Junior",
                        subtitle: "Empresa ABC | Marzo 2020 - Diciembre 2021",
                        description: "Descripción de tus responsabilidades y logros en este puesto. Incluye tecnologías utilizadas y proyectos destacados."
                    }
                ]
            },
            "educacion": {
                title: "Educación",
                items: [
                    {
                        title: "Licenciatura en Informática",
                        subtitle: "Universidad XYZ | 2016 - 2020",
                        description: "Descripción breve de los conocimientos adquiridos, cursos destacados o proyectos realizados durante tu formación académica."
                    },
                    {
                        title: "Bootcamp de Desarrollo Web Full Stack",
                        subtitle: "Academia de Programación | 2020",
                        description: "Descripción breve del programa, tecnologías aprendidas y proyectos realizados."
                    }
                ]
            },
            "contacto": {
                title: "Contacto",
                form: {
                    name: "Nombre",
                    email: "Email",
                    message: "Mensaje",
                    button: "Enviar Mensaje"
                }
            }
        },
        footer: {
            copyright: "Todos los derechos reservados"
        }
    },

    en: {
        navLinks: {
            "sobre-mi": "About Me",
            "habilidades": "Skills",
            "proyectos": "Projects",
            "experiencia": "Experience",
            "educacion": "Education",
            "contacto": "Contact"
        },
        profile: {
            title: "Full Stack Web Developer"
        },
        sections: {
            "sobre-mi": {
                title: "About Me",
                content: [
                    "Hello! I'm a web developer passionate about creating intuitive and attractive digital solutions. I specialize in frontend and backend technologies to develop web applications that meet client needs and provide an excellent user experience.",
                    "My approach is based on writing clean, maintainable, and scalable code using industry best practices. I love learning new technologies and constantly improving my skills."
                ]
            },
            "habilidades": {
                title: "Skills"
            },
            "proyectos": {
                title: "Projects"
            },
            "experiencia": {
                title: "Experience",
                items: [
                    {
                        title: "Frontend Developer",
                        subtitle: "XYZ Company | January 2022 - Present",
                        description: "Description of your responsibilities and achievements in this position. Include technologies used and notable projects."
                    },
                    {
                        title: "Junior Web Developer",
                        subtitle: "ABC Company | March 2020 - December 2021",
                        description: "Description of your responsibilities and achievements in this position. Include technologies used and notable projects."
                    }
                ]
            },
            "educacion": {
                title: "Education",
                items: [
                    {
                        title: "Bachelor's Degree in Computer Science",
                        subtitle: "XYZ University | 2016 - 2020",
                        description: "Brief description of knowledge acquired, notable courses, or projects completed during your academic training."
                    },
                    {
                        title: "Full Stack Web Development Bootcamp",
                        subtitle: "Programming Academy | 2020",
                        description: "Brief description of the program, technologies learned, and projects completed."
                    }
                ]
            },
            "contacto": {
                title: "Contact",
                form: {
                    name: "Name",
                    email: "Email",
                    message: "Message",
                    button: "Send Message"
                }
            }
        },
        footer: {
            copyright: "All rights reserved"
        }
    }
};

// Estado de la aplicación
let currentLanguage = 'es';
let isDarkMode = false;

// Función para cambiar el tema
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    } else {
        document.body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
    }
    
    // Guardar preferencia en localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

// Función para cambiar el idioma
function changeLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    toggleLanguage.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
    
    // Actualizar el contenido
    updateContent();
    
    // Guardar preferencia en localStorage
    localStorage.setItem('language', currentLanguage);
}

// Función para actualizar el contenido según el idioma
function updateContent() {
    const t = translations[currentLanguage];
    
    // Actualizar navegación
    const navItems = navLinks.querySelectorAll('li a');
    navItems.forEach(item => {
        const section = item.getAttribute('href').substring(1);
        item.textContent = t.navLinks[section];
    });
    
    // Actualizar título del perfil
    document.querySelector('.profile p').textContent = t.profile.title;
    
    // Actualizar secciones
    Object.keys(t.sections).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        // Actualizar título de sección
        const sectionTitle = section.querySelector('h2');
        if (sectionTitle) sectionTitle.textContent = t.sections[sectionId].title;
        
        // Actualizar contenido específico de secciones
        if (sectionId === 'sobre-mi') {
            const paragraphs = section.querySelectorAll('p');
            t.sections[sectionId].content.forEach((text, index) => {
                if (paragraphs[index]) paragraphs[index].textContent = text;
            });
        }
        
        // Actualizar ítems de experiencia y educación
        if (sectionId === 'experiencia' || sectionId === 'educacion') {
            const items = section.querySelectorAll('.experience-item, .education-item');
            t.sections[sectionId].items.forEach((item, index) => {
                if (items[index]) {
                    items[index].querySelector('.item-title').textContent = item.title;
                    items[index].querySelector('.item-subtitle').textContent = item.subtitle;
                    items[index].querySelector('p:last-child').textContent = item.description;
                }
            });
        }
        
        // Actualizar formulario de contacto
        if (sectionId === 'contacto') {
            const form = section.querySelector('.contact-form');
            if (form) {
                form.querySelector('label[for="name"]').textContent = t.sections[sectionId].form.name;
                form.querySelector('label[for="email"]').textContent = t.sections[sectionId].form.email;
                form.querySelector('label[for="message"]').textContent = t.sections[sectionId].form.message;
                form.querySelector('.submit-btn').textContent = t.sections[sectionId].form.button;
            }
        }
    });
    
    // Actualizar pie de página
    document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} Tu Nombre - ${t.footer.copyright}`;
}

// Menú de navegación responsive
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Evento de cambio de tema
toggleTheme.addEventListener('click', toggleDarkMode);

// Evento de cambio de idioma
toggleLanguage.addEventListener('click', changeLanguage);

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Manejar el envío del formulario
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ejemplo, usando fetch para enviar los datos a un servidor
        
        // Simulamos un envío exitoso
        alert(currentLanguage === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
        contactForm.reset();
    });
}

// Suavizar el desplazamiento al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Cargar preferencias guardadas
document.addEventListener('DOMContentLoaded', () => {
    // Cargar tema preferido
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        isDarkMode = false; // Se invertirá en toggleDarkMode
        toggleDarkMode();
    }
    
    // Cargar idioma preferido
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        toggleLanguage.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
        updateContent();
    }
});