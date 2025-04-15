const translations = {
  es: {
      
      "nav.sobreMi": "Sobre Mí",
      "nav.habilidades": "Habilidades",
      "nav.educacion": "Educación",
      "nav.proyectos": "Proyectos",
      "nav.contacto": "Contacto",
      "profesion": "Desarrollador Full Stack",
      "titulo.sobreMi": "Sobre Mí",
      "sobreMi.1": "Hola! Estoy recientemente recibido (diciembre 2024) como Técnico Universitario en Programación. En este tramo de 2 años, he adquirido experiencia práctica en el desarrollo de aplicaciones front-end utilizando Angular y TypeScript, complementando mis conocimientos previos en HTML, CSS y JavaScript.",
      "sobreMi.2": "Esta formación me ha permitido afianzar mis habilidades en desarrollo de aplicaciones modernas y escalables, siguiendo buenas prácticas de desarrollo y patrones de diseño.",
      "sobreMi.3": "A lo largo de mi formación académica, también he trabajado con otras tecnologías como MySQL, y he desarrollado aplicaciones en lenguaje C y Java. Además manejo herramientas de metodologías agiles como Jira (Scrum) y gestión de tareas como Trello como también manejo de Git y GIthub.",
      "titulo.habilidades": "Habilidades",
      "titulo.educacion": "Educación",
      "educacion.1.titulo": "Tecnicatura Universitaria en Programación",
      "educacion.1.lugar": "Universidad Tecnológica Nacional (UTN) – Mar del Plata 2022 - 2024",
      "educacion.1.descripcion": "Técnico Universitario en Programación – Promedio: 8.5",
      "educacion.2.titulo": "Contador Público",
      "educacion.2.lugar": "Universidad Nacional de Mar del Plata (UNMDP) 2015 - 2020",
      "educacion.2.descripcion": "Completé hasta el tercer año de la carrera de Contador Público, aprobando un total de 20 materias. Esta experiencia me proporcionó una base sólida en áreas como contabilidad, auditoría y gestión financiera. Aunque decidí orientarme hacia el desarrollo de software, los conocimientos adquiridos en esta carrera complementaron mi perfil con habilidades analíticas y organizacionales.",
      "titulo.idiomas": "Idiomas",
      "idiomas.ingles.titulo": "Inglés",
      "idiomas.ingles.lugar": "Instituto Cultural Americano",
      "idiomas.ingles.descripcion": "B2 (Intermedio alto, capacidad de mantener conversaciones fluidas y comprensión de textos complejos).",
      "idiomas.aleman.titulo": "Alemán",
      "idiomas.aleman.lugar": "Laboratorio de Idiomas - UNMDP",
      "idiomas.aleman.descripcion": "Alemán: A2 (Comunicaciones cotidianas y vocabulario básico).",
      "titulo.proyectos": "Proyectos",
      "proyectos.toolix.titulo": "Toolix",
      "proyectos.toolix.descripcion": "Toolix es una plataforma diseñada para conectar clientes con profesionales en servicios como gasistas, plomeros y electricistas. Permite a los usuarios buscar, filtrar y contactar fácilmente al profesional ideal según su ubicación y necesidades.",
      "proyectos.tracker.titulo": "Portfolio Tracker (Próximamente)",
      "proyectos.tracker.descripcion": "Tracker de tu cartera de activos.",
      "titulo.contacto": "Contacto",
      "footer": "© 2025 Martin Ezequiel Ibañez Corsalini - Todos los derechos reservados"
  },
  en: {
      
      "nav.sobreMi": "About Me",
      "nav.habilidades": "Skills",
      "nav.educacion": "Education",
      "nav.proyectos": "Projects",
      "nav.contacto": "Contact",
      "profesion": "Full Stack Developer",
      "titulo.sobreMi": "About Me",
      "sobreMi.1": "Hi! I recently graduated (December 2024) with a Technical University Degree in Programming. During these 2 years, I have gained hands-on experience in front-end development using Angular and TypeScript, complementing my previous knowledge in HTML, CSS, and JavaScript.",
      "sobreMi.2": "This education has allowed me to strengthen my skills in developing modern and scalable applications, following good development practices and design patterns.",
      "sobreMi.3": "Throughout my academic training, I have also worked with other technologies like MySQL and developed applications in C and Java. I also use agile methodology tools such as Jira (Scrum), task management with Trello, and version control with Git and GitHub.",
      "titulo.habilidades": "Skills",
      "titulo.educacion": "Education",
      "educacion.1.titulo": "Technical University Degree in Programming",
      "educacion.1.lugar": "National Technological University (UTN) – Mar del Plata 2022 - 2024",
      "educacion.1.descripcion": "Technical University Degree in Programming – GPA: 8.5",
      "educacion.2.titulo": "Public Accountant",
      "educacion.2.lugar": "National University of Mar del Plata (UNMDP) 2015 - 2020",
      "educacion.2.descripcion": "I completed up to the third year of the Public Accounting degree, passing a total of 20 subjects. This experience gave me a solid foundation in areas such as accounting, auditing, and financial management. Although I decided to move into software development, the knowledge acquired in this career complemented my profile with analytical and organizational skills.",
      "titulo.idiomas": "Languages",
      "idiomas.ingles.titulo": "English",
      "idiomas.ingles.lugar": "American Cultural Institute",
      "idiomas.ingles.descripcion": "B2 (Upper-intermediate level, able to hold fluent conversations and understand complex texts).",
      "idiomas.aleman.titulo": "German",
      "idiomas.aleman.lugar": "Language Lab - UNMDP",
      "idiomas.aleman.descripcion": "German: A2 (Everyday communication and basic vocabulary).",
      "titulo.proyectos": "Projects",
      "proyectos.toolix.titulo": "Toolix",
      "proyectos.toolix.descripcion": "Toolix is a platform designed to connect clients with professionals in services such as gas fitters, plumbers, and electricians. It allows users to easily search, filter, and contact the ideal professional based on their location and needs.",
      "proyectos.tracker.titulo": "Portfolio Tracker (Coming Soon)",
      "proyectos.tracker.descripcion": "Track your asset portfolio.",
      "titulo.contacto": "Contact",
      "footer": "© 2025 Martin Ezequiel Ibañez Corsalini - All rights reserved"
  }
};

