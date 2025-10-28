import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TenantSignup.css";

export default function TenantSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    facePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Save under "users" in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    const emailKey = formData.email.toLowerCase();
    users[emailKey] = { ...formData, role: "tenant", email: emailKey };
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Tenant account created successfully!");
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <button className="back-btn" onClick={() => navigate("/welcome")}>← Back</button>
          <img src="/logobnowhite.png" alt="Logo" className="signup-logo-large" />
          <h1>Welcome, Tenant!</h1>
          <p>Find your ideal boarding house and connect directly with landlords.</p>
        </div>

        <div className="signup-right">
          <h2>Tenant Signup</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
            </div>

            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />

            <div className="file-group">
              <label>Upload Profile Photo:</label>
              <input type="file" name="facePhoto" accept="image/*" required onChange={handleChange} />
            </div>

            <button type="submit" className="submit-btn">Sign Up</button>
            <p>Already have an account? <span onClick={() => navigate("/signin")}>Sign In</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}
