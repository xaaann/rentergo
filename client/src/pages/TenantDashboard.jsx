import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TenantDashboard.css";

export default function TenantDashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ firstName: "", lastName: "", image: "" });

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    localStorage.removeItem("profile");
    navigate("/signin");
  };

  return (
    <div className="tenant-dashboard-container">
      {/* ===== Header Section ===== */}
      <div className="tenant-dashboard-header">
        <div className="profile-section">
          <div className="profile-info">
            {/* Show uploaded photo if available, else default */}
            <img
              src={profile.image || "/default-profile.png"}
              alt="Profile"
              className="profile-pic"
            />
            <div className="profile-details">
              <span className="profile-name">
                {profile.firstName} {profile.lastName}
              </span>
              <span className="profile-role">Tenant</span>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* ===== Dashboard Info Section ===== */}
      <h1 className="dashboard-title">Welcome to your Tenant Dashboard</h1>
      <p className="dashboard-description">
        Here you’ll see available rooms, your bookings, and messages.
      </p>

      {/* ===== Example Sections ===== */}
      <div className="rooms-section">
        <h2 className="section-title">Available Rooms</h2>
        <div className="cards-grid">
          <div className="card">
            <h3 className="card-title">Room A</h3>
            <p className="card-desc">₱3,000/month - Near City Proper</p>
          </div>
          <div className="card">
            <h3 className="card-title">Room B</h3>
            <p className="card-desc">₱2,500/month - With private CR</p>
          </div>
        </div>
      </div>

      <div className="bookings-section">
        <h2 className="section-title">My Bookings</h2>
        <div className="cards-grid">
          <div className="card">
            <h3 className="card-title">Pending Booking</h3>
            <p className="card-desc">Awaiting landlord confirmation</p>
          </div>
        </div>
      </div>

      <div className="messages-section">
        <h2 className="section-title">Messages</h2>
        <div className="cards-grid">
          <div className="card">
            <h3 className="card-title">No messages yet</h3>
            <p className="card-desc">Check back soon.</p>
          </div>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <footer className="footer">© 2025 RenterGo. All rights reserved.</footer>
    </div>
  );
}
