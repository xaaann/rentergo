import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./WelcomePage.css";

const ProfilePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="logo.png" alt="Renter Logo" className="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Landlord
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <i className="bi bi-person-circle fs-4 text-white"></i>
        </div>
      </nav>

      {/* Profile Info */}
      <div className="container profile-container">
        <div className="d-flex align-items-center mb-4">
          <div className="position-relative">
            <img src="avatar.png" alt="Profile" className="profile-img" />
            <i className="bi bi-pencil-fill edit-icon"></i>
          </div>
          <div className="ms-3">
            <h4 className="fw-bold mb-1">General Information</h4>
          </div>
        </div>

        <div className="info-grid">
          <div>
            <small className="text-muted d-block">First Name</small>
            <span className="fw-semibold">Shine</span>
          </div>
          <div>
            <small className="text-muted d-block">Last Name</small>
            <span className="fw-semibold">Go</span>
          </div>
          <div>
            <small className="text-muted d-block">Middle Name</small>
            <span className="fw-semibold">---</span>
          </div>

          <div>
            <small className="text-muted d-block">Email</small>
            <span className="fw-semibold">shineGo@gmail.com</span>
          </div>
          <div>
            <small className="text-muted d-block">Phone Number</small>
            <span className="fw-semibold">---</span>
          </div>
          <div>
            <small className="text-muted d-block">Address</small>
            <span className="fw-semibold">---</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;