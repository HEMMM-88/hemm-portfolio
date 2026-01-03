import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Creative Skills",
      skills: [
        "Film Direction",
        "Cinematography",
        "Video Editing",
        "Storyboarding",
        "Screenwriting",
        "Color Grading"
      ]
    },
    {
      title: "Technical & Software",
      skills: [
        "DaVinci Resolve",
        "Premiere Pro",
        "After Effects",
        "Motion Graphics",
        "Sound Design",
        "Visual Effects"
      ]
    },
    {
      title: "Specialized Skills",
      skills: [
        "Lighting Design",
        "Camera Operation",
        "Audio Mixing",
        "Grading & Correction",
        "2D Animation",
        "VFX Compositing"
      ]
    }
  ];

  const duplicateSkills = (arr) => [...arr, ...arr];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="carousels-wrapper">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="carousel-section">
              <h3 className="carousel-title">{category.title}</h3>
              
              <div className="skills-carousel">
                <div className={`carousel-track ${catIdx % 2 === 0 ? 'scroll-left' : 'scroll-right'}`}>
                  {duplicateSkills(category.skills).map((skill, idx) => (
                    <div key={idx} className="carousel-item">
                      <span className="skill-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}