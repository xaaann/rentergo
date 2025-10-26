import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contactus-container">
      {/* Main Section */}
      <div className="contact-wrapper">
        <section className="contact-section">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h2>Get in touch with us!</h2>
            <p>
              <i className="fas fa-envelope icon"></i>
              boardinghousefinder@gmail.com
            </p>
            <p>
              <i className="fas fa-phone icon"></i>
              098-999-888-77
            </p>
            <p>
              <i className="fas fa-map-marker-alt icon"></i>
              Luna, Lapaz, Iloilo City
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea rows="5" placeholder="Message..." required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
       © 2025 RenterGo. All rights reserved.
      </footer>
    </div>
  );
}
