import React from "react";
import "../styles/Experience.css";
import useFadeIn from "../hooks/useFadeIn";

export default function Experience() {
    const fadeRef = useFadeIn();
  return (
    <section ref={fadeRef} className="experience fade-in" id="experience">
      <h2>Experience</h2>
      <ul>
        <li>Head of DOP Dept – Chalana Chitram BVRIT</li>
        <li>Videography Coordinator – Infiniti Tech</li>
        <li>4th place – 48+48 Hour Short Film Competition</li>
        <li>Finalist – Kaleido x Chitrastra</li>
      </ul>
    </section>
  );
}
