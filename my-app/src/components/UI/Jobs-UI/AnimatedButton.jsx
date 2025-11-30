// Styles
import "../../../styles/JobsPage/AnimatedButton.css";

export default function AnimatedButton({ onClick }) {
  return (
    <div className="relative inline-block jobs-btn-container">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-orange-500 opacity-75 animate-pulse glow-bg"></div>
      {/* Border pulse */}
      <div className="absolute inset-0 rounded-2xl border border-orange-500 border-pulse"></div>
      {/* Main button */}
      <button
        onClick={onClick}
        className="jobs-animated-btn rounded-2xl text-white text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg gradient-bg"
      >
        {/* Shimmer effect */}
        <span className="absolute inset-0 rounded-full opacity-0 shimmer-effect"></span>

        <span className="relative flex items-center gap-2">
          <svg
            className="w-5 h-5 animate-bounce"
            style={{ animationDelay: "0s" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          Upload Resume
        </span>
      </button>
    </div>
  );
}
