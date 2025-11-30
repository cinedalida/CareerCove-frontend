// Styles
import "../../styles/LandingPage/Testimonials.css";

// Animations
import { InfiniteMovingCards } from "../Animations/infinite-moving-cards";
import { motion } from "framer-motion";

// infinite moving cards demo component

export default function InfiniteMovingCardsDemo() {
  return (
    <motion.section
      id="feedbacks"
      className="relative flex flex-col items-center justify-center overflow-hidden py-10 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.div
        className="flex flex-col items-center justify-center testimonials_title relative z-10 px-4 mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1
          className="section-title text-[var(--color-text-primary)] font-[var(--font-weight-semibold)] text-center mb-2 md:mb-4"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Feedback
        </h1>
        <motion.div
          className="h-1 w-16 md:w-25 bg-[var(--color-brand-primary)] rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>

      {/* Cards Section - Height Adjusted for Mobile */}
      <motion.div
        className="h-[25rem] md:h-[30rem] lg:h-[40rem] flex flex-col antialiased items-center justify-center relative overflow-hidden w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        viewport={{ once: true }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </motion.section>
  );
}

const testimonials = [
  {
    quote:
      "CareerCove helped me organize my job applications and track my career goals in one place. I finally feel like I have a clear direction instead of getting lost in multiple tabs and documents.",
    name: "Alyssa Ramos",
    title: "Marketing Graduate, DLSU-D",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Before CareerCove, I struggled to present my experiences clearly. The resume and portfolio builder made it simple — I landed two interviews within a week of updating my profile!",
    name: "Joshua Lee",
    title: "Aspiring Software Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "What I love most about CareerCove is how it connects students to real opportunities. The internship listings and mentorship features are game changers.",
    name: "Renee Villanueva",
    title: "3rd Year IT Student",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "CareerCove’s career tips and mock interview tools boosted my confidence so much. I actually enjoyed preparing for my job interview!",
    name: "Michael Tan",
    title: "Junior Data Analyst",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  },
  {
    quote:
      "It feels like CareerCove understands what students need. From goal tracking to networking, everything feels supportive and easy to use.",
    name: "Samantha Cruz",
    title: "Fresh Graduate, Computer Science",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
  },
];
