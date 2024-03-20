import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const miiInfo = {
  name: "mii",
  age: 30,
};

const MiiContext = createContext(miiInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MiiContext.Provider value={miiInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MiiContext.Provider>
);

export default MiiContext;
