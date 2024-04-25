import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./css/fontawesome.all.min.css";
import "./css/cosmo.min.css";
import "./css/style.css";

export const myContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);