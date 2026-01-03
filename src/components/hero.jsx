import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Background Video */}
      <video autoPlay loop muted playsInline>
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Tummuru Hemanth Reddy</h1>
        <p>Filmmaker · Editor · Storyteller</p>
      </div>

      <button
        className="cta-button"
        onClick={() => scrollToSection("works")}
      >
        View My Works
      </button>

      <div className="social-links">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          YouTube
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          Instagram
        </a>
        <a
          href="mailto:tummuruhemanthreddy@gmail.com"
          className="social-icon"
        >
          Email
        </a>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}