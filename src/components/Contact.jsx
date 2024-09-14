import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import githubIcon from '../assets/icon-github.png';
import linkedinIcon from '../assets/icon-linkedin.png';
import emailIcon from '../assets/icon-email.png';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef(); // Referencia para el formulario

  // Función para enviar el correo usando emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1wt6lc7', 'template_6fgmpzc', form.current, 'hX-Et19E8HLbVqyh-')
      .then((result) => {
        console.log(result.text);
        toast.success('Mensaje enviado correctamente');
      }, (error) => {
        console.log(error.text);
        toast.error('Hubo un error, por favor inténtalo nuevamente');
      });

    // Limpiar el formulario después de enviarlo
    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de Contacto */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-white">{t('contact_me')}</h2>
          <p className="text-gray-300 mt-4">
            Puedes contactar conmigo en cualquier momento. ¡Me comunicaré contigo tan pronto como pueda!
          </p>
          <h3 className="text-white mt-4 font-bold">Correo Electrónico</h3>
          <p className="text-gray-400">arc.eseisnos@gmail.com</p>

          {/* Íconos */}
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="w-8 h-8 filter brightness-200" />
            </a>
            <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 filter brightness-200" />
            </a>
            <a href="mailto:arc.eseisnos@gmail.com">
              <img src={emailIcon} alt="Email" className="w-8 h-8 filter brightness-200" />
            </a>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name" // El nombre debe coincidir con el de tu plantilla en EmailJS
              placeholder={t('name_placeholder')}
              className="bg-gray-900 p-2 rounded text-white"
              required
            />
            <input
              type="email"
              name="user_email" // El nombre debe coincidir con el de tu plantilla en EmailJS
              placeholder={t('email_placeholder')}
              className="bg-gray-900 p-2 rounded text-white"
              required
            />
          </div>
          <textarea
            name="message" // El nombre debe coincidir con el de tu plantilla en EmailJS
            placeholder={t('message_placeholder')}
            className="bg-gray-900 p-2 rounded text-white w-full mt-4"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="bg-teal-500 py-2 px-4 rounded mt-4 w-full text-white">
            {t('send_message')}
          </button>
        </form>
      </div>

      {/* Componente ToastContainer para mostrar las notificaciones */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
