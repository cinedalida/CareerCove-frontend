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
          <div className="rounded-2xl p-6 bg-card shadow-sm hover:shadow-md transition-shadow">
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
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 disabled:bg-muted disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-md p-0"
              aria-label="Send message"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16381295 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99702575 L3.03521743,10.4380188 C3.03521743,10.5951162 3.34915502,10.7522136 3.50612381,10.7522136 L16.6915026,11.5377005 C16.6915026,11.5377005 17.1624089,11.5377005 17.1624089,12.0089927 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Helper Text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Press Ctrl+Enter or click the button to submit
        </p>
      </div>
    </div>
  );
}
