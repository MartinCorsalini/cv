const translations = {
  es: {
      "idioma.español": "Español",
      "idioma.ingles": "Inglés",
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
      "idioma.español": "Spanish",
      "idioma.ingles": "English",
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

// Aplicar tema al iniciar
document.documentElement.setAttribute("data-theme", currentTheme);
document.getElementById("toggleTheme").checked = currentTheme === "dark";

// Aplicar idioma al iniciar
updateLanguageUI(currentLang);
translatePage(currentLang);

// Cambiar tema
document.getElementById('toggleTheme').addEventListener('change', function () {
  currentTheme = this.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
});

// ELEMENTOS del dropdown
const toggleLanguageBtn = document.getElementById("toggleLanguage");
const langMenu = document.getElementById("langMenu");

// Toggle de visibilidad del dropdown al hacer clic en el botón
toggleLanguageBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langMenu.classList.toggle("show");
  toggleLanguageBtn.classList.toggle("rotated");
});


// Selección de idioma desde menú
langMenu.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    const selectedLang = item.getAttribute("data-lang");
    currentLang = selectedLang;
    localStorage.setItem("lang", selectedLang);
    updateLanguageUI(selectedLang);
    translatePage(selectedLang);
    langMenu.classList.remove("show"); // Cierra el menú
  });
});

// Cerrar dropdown si haces clic fuera de él
document.addEventListener("click", (e) => {
  if (!langMenu.contains(e.target) && !toggleLanguageBtn.contains(e.target)) {
    langMenu.classList.remove("show");
    toggleLanguageBtn.classList.remove("rotated");

  }
});

function updateLanguageUI(lang) {
  const btn = document.getElementById("toggleLanguage");
  const labelKey = lang === "es" ? "idioma.español" : "idioma.ingles";
  btn.textContent = `${translations[lang][labelKey]} ▾`;

  // También actualizá los nombres en el menú desplegable
  document.querySelectorAll("#langMenu li").forEach(item => {
    const key = item.getAttribute("data-translate");
    item.textContent = translations[lang][key] || key;
  });
}


// Traducción de textos
function translatePage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Menú responsive
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = document.getElementById("menuIcon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.add("rotate");

  setTimeout(() => {
    menuIcon.classList.toggle("fa-bars", !navLinks.classList.contains("active"));
    menuIcon.classList.toggle("fa-times", navLinks.classList.contains("active"));
    menuIcon.classList.remove("rotate");
  }, 150);
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (event) => {
  const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Cerrar menú al seleccionar link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });
});

//--------------------------------POP UP -----------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.details-link');
  const closeBtn = document.getElementById('closePopup');
  const popup = document.getElementById('popup');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el comportamiento normal del <a>
    popup.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.add('hidden');
    }
  });
});


