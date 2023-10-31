import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Styles.css';
import Botones from './Components/Botones';
import App from './Components/App'
import Titulo from './Components/Titulo'
import Images from './Components/Imagen';
import Grafica from './Components/Grafica';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Titulo />
    <Images />
    {/* <Grafica /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
