import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // removed Verified
import { FaCheckCircle } from "react-icons/fa"; // ✅ added Font Awesome check icon
import "./Landlord.css";

export default function Landlord() {
  const navigate = useNavigate();

  const landlords = [
    {
      name: "Isidro Boardinghouse",
      owner: "Isidro Bolante",
      address: "Brgy. Bakhaw, Mandurriao, Iloilo City",
      avatar: "boy.png",
    },
    {
      name: "Magss Boarding House",
      owner: "Mags Salvador",
      address: "Burgos St. Lapaz Iloilo City",
      avatar: "woman (1).png",
    },
    {
      name: "Nay Fernandez Boardinghouse",
      owner: "Nay Fernandez",
      address: "Brgy. Pueblo Conception, Mandurriao, Iloilo",
      avatar: "woman.png",
    },
  ];

  const handleViewInfo = (index) => {
    navigate(`/landlord-info/${index}`);
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <section className="main-section flex-grow">
        <div className="title-container">
          <h2 className="section-title">See Landlords Info</h2>
        </div>

        <div className="landlord-list">
          {landlords.map((landlord, index) => (
            <div key={index} className="landlord-card">
              <div className="landlord-info">
                <img src={landlord.avatar} alt="Avatar" className="avatar" />
                <div>
                  <p className="landlord-name">
                    {landlord.name}
                    {/* ✅ replaced Lucide Verified with Font Awesome check */}
                    <FaCheckCircle className="verified-check" />
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

      {/* ✅ Matching footer style */}
      <footer className="footer">
        <p>© 2025 RenterGo. All rights reserved.</p>
      </footer>
    </div>
  );
}
