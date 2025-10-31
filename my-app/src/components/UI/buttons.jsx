import React from "react";

// Reusable Button Component
const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-full transition-all duration-300
    cursor-pointer border-2
    hover:scale-105 active:scale-95
  `;

  const variants = {
    primary:
      "bg-[rgb(255,137,34)] text-white border-[rgb(255,137,34)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-brand-primary)] px-10 py-3",
    secondary:
      "bg-[rgb(12,12,12)] text-white border-[rgb(12,12,12)] hover:bg-[var(--color-neutral-100)] hover:text-black px-10 py-3",
    outline:
      "bg-transparent text-[rgb(12,12,12)] border-[rgb(12,12,12)] hover:bg-[rgb(12,12,12)] hover:bg-opacity-5 px-10 py-3",
    small:
      "bg-[rgb(255,137,34)] text-white border-[rgb(255,137,34)] hover:bg-[rgb(230,117,14)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-brand-primary)] rounded-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

// Demo
const ButtonDemo = () => {
  return (
    <div className="min-h-screen bg-[rgb(243,243,243)] p-8 flex items-center justify-center">
      <div className="bg-white rounded-xl p-12 shadow-lg">
        <h2 className="text-3xl font-bold text-[rgb(12,12,12)] mb-8">
          Button Examples
        </h2>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={() => alert("Sign Up clicked")}>
            <h3> Sign Up</h3>
          </Button>

          <Button
            variant="secondary"
            onClick={() => alert("Try for free clicked")}
          >
            Try for free
          </Button>

          <Button
            variant="outline"
            onClick={() => alert("Try for free clicked")}
          >
            Try for free
          </Button>

          <Button variant="small" onClick={() => alert("Login clicked")}>
            Login
          </Button>
        </div>

        <div className="mt-8 p-4 bg-[rgb(243,243,243)] rounded-lg">
          <p className="text-sm text-[rgb(12,12,12)] font-mono">
            {'<Button variant="primary">Sign Up</Button>'}
            <br />
            {'<Button variant="secondary">Try for free</Button>'}
            <br />
            {'<Button variant="outline">Try for free</Button>'}
            <br />
            {'<Button variant="small">Login</Button>'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Button; // will only export button variant not the demo
