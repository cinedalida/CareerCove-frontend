import React from "react";
import ScrollStack, { ScrollStackItem } from "../Animations/ScrollStack.jsx";
import H1 from "../../assets/H1.png";
import H2 from "../../assets/H2.png";
import H3 from "../../assets/H3.png";
import H4 from "../../assets/H4.png";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="h-150 bg-[var(--color-neutral-900)] text-center px-6 flex flex-col items-center"
    >
      {/* ========== SECTION TITLE ========== */}
      <h2 className="section-title text-[var(--color-neutral-100)] mb-12">
        How It Works
      </h2>

      {/* ========== SCROLL STACK WRAPPER ========== */}
      <div className="max-w-5xl w-full h-100 relative">
        <ScrollStack className="relative z-10">
          {/* ========== STEP 1 ========== */}
          <ScrollStackItem>
            <div className="bg-[var(--color-neutral-100)] rounded-2xl flex items-center gap-5 p-3.5 min-h-[240px]">
              <img src={H1} alt="Explore jobs" className="w-60 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-2xl">
                  Explore jobs instantly
                </h3>
                <p className="section-subtext text-[var(--color-text-secondary)]">
                  Use CareerCove as a guest or log in — search and match jobs
                  from LinkedIn, Kalibrr, and JobStreet.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          {/* ========== STEP 2 ========== */}
          <ScrollStackItem>
            <div className="bg-[rgb(87,87,87)] rounded-2xl flex items-center gap-5 p-3.5 min-h-[240px]">
              <img
                src={H2}
                alt="Upload & analyze"
                className="w-60 flex-shrink-0"
              />
              <div className="text-left">
                <h3 className="font-semibold text-2xl text-[var(--color-neutral-100)] mb-3">
                  Upload & analyze your profile
                </h3>
                <p className="section-subtext text-[var(--color-neutral-100)]">
                  CareerCove parses your résumé and evaluates both job-fit and
                  soft skills based on your credentials.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          {/* ========== STEP 3 ========== */}
          <ScrollStackItem>
            <div className="bg-[rgb(249,167,96)] rounded-2xl flex items-center gap-5 p-3.5 min-h-[240px]">
              <img
                src={H3}
                alt="Organize applications"
                className="w-60 flex-shrink-0"
              />
              <div className="text-left">
                <h3 className="font-semibold text-2xl mb-3">
                  Organize your applications
                </h3>
                <p className="section-subtext text-[var(--color-text-secondary)]">
                  Track and bookmark jobs, save files to your document locker,
                  and monitor your application progress.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          {/* ========== STEP 4 ========== */}
          <ScrollStackItem>
            <div className="bg-[rgb(87,87,87)] rounded-2xl flex items-center gap-5 p-3.5 min-h-[240px]">
              <img
                src={H4}
                alt="Unlock more features"
                className="w-60 flex-shrink-0"
              />
              <div className="text-left">
                <h3 className="font-semibold text-2xl text-[var(--color-neutral-100)] mb-3">
                  Unlock more with a full account
                </h3>
                <p className="section-subtext text-[var(--color-neutral-100)]">
                  Sign up to access the full suite: résumé parser, job trackers,
                  document repository, and soft skills insights.
                </p>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
};

export default HowItWorks;
