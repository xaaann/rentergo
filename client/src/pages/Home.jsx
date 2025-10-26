import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const properties = [
    {
      id: 1,
      image: "bakhaw bh.jpg",
      title: "Isidro Boarding House",
      location: "Brgy. Bakhaw, Mandurriao, Iloilo",
    },
    {
      id: 2,
      image: "Mags bh.jpg",
      title: "Maggs Boarding House",
      location: "Burgos St. La Paz",
    },
    {
      id: 3,
      image: "nay fernandez bh.jpg",
      title: "Nay Fernandez Boarding House",
      location: "Brgy. Pueblo Conception, Mandurriao, Iloilo",
    },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setHighlightedIndex(-1);

    if (value.trim() === "") {
      setFilteredProperties([]);
      setShowSuggestions(false);
    } else {
      const filtered = properties.filter(
        (property) =>
          property.title.toLowerCase().includes(value.toLowerCase()) ||
          property.location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProperties(filtered);
      setShowSuggestions(true);
    }
  };

  const handleKeyDown = (e) => {
    const suggestions = filteredProperties;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
        handleSelectSuggestion(suggestions[highlightedIndex]);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setHighlightedIndex(-1);
    }
  };

  const handleSelectSuggestion = (property) => {
    setSearchTerm(property.title);
    setFilteredProperties([property]);
    setShowSuggestions(false);
  };

  const handleViewInfo = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredProperties([]);
    setShowSuggestions(false);
    setHighlightedIndex(-1);
  };

  const displayedProperties =
    searchTerm.trim() !== "" ? filteredProperties : properties;

  return (
    <div className="home-container">
      {/* HEADER SECTION WITH BACKGROUND IMAGE */}
      <div
        className="header-background"
        style={{
          backgroundImage: 'url("/bghome.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "white",
          padding: "100px 40px",
          textAlign: "center",
        }}
      >
        {/* Dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        ></div>

        {/* Text and Search Section */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className="header-text">
            "Find your next home away from home—fast, easy, and reliable"
          </h2>

          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for a place..."
                className="search-input"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() =>
                  setShowSuggestions(searchTerm.trim() !== "" ? true : false)
                }
              />

              {/* Erase (x) button */}
              {searchTerm.trim() !== "" && (
                <button
                  className="clear-button"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  &#10005;
                </button>
              )}

              {/* Suggestion Dropdown */}
              {showSuggestions && searchTerm.trim() !== "" && (
                <ul className="suggestions-list">
                  {filteredProperties.length > 0 ? (
                    filteredProperties.map((property, index) => (
                      <li
                        key={property.id}
                        className={`suggestion-item ${
                          index === highlightedIndex ? "highlighted" : ""
                        }`}
                        onMouseDown={() => handleSelectSuggestion(property)}
                      >
                        <img
                          src={property.image}
                          alt={property.title}
                          className="suggestion-thumb"
                        />
                        <div className="suggestion-text">
                          <p className="suggestion-title">{property.title}</p>
                          <p className="suggestion-location">
                            {property.location}
                          </p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="no-match">No matches found</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="content-section">
        <h3 className="explore-title">Explore</h3>

        <div className="cards-container">
          {displayedProperties.length > 0 ? (
            displayedProperties.map((property) => (
              <div key={property.id} className="card">
                <img
                  src={property.image}
                  alt={property.title}
                  className="card-image"
                />
                <div className="card-info">
                  <h4>{property.title}</h4>
                  <p>{property.location}</p>
                  <button
                    className="view-button"
                    onClick={() => handleViewInfo(property.id)}
                  >
                    View Info
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No properties found</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">© 2025 RenterGo. All rights reserved.</footer>
    </div>
  );
}