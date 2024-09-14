// src/components/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer text-center py-4 text-gray-400">
      <p>{t('Divar Parra Web Portafolio | 2024', { year: new Date().getFullYear() })}</p>
    </footer>
  );
};

export default Footer;
