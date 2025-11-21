import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/PageLayout/Navbar";
import Footer from "../components/PageLayout/Footer";
import SplitText from "../components/Animations/SplitText";
import TextType from "../components/Animations/TextType";
import { ChatInput } from "../components/User/UserChatInput";
import { JobResults } from "../components/User/UserJobResults";
import "../styles/Guest/Guest.css";
import AnimatedButton from "../components/UI/Jobs-UI/AnimatedButton";
import PDFUploadModal from "../components/UI/Jobs-UI/PDFUploadModal";

const Jobs = () => {
  const [stage, setStage] = useState("input");
  const [jobs, setJobs] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (input) => {
    setUserInput(input);
    setStage("loading");

    // Note: Guest View is identical to User View BUT is LIMITED (4-5 Jobs)
    // Simulate API call — replace with actual API later
    setTimeout(() => {
      const mockJobs = [
        {
          id: 1,
          title: "Senior Frontend Developer",
          company: "Tech Corp",
          location: "123 Tech Street, San Francisco",
          salary: "$120,000 - $150,000",
          workSetup: "Remote",
          description:
            "Build amazing web applications with React and TypeScript",
          skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
        },
        {
          id: 2,
          title: "Full Stack Developer",
          company: "StartUp Inc",
          location: "456 Innovation Ave, New York",
          salary: "$100,000 - $130,000",
          workSetup: "Hybrid",
          description:
            "Create full-stack applications using modern technologies",
          skills: ["Node.js", "React", "PostgreSQL", "Docker"],
        },
        {
          id: 3,
          title: "Backend Engineer",
          company: "Cloud Systems",
          location: "789 Cloud Plaza, Austin",
          salary: "$110,000 - $140,000",
          workSetup: "On-site",
          description: "Design scalable backend services and APIs",
          skills: ["Python", "AWS", "PostgreSQL", "Kubernetes"],
        },
        {
          id: 4,
          title: "DevOps Engineer",
          company: "Infrastructure Pro",
          location: "321 DevOps Dr, Seattle",
          salary: "$130,000 - $160,000",
          workSetup: "Remote",
          description: "Manage infrastructure and deployment pipelines",
          skills: ["Kubernetes", "Docker", "AWS", "CI/CD"],
        },
      ];
      setJobs(mockJobs);
      setStage("results");
    }, 2500);
  };

  return (
    <>
      <Navbar variant="UserNav" />

      {/* CareerCove Title */}
      <section
        className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-[var(--color-bg-primary)] px-6"
        id="jobs"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <AnimatedButton onClick={() => setIsModalOpen(true)} />
          <PDFUploadModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <section className="chat-jobs-wrapper">
          {stage === "input" && <ChatInput onSubmit={handleSubmit} />}

          {stage === "loading" && (
            <div className="flex items-center justify-center min-h-[40vh]">
              <div className="text-center">
                <div className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
                  Generating Job Suggestions...
                </div>
                <div className="flex justify-center gap-1 loading-dots">
                  <div
                    className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full animate-bounce"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {stage === "results" && (
            <JobResults jobs={jobs} userInput={userInput} />
          )}
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default Jobs;
