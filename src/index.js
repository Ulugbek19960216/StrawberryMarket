import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App"; // Ensure the path is correct

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/StrawberryMarket">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
