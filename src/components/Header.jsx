import React from "react";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Imal Udayanga</h1>
      </div>
      <nav className="header-nav">
        <a
          href="https://github.com/Imaludayanga6"
          target="_blank"
          rel="noopener noreferrer"
          className="header-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/imal-udayanga-b13631269/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </nav>
    </header>
  );
};

export default Header;
