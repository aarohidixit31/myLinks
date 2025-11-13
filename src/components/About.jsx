import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container about-inner">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I’m a pre-final year <strong>Computer Science student</strong> at Chitkara University,
          passionate about building <strong>impactful tech solutions</strong> that blend creativity, logic, and communication.  
          I love turning ideas into real-world projects using <strong>Java, Spring Boot, React.js,</strong> and <strong>SQL</strong>.  
          <br /> 
          Beyond code, I simplify complex tech for an <strong>18K+ learner community</strong> through my content - proving that
          <strong> clean code and clear communication</strong> go hand in hand.
        </p>

        <div className="skills-grid">
          <div className="skill-card">Java & Spring Boot</div>
          <div className="skill-card">MERN Stack</div>
          <div className="skill-card">SQL & Databases</div>
          <div className="skill-card">GitHub & Open Source</div>
          <div className="skill-card">Public Speaking</div>
        </div>
      </div>
    </section>
  );
}
