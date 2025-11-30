// React
import React from "react";

export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-muted text-foreground",
    ghost: "hover:bg-muted text-foreground",
  };

  const variantStyles = variants[variant] || variants.default;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
