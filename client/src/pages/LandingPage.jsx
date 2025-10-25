import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/home"); // change to your route
  };

  return (
    <div className="landing-container">
      <div className="landing-left">
        <img
          src="/logonowhite.png"
          alt="Home Pin"
          className="landing-icon"
        />
        <h1 className="landing-title">WELCOME!</h1>
        <p className="landing-subtitle">
          “Find your next home away from home—fast, easy, and reliable”
        </p>
        <button className="landing-button" onClick={handleNext}>
          Next
        </button>
      </div>

      <div className="landing-right">
        <img
          src="https://img.freepik.com/free-vector/midtown-skyline-building-city-experience-modern-exterior_1017-58536.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Room"
          className="landing-image"
        />
      </div>
    </div>
  );
}
