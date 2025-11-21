import React from "react";
import "../../../styles/Guest/Guest.css";

export function Textarea({ className = "", ...props }) {
  const textareaRef = React.useRef(null);

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    const newHeight = Math.min(textarea.scrollHeight, 400);
    textarea.style.height = newHeight + "px";
  };

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [props.value]);

  return (
    <textarea
      ref={textareaRef}
      onInput={handleInput}
      className={`chat-textarea ${className}`}
      {...props}
    />
  );
}
