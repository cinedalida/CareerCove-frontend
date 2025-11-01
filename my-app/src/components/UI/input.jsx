export function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{
        width: "100%",
        padding: "0.75rem 1rem",
        fontFamily: "var(--font-body)",
        fontSize: "1rem",
        backgroundColor: "var(--color-neutral-200)",
        border: "1px solid var(--color-border)",
        borderRadius: "0.5rem",
        transition: "all 0.2s ease",
        color: "var(--color-text-primary)",
      }}
      onFocus={(e) => {
        e.target.style.outline = "none";
        e.target.style.borderColor = "var(--color-brand-primary)";
        e.target.style.boxShadow = "0 0 0 2px rgba(255, 137, 34, 0.1)";
      }}
      onBlur={(e) => {
        e.target.style.outline = "none";
        e.target.style.borderColor = "var(--color-border)";
        e.target.style.boxShadow = "none";
      }}
      className={className}
      {...props}
    />
  );
}
