import Navbar from "../components/PageLayout/Navbar";
import Footer from "../components/PageLayout/Footer";
import SplitText from "../components/Animations/SplitText";
import TextType from "../components/Animations/TextType";
import { motion } from "framer-motion";

const Guest = () => {
  return (
    <>
      <Navbar />
      <section
        className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-[var(--color-bg-primary)] px-6"
        id="guest"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <SplitText
            text="CareerCove"
            className="hero-title text-[var(--color-text-primary)] text-6xl font-bold"
            delay={500}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />
        </motion.div>
        <div className="section-subtext max-w-2xl mb-8 CC-Subtext text-[var(--color-text-secondary)]">
          <TextType
            text={[
              "Type your skills and job preferences here!",
              "Sign up to parse your resume automatically.",
              "Explore job listings tailored to you.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Guest;
