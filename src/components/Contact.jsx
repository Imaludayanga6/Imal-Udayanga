import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing icons
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <p>If you would like to get in touch, feel free to reach out to me via the following channels:</p>

    <div className="contact-info">
      <p><strong>Email:</strong> imaludayanga6@gmail.com</p>
      <p><strong>Phone:</strong> +94 71 284 1611</p>
      <p><strong>Location:</strong> NO.27, Maheepalagoda, Yakkala</p>
    </div>

    <p>Looking forward to hearing from you!</p>

    {/* Social Links Section */}
    <div className="social-links">
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
  </section>
);

export default Contact;
