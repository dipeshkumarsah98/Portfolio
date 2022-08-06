import { AnimatePresence } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./style/style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
      <App />
    </AnimatePresence>
  </React.StrictMode>
);

reportWebVitals();
