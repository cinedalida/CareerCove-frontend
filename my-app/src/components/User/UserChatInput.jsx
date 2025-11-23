import { useState } from "react";
import { Textarea } from "../UI/Guest-UI/textarea";
import { Button } from "../UI/Guest-UI/button";
import "../../styles/Guest/chat-input.css";

export function ChatInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (input.trim()) {
      setIsSubmitting(true);
      onSubmit(input);
      setInput("");
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <div className="chat-input-container">
      <div className="chat-input-wrapper">
        {/* Chat Box */}
        <div className="chat-input-section chat-input-responsive">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            placeholder="I am a fresh Computer Science graduate skilled in..."
            disabled={isSubmitting}
            className="chat-textarea"
          />

          {/* Send Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !input.trim()}
            className="chat-send-button"
            aria-label="Send message"
          >
            <span className="material-symbols-outlined text-white">send</span>
          </Button>
        </div>

        {/* Helper Text */}
        <div className="chat-helper-text">
          Press <kbd className="chat-kbd">Ctrl</kbd> +{" "}
          <kbd className="chat-kbd">Enter</kbd> or click the button to submit
        </div>
      </div>
    </div>
  );
}
