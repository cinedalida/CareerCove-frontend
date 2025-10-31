import "../../styles/LandingPage/testimonials.css";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            // 1. Spacing: Reduced padding from px-8 py-8 to px-6 py-6 for a tighter feel.
            className="relative w-[350px] min-h-[400px] shrink-0 rounded-2xl border bg-[var(--color-neutral-100)] border-[var(--color-border)] shadow-sm cards_spaces"
            key={item.name}
          >
            {/* 2. Font: Set the font for the whole card to your --font-body */}
            <blockquote style={{ fontFamily: "var(--font-body)" }}>
              {/* 3. Spacing: Kept the quote mark smaller and with less margin */}
              <div className="text-7xl text-slate-200 dark:text-slate-700 mb-2 leading-none">
                "
              </div>

              {/* 4. Quote Text: Applied your specific font size, weight, and line height */}
              <span
                className="relative z-20 text-[var(--color-text-secondary)]"
                style={{
                  fontSize: "var(--font-size-content-subtext)", // 1rem
                  fontWeight: "var(--font-weight-light)", // 300
                  lineHeight: "var(--line-height-normal)", // 1.5
                }}
              >
                {item.quote}
              </span>

              {/* 5. Divider: Used your --color-border and reduced margin from my-6 to my-4 */}
              <div className="border-t border-[var(--color-border)] card_divider"></div>

              {/* Author Block */}
              <div className="relative z-20 flex flex-row items-center gap-4">
                {item.avatar && (
                  <img
                    src={item.avatar || "/placeholder.svg"}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 object-cover"
                  />
                )}

                {/* 6. Spacing: Kept the gap between name/title tight */}
                <span className="flex flex-col gap-1">
                  {/* 7. Author Name: Applied your font weight. Kept text-sm (14px) as it's smaller than your 1rem subtext. */}
                  <span
                    className="text-sm text-[var(--color-text-primary)]"
                    style={{ fontWeight: "var(--font-weight-semibold)" }} // 600
                  >
                    {item.name}
                  </span>

                  {/* 8. Author Title: Applied your font weight and brand color */}
                  <span
                    className="text-sm"
                    style={{
                      fontWeight: "var(--font-weight-regular)", // 400
                      color: "var(--color-brand-primary)", // Your orange color
                    }}
                  >
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
