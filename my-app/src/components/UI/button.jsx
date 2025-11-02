// Buttons for login and sign up

export function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "font-body font-medium rounded-lg transition-all duration-200 cursor-pointer border-none";

  const variants = {
    primary:
      "bg-neutral-900 text-neutral-100 hover:opacity-90 active:opacity-80",
    secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-100",
    outline:
      "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-100",
  };

  const variantStyles = variants[variant] || variants.primary;
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:opacity-50"
    : "";

  const buttonStyles = `
    padding: 0.75rem 1.5rem
    font-size: 1rem
    font-weight: 500
    letter-spacing: 0.5px
    ${baseStyles}
    ${variantStyles}
    ${disabledStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      style={{
        padding: "0.75rem 1.5rem",
        fontFamily: "var(--font-body)",
        fontSize: "1rem",
        fontWeight: "500",
        letterSpacing: "0.5px",
        borderRadius: "0.5rem",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? "0.5" : "1",
        backgroundColor:
          variant === "primary"
            ? "var(--color-neutral-900)"
            : variant === "secondary"
            ? "var(--color-neutral-200)"
            : "transparent",
        color:
          variant === "primary"
            ? "var(--color-neutral-100)"
            : "var(--color-neutral-900)",
        transition: "all 0.2s ease",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
