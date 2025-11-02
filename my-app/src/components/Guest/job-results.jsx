"use client";

import { useState } from "react";
import { Button } from "../UI/Guest-UI/button";
import { Card } from "../UI/Guest-UI/card";
import { Input } from "../UI/Guest-UI/input";

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
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Search and Filter */}
        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Search more.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-card border-input"
          />
          <Button variant="outline" className="px-6 bg-transparent">
            Filter
          </Button>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="p-6 bg-card border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {job.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {job.location}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSave(job.id)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    aria-label="Save job"
                  >
                    <svg
                      className={`w-6 h-6 ${
                        savedJobs.includes(job.id)
                          ? "fill-foreground text-foreground"
                          : "text-muted-foreground"
                      }`}
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

                <div className="mb-4 space-y-1">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Salary:</span> {job.salary}
                  </p>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Work Setup:</span>{" "}
                    {job.workSetup}
                  </p>
                  <p className="text-sm text-foreground text-muted-foreground">
                    {job.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-foreground text-background text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <div className="flex justify-end">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                    View
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-12 bg-card border-border text-center">
              <p className="text-muted-foreground">
                No jobs found matching your search.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
