import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    alert("Sign In successful!");
    navigate("/home");
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-logo-container">
          <img src="/logonowhite.png" alt="Logo" className="signin-logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            required
            className="signin-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="signin-input"
          />

          <button type="submit" className="signin-button">
            Sign In
          </button>

          <p className="signup-link">
            Don't have an account yet?{" "}
            <span onClick={() => navigate("/welcome")}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}