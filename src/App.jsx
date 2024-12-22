import React from "react";
import './App.css'
import PortfolioPage from "./Components/PortfolioPage";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="font-sans">
      <PortfolioPage/>
      <Header />
      <About />
      <Skills/>
      <Projects />
      <Education/>
      <Contact /> 
    </div>
  );
}

export default App;
