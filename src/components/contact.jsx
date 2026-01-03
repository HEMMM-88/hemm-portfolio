import React from "react";
import "../styles/Contact.css";
import useFadeIn from "../hooks/useFadeIn";

export default function Contact() {
    const fadeRef = useFadeIn();
  return (
    <section ref={fadeRef} className="contact fade-in" id="contact">
      <section className="contact" id="contact">
        <h2 className="section-title">Contact</h2>

        <p className="contact-subtitle">
            Open for internships & collaborations
        </p>

        <a
            href="mailto:tummuruhemanthreddy@gmail.com"
            className="contact-email"
        >
        tummuruhemanthreddy@gmail.com
        </a>
        <a
            href="tel:+917842355166"
            className="contact-email"
        >
        +91 7842355166
        </a>
    </section>
    </section>
  );

}