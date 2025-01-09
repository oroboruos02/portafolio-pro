import React from "react";
import { useTranslation } from "react-i18next";
import googleTranslateIcon from "../assets/translate.svg"; // Asegúrate de que la ruta sea correcta

const Header = () => {
  const { i18n, t } = useTranslation();

  // Cambiar idioma entre inglés y español
  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === "en" ? "es" : "en");
  };

  // Función para hacer scroll suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 shadow-xl">
      <div className="flex justify-between items-center py-4 px-8 max-w-7xl mx-auto">
        {/* Logo del sitio */}
        <div className="flex items-center space-x-6">
          <h1 className="text-3xl font-extrabold tracking-wide flex items-center">
            <span className="text-white">&lt;divar.</span>
            <span className="text-teal-400">dev</span>
            <span className="text-white">/&gt;</span>
          </h1>

          {/* Botón de traducción */}
          <button
            onClick={toggleLanguage}
            className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-all duration-300"
          >
            <img
              src={googleTranslateIcon}
              alt="Translate"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8 text-white text-lg">
          {["home", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              className="relative group hover:text-teal-400 transition-colors"
              onClick={() => scrollToSection(section)}
            >
              {t(section)}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Menú hamburguesa en pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-2xl hover:text-teal-400 transition-colors">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
