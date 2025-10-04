// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Landlord from './pages/Landlord';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


export default function App() {
  return (
    <>
      {/* Renders the Navbar on every page */}
      <Navbar /> 

      <div className="container">
        {/* Routes to display the correct component based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landlord" element={<Landlord />} />
          {/* FIX: Set a consistent path for the About Us component */}
          <Route path="/aboutus" element={<AboutUs />} /> 
          {/* FIX: Set a consistent path for the Contact Us component */}
          <Route path="/contactus" element={<ContactUs />} /> 
        </Routes>
      </div>
    </>
  );
}