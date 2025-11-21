import { useState } from "react";
import { Button } from "../UI/Guest-UI/button";
import { Card } from "../UI/Guest-UI/card";
import { Input } from "../UI/Guest-UI/input";
import "../../styles/Guest/Guest.css";
import { ChevronLeft, ChevronRight, Bookmark, Search } from "lucide-react";

export function JobResults({ jobs, userInput }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const toggleSave = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 ">
      <div className="max-w-6xl mx-auto ">
        {/* Search and Filter */}
        <div className="flex gap-4 mb-8 job-results-search">
          <div className="relative flex-1">
            <Search className="search-icon " size={20} />

            <Input
              placeholder="Search more.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="guest-input search-input"
            />
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="job-card relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header Section */}
                <div className="job-header">
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                    <p className="job-location">{job.location}</p>
                  </div>

                  <button
                    onClick={() => toggleSave(job.id)}
                    className={`save-button ${
                      savedJobs.includes(job.id) ? "saved" : ""
                    }`}
                    aria-label="Save job"
                  >
                    <svg
                      className="save-icon"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill={
                        savedJobs.includes(job.id) ? "currentColor" : "none"
                      }
                    >
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    </svg>
                  </button>
                </div>

                <div className="job-details">
                  <p>
                    <span className="label">💰 Salary:</span> {job.salary}
                  </p>
                  <p>
                    <span className="label">🏠 Work Setup:</span>{" "}
                    {job.workSetup}
                  </p>
                  <p className="job-description">{job.description}</p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-10">
                  {job.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="job-footer">
                  <button className="view-button">View</button>
                </div>
              </Card>
            ))
          ) : (
            <Card className="job-empty-card">
              <p className="job-empty-text">
                No jobs found matching your search.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
