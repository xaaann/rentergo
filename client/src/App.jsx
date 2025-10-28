import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ Add this import

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
import TenantDashboard from "./pages/TenantDashboard";
import AddListing from "./pages/AddListing";
import TenantSignup from "./pages/TenantSignup";
import LandlordSignup from "./pages/LandlordSignup";
import SignIn from "./pages/SignIn";

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <div className="container">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/tenant-signup" element={<TenantSignup />} />
          <Route path="/landlord-signup" element={<LandlordSignup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/property/:id" element={<ViewInfo />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/landlord-info/:id" element={<LandlordInfo />} />

          {/* ✅ Protected Routes */}
          <Route
            path="/landlordDashboard"
            element={
              <ProtectedRoute allowedRole="landlord">
                <LandlordDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tenantDashboard"
            element={
              <ProtectedRoute allowedRole="tenant">
                <TenantDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/AddListing"
            element={
              <ProtectedRoute allowedRole="landlord">
                <AddListing />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}