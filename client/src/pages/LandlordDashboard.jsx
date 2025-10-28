import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandlordDashboard.css";
import { FaBell, FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

export default function LandlordDashboard() {
  const navigate = useNavigate();

  // read profile from localStorage (set at signup/login)
  const profileJson = localStorage.getItem("profile");
  const profile = profileJson ? JSON.parse(profileJson) : {
    firstName: "Landlord", lastName: "", address: "Iloilo City"
  };

  const handleLogout = () => {
    // clear session fields (optionally keep users list)
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    localStorage.removeItem("profile");
    navigate("/signin");
  };

  const handleAddListing = () => navigate("/addlisting");
  const handleNotificationClick = () => alert("Notifications coming soon!");

  // sample listing data (in a real app fetch from backend)
  const listings = [
    { id: 1, img: "room1.jpg", title: "1 Available", subtitle: "Double Bed" }
  ];

  return (
    <div className="landlord-dashboard-container">
      <div className="landlord-dashboard">
        <div className="profile-section">
          <div className="profile-info">
            <img src={profile.avatar || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"} alt="Profile" className="profile-pic" />
            <div className="profile-details">
              <h2 className="profile-name">
                {profile.firstName} {profile.lastName} <FaCheckCircle className="verified-check" />
              </h2>
              <p className="profile-role">Owner</p>
              <p className="profile-address">{profile.address}</p>
            </div>
          </div>

          <div className="profile-actions">
            <button className="add-listing-btn" onClick={handleAddListing}>Add listings</button>
            <FaBell className="notif-icon" onClick={handleNotificationClick} />
            <button className="logout-btn" onClick={handleLogout} style={{ marginLeft: 12 }}>Logout</button>
          </div>
        </div>

        <h1 className="boardinghouse-title">Rizal Boardinghouse</h1>

        <div className="listings-section">
          <h2 className="listings-title">Your Listings</h2>
          <div className="listings-grid">
            {listings.map(l => (
              <div className="listing-card" key={l.id}>
                <img src={l.img} alt="Listing" className="listing-image" />
                <div className="listing-text"><p>{l.title}</p><p>{l.subtitle}</p></div>
                <div className="listing-icons">
                  <FaEdit className="icon edit-icon" />
                  <FaTrash className="icon delete-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">© 2025 RenterGo. All rights reserved.</footer>
    </div>
  );
}
