import { useState } from "react";
import { Button } from "../UI/Guest-UI/button";
import { Card } from "../UI/Guest-UI/card";
import { Input } from "../UI/Guest-UI/input";
import "../../styles/Guest/Guest.css";
import FilterPanel from "../UI/FilterPanel";
import {
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  X,
  Search, // Re-imported
} from "lucide-react";

export function JobResults({ jobs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    workSetup: "",
    salaryMin: "",
    salaryMax: "",
    ranker: "General",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const JOBS_PER_PAGE = 6;

  const filteredJobs = jobs.filter((job) => {
    if (filters.workSetup && job.workSetup !== filters.workSetup) return false;
    if (filters.salaryMin && job.salaryMax < parseInt(filters.salaryMin))
      return false;
    if (filters.salaryMax && job.salaryMin > parseInt(filters.salaryMax))
      return false;

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

  const startIndex = currentPage * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

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
    <div className="job-results-container max-w-6xl mx-auto px-4 py-8">
      {/* ---------- Search & Filter ---------- */}
      <div className="job-results-search mb-6">
        <div className="search-with-filter">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <Input
              placeholder={`Search by ${filters.ranker.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="guest-input search-input"
            />
          </div>

          <button
            className="filter-toggle-btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal size={20} />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="filter-badge">{activeFilterCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="active-filters mb-4 flex flex-wrap gap-2">
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
          <button onClick={handleClearFilters} className="clear-all-btn ml-2">
            Clear All
          </button>
        </div>
      )}

      {/* Filter Panel (Modal) */}
      <FilterPanel
        filters={filters}
        setFilters={setFilters}
        onClearFilters={handleClearFilters}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      {/* ---------- Job Results Count ---------- */}
      <p className="guest-results-count">
        {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
      </p>

      {/* ---------- Job Grid (Single Column) ---------- */}
      <div className="job-results-grid gap-6">
        {paginatedJobs.length > 0 ? (
          paginatedJobs.map((job) => (
            <Card
              key={job.id}
              className="guest-job-card relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="job-header">
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                  <p className="job-location">{job.location}</p>
                </div>
              </div>

              {/* Details */}
              <div className="job-details mt-2">
                <p>
                  <span className="material-symbols-outlined">payments</span>{" "}
                  {job.salary}
                </p>
                <p>
                  <span className="material-symbols-outlined">work</span>{" "}
                  {job.workSetup}
                </p>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="job-footer mt-4">
                <button className="view-button">View</button>
              </div>
            </Card>
          ))
        ) : (
          <Card className="job-empty-card">
            <p className="job-empty-text">
              No jobs found matching your search or filters.
            </p>
          </Card>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="pagination-btn"
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
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
