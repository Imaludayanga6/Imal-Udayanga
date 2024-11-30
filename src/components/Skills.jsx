import React from "react";
import "./Skills.css";

// Import logos for the skills from the assets/images folder
import reactLogo from "../assets/images/react-logo.svg";
import nodeLogo from "../assets/images/nodejs-logo.svg";
import mongoDBLogo from "../assets/images/mongodb-logo.svg";
import JSsLogo from "../assets/images/js-logo.svg";
import htmlLogo from "../assets/images/html-logo.svg";
import cssLogo from "../assets/images/css-logo.svg";
import jsLogo from "../assets/images/java-svgrepo-com.svg";
import pythonLogo from "../assets/images/python-logo.svg";

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    <div className="skills-container">
      <div className="skill">
        <img src={reactLogo} alt="React" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="skill">
        <img src={nodeLogo} alt="Node.js" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="skill">
        <img src={mongoDBLogo} alt="MongoDB" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="skill">
        <img src={JSsLogo} alt="JavaScript" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="skill">
        <img src={htmlLogo} alt="HTML" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="skill">
        <img src={cssLogo} alt="CSS" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="skill">
        <img src={jsLogo} alt="Java" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="skill">
        <img src={pythonLogo} alt="Python" style={{ width: '50px', height: '50px' }} />
      </div>
    </div>
  </section>
);

export default Skills;
