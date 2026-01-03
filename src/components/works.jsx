import React from "react";
import "../styles/Works.css";

export default function Works() {
  const works = [
    {
      id: 1,
      title: "NEN EVARU",
      year: 2024,
      roles: "Director • Writer • Cinematographer • Editor",
      image: "/nen-evaru-tn.png",
      link: "https://youtube.com/watch?v=5YsGWBMxHnU"
    },
    {
      id: 2,
      title: "Hecate",
      year: 2024,
      roles: "Director • Writer",
      image: "/hecate.jpg",
      link: "https://drive.google.com/file/d/1moNjgguulNnq2muvMZtA94a7o7C14ihz/view?usp=drive_link"
    },
    {
      id: 3,
      title: "ALTEREGO",
      year: 2025,
      roles: "Director • Writer • Editor • Cinematographer",
      image: "/alterego-tn.jpg",
      link: "https://youtube.com/watch?v=aDCyFOzCYSE"
    },
    {
      id: 4,
      title: "Just a minute",
      year: 2025,
      roles: "Director • Actor • Editor",
      image: "/just-a-minute.jpg",
      link: "https://drive.google.com/file/d/1HW209f3DZwTOYaxFbm0-VzYe4f1VKZ6n/view?usp=drive_link"
    }
  ];

  return (
    <section className="works" id="works">
      <h2>Selected Works</h2>

      {works.map((work) => (
        <div key={work.id} className="work">
          <div className="work-image">
            <img 
              src={work.image} 
              alt={work.title}
              className="work-img"
            />
          </div>
          <div className="work-content">
            <h3>{work.title} ({work.year})</h3>
            <p>{work.roles}</p>
            {work.link && (
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                Watch Film →
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}