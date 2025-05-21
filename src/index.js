import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FavoritesProvider } from "./context/FavoritesContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);