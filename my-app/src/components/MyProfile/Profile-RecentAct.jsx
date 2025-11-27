import { useState, useMemo } from "react";
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

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "#3498db";
      case "Interview":
        return "#f39c12";
      case "Accepted":
        return "#27ae60";
      default:
        return "#95a5a6";
    }
  };

  return (
    <div className="Profile-RecentAct">
      {/* Header */}
      <div className="Profile-RecentAct-header">
        <span>
          <span className="material-symbols-outlined">book</span>
        </span>
        <h2>Bookmarks: {filteredJobs.length}</h2>
      </div>

      {/* Status Counts */}
      <div className="Profile-RecentAct-statusCounts">
        <div
          className="Profile-RecentAct-statusCount"
          style={{ borderLeftColor: getStatusColor("In Progress") }}
        >
          <span className="status-label">In Progress</span>
          <span className="status-number">{statusCounts["In Progress"]}</span>
        </div>
        <div
          className="Profile-RecentAct-statusCount"
          style={{ borderLeftColor: getStatusColor("Interview") }}
        >
          <span className="status-label">Interview</span>
          <span className="status-number">{statusCounts.Interview}</span>
        </div>
        <div
          className="Profile-RecentAct-statusCount"
          style={{ borderLeftColor: getStatusColor("Accepted") }}
        >
          <span className="status-label">Accepted</span>
          <span className="status-number">{statusCounts.Accepted}</span>
        </div>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="Profile-RecentAct-search"
      />

      {/* Job Cards */}
      <div className="Profile-RecentAct-jobs">
        {filteredJobs.map((job) => (
          <div key={job.id} className="Profile-RecentAct-jobCard">
            <div className="Profile-RecentAct-jobContent">
              <div className="Profile-RecentAct-jobAvatar" />
              <div className="Profile-RecentAct-jobText">
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p className="address">📍 {job.address}</p>
                <div className="Profile-RecentAct-jobTags">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="Profile-RecentAct-jobTag">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Status Selector */}
                <div className="Profile-RecentAct-statusSelector">
                  <label htmlFor={`status-${job.id}`}>Status:</label>
                  <select
                    id={`status-${job.id}`}
                    value={job.status}
                    onChange={(e) => handleStatusChange(job.id, e.target.value)}
                    className="Profile-RecentAct-statusDropdown"
                    style={{ borderColor: getStatusColor(job.status) }}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Interview">Interview</option>
                    <option value="Accepted">Accepted</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDelete(job.id)}
              className="Profile-RecentAct-jobDeleteBtn"
              title="Delete bookmark"
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="Profile-RecentAct-empty">
          <p>
            {searchQuery ? "No jobs match your search" : "No saved jobs yet"}
          </p>
        </div>
      )}
    </div>
  );
}
