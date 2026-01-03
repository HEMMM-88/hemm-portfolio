import React from "react";
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/hero";
import About from "./src/components/about";
import Works from "./src/components/works";
import Experience from "./src/components/experience";
import Skills from "./src/components/skills";
import Contact from "./src/components/contact";

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
