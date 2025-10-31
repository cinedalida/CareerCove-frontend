import { InfiniteMovingCards } from "../Animations/infinite-moving-cards";
import "../../styles/LandingPage/Testimonials.css";

export default function InfiniteMovingCardsDemo() {
  return (
    <>
      <section id="feedbacks">
        <div className="flex flex-col items-center justify-center testimonials_title">
          <h1
            className="section-title text-[var(--color-text-primary)] font-[var(--font-weight-semibold)] items-center text-center mb-4"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Testimonials
          </h1>
          <div className="h-1 w-30 bg-[var(--color-brand-primary)] rounded"></div>
        </div>
        <div className="h-[40rem] flex flex-col antialiased items-center justify-center relative overflow-hidden bg-[var(--color-bg-primary)]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>
    </>
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
