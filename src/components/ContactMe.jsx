import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactMe() {
    return (
      <section className="contact-me">
        <h2>Contact Me</h2>
        <p>Email: tejaxavier@gmail.com</p>
        <p>Phone: 502-883-9579</p>
        <a href="resume.pdf" download>Download Resume</a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tejachippada">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          {/* ... other social media links */}
        </div>
      </section>
    );
  }

  export default ContactMe;