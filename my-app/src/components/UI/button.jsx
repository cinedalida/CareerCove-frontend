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
    px-6 py-3
    text-base
    font-medium
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
      className={`app-btn ${buttonStyles}`}
      {...props}
    >
      {children}
    </button>
  );
}
