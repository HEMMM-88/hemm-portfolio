import React from "react";
import "../styles/About.css";
import useFadeIn from "../hooks/useFadeIn";

export default function About() {
  const fadeRef = useFadeIn();

  return (
    <section ref={fadeRef} className="about fade-in" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About</h2>
          <p>
            
"I'm a storyteller at heart—a filmmaker and AI & Data Science student who believes in the power of visual composition to evoke emotion. I direct, shoot, and edit short films, and lead cinematography initiatives at my college."
          </p>
        </div>
        <div className="about-image">
          <img 
            src="/about-me.jpg" 
            alt="Portrait" 
            className="portrait-img"
          />
        </div>
      </div>
    </section>
  );
}