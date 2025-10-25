import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    photo: null,
    business_permit: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate saving user info in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    navigate("/home");
  };

  const handleFaceVerification = () => {
    alert("Opening camera for face verification (placeholder)");
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit} encType="multipart/form-data">
        <img src="renter go.jpg" alt="Logo" className="logo" />

        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Middle Name"
          name="middle_name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          required
        />

        <label htmlFor="photo">ID Photo</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <label htmlFor="business_permit">Business Permit</label>
        <input
          type="file"
          id="business_permit"
          name="business_permit"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleChange}
          required
        />

        <label htmlFor="face-verification">Face Verification</label>
        <button
          type="button"
          className="face-btn"
          id="face-verification"
          onClick={handleFaceVerification}
        >
          <img src="camera.png" alt="Camera Icon" />
        </button>

        <button type="submit" className="sign-up-button">
          Submit
        </button>

        <p className="signin-text">
          Already have an account?{" "}
          <span
            className="signin-link"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}
