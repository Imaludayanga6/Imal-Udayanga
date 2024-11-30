import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing icons
import "./Home.css";
import profileImage from "../assets/images/profile.png"; // Correct path to the profile picture

const Home = () => (
  <section id="home" className="home">
    {/* Social Sidebar */}
    <div className="social-sidebar">
      <a
        href="https://github.com/Imaludayanga6"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/imal-udayanga-b13631269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/imal_udayanga6/profilecard/?igsh=OXBsMnF6dnluZ2Q1/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>

    {/* Main Content Section */}
    <div className="home-content">
      <div className="text-content">
        <h1>Imal Udayanga</h1>
        <h2>Full STack Development</h2>
        <p>
          I am a passionate and dedicated developer with experience in creating innovative mobile and web applications.
          My expertise includes Android app development, web development using the MERN stack, and crafting user-centric solutions
          to address real-world challenges. I am enthusiastic about learning new technologies and building impactful projects.
        </p>
      </div>
      <div className="image-content">
        <img src={profileImage} alt="Profile" className="profile-picture" />
      </div>
    </div>
  </section>
);

export default Home;
