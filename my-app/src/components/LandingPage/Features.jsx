import "../../styles/LandingPage/Features.css";
import F1 from "../../assets/F1.png";
import F2 from "../../assets/F2.png";
import F3 from "../../assets/F3.png";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2, // delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="features"
      className="flex flex-col items-center features-section"
    >
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% in view
        variants={containerVariants}
      >
        {/* ========== SECTION HEADER ========== */}
        <motion.div className="features-header" variants={itemVariants}>
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
              Explore how CareerCove makes your job search smarter and faster.
            </p>
          </div>
        </motion.div>

        {/* ========== FEATURE CARDS ========== */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 px-8 xl:gap-10 xl:px-16 w-full max-w-7xl mt-8 feature-cards-container"
          variants={containerVariants}
        >
          {[
            {
              src: F1,
              title: "Resume Parsing",
              desc: "Upload your resume or type your skills in the chat, and CareerCove will handle the rest.",
            },
            {
              src: F2,
              title: "Smart Job Matching",
              desc: "Find jobs matched to you from Jobstreet, Kalibrr, and Indeed automatically.",
            },
            {
              src: F3,
              title: "Career Filters",
              desc: "Quickly narrow down job listings with filters tailored to your resume.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="bg-[var(--color-bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-contain rounded-xl"
                />
                <h2
                  className="text-[var(--color-text-primary)] mt-3"
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
