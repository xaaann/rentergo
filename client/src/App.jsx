import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import LandingPage from "./pages/LandingPage";
import WelcomePage from "./pages/WelcomePage";
import Home from "./pages/Home";
import Landlord from "./pages/Landlord";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ViewInfo from "./pages/ViewInfo";
import RentPage from "./pages/RentPage";
import LandlordInfo from "./pages/LandlordInfo";
import LandlordDashboard from "./pages/LandlordDashboard";
import AddListing from "./pages/AddListing";
import TenantSignup from "./pages/TenantSignup";
import LandlordSignup from "./pages/LandlordSignup"; // ✅ import the Landlord Signup page
import SignIn from "./pages/SignIn"; // ✅ Import the SignIn page

export default function App() {
  const location = useLocation();

  // Hide Navbar only on Landing Page (/)
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {/* Show Navbar everywhere except on the Landing Page */}
      {!hideNavbar && <Navbar />}

      <div className="container">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Welcome Page */}
          <Route path="/welcome" element={<WelcomePage />} />

          {/* Signup Pages */}
          <Route path="/tenant-signup" element={<TenantSignup />} />  {/* ✅ Tenant */}
          <Route path="/landlord-signup" element={<LandlordSignup />} />  {/* ✅ Landlord */}

          {/* Sign In Page */}
          <Route path="/signin" element={<SignIn />} />  {/* ✅ Add SignIn Route */}

          {/* Main Pages */}
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