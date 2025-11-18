"use client";

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
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Startup Inc",
      address: "New York, NY",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "3",
      title: "React Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "4",
      title: "JavaScript Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "5",
      title: "Web Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "6",
      title: "Junior Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "7",
      title: "Backend Developer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
    },
    {
      id: "8",
      title: "DevOps Engineer",
      company: "Company Name",
      address: "City, Country",
      tags: ["Remote", "PA-5k"],
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

  const handleDelete = (id) => setJobs(jobs.filter((job) => job.id !== id));

  return (
    <div className="Profile-RecentAct">
      {/* Header */}
      <div className="Profile-RecentAct-header">
        <span>🔖</span>
        <p>Bookmarks: {filteredJobs.length}</p>
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
              </div>
            </div>
            <button
              onClick={() => handleDelete(job.id)}
              className="Profile-RecentAct-jobDeleteBtn"
              title="Delete bookmark"
            >
              🗑️
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
