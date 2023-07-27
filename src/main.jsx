import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Analytics from "./components/Analytics.jsx";
import Us from "./components/Us.jsx";
import Testomonial from "./components/Testomonial.jsx";
import Lastko from "./components/Lastko.jsx";

import "/src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Analytics />
    <Us />
    <Testomonial />
    <Lastko />
  </React.StrictMode>
);
