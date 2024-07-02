import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/home/home";
import Login from "./pages/login/loginPage"
import Gallery from "./pages/gallery/galleryPage"	


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

