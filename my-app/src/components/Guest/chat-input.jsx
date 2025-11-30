import { useState } from "react";
import { Textarea } from "../UI/Guest-UI/textarea";
import { Button } from "../UI/Guest-UI/button";
import "../../styles/Guest/chat-input.css";
import { Send } from "lucide-react";

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
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="chat-input-container">
      <div className="chat-input-wrapper">
        {/* Chat Box */}
        <div className="chat-input-section">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Type your education, experiences and skills..."
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
            <Send size={20} color="white" />
          </Button>
        </div>

        {/* Helper Text */}
        <div className="chat-helper-text">
          <p>
            Press <kbd className="chat-kbd">Enter</kbd> to submit
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
