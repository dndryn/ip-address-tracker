import React from "react";
import ReactDOM from "react-dom/client";
import App from "@app";
// import 'leaflet/dist/leaflet.css'; // path: node_modules\leaflet\dist\leaflet.css
// dotenv.config();
// FIXME: create function that returns new root element
const body: HTMLBodyElement = document.getElementsByTagName("body")[0] as HTMLBodyElement;
const root: ReactDOM = ReactDOM.createRoot(body);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);