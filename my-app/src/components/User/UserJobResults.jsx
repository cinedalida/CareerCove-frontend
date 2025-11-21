import { useState } from "react";
import { ChevronLeft, ChevronRight, Bookmark, Search } from "lucide-react";
import "../../styles/JobsPage/JobsPage.css";

// ========== MOCK DATA ==========

const SUGGESTED_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "123 Tech Street, San Francisco",
    salary: "$120,000 - $150,000",
    workSetup: "Remote",
    description: "Build amazing web applications with React and TypeScript",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    type: "suggested",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartUp Inc",
    location: "456 Innovation Ave, New York",
    salary: "$100,000 - $130,000",
    workSetup: "Hybrid",
    description: "Create full-stack applications using modern technologies",
    skills: ["Node.js", "React", "PostgreSQL"],
    type: "suggested",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Cloud Systems",
    location: "789 Cloud Plaza, Austin",
    salary: "$110,000 - $140,000",
    workSetup: "On-site",
    description: "Design scalable backend services and APIs",
    skills: ["Python", "AWS", "Kubernetes"],
    type: "suggested",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Infrastructure Pro",
    location: "321 DevOps Dr, Seattle",
    salary: "$130,000 - $160,000",
    workSetup: "Remote",
    description: "Manage infrastructure and deployment pipelines",
    skills: ["Kubernetes", "Docker", "CI/CD"],
    type: "suggested",
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "App Studio",
    location: "654 Mobile Way, Boston",
    salary: "$105,000 - $135,000",
    workSetup: "Hybrid",
    description: "Develop iOS and Android applications",
    skills: ["React Native", "Swift", "Kotlin"],
    type: "suggested",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Analytics Corp",
    location: "987 Data Dr, San Diego",
    salary: "$115,000 - $145,000",
    workSetup: "Remote",
    description: "Build machine learning models and analyze data",
    skills: ["Python", "TensorFlow", "SQL"],
    type: "suggested",
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "159 Design Pl, Los Angeles",
    salary: "$90,000 - $120,000",
    workSetup: "Hybrid",
    description: "Create beautiful user interfaces and experiences",
    skills: ["Figma", "CSS", "JavaScript"],
    type: "suggested",
  },
  {
    id: 8,
    title: "QA Engineer",
    company: "Quality First",
    location: "753 Test Ave, Chicago",
    salary: "$85,000 - $110,000",
    workSetup: "On-site",
    description: "Ensure software quality through comprehensive testing",
    skills: ["Selenium", "Jest", "Python"],
    type: "suggested",
  },
  {
    id: 9,
    title: "Security Engineer",
    company: "CyberGuard",
    location: "852 Security St, Denver",
    salary: "$125,000 - $155,000",
    workSetup: "Remote",
    description: "Protect applications and infrastructure from threats",
    skills: ["Python", "AWS", "Network Security"],
    type: "suggested",
  },
  {
    id: 10,
    title: "Product Manager",
    company: "Product Co",
    location: "741 Product Rd, Miami",
    salary: "$110,000 - $145,000",
    workSetup: "Hybrid",
    description: "Lead product strategy and roadmap development",
    skills: ["Product Strategy", "Analytics", "Leadership"],
    type: "suggested",
  },
];

const FEATURED_JOBS = [
  {
    id: 101,
    title: "Principal Engineer",
    company: "Tech Giants",
    location: "1000 Innovation Dr, Mountain View",
    salary: "$180,000 - $220,000",
    workSetup: "Remote",
    description: "Lead architectural decisions and mentor senior engineers",
    skills: ["Python", "JavaScript", "Firebase", "SQL"],
    type: "featured",
  },
  {
    id: 102,
    title: "Engineering Manager",
    company: "Scale Corp",
    location: "2000 Scale Ave, Palo Alto",
    salary: "$150,000 - $190,000",
    workSetup: "Hybrid",
    description: "Manage engineering teams and drive product innovation",
    skills: ["Leadership", "Agile", "AWS", "Python"],
    type: "featured",
  },
  {
    id: 103,
    title: "Cloud Solutions Architect",
    company: "Cloud Masters",
    location: "3000 Cloud Blvd, Seattle",
    salary: "$155,000 - $195,000",
    workSetup: "Remote",
    description: "Design enterprise cloud solutions and infrastructure",
    skills: ["AWS", "Kubernetes", "JavaScript", "SQL"],
    type: "featured",
  },
  {
    id: 104,
    title: "ML Engineer",
    company: "AI Innovations",
    location: "4000 AI St, Boston",
    salary: "$140,000 - $180,000",
    workSetup: "Hybrid",
    description: "Build and deploy machine learning models at scale",
    skills: ["Python", "TensorFlow", "Firebase", "SQL"],
    type: "featured",
  },
  {
    id: 105,
    title: "Platform Engineer",
    company: "Infra Pro",
    location: "5000 Platform Pl, Austin",
    salary: "$135,000 - $170,000",
    workSetup: "Remote",
    description: "Build internal platforms and developer tools",
    skills: ["JavaScript", "Kubernetes", "AWS", "Python"],
    type: "featured",
  },
  {
    id: 106,
    title: "Staff Engineer",
    company: "Big Tech",
    location: "6000 Staff Rd, San Francisco",
    salary: "$160,000 - $200,000",
    workSetup: "Hybrid",
    description: "Influence company technical direction across teams",
    skills: ["Python", "JavaScript", "Firebase", "SQL"],
    type: "featured",
  },
  {
    id: 107,
    title: "Head of Engineering",
    company: "Growth Inc",
    location: "7000 Growth Way, New York",
    salary: "$170,000 - $220,000",
    workSetup: "Hybrid",
    description: "Lead engineering organization and strategy",
    skills: ["Leadership", "AWS", "JavaScript", "Python"],
    type: "featured",
  },
  {
    id: 108,
    title: "Solutions Engineer",
    company: "Enterprise Corp",
    location: "8000 Enterprise Ave, Chicago",
    salary: "$120,000 - $160,000",
    workSetup: "On-site",
    description: "Work with clients to design technical solutions",
    skills: ["JavaScript", "Python", "Firebase", "SQL"],
    type: "featured",
  },
  {
    id: 109,
    title: "Blockchain Developer",
    company: "Web3 Studio",
    location: "9000 Blockchain Dr, Los Angeles",
    salary: "$130,000 - $170,000",
    workSetup: "Remote",
    description: "Develop decentralized applications and smart contracts",
    skills: ["JavaScript", "Solidity", "Firebase", "Python"],
    type: "featured",
  },
  {
    id: 110,
    title: "Technical Lead",
    company: "Startup Stars",
    location: "10000 Startup St, San Diego",
    salary: "$125,000 - $165,000",
    workSetup: "Hybrid",
    description: "Lead technical direction for key projects",
    skills: ["JavaScript", "Python", "Kubernetes", "SQL"],
    type: "featured",
  },
];

