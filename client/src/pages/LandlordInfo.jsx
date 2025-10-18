import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./LandlordInfo.css";

export default function LandlordInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated landlord data
  const landlords = [
    {
      name: "Rizal Boardinghouse",
      owner: "Jhean Kate Rizal",
      address: "Gen. Luna, La Paz Iloilo City",
      image: "landlord1.jpg",
      boardinghouse: "Rizal Boardinghouse",
      listings: [
        { img: "listing1.jpg", title: "1 Available", subtitle: "Double Bed" },
        { img: "listing2.jpg", title: "2 Available", subtitle: "Single Room" },
      ],
    },
    {
      name: "Magss Boarding House",
      owner: "Mags Salvador",
      address: "Burgos St. Lapaz Iloilo City",
      image: "landlord2.jpg",
      boardinghouse: "Magss Boarding House",
      listings: [
        { img: "listing3.jpg", title: "3 Available", subtitle: "Bunk Bed" },
      ],
    },
    {
      name: "Tanya Boardinghouse",
      owner: "Tanya Lim",
      address: "Brgy Tacas, Jaro, Iloilo City",
      avatar: "avatar3.png",
      boardinghouse: "Tanya Boardinghouse",
      listings: [
        { img: "listing4.jpg", title: "1 Available", subtitle: "Private Room" },
      ],
    },
    {
      name: "Sarrah Boardinghouse",
      owner: "Sarrah Cruz",
      address: "Iloilo City",
      avatar: "avatar4.png",
      boardinghouse: "Sarrah Boardinghouse",
      listings: [
        { img: "listing5.jpg", title: "2 Available", subtitle: "Double Bed" },
      ],
    },
  ];

  const landlord = landlords[id];

  if (!landlord) {
    return <h2 className="error-text">Landlord not found</h2>;
  }

  return (
    <div className="landlord-info-page">
      {/* Back Button - Visible just below Navbar */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate("/landlord")}>
          ← Back to Landlords
        </button>
      </div>

      <div className="profile-section">
        <img src={landlord.avatar} alt="Landlord" className="profile-avatar" />
        <div className="profile-details">
          <h2 className="landlord-name">
            {landlord.owner} <span className="verified-badge">✔</span>
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
