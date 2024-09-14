import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n/i18n'; // Asegúrate de que la ruta sea correcta


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
