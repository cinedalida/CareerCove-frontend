"use client";

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
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border bg-[var(--color-neutral-100)] border-[var(--color-border)] px-8 py-8 shadow-sm"
            key={item.name}
          >
            <blockquote>
              <div className="text-6xl text-slate-200 dark:text-slate-700 mb-4 leading-none">
                "
              </div>
              <span className="relative z-20 text-base leading-relaxed font-normal text-[var(--color-text-secondary)]">
                {item.quote}
              </span>
              <div className="border-t border-slate-200 dark:border-slate-700 my-6"></div>
              <div className="relative z-20 flex flex-row items-center gap-4">
                {item.avatar && (
                  <img
                    src={item.avatar || "/placeholder.svg"}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 object-cover"
                  />
                )}
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {item.name}
                  </span>
                  <span className="text-sm font-normal text-[#FF8922]">
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
