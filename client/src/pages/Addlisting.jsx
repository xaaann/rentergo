import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddListing.css";

const AddListing = () => {
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
    alert("Listing Posted!");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="logo.png" alt="Renter Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Landlord</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
            </ul>
          </div>
          <i className="bi bi-person-circle fs-4 text-white"></i>
        </div>
      </nav>

      {/* Add Listing Form */}
      <div className="container form-container">
        <h5 className="fw-semibold mt-4">Add new</h5>
        <h3 className="fw-bold mb-4">Listings</h3>

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* Left Side */}
            <div className="col-md-6">
              <div className="upload-box d-flex align-items-center justify-content-center">
                <i className="bi bi-image fs-1"></i>
              </div>

              <h6 className="fw-semibold mt-3">Listing Information</h6>

              <input
                type="text"
                name="title"
                placeholder="Title info"
                className="form-control mb-2"
                value={form.title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="form-control mb-2"
                value={form.address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="rate"
                placeholder="Monthly Rate"
                className="form-control mb-2"
                value={form.rate}
                onChange={handleChange}
              />
            </div>

            {/* Right Side */}
            <div className="col-md-6">
              <input
                type="text"
                name="contact"
                placeholder="Add Contact Us"
                className="form-control mb-3"
                value={form.contact}
                onChange={handleChange}
              />

              <label className="form-label small fw-semibold">Details</label>
              <textarea
                name="details"
                placeholder="Enter details..."
                className="form-control mb-3"
                rows="3"
                value={form.details}
                onChange={handleChange}
              ></textarea>

              <input
                type="text"
                name="amenities"
                placeholder="add & edit amenities"
                className="form-control mb-3"
                value={form.amenities}
                onChange={handleChange}
              />

              <div className="upload-map d-flex align-items-center">
                <i className="bi bi-image fs-5 me-2"></i>
                <span>Add Map</span>
              </div>

              <button type="submit" className="btn btn-primary mt-3 w-100">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;