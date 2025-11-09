import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/PageLayout/Navbar";
import Footer from "../components/PageLayout/Footer";
import "../styles/Dashboard/Dashboard.css";
import SplitText from "../components/Animations/SplitText";
import TextType from "../components/Animations/TextType";

export default function DashboardPage() {
  const stats = [
    {
      label: "Profile Completeness",
      value: "85%",
      icon: "✓",
      color: "rgb(255, 137, 34)",
    },
    {
      label: "Applications Sent",
      value: "24",
      icon: "📤",
      color: "rgb(52, 152, 219)",
    },
    {
      label: "Interview Scheduled",
      value: "5",
      icon: "📅",
      color: "rgb(46, 204, 113)",
    },
    {
      label: "Offers Received",
      value: "2",
      icon: "🎉",
      color: "rgb(155, 89, 182)",
    },
  ];

  const skillProgress = [
    { skill: "React", level: 90, color: "rgb(52, 152, 219)" },
    { skill: "TypeScript", level: 85, color: "rgb(255, 137, 34)" },
    { skill: "Node.js", level: 80, color: "rgb(46, 204, 113)" },
    { skill: "JavaScript", level: 95, color: "rgb(241, 196, 15)" },
  ];

  const employabilityScore = {
    overall: 78,
    technicalSkills: 85,
    experience: 72,
    education: 90,
  };

  return (
    <>
      <Navbar />

      <section
        className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-[var(--color-bg-primary)] px-6"
        id="Dashboard"
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

      <section className="dashboard-container">
        <div className="dashboard-header">
          <h1>Analytics Dashboard</h1>
          <Link to="/MyProfile">
            <button className="back-btn">Back to Profile</button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card"
              style={{ backgroundColor: stat.color }}
            >
              <div className="stat-content">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Employability Section */}
        <div className="employability-grid">
          <div className="overall-card">
            <p className="overall-title">Overall Employability</p>
            <div className="overall-value">{employabilityScore.overall}%</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${employabilityScore.overall}%` }}
              />
            </div>
          </div>

          <div className="employ-card tech-skill">
            <p>Technical Skills</p>
            <span>{employabilityScore.technicalSkills}%</span>
          </div>
          <div className="employ-card experience">
            <p>Experience</p>
            <span>{employabilityScore.experience}%</span>
          </div>
          <div className="employ-card education">
            <p>Education</p>
            <span>{employabilityScore.education}%</span>
          </div>
        </div>

        {/* Skill Development */}
        <div className="skills-card">
          <h2>Skill Development</h2>
          <div className="skills-grid">
            {skillProgress.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-header">
                  <p>{skill.skill}</p>
                  <p style={{ color: skill.color }}>{skill.level}%</p>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps & Quick Stats */}
        <div className="info-grid">
          <div className="info-card">
            <h3>Next Steps</h3>
            <ul>
              <li>✓ Complete your profile (15% remaining)</li>
              <li>✓ Add 2 more projects to portfolio</li>
              <li>✓ Improve Python skills to 85%+</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Quick Stats</h3>
            <ul>
              <li>
                <span>Profile Views</span>
                <span className="bold">248</span>
              </li>
              <li>
                <span>Applications Pending</span>
                <span className="bold">8</span>
              </li>
              <li>
                <span>Skill Endorsements</span>
                <span className="bold">42</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
