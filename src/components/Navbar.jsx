import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={() => scrollToSection("home")}>HEMM</a>
        </div>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <a onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </a>
          <a onClick={() => scrollToSection("about")} className="nav-link">
            About
          </a>
          <a onClick={() => scrollToSection("works")} className="nav-link">
            Works
          </a>
          <a onClick={() => scrollToSection("experience")} className="nav-link">
            Experience
          </a>
          <a onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </a>
          <a onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </a>
        </div>

        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}