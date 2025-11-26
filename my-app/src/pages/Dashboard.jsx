import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/PageLayout/Navbar";
import Footer from "../components/PageLayout/Footer";
import "../styles/Dashboard/Dashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

/* -----------------------
   Horizontal bars for skills
   ----------------------- */
function HorizontalBars({ data }) {
  return (
    <div className="horizontal-bars">
      {data.map((d) => (
        <div className="hbar-row" key={d.skill}>
          <div className="hbar-title">{d.skill}</div>
          <div className="hbar-track" aria-hidden>
            <div
              className="hbar-fill"
              style={{
                width: `${d.demand}%`,
                backgroundColor: d.color || "var(--color-brand-primary)",
              }}
            />
          </div>
          <div className="hbar-value">{d.demand}%</div>
        </div>
      ))}
    </div>
  );
}

/* -----------------------
   Donut chart for soft skills
   ----------------------- */
function DonutChart({ data, size = 180, inner = 56 }) {
  const total = data.reduce((s, d) => s + d.demand, 0);
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  let start = 0;

  return (
    <svg
      className="chart-svg donut-chart"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      aria-label="Soft skills donut"
    >
      {data.map((d, idx) => {
        const portion = d.demand / total;
        const dash = portion * circumference;
        const rotate = (start / total) * 360;
        const strokeWidth = radius - inner;
        start += d.demand;
        return (
          <g key={d.skill} transform={`rotate(${rotate} ${radius} ${radius})`}>
            <circle
              cx={radius}
              cy={radius}
              r={radius - strokeWidth / 2}
              fill="none"
              stroke={d.color || "var(--color-neutral-900)"}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset="0"
              strokeLinecap="butt"
              className="donut-segment"
            />
          </g>
        );
      })}
      <g>
        <circle
          cx={radius}
          cy={radius}
          r={inner}
          fill="var(--color-bg-primary)"
        />
        <text
          x={radius}
          y={radius - 6}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="var(--color-text-primary)"
        >
          Skills
        </text>
        <text
          x={radius}
          y={radius + 12}
          textAnchor="middle"
          fontSize="12"
          fill="var(--color-text-secondary)"
        >
          {total}
        </text>
      </g>
    </svg>
  );
}

/* -----------------------
   Dashboard Page
   ----------------------- */
export default function DashboardPage() {
  {
    /* ======= REMOVE THIS PART IF NOT NEEDED ======= */
  }
  const stats = [
    {
      label: "Profile Completeness",
      value: "85%",
      icon: "✓",
      color: "rgb(255,137,34)",
    },
    {
      label: "Applications Sent",
      value: "24",
      icon: "📤",
      color: "rgb(52,152,219)",
    },
    {
      label: "Interview Scheduled",
      value: "5",
      icon: "📅",
      color: "rgb(46,204,113)",
    },
    {
      label: "Offers Received",
      value: "2",
      icon: "🎉",
      color: "rgb(155,89,182)",
    },
  ];

  const topJobs = [
    { job: "Software Engineer", count: 1543 },
    { job: "Frontend Developer", count: 1120 },
    { job: "Backend Developer", count: 860 },
    { job: "Data Analyst", count: 740 },
    { job: "QA Engineer", count: 550 },
  ];

  const topTechSkills = [
    { skill: "JavaScript", demand: 92, color: "rgb(241,196,15)" },
    { skill: "Python", demand: 88, color: "rgb(52,152,219)" },
    { skill: "React", demand: 81, color: "rgb(255,137,34)" },
    { skill: "SQL", demand: 76, color: "rgb(46,204,113)" },
    { skill: "Node.js", demand: 72, color: "rgb(155,89,182)" },
  ];

  const topSoftSkills = [
    { skill: "Communication", demand: 90, color: "rgb(255,137,34)" },
    { skill: "Problem-Solving", demand: 85, color: "rgb(52,152,219)" },
    { skill: "Teamwork", demand: 82, color: "rgb(46,204,113)" },
    { skill: "Adaptability", demand: 78, color: "rgb(241,196,15)" },
    { skill: "Critical Thinking", demand: 75, color: "rgb(155,89,182)" },
  ];

  const employabilityScore = {
    overall: 78,
    technicalSkills: 85,
    experience: 72,
    education: 90,
  };

  return (
    <>
      <Navbar variant="UserNav" />

      <section className="dashboard-container CareerCove-Display">
        <div className="dashboard-header">
          <div>
            <h1 className="section-title">Analytics Dashboard</h1>
            <p className="section-subtext">
              Insights on in-demand jobs and skills in computing — visualized
              for quick decisions.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-card"
              style={{ backgroundColor: stat.color }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
            >
              <div className="stat-content">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Visualization Row */}
        <div className="viz-grid">
          {/* Top Jobs (Recharts BarChart) */}
          <div className="viz-card">
            <div className="viz-header">
              <h3 className="viz-title">Top In-demand Jobs</h3>
            </div>
            <div className="viz-body" style={{ width: "100%", height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topJobs}
                  margin={{ top: 20, right: 40, left: 40, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="job"
                    tick={{ fontSize: 12 }}
                    angle={-25}
                    textAnchor="end"
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="count" barSize={32} radius={[6, 6, 0, 0]}>
                    {topJobs.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          [
                            "rgb(255,137,34)",
                            "rgb(52,152,219)",
                            "rgb(46,204,113)",
                            "rgb(241,196,15)",
                            "rgb(155,89,182)",
                          ][index]
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Technical Skills */}
          <div className="viz-card">
            <div className="viz-header">
              <h3 className="viz-title">Top Technical Skills</h3>
            </div>
            <div className="viz-body">
              <HorizontalBars data={topTechSkills} />
            </div>
          </div>

          {/* Top Soft Skills */}
          <div className="viz-card">
            <div className="viz-header">
              <h3 className="viz-title">Top Soft Skills</h3>
            </div>
            <div className="viz-body donut-wrap">
              <DonutChart data={topSoftSkills} />
              <div className="donut-legend">
                {topSoftSkills.map((s) => (
                  <div className="legend-item" key={s.skill}>
                    <span
                      className="legend-swatch"
                      style={{ background: s.color }}
                    />
                    <span className="legend-text">{s.skill}</span>
                    <span className="legend-value">{s.demand}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ====================== REMOVE THIS PART IF NOT NEEDED ====================== */}

        {/* Employability & Skills */}
        <div className="employability-grid">
          <div className="overall-card">
            <p className="overall-title">Overall Employability</p>
            <div className="overall-value">{employabilityScore.overall}%</div>
            <div className="progress-bar" aria-hidden>
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

        {/* Info Row */}
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
