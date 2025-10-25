// RentPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RentPage.css'; // Import the dedicated CSS file

export default function RentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Safely access the property object passed via state
  const property = location.state?.property;

  // Handler for the Rent button (currently just logging and navigating)
  const handleRentSubmit = (e) => {
    e.preventDefault();
    console.log("Rent request submitted for property:", property?.title);
    // In a real application, you'd handle form validation and API submission here.
    alert(`Rental request submitted for ${property?.title}! (Simulation)`);
    navigate('/'); // Redirect to home or a confirmation page
  };

  // Handler for the Cancel button
  const handleCancel = () => {
    // Optionally navigate back to the previous page (ViewInfo)
    navigate(-1); 
  };
  
  // Display a message if no property data was found (e.g., if user accessed /rent directly)
  if (!property) {
      return (
          <div className="rent-page-container fallback">
              <h1>Rental Application</h1>
              <p>Please select a property first to proceed with the rental application.</p>
              <button className="fallback-button" onClick={() => navigate('/')}>
                  Browse Properties
              </button>
          </div>
      );
  }

  return (
    <div className="rent-page-container">
      {/* Property Context Header (Optional, but helpful for user context) */}
     

      <form className="rental-form" onSubmit={handleRentSubmit}>
        <div className="form-content">
          
          {/* 1. Personal Details Section */}
          <div className="personal-details-section">
            <h2>Personal Details</h2>
            
            <div className="input-group">
              <input type="text" placeholder="First Name" required />
            </div>
            
            <div className="input-group">
              <input type="text" placeholder="Last Name" required />
            </div>
            
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            
            <div className="input-group">
              <input type="text" placeholder="Facebook Account Link" />
            </div>
          </div>

          {/* 2. Rental Details Section */}
          <div className="rental-details-section">
            <h2>Rental Details</h2>
            <p className="room-preference-title">Room Preference</p>
            
            <div className="radio-group">
              <label>
                <input type="radio" name="roomPreference" value="Shared Room" required />
                Shared Room
              </label>
              
              <label>
                <input type="radio" name="roomPreference" value="Single Room" />
                Single Room
              </label>
              
              <label>
                <input type="radio" name="roomPreference" value="Bed Spacer" />
                Bed Spacer
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button 
            type="button" 
            className="cancel-button" 
            onClick={handleCancel}
          >
            Cancel
          </button>
          
          <button 
            type="submit" 
            className="rent-submit-button"
          >
            Rent
          </button>
        </div>
      </form>
    </div>
  );
}