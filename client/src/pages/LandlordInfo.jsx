import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; 
import "./LandlordInfo.css";

export default function LandlordInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const landlords = [
    {
      name: "Isidro Boardinghouse",
      owner: "Isidro Bolante",
      address: "Brgy. Bakhaw, Mandurriao, Iloilo City",
      avatar: "/boy.png",
      boardinghouse: "Isidro Boardinghouse",
      listings: [{ img: "/room1.jpg", title: "1 Available", subtitle: "Double Bed" }],
    },
    {
      name: "Magss Boarding House",
      owner: "Mags Salvador",
      address: "Burgos St. Lapaz Iloilo City",
      avatar: "/woman (1).png",
      boardinghouse: "Magss Boarding House",
      listings: [{ img: "listing3.jpg", title: "3 Available", subtitle: "Bunk Bed" }],
    },
    {
      name: "Nay Fernandez Boardinghouse",
      owner: "Nay Fernandez",
      address: "Brgy. Pueblo Conception, Mandurriao, Iloilo",
      avatar: "/woman.png",
      boardinghouse: "Nay Fernandez Boardinghouse",
      listings: [{ img: "listing4.jpg", title: "1 Available", subtitle: "Private Room" }],
    },
  ];

  const landlord = landlords[id];

  if (!landlord) {
    return <h2 className="error-text">Landlord not found</h2>;
  }

  return (
    <div className="landlord-info-page">
      {/* Back Button */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate("/landlord")}>
          ← Back to Landlords
        </button>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <img src={landlord.avatar} alt="Landlord" className="profile-avatar" />
        <div className="profile-details">
          <h2 className="landlord-name">
            {landlord.owner}
            <FaCheckCircle className="verified-check" /> {/* ✅ Replaced Verified with FaCheckCircle */}
          </h2>
          <p className="landlord-role">Owner of {landlord.boardinghouse}</p>
          <p className="landlord-address">{landlord.address}</p>
        </div>
      </div>

      <h3 className="listings-title">Listings</h3>

      <div className="listings-grid">
        {landlord.listings.map((item, index) => (
          <div key={index} className="listing-card">
            <img src={item.img} alt="Listing" className="listing-img" />
            <p className="listing-title">{item.title}</p>
            <p className="listing-subtitle">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
