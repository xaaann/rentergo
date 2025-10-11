// Landlord.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Landlord.css";

export default function Landlord() {
  const navigate = useNavigate();

  const landlords = [
    {
      name: "Rizal Boardinghouse",
      owner: "Jhean Kate Rizal",
      address: "Gen. Luna, La Paz Iloilo City",
      avatar: "avatar1.png",
      boardinghouse: "Rizal Boardinghouse",
    },
    {
      name: "Magss Boarding House",
      owner: "Mags Salvador",
      address: "Burgos St. Lapaz Iloilo City",
      avatar: "avatar2.png",
      boardinghouse: "Magss Boarding House",
    },
    {
      name: "Tanya Boardinghouse",
      owner: "Tanya Lim",
      address: "Brgy Tacas, Jaro, Iloilo City",
      avatar: "avatar3.png",
      boardinghouse: "Tanya Boardinghouse",
    },
    {
      name: "Sarrah Boardinghouse",
      owner: "Sarrah Cruz",
      address: "Iloilo City",
      avatar: "avatar4.png",
      boardinghouse: "Sarrah Boardinghouse",
    },
  ];

  const handleViewInfo = (index) => {
    navigate(`/landlord-info/${index}`); // ✅ dynamic navigation
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <section className="main-section">
        <h2 className="section-title">See Landlords Info</h2>

        <div className="landlord-list">
          {landlords.map((landlord, index) => (
            <div key={index} className="landlord-card">
              <div className="landlord-info">
                <img src={landlord.avatar} alt="Avatar" className="avatar" />
                <div>
                  <p className="landlord-name">
                    {landlord.name}
                    <span className="verified-dot">●</span>
                  </p>
                  <p className="landlord-address">{landlord.address}</p>
                </div>
              </div>

              <button
                className="arrow-btn"
                onClick={() => handleViewInfo(index)}
              >
                <ArrowRight size={22} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">© 2025 RenterGo. All rights reserved.</footer>
    </div>
  );
}
