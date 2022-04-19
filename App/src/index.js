import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const CONTAINER = document.querySelector('div');
const ROOT = createRoot(CONTAINER);
ROOT.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);