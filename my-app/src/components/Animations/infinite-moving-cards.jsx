import "../../styles/LandingPage/Testimonials.css";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

// infinite moving cards component

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
        "scroller relative z-20 overflow-hidden testimonials-scroller",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 testimonials-list",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="testimonial-card bg-[var(--color-neutral-100)] relative shrink-0 rounded-2xl border border-[var(--color-border)] shadow-sm cards_spaces"
            key={item.name}
          >
            <blockquote style={{ fontFamily: "var(--font-body)" }}>
              <div className="testimonial-quote-mark text-slate-200 dark:text-slate-700 mb-2 leading-none">
                "
              </div>

              <span
                className="testimonial-quote relative z-20 text-[var(--color-text-secondary)]"
                style={{
                  fontSize: "var(--font-size-content-subtext)",
                  fontWeight: "var(--font-weight-light)",
                  lineHeight: "var(--line-height-normal)",
                }}
              >
                {item.quote}
              </span>

              <div className="border-t border-[var(--color-border)] card_divider"></div>

              {/* Author Block */}
              <div className="relative z-20 flex flex-row items-center gap-4 testimonial-author">
                {item.avatar && (
                  <img
                    src={item.avatar || "/placeholder.svg"}
                    alt={item.name}
                    className="testimonial-avatar rounded-full border-2 border-slate-300 dark:border-slate-600 object-cover"
                  />
                )}

                <span className="flex flex-col gap-1">
                  <span
                    className="testimonial-name text-[var(--color-text-primary)]"
                    style={{ fontWeight: "var(--font-weight-semibold)" }}
                  >
                    {item.name}
                  </span>

                  <span
                    className="testimonial-title"
                    style={{
                      fontWeight: "var(--font-weight-regular)",
                      color: "var(--color-brand-primary)",
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
