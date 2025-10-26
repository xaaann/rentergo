import React from "react";
import "./Profile.css";
import { User } from "lucide-react"; // for placeholder icon

export default function Profile() {
  return (
    <div className="profile-page">
      {/* 🔹 Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/logo.png" alt="RenterGo" className="logo" />
          <span className="brand">RENTER<span className="go">GO</span></span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Landlord</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav-user">
          <User className="user-icon" />
        </div>
      </nav>

      {/* 🔹 Content */}
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="/avatar.png" alt="User Avatar" className="avatar-img" />
            <button className="edit-btn">✏️</button>
          </div>

          <div className="profile-info">
            <h2>General Information</h2>
            <div className="info-grid">
              <div>
                <p className="label">First Name</p>
                <p className="value">Shine</p>
              </div>
              <div>
                <p className="label">Last Name</p>
                <p className="value">Go</p>
              </div>
              <div>
                <p className="label">Middle Name</p>
                <p className="value">---</p>
              </div>
            </div>

            <div className="info-section">
              <p className="label">Email</p>
              <p className="value">shineGo@gmail.com</p>
            </div>

            <div className="info-section">
              <p className="label">Phone Number</p>
              <p className="value">09365217668</p>
            </div>

            <div className="info-section">
              <p className="label">Address</p>
              <p className="value"></p>
            </div>
          </div>
        </div>

        <p className="footer-email">shineGo@gmail.com</p>
      </div>
    </div>
  );
}
