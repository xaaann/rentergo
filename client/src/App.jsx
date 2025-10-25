import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Landlord from "./pages/Landlord";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ViewInfo from "./pages/ViewInfo";
import RentPage from "./pages/RentPage";
import LandlordInfo from "./pages/LandlordInfo";
import LandlordDashboard from "./pages/LandlordDashboard";
import AddListing from "./pages/AddListing";

export default function App() {
  const location = useLocation();

  // Hide Navbar only on Landing Page (/)
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <div className="container">
        <Routes>
          {/* Landing Page shows only at "/" */}
          <Route path="/" element={<LandingPage />} />

          {/* Main pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/property/:id" element={<ViewInfo />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/landlord-info/:id" element={<LandlordInfo />} />
          <Route path="/landlordDashboard" element={<LandlordDashboard />} />
          <Route path="/AddListing" element={<AddListing />} />
        </Routes>
      </div>
    </>
  );
}
