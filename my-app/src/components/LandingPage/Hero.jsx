import React from "react";
import Button from "../UI/buttons";
import F0 from "../../assets/F0.png";
import "../../styles/LandingPage/Hero.css";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-[var(--color-bg-primary)] px-6"
      id="hero"
    >
      <h1 className=" hero-title text-[var(--color-text-primary)]">
        CareerCove
      </h1>
      <p className="section-subtext max-w-2xl mb-8 CC-Subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien
        tellus, convallis vitae viverra sed, tincidunt ultricies ipsum.
      </p>
      {/* 2 buttons for signup and try for free */}
      <div className="flex gap-4 mb-12">
        <Button variant="secondary">Try for free</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
      {/* insert Landing page image */}
      <img src={F0} alt="CareerCove Main Image" className="w-300" />
    </section>
  );
};

export default HeroSection;
