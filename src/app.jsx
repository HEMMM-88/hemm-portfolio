import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Works from "./components/works";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
