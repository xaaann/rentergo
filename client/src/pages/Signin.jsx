import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css"; // same as your sign-in.css file

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Toggle password visibility
  const togglePassword = () => {
    setForm({ ...form, showPassword: !form.showPassword });
  };

  // Handle login
  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert(`Welcome back, ${user.first_name || user.name}!`);
      navigate("/home");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <img src="renter go.jpg" alt="Logo" className="logo" />

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input-field"
            onChange={handleChange}
            required
          />

          <div className="password-container">
            <input
              type={form.showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input-field"
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={togglePassword}
              title={form.showPassword ? "Hide password" : "Show password"}
            >
              {form.showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account yet?{" "}
          <span className="signup-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
