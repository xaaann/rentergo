import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandlordDashboard.css";
import { FaBell, FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

export default function LandlordDashboard() {
  const navigate = useNavigate();

  const listings = [
    {
      id: 1,
      img: "room1.jpg", // double bed image
      title: "1 Available",
      subtitle: "Double Bed",
    },
  ];

  const handleAddListing = () => {
    navigate("/listings"); // goes to another listings page
  };

  const handleNotificationClick = () => {
    alert("Notifications feature coming soon!");
  };

  return (
    <div className="landlord-dashboard">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-details">
            <h2 className="profile-name">
              Jhean Kate Rizal <FaCheckCircle className="verified-icon" />
            </h2>
            <p className="profile-role">Owner</p>
            <p className="profile-address">Gen. Luna, La Paz Iloilo City</p>
          </div>
        </div>

        <div className="profile-actions">
          <button className="add-listing-btn" onClick={handleAddListing}>
            Add listings
          </button>
          <FaBell className="notif-icon" onClick={handleNotificationClick} />
        </div>
      </div>

      {/* Boardinghouse Title */}
      <h1 className="boardinghouse-title">Rizal Boardinghouse</h1>

      {/* Listings Section */}
      <div className="listings-section">
        <h2 className="listings-title">Your Listings</h2>

        <div className="listings-grid">
          {listings.map((listing) => (
            <div className="listing-card" key={listing.id}>
              <img src={listing.img} alt="Listing" className="listing-image" />
              <div className="listing-text">
                <p>{listing.title}</p>
                <p>{listing.subtitle}</p>
              </div>
              <div className="listing-icons">
                <FaEdit className="icon edit-icon" />
                <FaTrash className="icon delete-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
