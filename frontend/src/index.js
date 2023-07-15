import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import './styles/simple-grid.css'
// import './styles/test-style1.sass'
import './styles/test-style2.sass'


import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);