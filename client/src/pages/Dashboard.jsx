import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!currentUser) {
    navigate("/signin");
    return null;
  }

  const landlords = users.filter((u) => u.role === "landlord");
  const tenants = users.filter((u) => u.role === "tenant");

  return (
    <div className="auth-container">
      <h1>Welcome, {currentUser.name}!</h1>
      <h3>Role: {currentUser.role}</h3>

      {currentUser.role === "tenant" ? (
        <>
          <h2>Available Landlords</h2>
          <ul>
            {landlords.length ? (
              landlords.map((l, i) => <li key={i}>{l.name} – {l.email}</li>)
            ) : (
              <p>No landlords yet.</p>
            )}
          </ul>
        </>
      ) : (
        <>
          <h2>Registered Tenants</h2>
          <ul>
            {tenants.length ? (
              tenants.map((t, i) => <li key={i}>{t.name} – {t.email}</li>)
            ) : (
              <p>No tenants yet.</p>
            )}
          </ul>
        </>
      )}

      <button onClick={() => {
        localStorage.removeItem("currentUser");
        navigate("/signin");
      }}>
        Logout
      </button>
    </div>
  );
}
