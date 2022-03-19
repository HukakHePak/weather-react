import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import jsStorage from "js-storage";

const appStorage = jsStorage.initNamespaceStorage("weather-app").localStorage;

ReactDOM.render(
  <React.StrictMode>
    <App city="City" storage={appStorage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
