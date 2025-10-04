import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* Navigation links */}
      <ul className="nav-list">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/landlord">Landlord</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contactUs">Contact Us</CustomLink>
      </ul>

      {/* Profile/user icon on right side */}
      <div className="profile-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M12 14c-5 0-9 4-9 9h18c0-5-4-9-9-9z" />
        </svg>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  let { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <li className={isActive ? "active-link" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}