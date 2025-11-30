// Reusable Button Components [LANDING PAGE]
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
    form: "text-neutral-100 border-none rounded-lg hover:opacity-90 active:opacity-80 px-6 py-3 font-body font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
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
      <Link to={href} className={`app-btn ${combinedStyles}`}>
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
      className={`app-btn ${combinedStyles}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Deleted return

export default Button;
