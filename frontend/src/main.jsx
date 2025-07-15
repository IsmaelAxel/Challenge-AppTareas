import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Importa tu CSS si lo tienes
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);