let currentLang = localStorage.getItem("lang") || "es";
let currentTheme = localStorage.getItem("theme") || "light";

// Aplicar al iniciar
document.documentElement.setAttribute("data-theme", currentTheme);
document.getElementById("toggleLanguage").textContent = currentLang === "es" ? "EN" : "ES";
translatePage(currentLang);

// Cambiar idioma
document.getElementById("toggleLanguage").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  translatePage(currentLang);
  document.getElementById("toggleLanguage").textContent = currentLang === "es" ? "EN" : "ES";
});

// Cambiar tema
document.getElementById("toggleTheme").addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
});

// Función de traducción
function translatePage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if (translations[lang][key]) {
          el.textContent = translations[lang][key];
      }
  });
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = document.getElementById("menuIcon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuIcon.classList.add("rotate");

  //----

  setTimeout(() => {
      if (navLinks.classList.contains("active")) {
          menuIcon.classList.remove("fa-bars");
          menuIcon.classList.add("fa-times");
      } else {
          menuIcon.classList.remove("fa-times");
          menuIcon.classList.add("fa-bars");
      }

      // Resetear la rotación después del cambio
      menuIcon.classList.remove("rotate");
  }, 150); // un poco antes del final de la transición
});


// Cerrar menú al hacer clic fuera
document.addEventListener("click", (event) => {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
      const navLinks = document.getElementById("navLinks");
      if (window.innerWidth <= 768) {
          navLinks.classList.remove("active");
      }
  });
});

