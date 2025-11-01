import { useState } from "react";
import Button from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function LoginForm({ onToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Logged in successfully!");
    }, 1000);
  };

  return (
    <div
      style={{
        backgroundColor: "var(--color-neutral-100)",
        borderRadius: "0.75rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
        padding: "2rem",
        gap: "1.5rem",
        display: "flex",
        flexDirection: "column",
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
          Welcome back!
        </h1>
        <p
          style={{
            fontSize: "var(--font-size-content-subtext)",
            color: "var(--color-text-secondary)",
          }}
        >
          Please sign in to your account
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.875rem",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{
                width: "1rem",
                height: "1rem",
                cursor: "pointer",
                borderRadius: "0.25rem",
              }}
            />
            <span
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Remember me
            </span>
          </label>
          <button
            type="button"
            style={{
              color: "var(--color-text-primary)",
              fontWeight: "var(--font-weight-bold)",
              border: "none",
              background: "none",
              cursor: "pointer",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Forgot Password?
          </button>
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
          {isLoading ? "Logging in..." : "Login"}
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
          Don't have an account?{" "}
          <button
            onClick={onToggle}
            style={{
              color: "var(--color-text-primary)",
              fontWeight: "var(--font-weight-bold)",
              border: "none",
              background: "none",
              cursor: "pointer",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
