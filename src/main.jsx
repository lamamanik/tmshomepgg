import React from "react";

import ReactDOM from "react-dom/client";
import Nabvar from "./components/Nabvar.jsx";
import Hero from "./components/Hero.jsx";

import Analytics from "./components/Analytics.jsx";
import Analyticstwo from "./components/Analyticstwo.jsx";
import Analyticsthree from "./components/Analyticsthree.jsx";

import "/src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nabvar />
    <Hero />
    <Analytics />
    <Analyticstwo />
    <Analyticsthree />
  </React.StrictMode>
);
