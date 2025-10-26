import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        {/* Left Side */}
        <div className="welcome-left">
          <h1>Welcome!</h1>
          <p className="subtitle">Create an Account</p>
          <p className="description">Select what best describes you</p>

          <div className="role-buttons">
            <button
              className="role-btn landlord"
              onClick={() => navigate("/landlord-signup")}
            >
              🏠 Landlord
            </button>
            <button
              className="role-btn tenant"
              onClick={() => navigate("/tenant-signup")}
            >
              🔑 Tenant
            </button>
            <button
              className="role-btn sign-in"
              onClick={() => navigate("/signin")}
            >
              📋 Sign In
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="welcome-right">
          <div className="circle-bg">
            <img src="/logonowhite.png" alt="Logo" className="welcome-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
