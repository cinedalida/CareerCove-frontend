// React
import React, { useState } from "react";

// Styles
import "../../styles/PageLayout/ForgotPassword.css";

// UI Components
import { Input } from "../UI/input";
import { Button } from "../UI/button";

export default function ForgotPassword({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  // --- Handlers ---

  const handleClose = () => {
    setStep(1); // Reset to step 1 when closing
    setError("");
    onClose();
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    // Validation logic skipped for visualization if you use the Dev buttons below
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1000);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
    }, 1000);
  };

  return (
    <div className="fp-modal-backdrop" onClick={handleClose}>
      <div
        className="fp-modal-container slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button onClick={handleClose} className="fp-close-btn">
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* STEP 1: Enter Email */}
        {step === 1 && (
          <div className="fp-step-content">
            <div className="fp-header">
              <span className="material-symbols-outlined fp-icon">
                lock_reset
              </span>
              <h2>Forgot Password?</h2>
              <p>Enter your email address to receive a verification code.</p>
            </div>

            <form onSubmit={handleSendCode} className="fp-form">
              {error && <div className="fp-error">{error}</div>}
              <div className="fp-input-group">
                <label>Email Address</label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                variant="primary"
                className="w-full"
              >
                {isLoading ? "Sending..." : "Send Code"}
              </Button>
            </form>
          </div>
        )}

        {/* STEP 2: Verify OTP */}
        {step === 2 && (
          <div className="fp-step-content">
            <div className="fp-header">
              <span className="material-symbols-outlined fp-icon">
                mark_email_read
              </span>
              <h2>Check your inbox</h2>
              <p>
                We sent a verification code to{" "}
                <strong>{email || "your email"}</strong>.
              </p>
            </div>

            <form onSubmit={handleVerifyCode} className="fp-form">
              <div className="fp-input-group">
                <label>Verification Code</label>
                <Input
                  type="text"
                  placeholder="Enter 4-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{
                    textAlign: "center",
                    letterSpacing: "0.2em",
                    fontSize: "1.2rem",
                  }}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                variant="primary"
                className="w-full"
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </Button>
              <button
                type="button"
                className="fp-link-btn"
                onClick={() => setStep(1)}
              >
                Change email address
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: New Password */}
        {step === 3 && (
          <div className="fp-step-content">
            <div className="fp-header">
              <span className="material-symbols-outlined fp-icon">
                encrypted
              </span>
              <h2>Reset Password</h2>
              <p>Please enter your new password below.</p>
            </div>

            <form onSubmit={handleResetPassword} className="fp-form">
              <div className="fp-input-group">
                <label>New Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="fp-input-group">
                <label>Confirm Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                variant="primary"
                className="w-full"
              >
                {isLoading ? "Updating..." : "Set New Password"}
              </Button>
            </form>
          </div>
        )}

        {/* STEP 4: Success */}
        {step === 4 && (
          <div className="fp-step-content text-center">
            <div className="fp-success-icon-wrapper">
              <span className="material-symbols-outlined fp-success-icon">
                check_circle
              </span>
            </div>
            <h2 className="fp-success-title">Password Reset!</h2>
            <p className="fp-success-text">
              Your password has been successfully updated. You can now log in
              with your new credentials.
            </p>
            <Button
              type="button"
              variant="primary"
              className="w-full mt-4"
              onClick={handleClose}
            >
              Back to Login
            </Button>
          </div>
        )}

        {/* ======================================================== */}
        {/* TEMPORARY DEV TOOLS: Click buttons to jump between steps */}
        {/* ======================================================== */}
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1rem",
            borderTop: "1px dashed #ccc",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "#888",
              textAlign: "center",
              margin: 0,
            }}
          >
            ⚠️ Dev Mode: Force View Step
          </p>
          <div
            style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}
          >
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setStep(num)}
                style={{
                  padding: "4px 10px",
                  background:
                    step === num ? "var(--color-brand-primary)" : "#eee",
                  color: step === num ? "white" : "#333",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                }}
              >
                Step {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
