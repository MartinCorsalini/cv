// Elementos del DOM
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toggleTheme = document.getElementById('toggleTheme');
const themeIcon = toggleTheme.querySelector('i');

const toggleLanguage = document.getElementById("toggleLanguage");

let currentLang = "es";
let isDarkMode = false;

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
      educationContent: [
        {
          title: "Tecnicatura Universitaria en Programación",
          subtitle: "Universidad Tecnológica Nacional (UTN) – Mar del Plata 2022 - 2024",
          description: "Técnico Universitario en Programación – Promedio: 8.5"
        },
        {
          title: "Contador Público",
          subtitle: "Universidad Nacional de Mar del Plata (UNMDP) 2015 - 2020",
          description: "Completé hasta el tercer año de la carrera de Contador Público, aprobando un total de 20 materias. Esta experiencia me proporcionó una base sólida en áreas como contabilidad, auditoría y gestión financiera. Aunque decidí orientarme hacia el desarrollo de software, los conocimientos adquiridos en esta carrera complementaron mi perfil con habilidades analíticas y organizacionales."
        }
      ],
      languagesTitle: "Idiomas",
      languagesContent: [
        {
          title: "Inglés",
          subtitle: "Instituto Cultural Americano",
          description: "B2 (Intermedio alto, capacidad de mantener conversaciones fluidas y comprensión de textos complejos)."
        },
        {
          title: "Alemán",
          subtitle: "Laboratorio de Idiomas - UNMDP",
          description: "A2 (Comunicaciones cotidianas y vocabulario básico)."
        }
      ],
      projectsTitle: "Proyectos",
      projectsContent: [
        {
          title: "Toolix",
          description: "Toolix es una plataforma diseñada para conectar clientes con profesionales en servicios como gasistas, plomeros y electricistas. Permite a los usuarios buscar, filtrar y contactar fácilmente al profesional ideal según su ubicación y necesidades."
        },
        {
          title: "Portfolio Tracker (Próximamente)",
          description: "Tracker de tu cartera de activos."
        }
      ],
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
      educationContent: [
        {
          title: "University Technician in Programming",
          subtitle: "National Technological University (UTN) – Mar del Plata 2022 - 2024",
          description: "Technical Degree in Programming – GPA: 8.5"
        },
        {
          title: "Public Accounting",
          subtitle: "National University of Mar del Plata (UNMDP) 2015 - 2020",
          description: "I completed up to the third year of the Public Accounting program, passing a total of 20 courses. This experience provided me with a solid foundation in areas such as accounting, auditing, and financial management. Although I decided to pursue software development, the knowledge I gained in this program enriched my profile with analytical and organizational skills."
        }
      ],
      languagesTitle: "Languages",
      languagesContent: [
        {
          title: "English",
          subtitle: "Instituto Cultural Americano",
          description: "B2 (Upper-intermediate, capable of fluent conversations and understanding complex texts)."
        },
        {
          title: "German",
          subtitle: "Language Laboratory - UNMDP",
          description: "A2 (Everyday communication and basic vocabulary)."
        }
      ],
      projectsTitle: "Projects",
      projectsContent: [
        {
          title: "Toolix",
          description: "Toolix is a platform designed to connect clients with professionals in services such as gas fitting, plumbing, and electrical work. It allows users to easily search, filter, and contact the ideal professional based on their location and needs."
        },
        {
          title: "Portfolio Tracker (Coming Soon)",
          description: "Track your asset portfolio."
        }
      ],
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
  
  // Cambio de tema
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : '');
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Evento de cambio de idioma
  toggleLanguage.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    toggleLanguage.textContent = currentLang === "es" ? "EN" : "ES";
    translatePage(currentLang);
  });
  
  // Menú de navegación responsive
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Evento de cambio de tema
  toggleTheme.addEventListener('click', toggleDarkMode);
  
  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
  
 