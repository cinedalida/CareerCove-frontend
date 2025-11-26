import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Edit2,
  Trash2,
  X,
} from "lucide-react";
import "../../styles/JobsPage/JobsPage.css";

// ========== INITIAL DATA ==========

const INITIAL_APPLICATIONS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "123 Tech Street, San Francisco",
    salary: "$120,000 - $150,000",
    workSetup: "Remote",
    description: "Build amazing web applications with React and TypeScript",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    appliedDate: "2024-01-15",
    status: "Applied",
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
    appliedDate: "2024-01-18",
    status: "Interview",
  },
];

const JOBS_PER_PAGE = 5;

// ========== Add/Edit Job Modal ==========

function JobFormModal({ isOpen, onClose, onSubmit, editingJob }) {
  const [formData, setFormData] = useState(
    editingJob || {
      title: "",
      company: "",
      location: "",
      salary: "",
      workSetup: "Remote",
      description: "",
      skills: "",
      appliedDate: new Date().toISOString().split("T")[0],
      status: "Applied",
    }
  );

  const handleSubmit = () => {
    if (!formData.title || !formData.company || !formData.location) {
      alert("Please fill in all required fields");
      return;
    }

    const jobData = {
      ...formData,
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    onSubmit(jobData);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">
            {editingJob ? "Edit Job Application" : "Add Job Application"}
          </h3>
          <button onClick={onClose} className="modal-close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Job Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="form-input"
              placeholder="e.g. Senior Frontend Developer"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company *</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="form-input"
              placeholder="e.g. Tech Corp"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Location *</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="form-input"
              placeholder="e.g. Makati, Philippines"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Salary Range</label>
            <input
              type="text"
              value={formData.salary}
              onChange={(e) => handleChange("salary", e.target.value)}
              className="form-input"
              placeholder="e.g. P120,000 - P150,000"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Work Setup *</label>
            <select
              value={formData.workSetup}
              onChange={(e) => handleChange("workSetup", e.target.value)}
              className="form-input"
            >
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="form-textarea"
              rows="3"
              placeholder="Brief job description"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Skills (comma-separated)</label>
            <input
              type="text"
              value={formData.skills}
              onChange={(e) => handleChange("skills", e.target.value)}
              className="form-input"
              placeholder="e.g. React, TypeScript, Node.js"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Applied Date *</label>
              <input
                type="date"
                value={formData.appliedDate}
                onChange={(e) => handleChange("appliedDate", e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Status *</label>
              <select
                value={formData.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="form-input"
              >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button onClick={handleSubmit} className="btn-primary">
              {editingJob ? "Update" : "Add"} Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== Job Application Card ==========

function JobApplicationCard({ job, onEdit, onDelete }) {
  const getStatusClass = (status) => {
    const classes = {
      Applied: "status-applied",
      Interview: "status-interview",
      Offer: "status-offer",
      Rejected: "status-rejected",
    };
    return classes[status] || "status-applied";
  };

  return (
    <div className="job-card suggested-job-card">
      <div className="job-header">
        <div className="job-info">
          <div className="company-logo">
            <span className="company-initial">{job.company.charAt(0)}</span>
          </div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
          <span className={`status-badge ${getStatusClass(job.status)}`}>
            {job.status}
          </span>
        </div>

        <div className="job-actions">
          <button
            onClick={() => onEdit(job)}
            className="action-btn edit-btn"
            aria-label="Edit job"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(job.id)}
            className="action-btn delete-btn"
            aria-label="Delete job"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="job-details">
        <p>
          <span className="label">📍</span>
          <span>{job.location}</span>
        </p>
        {job.salary && (
          <p>
            <span className="label">💰</span>
            <span>{job.salary}</span>
          </p>
        )}
        <p>
          <span className="label">🏠</span>
          <span>{job.workSetup}</span>
        </p>
        <p>
          <span className="label">📅</span>
          <span>Applied: {new Date(job.appliedDate).toLocaleDateString()}</span>
        </p>
      </div>

      {job.description && <p className="job-description">{job.description}</p>}

      {job.skills && job.skills.length > 0 && (
        <div className="skill-tags">
          {job.skills.map((skill, idx) => (
            <span key={idx} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ========== Main Job Tracker Component ==========

export function ProfileJobsTracker() {
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const paginatedJobs = applications.slice(startIndex, endIndex);
  const totalPages = Math.ceil(applications.length / JOBS_PER_PAGE);

  // CRUD Operations
  const handleAddJob = () => {
    setEditingJob(null);
    setIsModalOpen(true);
  };

  const handleEditJob = (job) => {
    setEditingJob({
      ...job,
      skills: job.skills.join(", "),
    });
    setIsModalOpen(true);
  };

  const handleDeleteJob = (jobId) => {
    if (
      window.confirm("Are you sure you want to delete this job application?")
    ) {
      setApplications((prev) => prev.filter((job) => job.id !== jobId));
    }
  };

  const handleSubmitJob = (jobData) => {
    if (editingJob) {
      // Update existing job
      setApplications((prev) =>
        prev.map((job) =>
          job.id === editingJob.id ? { ...jobData, id: job.id } : job
        )
      );
    } else {
      // Add new job
      const newJob = {
        ...jobData,
        id: Date.now(),
      };
      setApplications((prev) => [newJob, ...prev]);
    }
    setIsModalOpen(false);
    setEditingJob(null);
  };

  return (
    <div className="job-results-container">
      <div className="job-results-wrapper">
        <div className="job-column-wrapper">
          <div className="job-column">
            <div className="column-header">
              <h2 className="column-title">My Job Applications</h2>
              <button onClick={handleAddJob} className="add-job-btn">
                <Plus size={18} />
                <span>Add Job</span>
              </button>
            </div>

            <div className="jobs-list">
              {paginatedJobs.length > 0 ? (
                paginatedJobs.map((job) => (
                  <JobApplicationCard
                    key={job.id}
                    job={job}
                    onEdit={handleEditJob}
                    onDelete={handleDeleteJob}
                  />
                ))
              ) : (
                <div className="job-empty-card">
                  <p className="job-empty-text">
                    No job applications yet. Click "Add Job" to track your
                    applications!
                  </p>
                  <button onClick={handleAddJob} className="empty-state-btn">
                    Add Your First Job
                  </button>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(0, prev - 1))
                  }
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

      {/* Add/Edit Job Modal */}
      <JobFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingJob(null);
        }}
        onSubmit={handleSubmitJob}
        editingJob={editingJob}
      />
    </div>
  );
}

export default ProfileJobsTracker;
