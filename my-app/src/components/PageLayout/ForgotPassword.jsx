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

  const handleClose = () => {
    // Reset state when closing
    setStep(1);
    setEmail("");
    setOtp("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    onClose();
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setError("");
    if (otp.length < 4) {
      setError("Please enter a valid verification code.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1500);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
    }, 1500);
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
                We sent a verification code to <strong>{email}</strong>.
              </p>
            </div>

            <form onSubmit={handleVerifyCode} className="fp-form">
              {error && <div className="fp-error">{error}</div>}
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
              {error && <div className="fp-error">{error}</div>}
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
      </div>
    </div>
  );
}
