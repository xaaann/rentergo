import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="/home">
        
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/landlord">Landlord</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Building the future of renting in Iloilo City</h1>
          <p className="subtitle">
            “Find your next home away from home — fast, easy, and reliable”
          </p>

          <div className="about-content">
            <div className="about-text">
              <h2>What is RenterGo?</h2>
              <p>
                RenterGo is a simple and reliable platform that helps students and
                workers find boarding houses easily inside Iloilo City. With
                detailed listings, photos, and real-time updates, we make the search
                for safe and affordable accommodation fast and hassle-free. We
                connect renters and owners in just a few clicks.
              </p>
            </div>
            <div className="about-image">
              <img src="/bh animated 1.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-left">
          <img src="/mansit .jpg" alt=""
          />
        </div>
        <div className="mission-right">
          <h2>Our Mission</h2>
          <h3>Make renting safe, affordable, and convenient</h3>
          <p>
            We aim to connect students and workers in Iloilo City to connect with
            trusted landlords through a user-friendly platform that promotes
            transparency, comfort, and accessibility for everyone.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Honesty and Trust</h3>
            <p>
              We value transparency and integrity ensuring every listing is
              trustworthy and every user feels secure.
            </p>
          </div>
          <div className="value-item">
            <h3>Connects People</h3>
            <p>
              Connecting people and making them comfortable and confident with
              their newfound home.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2025 RenterGo. All rights reserved.
      </footer>
    </div>
  );
}