const JOBS_PER_PAGE = 5;

// ========== Job Card Component ==========

function JobCard({ job, isSaved, onSaveToggle }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <div className="job-info">
          <div className="company-logo">
            <span className="company-initial">{job.company.charAt(0)}</span>
          </div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
        </div>

        <button
          onClick={() => onSaveToggle(job.id)}
          className={`save-button ${isSaved ? "saved" : ""}`}
          aria-label="Save job"
        >
          <svg
            className="save-icon"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill={isSaved ? "currentColor" : "none"}
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      <div className="job-details">
        <p>
          <span className="label">📍</span>
          <span>{job.location}</span>
        </p>
        <p>
          <span className="label">💰 Salary:</span> {job.salary}
        </p>
        <p>
          <span className="label">🏠 Work Setup:</span> {job.workSetup}
        </p>
        <p className="job-description">{job.description}</p>
      </div>

      <div className="skill-tags">
        {job.skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <div className="job-footer">
        <button className="view-button">View</button>
      </div>
    </div>
  );
}

// ========== Job Column Component ==========

function JobColumn({ title, jobs, isMainColumn = false }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [savedJobs, setSavedJobs] = useState([]);

  const startIndex = currentPage * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const paginatedJobs = jobs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  const handleSaveToggle = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="job-column">
      <div className="column-header">
        <h2 className="column-title">{title}</h2>
        {!isMainColumn && (
          <button className="column-menu-btn">
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="1"
                strokeWidth="2"
                fill="currentColor"
              />
              <circle
                cx="19"
                cy="12"
                r="1"
                strokeWidth="2"
                fill="currentColor"
              />
              <circle
                cx="5"
                cy="12"
                r="1"
                strokeWidth="2"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="jobs-list">
        {paginatedJobs.length > 0 ? (
          paginatedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={savedJobs.includes(job.id)}
              onSaveToggle={handleSaveToggle}
            />
          ))
        ) : (
          <div className="job-empty-card">
            <p className="job-empty-text">
              No jobs found matching your search.
            </p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="pagination-btn"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="pagination-text">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={currentPage === totalPages - 1}
            className="pagination-btn"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

// ========== Main Component ==========

export function JobResults({ jobs, userInput }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter function for both job lists
  const filterJobs = (jobList) => {
    if (!searchTerm.trim()) return jobList;

    return jobList.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  };

  const filteredSuggestedJobs = filterJobs(SUGGESTED_JOBS);
  const filteredFeaturedJobs = filterJobs(FEATURED_JOBS);

  return (
    <div className="job-results-container">
      <div className="job-results-wrapper">
        {/* Search Bar */}
        <div className="job-results-search">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search jobs by title, company, location, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="guest-input search-input"
            />
          </div>
        </div>

        {/* Job Columns */}
        <div className="job-results-grid">
          {/* Suggested Jobs Column */}
          <div className="job-column-wrapper suggested-column">
            <JobColumn title="Suggested Jobs" jobs={filteredSuggestedJobs} />
          </div>

          {/* Divider */}
          <div className="column-divider"></div>

          {/* Featured Jobs Column */}
          <div className="job-column-wrapper featured-column">
            <JobColumn
              title="Featured Jobs"
              jobs={filteredFeaturedJobs}
              isMainColumn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobResults;
