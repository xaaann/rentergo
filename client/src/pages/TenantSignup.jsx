import React from "react";
import { useNavigate } from "react-router-dom";
import "./TenantSignup.css";

export default function TenantSignup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tenant account submitted successfully!");
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Left Section */}
        <div className="signup-leftt">
          {/* Back Button */}
          <button className="back-btn" onClick={() => navigate("/welcome")}>
            ← Back
          </button>

          <img src="/logoblackstroke-removebg.png" alt="Logo" className="signup-logo-large" />
          <h1>Join as a Tenant</h1>
          <p>
            Find your perfect home today and connect with trusted landlords easily.
          </p>
        </div>

        {/* Right Section */}
        <div className="signup-right">
          <h2 className="signup-title">Create Your Account</h2>
          <p className="signup-subtitle">Fill out the details below to get started.</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Middle Name" />
              <input type="text" placeholder="Last Name" required />
            </div>

            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />

            <div className="file-group">
              <label>ID Photo</label>
              <input type="file" accept="image/*" required />

              <label>Face Verification</label>
              <button type="button" className="camera-btn">📷 Open Camera</button>
            </div>

            <button type="submit" className="submit-btn">Create Account</button>
          </form>

          <p className="signin-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/signin")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}