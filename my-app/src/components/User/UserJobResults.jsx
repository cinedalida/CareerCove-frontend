import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import "../../styles/JobsPage/JobsPage.css";
import FilterPanel from "../UI/FilterPanel";

// ========== FEATURED JOBS DATA ==========

const FEATURED_JOBS = [
  {
    id: 101,
    title: "Principal Engineer",
    company: "Tech Giants",
    location: "1000 Innovation Dr, Mountain View",
    salary: "$180,000 - $220,000",
    salaryMin: 180000,
    salaryMax: 220000,
    workSetup: "Remote",
    description: "Lead architectural decisions and mentor senior engineers",
    skills: ["Python", "JavaScript", "Firebase", "SQL"],
  },
  {
    id: 102,
    title: "Engineering Manager",
    company: "Scale Corp",
    location: "2000 Scale Ave, Palo Alto",
    salary: "$150,000 - $190,000",
    salaryMin: 150000,
    salaryMax: 190000,
    workSetup: "Hybrid",
    description: "Manage engineering teams and drive product innovation",
    skills: ["Leadership", "Agile", "AWS", "Python"],
  },
  {
    id: 103,
    title: "Cloud Solutions Architect",
    company: "Cloud Masters",
    location: "3000 Cloud Blvd, Seattle",
    salary: "$155,000 - $195,000",
    salaryMin: 155000,
    salaryMax: 195000,
    workSetup: "Remote",
    description: "Design enterprise cloud solutions and infrastructure",
    skills: ["AWS", "Kubernetes", "JavaScript", "SQL"],
  },
  {
    id: 104,
    title: "ML Engineer",
    company: "AI Innovations",
    location: "4000 AI St, Boston",
    salary: "$140,000 - $180,000",
    salaryMin: 140000,
    salaryMax: 180000,
    workSetup: "Hybrid",
    description: "Build and deploy machine learning models at scale",
    skills: ["Python", "TensorFlow", "Firebase", "SQL"],
  },
  {
    id: 105,
    title: "Platform Engineer",
    company: "Infra Pro",
    location: "5000 Platform Pl, Austin",
    salary: "$135,000 - $170,000",
    salaryMin: 135000,
    salaryMax: 170000,
    workSetup: "Remote",
    description: "Build internal platforms and developer tools",
    skills: ["JavaScript", "Kubernetes", "AWS", "Python"],
  },
  {
    id: 106,
    title: "Staff Engineer",
    company: "Big Tech",
    location: "6000 Staff Rd, San Francisco",
    salary: "$160,000 - $200,000",
    salaryMin: 160000,
    salaryMax: 200000,
    workSetup: "Hybrid",
    description: "Influence company technical direction across teams",
    skills: ["Python", "JavaScript", "Firebase", "SQL"],
  },
  {
    id: 107,
    title: "Head of Engineering",
    company: "Growth Inc",
    location: "7000 Growth Way, New York",
    salary: "$170,000 - $220,000",
    salaryMin: 170000,
    salaryMax: 220000,
    workSetup: "Hybrid",
    description: "Lead engineering organization and strategy",
    skills: ["Leadership", "AWS", "JavaScript", "Python"],
  },
  {
    id: 108,
    title: "Solutions Engineer",
    company: "Enterprise Corp",
    location: "8000 Enterprise Ave, Chicago",
    salary: "$120,000 - $160,000",
    salaryMin: 120000,
    salaryMax: 160000,
    workSetup: "On-site",
    description: "Work with clients to design technical solutions",
    skills: ["JavaScript", "Python", "Firebase", "SQL"],
  },
  {
    id: 109,
    title: "Blockchain Developer",
    company: "Web3 Studio",
    location: "9000 Blockchain Dr, Los Angeles",
    salary: "$130,000 - $170,000",
    salaryMin: 130000,
    salaryMax: 170000,
    workSetup: "Work From Home",
    description: "Develop decentralized applications and smart contracts",
    skills: ["JavaScript", "Solidity", "Firebase", "Python"],
  },
  {
    id: 110,
    title: "Technical Lead",
    company: "Startup Stars",
    location: "10000 Startup St, San Diego",
    salary: "$125,000 - $165,000",
    salaryMin: 125000,
    salaryMax: 165000,
    workSetup: "Hybrid",
    description: "Lead technical direction for key projects",
    skills: ["JavaScript", "Python", "Kubernetes", "SQL"],
  },
];

