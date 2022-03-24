import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import jsStorage from "js-storage";
import { Provider } from "react-redux";
import { store } from "./modules/redux-store/store";

const appStorage = jsStorage.initNamespaceStorage("weather-app").localStorage;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App city="City" storage={appStorage} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
