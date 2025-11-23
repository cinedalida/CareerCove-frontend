import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Search,
  Plus,
  Edit2,
  Trash2,
  X,
} from "lucide-react";
import "../../styles/JobsPage/JobsPage.css";

// ========== INITIAL DATA ==========

const INITIAL_SUGGESTED_JOBS = [
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

// ========== Suggested Job Card with CRUD ==========

function SuggestedJobCard({ job, onEdit, onDelete }) {
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

// ========== Featured Job Card ==========

function FeaturedJobCard({ job, isSaved, onSaveToggle }) {
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

// ========== Suggested Jobs Column with CRUD ==========

function SuggestedJobsColumn({ jobs, onAdd, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const paginatedJobs = jobs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  return (
    <div className="job-column">
      <div className="column-header">
        <h2 className="column-title">My Applications</h2>
        <button onClick={onAdd} className="add-job-btn">
          <Plus size={18} />
          <span>Add Job</span>
        </button>
      </div>

      <div className="jobs-list">
        {paginatedJobs.length > 0 ? (
          paginatedJobs.map((job) => (
            <SuggestedJobCard
              key={job.id}
              job={job}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="job-empty-card">
            <p className="job-empty-text">
              No job applications yet. Click "Add Job" to track your
              applications!
            </p>
            <button onClick={onAdd} className="empty-state-btn">
              Add Your First Job
            </button>
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

// ========== Featured Jobs Column ==========

function FeaturedJobsColumn({ jobs }) {
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
        <h2 className="column-title">Featured Jobs</h2>
      </div>

      <div className="jobs-list">
        {paginatedJobs.map((job) => (
          <FeaturedJobCard
            key={job.id}
            job={job}
            isSaved={savedJobs.includes(job.id)}
            onSaveToggle={handleSaveToggle}
          />
        ))}
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

export function JobResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedJobs, setSuggestedJobs] = useState(INITIAL_SUGGESTED_JOBS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // Filter featured jobs
  const filteredFeaturedJobs = FEATURED_JOBS.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

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
      setSuggestedJobs((prev) => prev.filter((job) => job.id !== jobId));
    }
  };

  const handleSubmitJob = (jobData) => {
    if (editingJob) {
      // Update existing job
      setSuggestedJobs((prev) =>
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
      setSuggestedJobs((prev) => [newJob, ...prev]);
    }
    setIsModalOpen(false);
    setEditingJob(null);
  };

  return (
    <div className="job-results-container">
      <div className="job-results-wrapper">
        {/* Search Bar */}
        <div className="job-results-search">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search featured jobs by title, company, location, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="guest-input search-input"
            />
          </div>
        </div>

        {/* Job Columns */}
        <div className="job-results-grid">
          {/* My Applications Column */}
          <div className="job-column-wrapper suggested-column">
            <SuggestedJobsColumn
              jobs={suggestedJobs}
              onAdd={handleAddJob}
              onEdit={handleEditJob}
              onDelete={handleDeleteJob}
            />
          </div>

          {/* Divider */}
          <div className="column-divider"></div>

          {/* Featured Jobs Column */}
          <div className="job-column-wrapper featured-column">
            <FeaturedJobsColumn jobs={filteredFeaturedJobs} />
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

export default JobResults;
