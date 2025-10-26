import React, { useState } from "react";
import "./AddListing.css";

export default function AddListing() {
  const [form, setForm] = useState({
    title: "",
    address: "",
    rate: "",
    contact: "",
    details: "",
    amenities: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.title || !form.address || !form.rate || !form.contact || !form.details) {
      alert("Please fill in all required fields!");
      return;
    }
    
    alert("Listing Posted!");
    // Navigate to landlord page
    window.location.href = "/landlord";
  };

  return (
    <div className="add-listing-page">
      {/* Form Section */}
      <div className="form-section">
        <h2 className="main-heading">Add new Listings</h2>

        <form className="listing-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Left Side */}
            <div className="left-side">
              <div className="upload-box">
                <span className="upload-icon">🖼️</span>
              </div>

              <h6 className="section-title">Listing Information</h6>

              <input
                type="text"
                name="title"
                placeholder="Title info"
                value={form.title}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="rate"
                placeholder="Monthly Rate"
                value={form.rate}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {/* Right Side */}
            <div className="right-side">
              <input
                type="text"
                name="contact"
                placeholder="Add Contact Us"
                value={form.contact}
                onChange={handleChange}
                className="form-input"
                required
              />

              <label className="form-label">Details</label>
              <textarea
                name="details"
                placeholder="Enter details..."
                rows="3"
                value={form.details}
                onChange={handleChange}
                className="form-textarea"
                required
              ></textarea>

              <label className="form-label">Amenities</label>
              <input
                type="text"
                name="amenities"
                placeholder="add & edit amenities"
                value={form.amenities}
                onChange={handleChange}
                className="form-input"
              />

              <div className="upload-map">
                <span className="map-icon">🗺️</span>
                <span>Add Map</span>
              </div>

              <button type="submit" className="post-btn">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}