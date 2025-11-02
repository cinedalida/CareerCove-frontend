import React from "react";

// Reusable Button Component [LANDING PAGE]
const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  // Base shared styles
  const baseStyles = `
    inline-flex items-center justify-center
    transition-all duration-300
    cursor-pointer font-medium
    focus:outline-none
  `;

  //  Button style variants
  const variants = {
    primary:
      "bg-[rgb(255,137,34)] text-white border-2 border-[rgb(255,137,34)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-brand-primary)] px-10 py-3 rounded-full",
    secondary:
      "bg-[rgb(12,12,12)] text-white border-2 border-[rgb(12,12,12)] hover:bg-[var(--color-neutral-100)] hover:text-black px-10 py-3 rounded-full",
    outline:
      "bg-transparent text-[rgb(12,12,12)] border-2 border-[rgb(12,12,12)] hover:bg-[rgb(12,12,12)] hover:bg-opacity-5 px-10 py-3 rounded-full",
    small:
      "bg-[rgb(255,137,34)] text-white border-2 border-[rgb(255,137,34)] hover:bg-[rgb(230,117,14)] rounded-lg px-6 py-2",
    form: "bg-neutral-900 text-neutral-100 border-none rounded-lg hover:opacity-90 active:opacity-80 px-6 py-3 font-body font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const variantStyles = variants[variant] || variants.primary;

  const combinedStyles = `
    ${baseStyles} 
    ${variantStyles} 
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  // Render link if href provided
  if (href) {
    return (
      <Link to={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  // Otherwise render button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
};

// Demo component (optional)
const ButtonDemo = () => {
  return (
    <div className="min-h-screen bg-[rgb(243,243,243)] p-8 flex items-center justify-center">
      <div className="bg-white rounded-xl p-12 shadow-lg">
        <h2 className="text-3xl font-bold text-[rgb(12,12,12)] mb-8">
          Button Examples
        </h2>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Sign Up</Button>
          <Button variant="secondary">Try for free</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="small">Login</Button>
          <Button variant="form">Form Button</Button>
        </div>

        <div className="mt-8 p-4 bg-[rgb(243,243,243)] rounded-lg">
          <p className="text-sm text-[rgb(12,12,12)] font-mono">
            {'<Button variant="primary">Sign Up</Button>'}
            <br />
            {'<Button variant="secondary">Try for free</Button>'}
            <br />
            {'<Button variant="outline">Outline</Button>'}
            <br />
            {'<Button variant="small">Login</Button>'}
            <br />
            {'<Button variant="form">Form Button</Button>'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Button;
