import React from 'react';
import { createRoot } from 'react-dom/client';

import '../node_modules/bootstrap/dist/js/bootstrap.esm.js';
import './scss/styles.scss';

import App from './App';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
