// React
import { useState, useMemo } from "react";

// Styles
import "../../styles/MyProfile/Profile-RecentAct.css";

export default function ProfileRecentAct() {
  const [jobs, setJobs] = useState([
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      address: "San Francisco, CA",
      tags: ["Remote", "PA-5k"],
      status: "In Progress",
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Startup Inc",
      address: "New York, NY",
      tags: ["Remote", "PA-5k"],
      status: "In Progress",
    },
    {
      id: "3",
      title: "React Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
      status: "In Progress",
    },
    {
      id: "4",
      title: "JavaScript Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
      status: "Interview",
    },
    {
      id: "5",
      title: "Web Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
      status: "In Progress",
    },
    {
      id: "6",
      title: "Junior Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
      status: "Accepted",
    },
    {
      id: "7",
      title: "Backend Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
      status: "In Progress",
    },
    {
      id: "8",
      title: "DevOps Engineer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
      status: "Interview",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = useMemo(
    () =>
      jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.address.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [jobs, searchQuery]
  );

  const statusCounts = useMemo(() => {
    return {
      "In Progress": jobs.filter((job) => job.status === "In Progress").length,
      Interview: jobs.filter((job) => job.status === "Interview").length,
      Accepted: jobs.filter((job) => job.status === "Accepted").length,
    };
  }, [jobs]);

  const handleDelete = (id) => setJobs(jobs.filter((job) => job.id !== id));

  const handleStatusChange = (id, newStatus) => {
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job))
    );
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "In Progress":
        return "pending";
      case "Interview":
        return "groups";
      case "Accepted":
        return "check_circle";
      default:
        return "help";
    }
  };

  return (
    <div className="Profile-RecentAct">
      {/* Header */}
      <div className="Profile-RecentAct-header">
        <h2 className="recent-act-title">Application Tracker</h2>
        <span className="recent-act-count">
          {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"}{" "}
          Saved
        </span>
      </div>

      {/* Status Stats */}
      <div className="Profile-RecentAct-stats">
        {["In Progress", "Interview", "Accepted"].map((status) => (
          <div
            key={status}
            className={`stat-card ${status.toLowerCase().replace(" ", "-")}`}
          >
            <div className="stat-icon-container">
              <span className="material-symbols-outlined">
                {getStatusIcon(status)}
              </span>
            </div>
            <div className="stat-content">
              <span className="stat-value">{statusCounts[status]}</span>
              <span className="stat-label">{status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Search Input */}
      <div className="recent-act-search-wrapper">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          placeholder="Search saved jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="recent-act-search-input"
        />
      </div>

      {/* Job Cards */}
      <div className="Profile-RecentAct-jobs">
        {filteredJobs.map((job) => (
          <div key={job.id} className="recent-act-job-card">
            <div className="job-card-top">
              <div className="job-info-primary">
                <h3>{job.title}</h3>
                <p className="job-company">{job.company}</p>
              </div>
              <div className="job-actions">
                <div
                  className={`status-selector ${job.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <select
                    value={job.status}
                    onChange={(e) => handleStatusChange(job.id, e.target.value)}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Interview">Interview</option>
                    <option value="Accepted">Accepted</option>
                  </select>
                  <span className="material-symbols-outlined arrow">
                    expand_more
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="delete-job-btn"
                  title="Remove bookmark"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>

            <div className="job-card-bottom">
              <div className="job-location">
                <span className="material-symbols-outlined">location_on</span>
                {job.address}
              </div>
              <div className="job-tags">
                {job.tags.map((tag, idx) => (
                  <span key={idx} className="job-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="Profile-RecentAct-empty">
          <span className="material-symbols-outlined empty-icon">
            folder_open
          </span>
          <p>
            {searchQuery
              ? "No jobs found matching your search."
              : "No saved jobs yet. Start bookmarking jobs!"}
          </p>
        </div>
      )}
    </div>
  );
}
