import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const remembered = localStorage.getItem("rememberedEmail");
    if (remembered) setEmail(remembered);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const usersJson = localStorage.getItem("users");
    const users = usersJson ? JSON.parse(usersJson) : {};
    const key = email.toLowerCase();
    const user = users[key];

    if (user && user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("profile", JSON.stringify(user));

      if (rememberMe) localStorage.setItem("rememberedEmail", email);
      else localStorage.removeItem("rememberedEmail");

      if (user.role === "landlord") {
        alert("Welcome Landlord!");
        navigate("/landlordDashboard");
      } else if (user.role === "tenant") {
        alert("Welcome Tenant!");
        navigate("/tenantDashboard");
      } else {
        navigate("/");
      }
    } else {
      alert("Invalid credentials!");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const usersJson = localStorage.getItem("users");
    const users = usersJson ? JSON.parse(usersJson) : {};
    const key = resetEmail.toLowerCase();

    if (users[key]) {
      users[key].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Password reset successfully!");
      setShowResetModal(false);
      setResetEmail("");
      setNewPassword("");
    } else {
      alert("No account found with that email!");
    }
  };

  return (
    <div className="signin-page">
      {/* ===== Left Panel ===== */}
      <div className="signin-left">
        <img src="/logonowhite.png" alt="Logo" className="signin-left-logo" />
        <h1>Welcome Back to RenterGo</h1>
        <p>Find your perfect space or manage your property effortlessly.</p>
      </div>

      {/* ===== Right Panel ===== */}
      <div className="signin-right">
        <div className="signin-form-container">
          <button className="back-button" onClick={() => navigate("/welcome")}>
            ← Back
          </button>

          <h2 className="signin-title">Sign In</h2>
          <p className="signin-subtitle">Access your account</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="signin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="signin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="signin-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>
              <p
                className="forgot-password"
                onClick={() => setShowResetModal(true)}
              >
                Forgot Password?
              </p>
            </div>

            <button type="submit" className="signin-button">
              Sign In
            </button>

            <p className="signup-link">
              Don’t have an account?{" "}
              <span onClick={() => navigate("/welcome")}>Sign Up</span>
            </p>
          </form>
        </div>
      </div>

      {/* ===== Reset Password Modal ===== */}
      {showResetModal && (
        <div className="reset-modal-overlay">
          <div className="reset-modal">
            <h2>Reset Password</h2>
            <form onSubmit={handlePasswordReset}>
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
                className="signin-input"
              />
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="signin-input"
              />
              <div className="modal-buttons">
                <button type="submit" className="signin-button small">
                  Reset
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setShowResetModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
