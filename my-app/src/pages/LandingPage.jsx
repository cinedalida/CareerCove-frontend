import Navbar from "../components/PageLayout/Navbar";
import Footer from "../components/PageLayout/Footer";
import Hero from "../components/LandingPage/Hero";
import HowItWorks from "../components/LandingPage/HowItWorks";
import InfiniteMovingCardsDemo from "../components/LandingPage/infinite-moving-cards-demo";
import Features from "../components/LandingPage/Features";
import Squares from "../components/Animations/Squares";

const LandingPage = () => {
  return (
    <>
      <Squares
        className="fixed inset-0 z-0"
        speed={0.3}
        squareSize={100}
        direction="up"
        borderColor="#D3D3D3"
        hoverFillColor="#F0AF66"
      />

      <div className="relative">
        <div className="relative z-10">
          <Navbar variant="GuestNav" />
          <Hero />
          <Features />
          <HowItWorks />
          <InfiniteMovingCardsDemo />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
