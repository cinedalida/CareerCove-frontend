"use client";

import { useState, useMemo } from "react";
import "../../styles/MyProfile/Profile-RecentAct.css";

export default function ProfileRecentActivity() {
  const [jobs, setJobs] = useState([
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Tech Corp and address",
      address: "San Francisco, CA",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Startup Inc and address",
      address: "New York, NY",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "3",
      title: "React Developer",
      company: "Company Name and address",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "4",
      title: "JavaScript Developer",
      company: "Company Name and address",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "5",
      title: "Web Developer",
      company: "Company Name and address",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "6",
      title: "Junior Developer",
      company: "Company Name and address",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "7",
      title: "Backend Developer",
      company: "Company Name and address",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "8",
      title: "DevOps Engineer",
      company: "Company Name and address",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [jobs, searchQuery]);

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="profile-activity">
      {/* Bookmarks header */}
      <div className="profile-activity-header">
        <span>🔖</span>
        <p>Bookmarks: {filteredJobs.length}</p>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="profile-search"
      />

      {/* Job cards */}
      <div className="profile-jobs">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-content">
              <div className="job-avatar" />
              <div className="job-text">
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p className="address">📍 {job.address}</p>
                <div className="job-tags">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="job-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDelete(job.id)}
              className="job-delete-btn"
              title="Delete bookmark"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredJobs.length === 0 && (
        <div className="job-empty">
          <p>
            {searchQuery ? "No jobs match your search" : "No saved jobs yet"}
          </p>
        </div>
      )}
    </div>
  );
}
