import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    alert("Please sign in first!");
    return <Navigate to="/signin" />;
  }

  if (allowedRole && user.role !== allowedRole) {
    alert("You are not authorized to view this page.");
    return <Navigate to="/home" />;
  }

  return children;
}
