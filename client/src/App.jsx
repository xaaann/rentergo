// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Landlord from "./pages/Landlord";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ViewInfo from "./pages/ViewInfo";
import RentPage from "./pages/RentPage";
import LandlordInfo from "./pages/LandlordInfo";
import LandlordDashboard from "./pages/LandlordDashboard"; // ✅ Fixed typo
import AddListing from "./pages/Addlisting";

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

          {/* ✅ Landlord-related routes */}
          <Route path="/landlord-info/:id" element={<LandlordInfo />} />
          <Route path="/landlordDashboard" element={<LandlordDashboard />} />
          <Route path="/AddListing" element={<AddListing />} />
        </Routes>
      </div>
    </>
  );
}
