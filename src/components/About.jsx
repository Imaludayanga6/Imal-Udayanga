import React from "react";
import "./About.css";
import aboutPhoto from "../assets/images/about-photo.jpg"; // Import the about page photo

const About = () => (
  <section id="about" className="about">
    <div className="about-content">
      <div className="image-content">
        <img
          src={aboutPhoto}
          alt="About Me"
          className="about-photo" // Photo class for styling
        />
      </div>
      <div className="text-content">
        <h2>About Me</h2>
        <p>
          I am a third-year undergraduate doing BSc Hons in Information Technology at SLIIT.
          I am excellent at working to achieve a certain objective on time.
          Also, I have a strong enthusiasm for learning, and I quickly grasp new concepts.
          I have a passion for programming and web development.
          Through group projects, I have developed a strong understanding of various programming languages, frameworks, and methodologies.
          I am eager to continue my professional growth in the dynamic field of IT and am actively seeking opportunities to apply my skills and expertise.
        </p>
        <a href="/assets/Imal Udayanga SLIIT.pdf" download>
          <button className="download-btn">Download CV</button>
        </a>
      </div>
    </div>
  </section>
);

export default About;
