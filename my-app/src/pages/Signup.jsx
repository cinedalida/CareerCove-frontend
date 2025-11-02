import Navbar from "../components/PageLayout/Navbar";
import Footer from "../components/PageLayout/Footer";
import S1 from "../assets/S1.png";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Button } from "../components/UI/button";
import { Input } from "../components/UI/input";

export default function SignupForm({ onToggle }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim()) {
      setError("Full name is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully!");
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // full page height
          backgroundColor: "var(--color-neutral-50)",
          gap: "4rem",
          padding: "2rem",
        }}
      >
        <img
          src={S1}
          alt="Login illustration"
          style={{
            width: "700px",
            height: "auto",
            borderRadius: "1rem",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            backgroundColor: "var(--color-neutral-100)",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
            padding: "2rem",
            gap: "1.5rem",
            display: "flex",
            flexDirection: "column",
            width: "500px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              gap: "0.5rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontSize: "var(--font-size-h1)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--color-text-primary)",
              }}
            >
              Create an account
            </h1>
            <p
              style={{
                fontSize: "var(--font-size-content-subtext)",
                color: "var(--color-text-secondary)",
              }}
            >
              Join CareerCove!
            </p>
          </div>

          {error && (
            <div
              style={{
                backgroundColor: "var(--color-error)",
                opacity: "0.1",
                border: `1px solid var(--color-error)`,
                color: "var(--color-error)",
                padding: "1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                gap: "0.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--color-text-primary)",
                }}
              >
                Full Name
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div
              style={{
                gap: "0.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--color-text-primary)",
                }}
              >
                Email Address
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div
              style={{
                gap: "0.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--color-text-primary)",
                }}
              >
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div
              style={{
                gap: "0.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--color-text-primary)",
                }}
              >
                Confirm Password
              </label>
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
              style={{
                width: "100%",
                padding: "0.75rem 1.5rem",
              }}
            >
              {isLoading ? "Creating..." : "Create Account"}
            </Button>
          </form>

          <div
            style={{
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Already have an account?{" "}
              <Link to="/login">
                <button
                  onClick={onToggle}
                  style={{
                    color: "var(--color-brand-primary)",
                    fontSize: "var(--font-size-content-subtext)",
                    fontWeight: "var(--font-weight-light)",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Sign in
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
