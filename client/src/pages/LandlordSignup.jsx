import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandlordSignup.css";

export default function LandlordSignup() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessPermit: null,
    profilePhoto: null,
    faceVerificationPhoto: null,
  });

 const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (files && files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({
        ...formData,
        [name]: reader.result, // store Base64 string
      });
    };
    reader.readAsDataURL(files[0]);
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
      setIsCameraOn(true);
    } catch {
      alert("Camera access denied or unavailable.");
    }
  };

  const captureFace = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const faceImage = canvas.toDataURL("image/png");

    setFormData({ ...formData, faceVerificationPhoto: faceImage });
    setIsVerified(true);
    setIsCameraOn(false);

    if (stream) stream.getTracks().forEach(track => track.stop());
    alert("✅ Face verified successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    if (!formData.businessPermit || !formData.profilePhoto) {
      alert("❌ Please upload both Business Permit and Profile Photo!");
      return;
    }

    if (!isVerified) {
      alert("❌ Please verify your face before signing up!");
      return;
    }

    // ✅ Save under "users" in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    const emailKey = formData.email.toLowerCase();
    users[emailKey] = { ...formData, role: "landlord", email: emailKey };
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Landlord account created successfully!");
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <button className="back-btn" onClick={() => navigate("/welcome")}>← Back</button>
          <img src="/logobnowhite.png" alt="Logo" className="signup-logo-large" />
          <h1>Welcome, Landlord!</h1>
          <p>Register your account, upload your business permit, and verify your identity.</p>
        </div>

        <div className="signup-right">
          <h2 className="signup-title">Landlord Signup</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
            </div>

            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />

            <div className="file-group">
              <label>📄 Business Permit:</label>
              <input type="file" name="businessPermit" accept="image/*,.pdf" required onChange={handleChange} />
            </div>

            <div className="file-group">
              <label>🖼️ Profile Photo:</label>
              <input type="file" name="profilePhoto" accept="image/*" required onChange={handleChange} />
              {formData.profilePhoto && (
                <img src={URL.createObjectURL(formData.profilePhoto)} alt="Preview" style={{ width: "100px", height: "100px", marginTop: "8px", borderRadius: "10px", objectFit: "cover" }} />
              )}
            </div>

            <div className="file-group">
              <label>🎥 Face Verification:</label>
              {!isCameraOn && !isVerified && <button type="button" onClick={startCamera}>Start Camera</button>}
              {isCameraOn && (
                <div>
                  <video ref={videoRef} autoPlay playsInline className="camera-view"></video>
                  <button type="button" onClick={captureFace}>Capture Face</button>
                </div>
              )}
              {isVerified && (
                <div>
                  <p>✅ Face Verified!</p>
                  <img src={formData.faceVerificationPhoto} alt="Face Verification" style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover" }} />
                </div>
              )}
            </div>

            <button type="submit" className="submit-btn">Sign Up</button>
            <p>Already have an account? <span onClick={() => navigate("/signin")}>Sign In</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}
