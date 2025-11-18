import { useState } from "react";
import { Textarea } from "../UI/Guest-UI/textarea";
import { Button } from "../UI/Guest-UI/button";

export function ChatInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (input.trim()) {
      setIsSubmitting(true);
      onSubmit(input);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-background to-card p-4">
      <div className="w-full max-w-4xl px-8 py-12">
        {/* Chat Box */}
        <div className="relative">
          <div className="rounded-2xl p-6 bg-card hover:shadow-lg transition-shadow">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="I am a fresh Computer Science graduate skilled in programming (Python, Java, JavaScript), web development (React, HTML, CSS), and databases (MySQL, PostgreSQL). I have experience in academic projects like building a school parking system website and creating APIs with Flask. I earned my BS in Computer Science from De La Salle University - Dasmarinas."
              className="min-h-[220px] w-full bg-card text-foreground placeholder:text-muted-foreground border border-border rounded-2xl resize-none focus:outline-none text-base leading-relaxed p-4"
              disabled={isSubmitting}
            />

            {/* Send Button */}
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !input.trim()}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[var(--color-brand-primary)] hover:bg-orange-600 disabled:bg-muted disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-md p-0"
              aria-label="Send message"
            >
              <span className="material-symbols-outlined text-white">send</span>
            </Button>
          </div>
        </div>

        {/* Helper Text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          <div className="mt-1.5 text-sm text-gray-500 text-center">
            Press{" "}
            <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
              Ctrl
            </kbd>{" "}
            +{" "}
            <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
              Enter
            </kbd>{" "}
            or click the button to submit
          </div>
        </p>
      </div>
    </div>
  );
}
