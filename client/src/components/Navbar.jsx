import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isProfileActive = pathname === "/landlordDashboard";

  return (
    <nav className="nav">
      <ul className="nav-list">
        {/* ✅ Changed “to” from "/" → "/home" */}
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/landlord">Landlord</CustomLink>
        <CustomLink to="/aboutUs">About</CustomLink>
        <CustomLink to="/contactUs">Contact Us</CustomLink>
      </ul>

      {/* Profile icon (no underline, circle stays white) */}
      <div
        className={`profile-icon ${isProfileActive ? "profile-active" : ""}`}
        onClick={() => navigate("/landlordDashboard")}
      >
        <div className="icon-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <li className={isActive ? "active-link" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
