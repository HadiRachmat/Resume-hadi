import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./componet/Hero";
import Navbar from "./componet/Navbar";
import Services from "./componet/Services";
import Skills from "./componet/Skills";
import Footer from "./componet/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Footer/>
    </div>
  );
}

export default App;
