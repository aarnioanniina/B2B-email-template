import React from 'react';
import './i18n';
import ReactDOM from 'react-dom/client';
import './index.scss';
import MainLayout from './MainLayout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
