import React from "react";
import "../../styles/LandingPage/Features.css";
import F1 from "../../assets/F1.png";
import F2 from "../../assets/F2.png";
import F3 from "../../assets/F3.png";

const Features = () => {
  return (
    <section id="features" className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        {/* ========== SECTION HEADER ========== */}
        <div className="features-header">
          <div>
            <h1
              className="section-title text-[var(--color-text-primary)] font-[var(--font-weight-semibold)]"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Discover Smart Career Features
            </h1>
            <div className="h-1 w-80 bg-[var(--color-brand-primary)] rounded mt-3"></div>
          </div>
          <div className="feature-subtitle">
            <p
              className="text-[var(--color-text-secondary)] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* ========== FEATURE CARDS ========== */}
        <div className=" flex flex-wrap justify-center gap-8 px-8 xl:gap-10 xl:px-16 w-full max-w-7xl">
          {[
            { src: F1, title: "Resume Parsing", desc: "Lorem Ipsum" },
            { src: F2, title: "Smart Job Matching", desc: "Lorem Ipsum" },
            { src: F3, title: "Career Filters", desc: "Lorem Ipsum" },
          ].map((item, index) => (
            <div key={index} className="w-full max-w-sm">
              <div className="bg-[var(--color-bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-contain rounded-xl"
                />
                <h2
                  className="text-[var(--color-text-primary)] "
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--font-size-content-title)",
                    fontWeight: "var(--font-weight-semibold)",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-[var(--color-text-secondary)] leading-relaxed mt-auto"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--font-size-content-subtext)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
