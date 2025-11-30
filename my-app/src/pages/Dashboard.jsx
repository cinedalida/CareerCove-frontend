import React from "react";
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
import { Lightbulb } from "lucide-react"; // Icon for simple insights

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

  // Top 20 Jobs List
  const top20Jobs = [
    { rank: 1, job: "Software Engineer", percentage: 15.4 },
    { rank: 2, job: "Frontend Developer", percentage: 12.3 },
    { rank: 3, job: "Backend Developer", percentage: 10.8 },
    { rank: 4, job: "Data Analyst", percentage: 9.2 },
    { rank: 5, job: "QA Engineer", percentage: 8.5 },
    { rank: 6, job: "Full Stack Developer", percentage: 7.9 },
    { rank: 7, job: "DevOps Engineer", percentage: 6.8 },
    { rank: 8, job: "Mobile Developer", percentage: 5.7 },
    { rank: 9, job: "UI/UX Designer", percentage: 5.2 },
    { rank: 10, job: "Data Scientist", percentage: 4.6 },
    { rank: 11, job: "Machine Learning Engineer", percentage: 4.1 },
    { rank: 12, job: "Cloud Engineer", percentage: 3.8 },
    { rank: 13, job: "Security Analyst", percentage: 3.5 },
    { rank: 14, job: "Product Manager", percentage: 3.2 },
    { rank: 15, job: "Business Analyst", percentage: 2.9 },
    { rank: 16, job: "Database Administrator", percentage: 2.6 },
    { rank: 17, job: "Systems Analyst", percentage: 2.3 },
    { rank: 18, job: "Network Engineer", percentage: 2.0 },
    { rank: 19, job: "AI Engineer", percentage: 1.8 },
    { rank: 20, job: "Blockchain Developer", percentage: 1.5 },
  ];

  // Top 20 Skills List
  const top20Skills = [
    { rank: 1, skill: "JavaScript", percentage: 18.5 },
    { rank: 2, skill: "Python", percentage: 16.2 },
    { rank: 3, skill: "React", percentage: 14.8 },
    { rank: 4, skill: "SQL", percentage: 13.4 },
    { rank: 5, skill: "Node.js", percentage: 12.1 },
    { rank: 6, skill: "Git", percentage: 11.3 },
    { rank: 7, skill: "Java", percentage: 10.7 },
    { rank: 8, skill: "TypeScript", percentage: 9.8 },
    { rank: 9, skill: "AWS", percentage: 9.2 },
    { rank: 10, skill: "Docker", percentage: 8.5 },
    { rank: 11, skill: "MongoDB", percentage: 7.9 },
    { rank: 12, skill: "REST APIs", percentage: 7.3 },
    { rank: 13, skill: "GraphQL", percentage: 6.8 },
    { rank: 14, skill: "Kubernetes", percentage: 6.2 },
    { rank: 15, skill: "Angular", percentage: 5.7 },
    { rank: 16, skill: "Vue.js", percentage: 5.1 },
    { rank: 17, skill: "C++", percentage: 4.6 },
    { rank: 18, skill: "Jenkins", percentage: 4.2 },
    { rank: 19, skill: "TensorFlow", percentage: 3.8 },
    { rank: 20, skill: "Redis", percentage: 3.4 },
  ];

  return (
    <>
      <Navbar variant="UserNav" />

      <section className="dashboard-container CareerCove-Display">
        <div className="dashboard-header">
          <div>
            <h1 className="section-title">Analytics Dashboard</h1>
            <p className="dashboard-section-subtext">
              Insights on in-demand jobs and skills in the Computing Industry.
            </p>
          </div>
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
              <h3 className="viz-title">Your Top Technical Skills</h3>
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

        {/* Top 20 Lists */}
        <div className="top-lists-grid">
          {/* Top 20 Jobs */}
          <div className="top-list-card">
            <h3 className="list-title">Top 20 In-Demand Jobs</h3>
            <div className="list-content">
              {top20Jobs.map((item) => (
                <div key={item.rank} className="list-item">
                  <span className="list-rank">#{item.rank}</span>
                  <span className="list-name">{item.job}</span>
                  <span className="list-percentage">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top 20 Skills */}
          <div className="top-list-card">
            <h3 className="list-title">Top 20 Required Skills</h3>
            <div className="list-content">
              {top20Skills.map((item) => (
                <div key={item.rank} className="list-item">
                  <span className="list-rank">#{item.rank}</span>
                  <span className="list-name">{item.skill}</span>
                  <span className="list-percentage">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== NEW: SIMPLE INSIGHTS SECTION ========== */}
        <div className="dashboard-insights-container">
          <div className="insights-header">
            <div className="insights-icon">
              <Lightbulb size={24} color="white" />
            </div>
            <h2 className="section-title">Dashboard Insights</h2>
          </div>

          <p className="dashboard-section-subtext">
            A quick summary of the current market trends.
          </p>

          <div className="insights-card">
            <div className="insight-item">
              <h4>Dominant Role</h4>
              <p>
                <strong>Software Engineer</strong> is currently the most
                in-demand role, accounting for roughly <strong>15.4%</strong> of
                the market share.
              </p>
            </div>
            <div className="insight-item">
              <h4>Top Skill</h4>
              <p>
                <strong>JavaScript</strong> remains the leading technical skill
                required across <strong>18.5%</strong> of job postings.
              </p>
            </div>
            <div className="insight-item">
              <h4>Soft Skills</h4>
              <p>
                Employers prioritize <strong>Communication (90%)</strong> and{" "}
                <strong>Problem-Solving (85%)</strong> above all other
                interpersonal traits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
