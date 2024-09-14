import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import githubIcon from '../assets/icon-github.png';  // Asegúrate de que la ruta sea correcta
import linkedinIcon from '../assets/icon-linkedin.png';
import resumePDF from '../assets/CV_Divar.pdf'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  const { t, i18n } = useTranslation(); // Hook de traducción

    // Función para hacer scroll suave
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Función para cambiar el idioma
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

  return (
    <div>
      <Header />

      {/* Botón para cambiar de idioma */}
      <div className="flex justify-end p-4">
        <button onClick={() => changeLanguage('es')} className="mx-2">ES</button>
        <button onClick={() => changeLanguage('en')} className="mx-2">EN</button>
      </div>

      {/* Sección de perfil */}
      <section
        id="home"
        className="py-28 px-6 md:px-0 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-8 transition-all duration-500 ease-in-out"
      >
        {/* Imagen de perfil con hover animado */}
        <div className="flex-shrink-0">
          <img
            src="imgperfil.jpg"
            alt="Profile picture of Divar"
            className="rounded-full w-52 h-52 object-cover shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Texto de presentación */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-6xl font-bold mb-6 leading-tight text-white">
            {t('greeting', { name: '' })}
            <span className="text-teal-400">Divar</span>
          </h1>

          <h2 className="text-2xl font-semibold text-gray-300 mb-4">
            {t('developer')}
          </h2>

          <p className="max-w-xl mt-4 text-gray-300 leading-relaxed">
            {t('description')}
          </p>

          {/* Iconos de redes sociales con efecto hover */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://github.com/oroboruos02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity transform hover:scale-110"
            >
              <img src={githubIcon} alt="GitHub" className="w-10 h-10 grayscale hover:grayscale-0" />
            </a>
            <a
              href="https://www.linkedin.com/in/divar-parra-mu%C3%B1oz-338091152/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity transform hover:scale-110"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 grayscale hover:grayscale-0" />
            </a>
          </div>

          {/* Botones de acción */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            {/* Botón para abrir el PDF */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('resume')}
            </a>

            <button
              className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              {t('contact')}
            </button>
          </div>
        </div>
      </section>

      {/* Secciones adicionales */}
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Botón de WhatsApp flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=+573104819230&text=Hola."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
            alt="WhatsApp Icon"
            className="h-8 w-8 text-white"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
