// src/components/Projects.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-16 bg-gray-900 text-center px-8 md:px-24">
      <h2 className="text-3xl font-bold text-white">{t('my_projects')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

        {/* Primer proyecto */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <a href="https://todoapp-frontend-wgfh.onrender.com/todoapp-frontend/login" target="_blank" rel="noopener noreferrer">
            <img
              src="todo.png"
              alt="Project 1 screenshot"
              className="rounded mb-4 hover:opacity-80 transition-opacity"
            />
          </a>
          <h3 className="text-xl font-bold text-white">App ToDo List</h3>
          <p className="text-gray-400">Frontend hecho en React + Tailwind + Vite y Backend con Node.js y MySQL</p>
          <a 
            href="https://julio-promocional.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 hover:underline"
          >
            {t('view_project')}
          </a>
        </div>

        {/* Segundo proyecto */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <a href="https://teknesoluciones.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="tekne.png"
              alt="Project 2 screenshot"
              className="rounded mb-4 hover:opacity-80 transition-opacity"
            />
          </a>
          <h3 className="text-xl font-bold text-white">Sitio web Tekne soluciones</h3>
          <p className="text-gray-400">Sitio creado con React, Tailwind y Vite</p>
          <a 
            href="https://teknesoluciones.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 hover:underline"
          >
            {t('view_project')}
          </a>
        </div>

        {/* Tercer proyecto */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <a href="https://capitumfondo.com" target="_blank" rel="noopener noreferrer">
            <img
              src="fondo1.png"
              alt="Project 3 screenshot"
              className="rounded mb-4 hover:opacity-80 transition-opacity"
            />
          </a>
          <h3 className="text-xl font-bold text-white">Fondo de inversiones Capitum</h3>
          <p className="text-gray-400">Frontend hecho en React, Tailwind, Vite y Backend con Node.js, Axios, Sequelize y MySQL</p>
          <a 
            href="https://capitumfondo.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 hover:underline"
          >
            {t('view_project')}
          </a>
        </div>

        {/* Cuarto proyecto */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <a href="https://abckidslearning.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="kids.png"
              alt="Project 4 screenshot"
              className="rounded mb-4 hover:opacity-80 transition-opacity"
            />
          </a>
          <h3 className="text-xl font-bold text-white">ABC Kids Learning</h3>
          <p className="text-gray-400">Frontend hecho en React, Tailwind, Vite y Backend con Node.js, Axios, Sequelize y MySQL</p>
          <a 
            href="https://abckidslearning.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 hover:underline"
          >
            {t('view_project')}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
