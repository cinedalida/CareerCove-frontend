import React from "react";
import ScrollStack, { ScrollStackItem } from "../Animations/ScrollStack.jsx";
import H1 from "../../assets/H1.png";
import H2 from "../../assets/H2.png";
import H3 from "../../assets/H3.png";
import H4 from "../../assets/H4.png";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  return (
    <section
      id="how-it-works"
      className="h-150 bg-[var(--color-neutral-900)] text-center px-6 flex flex-col items-center"
    >
      {/* ========== SECTION TITLE ========== */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2
          className="section-title text-[var(--color-neutral-100)] mb-12"
          style={{ fontFamily: "var(--font-title)" }}
        >
          How It Works
        </h2>
        <div className="h-1 w-35 bg-[var(--color-brand-primary)] rounded"></div>
      </motion.div>

      {/* ========== SCROLL STACK WRAPPER ========== */}
      <div className="max-w-5xl w-full h-100 relative mt-12">
        <ScrollStack className="relative z-10">
          {[
            {
              bg: "bg-[var(--color-neutral-100)]",
              img: H1,
              title: "Explore jobs instantly",
              text: "Use CareerCove as a guest or log in — search and match jobs from LinkedIn, Kalibrr, and JobStreet.",
              textColor: "text-[var(--color-text-secondary)]",
            },
            {
              bg: "bg-[rgb(87,87,87)]",
              img: H2,
              title: "Upload & analyze your profile",
              text: "CareerCove parses your résumé and evaluates both job-fit and soft skills based on your credentials.",
              textColor: "text-[var(--color-neutral-100)]",
            },
            {
              bg: "bg-[rgb(249,167,96)]",
              img: H3,
              title: "Organize your applications",
              text: "Track and bookmark jobs, save files to your document locker, and monitor your application progress.",
              textColor: "text-[var(--color-text-secondary)]",
            },
            {
              bg: "bg-[rgb(87,87,87)]",
              img: H4,
              title: "Unlock more with a full account",
              text: "Sign up to access the full suite: résumé parser, job trackers, document repository, and soft skills insights.",
              textColor: "text-[var(--color-neutral-100)]",
            },
          ].map((step, index) => (
            <ScrollStackItem key={index}>
              <motion.div
                className={`${step.bg} rounded-2xl flex items-center gap-5 p-3.5 min-h-[240px]`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-60 flex-shrink-0"
                />
                <div className="text-left">
                  <h3
                    className={`font-semibold text-2xl mb-3 ${step.textColor}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`section-subtext ${step.textColor}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.text}
                  </p>
                </div>
              </motion.div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default HowItWorks;
