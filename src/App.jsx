import React from "react";
import './App.css'
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import DotGrid from "./Components/DotGrid";
function App() {
  return (
    <div className="font-sans main relative bg-black">
      <DotGrid
    dotSize={2}
    gap={20}
    baseColor="#396350"
    activeColor="#535966"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0, // Behind all content
    }}
  />
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
