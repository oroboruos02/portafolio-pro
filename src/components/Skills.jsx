// src/components/Skills.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import html5Icon from "../assets/html.svg";
import css3Icon from "../assets/css3.svg";
import javascriptIcon from "../assets/js.svg";
import reactIcon from "../assets/react.svg";
import materialuiIcon from "../assets/mui.svg";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-12 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-white mb-8">{t("skills")}</h2>
      <div className="flex justify-center space-x-8 mt-8">
        {/* HTML5 Icon */}
        <div className="relative group">
          <img
            src={html5Icon}
            alt="HTML5 logo"
            className="w-16 h-16 transition-transform duration-700 group-hover:rotate-3d group-hover:translate-y-[-10px] group-hover:shadow-2xl"
            style={{ transformOrigin: "center", perspective: "500px" }}
          />
        </div>

        {/* CSS3 Icon */}
        <div className="relative group">
          <img
            src={css3Icon}
            alt="CSS3 logo"
            className="w-16 h-16 transition-transform duration-700 group-hover:rotate-3d group-hover:translate-y-[-10px] group-hover:shadow-2xl"
            style={{ transformOrigin: "center", perspective: "500px" }}
          />
        </div>

        {/* JavaScript Icon */}
        <div className="relative group">
          <img
            src={javascriptIcon}
            alt="JavaScript logo"
            className="w-16 h-16 transition-transform duration-700 group-hover:rotate-3d group-hover:translate-y-[-10px] group-hover:shadow-2xl"
            style={{ transformOrigin: "center", perspective: "500px" }}
          />
        </div>

        {/* React Icon */}
        <div className="relative group">
          <img
            src={reactIcon}
            alt="React logo"
            className="w-16 h-16 transition-transform duration-700 group-hover:rotate-3d group-hover:translate-y-[-10px] group-hover:shadow-2xl"
            style={{ transformOrigin: "center", perspective: "500px" }}
          />
        </div>

        {/* Material UI Icon */}
        <div className="relative group">
          <img
            src={materialuiIcon}
            alt="Material UI logo"
            className="w-16 h-16 transition-transform duration-700 group-hover:rotate-3d group-hover:translate-y-[-10px] group-hover:shadow-2xl"
            style={{ transformOrigin: "center", perspective: "500px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