const JOBS_PER_PAGE = 6;

// ========== Job Card ==========

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
          <Bookmark
            className="save-icon"
            size={20}
            fill={isSaved ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="job-details">
        <p>
          <span className="label">📍</span>
          <span>{job.location}</span>
        </p>
        <p>
          <span className="label">💰</span>
          <span>{job.salary}</span>
        </p>
        <p>
          <span className="label">🏠</span>
          <span>{job.workSetup}</span>
        </p>
      </div>

      <p className="job-description">{job.description}</p>

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

// ========== Main Component ==========

export function JobResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [savedJobs, setSavedJobs] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    workSetup: "",
    salaryMin: "",
    salaryMax: "",
    ranker: "General",
  });

  // Apply filters
  const filteredJobs = FEATURED_JOBS.filter((job) => {
    // Work Setup Filter
    if (filters.workSetup && job.workSetup !== filters.workSetup) {
      return false;
    }

    // Salary Range Filter
    if (filters.salaryMin && job.salaryMax < parseInt(filters.salaryMin)) {
      return false;
    }
    if (filters.salaryMax && job.salaryMin > parseInt(filters.salaryMax)) {
      return false;
    }

    // Search Term Filter based on Ranker
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();

      switch (filters.ranker) {
        case "Title":
          return job.title.toLowerCase().includes(searchLower);

        case "Hard Skill":
          return job.skills.some((skill) =>
            skill.toLowerCase().includes(searchLower)
          );

        case "General":
        default:
          return (
            job.title.toLowerCase().includes(searchLower) ||
            job.company.toLowerCase().includes(searchLower) ||
            job.location.toLowerCase().includes(searchLower) ||
            job.skills.some((skill) =>
              skill.toLowerCase().includes(searchLower)
            )
          );
      }
    }

    return true;
  });

  // Pagination
  const startIndex = currentPage * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const handleSaveToggle = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const handleClearFilters = () => {
    setFilters({
      workSetup: "",
      salaryMin: "",
      salaryMax: "",
      ranker: "General",
    });
    setSearchTerm("");
    setCurrentPage(0);
  };

  const activeFilterCount = [
    filters.workSetup,
    filters.salaryMin,
    filters.salaryMax,
  ].filter(Boolean).length;

  return (
    <div className="job-results-container">
      <div className="job-results-wrapper">
        {/* Search Bar with Filter Button */}
        <div className="job-results-search">
          <div className="search-with-filter">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder={`Search jobs by ${filters.ranker.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="guest-input search-input"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="filter-toggle-btn"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="filter-badge">{activeFilterCount}</span>
              )}
            </button>
          </div>

          {/* Active Filters Display */}
          {activeFilterCount > 0 && (
            <div className="active-filters">
              {filters.workSetup && (
                <span className="active-filter-tag">
                  Work: {filters.workSetup}
                  <button
                    onClick={() => setFilters({ ...filters, workSetup: "" })}
                    className="remove-filter"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              {filters.salaryMin && (
                <span className="active-filter-tag">
                  Min: ${parseInt(filters.salaryMin).toLocaleString()}
                  <button
                    onClick={() => setFilters({ ...filters, salaryMin: "" })}
                    className="remove-filter"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              {filters.salaryMax && (
                <span className="active-filter-tag">
                  Max: ${parseInt(filters.salaryMax).toLocaleString()}
                  <button
                    onClick={() => setFilters({ ...filters, salaryMax: "" })}
                    className="remove-filter"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              <button onClick={handleClearFilters} className="clear-all-btn">
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Filter Panel */}
        <FilterPanel
          filters={filters}
          setFilters={setFilters}
          onClearFilters={handleClearFilters}
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />

        {/* Results Count */}
        <div className="results-info">
          <p className="results-count">
            {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"}{" "}
            found
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="jobs-grid-container">
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
                  No jobs found matching your filters.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="empty-state-btn"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
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
      </div>
    </div>
  );
}

export default JobResults;
