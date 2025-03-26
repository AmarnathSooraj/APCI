import React from "react";
import "./Speakers.css";

const speakers = [
  {
    name: "Dr. Nikita Hari, BEng, MEng, PhD Cantab, FFF Oxon",
    position: "Head of Teaching and Research Design Support Group (TDSG)",
    institution: "Department of Engineering Science, University of Oxford",
  },
  {
    name: "Dr. Akhil K Ramesh",
    position: "Research Scientist",
    institution: "Temasek Laboratories, Nanyang Technological University Singapore",
  },
  {
    name: "Er. Pradeesh Madhavan",
    position: "Scientist",
    institution: "ISRO - Indian Space Research Organization",
  },
  {
    name: "Dr. Sreejith T V",
    position: "Assistant Professor",
    institution: "Department of Electrical and Electronics Engineering, IIT Bhilai",
  },
  {
    name: "Er. Prahalad",
    position: "Senior RTL Design Engineer",
    institution: "NXP Semiconductor Bangalore",
  },
];

function Speakers() {
  return (
    <div className="speakers-container">
      <h2>Keynote Speakers</h2>
      <div className="speakers-list">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <h3>{speaker.name}</h3>
            <p><strong>{speaker.position}</strong></p>
            <p>{speaker.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
