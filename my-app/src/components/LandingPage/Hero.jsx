import React from "react";
import Button from "../UI/buttons";
import F0 from "../../assets/F0.png";
import "../../styles/LandingPage/Hero.css";
import SplitText from "../Animations/SplitText";
import TextType from "../Animations/TextType";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const handleAnimationComplete = () => {
  console.log("Animation complete!");
};

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-[var(--color-bg-primary)] px-6"
      id="hero"
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
            "Find the job that fits your story.",
            "Build your future, one click at a time.",
            "Your career journey starts with CareerCove.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>

      <motion.div
        className="flex gap-4 mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <Link to="/guest">
          <Button variant="secondary">Try for free</Button>
        </Link>

        <Link to="/signup">
          <Button variant="primary">Sign Up</Button>
        </Link>
      </motion.div>
      <motion.img
        src={F0}
        alt="CareerCove Main Image"
        className="w-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      />
    </section>
  );
};

export default HeroSection;
