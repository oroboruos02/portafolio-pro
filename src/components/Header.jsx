import React from 'react';
import { useTranslation } from 'react-i18next';
import googleTranslateIcon from '../assets/translate.svg'; // Asegúrate de que la ruta sea correcta

const Header = () => {
  const { i18n, t } = useTranslation();

  // Cambiar idioma entre inglés y español
  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  // Función para hacer scroll suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-900 shadow-lg">
      <div className="flex items-center space-x-6">
        {/* Nombre del sitio */}
        <h1 className="text-2xl font-bold tracking-wider">
          <span className="text-white">&lt;divar.</span>
          <span className="text-teal-400">dev</span>
          <span className="text-white">/&gt;</span>
        </h1>

        {/* Botón de traducción */}
        <button onClick={toggleLanguage} className="text-white hover:opacity-80 transition-opacity">
          <img src={googleTranslateIcon} alt="Translate" className="w-6 h-6" />
        </button>
      </div>
      
      {/* Navegación con scroll suave */}
      <nav className="flex space-x-8 text-white text-lg">
        <button
          className="hover:text-teal-400 transition-colors"
          onClick={() => scrollToSection('home')}
        >
          {t('home')}
        </button>
        <button
          className="hover:text-teal-400 transition-colors"
          onClick={() => scrollToSection('skills')}
        >
          {t('skills')}
        </button>
        <button
          className="hover:text-teal-400 transition-colors"
          onClick={() => scrollToSection('projects')}
        >
          {t('projects')}
        </button>
        <button
          className="hover:text-teal-400 transition-colors"
          onClick={() => scrollToSection('contact')}
        >
          {t('contact')}
        </button>
      </nav>
    </header>
  );
};

export default Header;
