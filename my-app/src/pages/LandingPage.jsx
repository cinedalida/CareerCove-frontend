import { useState } from "react";
import "../styles/LandingPage.css";
import Navbar from "../components/PageLayout/Navbar";
import Footer from "../components/PageLayout/Footer";
import Hero from "../components/LandingPage/Hero";
import HowItWorks from "../components/LandingPage/HowItWorks";
import InfiniteMovingCardsDemo from "../components/LandingPage/infinite-moving-cards-demo";
import Features from "../components/LandingPage/Features";
// import LoginPage from "../pages/LoginPage";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <InfiniteMovingCardsDemo />
      <Footer />
    </>
  );
};

export default LandingPage;
