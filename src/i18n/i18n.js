// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Recursos de traducción
const resources = {
  en: {
    translation: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      greeting: "Hi, I'm {{name}}",
      developer: "Full Stack Developer",
      my_skills: "My Skills",
      my_projects: "My Projects",
      contact_me: "Contact Me",
      resume: "View resume",
      contact_button: "Contact",
      name_placeholder: "Name",
      email_placeholder: "Email",
      message_placeholder: "Message",
      send_message: "Send Message",
      description: "Systems Engineer motivated to develop my skills through continuous learning. I love discovering and interacting with new technologies, always ready to take on the challenges they present. I work with responsibility, proactivity, and enjoy teamwork."
    }
  },
  es: {
    translation: {
      home: "Inicio",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      greeting: "Hola, soy {{name}}",
      developer: "Desarrollador Full Stack",
      my_skills: "Mis Habilidades",
      my_projects: "Mis Proyectos",
      contact_me: "Contáctame",
      resume: "Ver currículum",
      contact_button: "Contacto",
      name_placeholder: "Nombre",
      email_placeholder: "Correo",
      message_placeholder: "Mensaje",
      send_message: "Enviar Mensaje",
      description: "Ingeniero de Sistemas motivado a desarrollar mis capacidades a través del aprendizaje continuo. Me encanta descubrir e interactuar con nuevas tecnologías, siempre dispuesto a asumir los retos que representan. Trabajo con responsabilidad, proactividad y disfruto del trabajo en equipo."
    }
  }
};

// Inicialización de i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',  // Cambia a 'es' para que el idioma predeterminado sea español
    fallbackLng: 'en', // El idioma de respaldo será inglés
    interpolation: {
      escapeValue: false // React ya se encarga de la seguridad
    }
  });

export default i18n;
