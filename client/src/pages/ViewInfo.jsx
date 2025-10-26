import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewInfo.css";

export default function ViewInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Property data
  const propertyData = {
    1: {
      title: "Isidro Boarding House",
      location: "Brgy. Bakhaw, Mandurriao, Iloilo",
      price: {
        withoutCR: 4500,
        withCR: 8500,
      },
      images: ["/room0.jpg", "/room1.jpg", "/room2.jpg", "/room3.jpg"],
      description:
        "A comfortable boarding house near the CPU gate 8, ideal for female tenants looking for a safe and peaceful place to stay.",
      amenities: [
        "Free use of shared kitchen",
        "Laundry area available",
        "Clean shared bathrooms (regularly maintained)",
        "Water and electricity not included (₱150 if you want to pay for water bill)",
      ],
      highlights: [
        "1 Month Deposit",
        "6 Months Minimum Stay",
        "WiFi",
        "Parking",
        "Girls Only",
        "Shared Room",
      ],
      houseRules: [
        "Visitor is only allowed until 6 PM",
        "Pets are not allowed",
        "Overnight stay costs ₱100 and only for family members",
      ],
      contact: {
        name: "RenterGo",
        phone: "09123456789",
        email: "RenterGo@gmail.com",
      },
      map: "/bakhaw-map.png",
    },
    2: {
      title: "Maggs Boarding House",
      location: "Burgos St. La Paz",
      price: {
        withoutCR: 3500,
        withCR: 5000,
      },
 images: ["/maggs bh1.jpg", "/maggs bh2.jpg", "/maggs bh3.jpg"],
      description: "A comfortable boarding house near ISAT-U",
      amenities: [
        "Wifi",
        "Water",
        "Electricity",
      ],
      highlights: ["1 Month Advance", "1 Year Minimum Stay","WiFi","Both Male and Female","Water & Electricity Included","Curfew Hours Applied"],
      contact: {
        name: "RenterGo",
        phone: "09299994538",
        email: "RenterGo@gmail.com",
      },
      map: "/lapaz-map.png",
    },
    3: {
      title: "Near Santa Isabel College",
      location: "Pueblo Conception Mandurriao Iloilo",
      price: 2500,
      images: ["/nay fernandez bh1.jpg", "/nay fernandez bh2.jpg"],
      description: "A comfortable boarding house near Santa Isabel College and Festive Walk",
      amenities: [
        "Room only (no additional amenities)",
        "Water: Free",
        "Electricity: Not included"
      ],
   highlight:["1 Month Deposit","1 Year Minimum Stay","Room Only","Both Male and Female"],
   contact: {
        name: "RenterGo",
        phone: "09123456789",
        email: "RenterGo@gmail.com",
      },
      map: "/pueblo-map.png",
    },
  };

  const property = propertyData[id];

  if (!property) {
    return (
      <div className="property-detail">
        <h2>Property not found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleRent = () => {
    navigate("/rent", { state: { property } });
  };

  const handleBack = () => {
    navigate("/home");
  };

  const renderPrice = () => {
    if (typeof property.price === "object") {
      return (
        <>
          ₱{property.price.withoutCR.toLocaleString()} (without CR) or ₱
          {property.price.withCR.toLocaleString()} (with CR)
        </>
      );
    }
    return `₱${property.price.toLocaleString()}`;
  };

  return (
    <div className="property-detail scrollable">
      <button className="back-button-top" onClick={handleBack}>
        ← Back to Home
      </button>

      <div className="detail-content">
        <div className="detail-left">
          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="main-image-container">
              {property.images.length > 1 && (
                <>
                  <button className="nav-arrow left" onClick={prevImage}>
                    ‹
                  </button>
                  <button className="nav-arrow right" onClick={nextImage}>
                    ›
                  </button>
                </>
              )}
              <img
                src={property.images[currentImageIndex]}
                alt={`${property.title} - ${currentImageIndex + 1}`}
                className="main-image"
              />
              {property.images.length > 1 && (
                <div className="image-counter">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              )}
            </div>

            {property.images.length > 1 && (
              <div className="thumbnail-container">
                {property.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`thumbnail ${
                      idx === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            )}
          </div>

          <h2 className="property-title">{property.title}</h2>
          <p className="property-location">{property.location}</p>
          <p className="property-price">{renderPrice()} / month</p>

          {/* Highlights */}
          <div className="highlights-section">
            <h3>HIGHLIGHTS</h3>
            <div className="highlights-grid">
              {property.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-badge">
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="details-section">
            <h3>DETAILS</h3>
            <p>{property.description}</p>

            <h4>Amenities</h4>
            <ul>
              {property.amenities.map((amenity, idx) => (
                <li key={idx}>✓ {amenity}</li>
              ))}
            </ul>

            <h4>Monthly Rate</h4>
            <ul>
              {typeof property.price === "object" ? (
                <>
                  <li>✓ ₱{property.price.withoutCR} / month (without CR)</li>
                  <li>✓ ₱{property.price.withCR} / month (with CR)</li>
                </>
              ) : (
                <li>✓ ₱{property.price} / month</li>
              )}
              <li>✓ Water and electricity not included</li>
              <li>✓ 1 month advance, 1 month deposit</li>
            </ul>

            {/* Contact Section (disabled inputs, not clickable) */}
            <div className="contact-card">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <input
                  type="text"
                  value={property.contact.name}
                  readOnly
                  disabled
                  className="contact-input"
                />
                <input
                  type="text"
                  value={property.contact.phone}
                  readOnly
                  disabled
                  className="contact-input"
                />
                <input
                  type="text"
                  value={property.contact.email}
                  readOnly
                  disabled
                  className="contact-input"
                />
              </div>
              <div className="update-info">
                <span>🕐</span>
                <span>The owner updated the listings about 4 hours ago</span>
              </div>
            </div>

            {/* Location with Map */}
            <div className="location-card">
              <h3>LOCATION</h3>
              <div className="map-placeholder">
                <img
                  src={property.map}
                  alt={`${property.title} map`}
                  className="map-image"
                />
                <p className="map-caption">{property.location}</p>
              </div>
            </div>

            <button className="rent-button" onClick={handleRent}>
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
