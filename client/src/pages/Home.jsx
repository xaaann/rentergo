import React from "react";
import "./Home.css";

export default function Home() {
  const properties = [
    {
      id: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/University_Residential_Housing_Ennis_Hall.jpg",
      title: "WIT area",
      location: "Luna St. La Paz"
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1157305603/photo/empty-hostel-room-with-bunk-beds.jpg",
      title: "WIT area",
      location: "Luna St. La Paz"
    },
    {
      id: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Kitchen_in_an_apartment.jpg",
      title: "WIT area",
      location: "Luna St. La Paz"
    }
  ];

  return (
    <div className="home-container">
      {/* Header section with background image */}
      <div className="header-background">
        <h2 className="header-text">
          "Find your next home away from home—fast, easy, and reliable"
        </h2>

        {/* Search input with filter icon */}
        <div className="search-container">
          <span className="filter-icon">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search for a place..."
            className="search-input"
          />
        </div>
      </div>

      {/* Explore section */}
      <div className="content-section">
        <h3 className="explore-title">Explore</h3>

        {/* Cards container */}
        <div className="cards-container">
          {properties.map((property) => (
            <div key={property.id} className="card">
              <img
                src={property.image}
                alt={property.title}
                className="card-image"
              />
              <div className="card-info">
                <h4>{property.title}</h4>
                <p>{property.location}</p>
                <button className="view-button">View Info</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}