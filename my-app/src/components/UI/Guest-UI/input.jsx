import "../../../styles/Guest/Guest.css";

export function Input({ className = "", ...props }) {
  return <input className={`guest-input ${className}`} {...props} />;
}
