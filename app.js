// Elementos del DOM
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toggleTheme = document.getElementById('toggleTheme');

const themeIcon = toggleTheme.querySelector('i');
const contactForm = document.getElementById('contactForm');

const toggleLanguage = document.getElementById("toggleLanguage");

let currentLang = "es";

// Traducciones
const translations = {
  es: {
    nav: ["Sobre Mí", "Habilidades", "Educación", "Proyectos", "Contacto"],
    profileTitle: "Desarrollador Full Stack",
    aboutTitle: "Sobre Mí",
    aboutText: [
      "Hola! Estoy recientemente recibido (diciembre 2024) como Técnico Universitario en Programación. En este tramo de 2 años, he adquirido experiencia práctica en el desarrollo de aplicaciones front-end utilizando Angular y TypeScript, complementando mis conocimientos previos en HTML, CSS y JavaScript.",
      "Esta formación me ha permitido afianzar mis habilidades en desarrollo de aplicaciones modernas y escalables, siguiendo buenas prácticas de desarrollo y patrones de diseño.",
      "A lo largo de mi formación académica, también he trabajado con otras tecnologías como MySQL, y he desarrollado aplicaciones en lenguaje C y Java. Además manejo herramientas de metodologías agiles como Jira (Scrum) y gestión de tareas como Trello como también manejo de Git y GIthub."
    ],
    skillsTitle: "Habilidades",
    educationTitle: "Educación",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    footerText: "Todos los derechos reservados"
  },
  en: {
    nav: ["About Me", "Skills", "Education", "Projects", "Contact"],
    profileTitle: "Full Stack Developer",
    aboutTitle: "About Me",
    aboutText: [
      "Hi! I recently graduated (December 2024) as a University Technician in Programming. Over these two years, I gained hands-on experience developing front-end applications using Angular and TypeScript, complementing my previous knowledge in HTML, CSS, and JavaScript.",
      "This training strengthened my skills in building modern and scalable applications, following good development practices and design patterns.",
      "Throughout my academic journey, I also worked with other technologies like MySQL and developed applications in C and Java. Additionally, I'm familiar with agile tools such as Jira (Scrum), task management with Trello, and Git/GitHub."
    ],
    skillsTitle: "Skills",
    educationTitle: "Education",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    footerText: "All rights reserved"
  }
};

// Función para traducir la página
function translatePage(lang) {
  const t = translations[lang];

  // Navbar
  const navItems = document.querySelectorAll(".nav-links li a");
  navItems.forEach((item, i) => {
    item.textContent = t.nav[i];
  });

  // Título del perfil
  document.querySelector(".profile p").textContent = t.profileTitle;

  // Sección "Sobre Mí"
  document.querySelector("#sobre-mi h2").textContent = t.aboutTitle;
  const aboutParagraphs = document.querySelectorAll("#sobre-mi p");
  t.aboutText.forEach((text, i) => {
    if (aboutParagraphs[i]) aboutParagraphs[i].textContent = text;
  });

  // Otras secciones
  document.querySelector("#habilidades h2").textContent = t.skillsTitle;
  document.querySelector("#educacion h2").textContent = t.educationTitle;
  document.querySelector("#proyectos h2").textContent = t.projectsTitle;
  document.querySelector("#contacto h2").textContent = t.contactTitle;

  // Footer
  document.querySelector("footer p").innerHTML = `&copy; 2025 Martin Ezequiel Ibañez Corsalini - ${t.footerText}`;
}

// Listener del botón de idioma
toggleLanguage.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  toggleLanguage.textContent = currentLang.toUpperCase() === "EN" ? "ES" : "EN";
  translatePage(currentLang);
});





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