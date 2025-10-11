// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Landlord from './pages/Landlord';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ViewInfo from './pages/ViewInfo';
import RentPage from './pages/RentPage';
import LandlordInfo from './pages/LandlordInfo'; // 👈 Import your new page

export default function App() {
  return (
    <>
      {/* Navbar appears on all pages */}
      <Navbar /> 

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/aboutUs" element={<AboutUs />} /> 
          <Route path="/contactUs" element={<ContactUs />} /> 
          <Route path="/property/:id" element={<ViewInfo />} /> 
          <Route path="/rent" element={<RentPage />} /> 
          
          {/* 👇 New route for the landlord info page */}
          <Route path="/landlord-info/:id" element={<LandlordInfo />} />
        </Routes>
      </div>
    </>
  );
}
