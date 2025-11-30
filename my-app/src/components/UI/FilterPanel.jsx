import { SlidersHorizontal, X } from "lucide-react";
import "../../styles/UIGeneral/FilterPanel.css";
import { useEffect } from "react";

function FilterPanel({ filters, setFilters, onClearFilters, isOpen, onClose }) {
  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="filter-modal-overlay" onClick={onClose}>
      <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
        <div className="filter-header">
          <h3 className="filter-title">
            <SlidersHorizontal size={20} />
            Advanced Filters
          </h3>
          <button onClick={onClose} className="filter-close-btn">
            <X size={20} />
          </button>
        </div>

        <div className="filter-body">
          {/* Work Setup Filter */}
          <div className="filter-group">
            <label className="filter-label">Work Setup</label>
            <select
              value={filters.workSetup}
              onChange={(e) => handleFilterChange("workSetup", e.target.value)}
              className="filter-select"
            >
              <option value="">All</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
              <option value="Work From Home">Work From Home</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Salary Range Filter */}
          <div className="filter-group">
            <label className="filter-label">Salary Range</label>
            <div className="salary-range-inputs">
              <input
                type="number"
                placeholder="Min"
                value={filters.salaryMin}
                onChange={(e) =>
                  handleFilterChange("salaryMin", e.target.value)
                }
                className="filter-input"
              />
              <span className="salary-separator">-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.salaryMax}
                onChange={(e) =>
                  handleFilterChange("salaryMax", e.target.value)
                }
                className="filter-input"
              />
            </div>
          </div>

          {/* Ranker Filter */}
          <div className="filter-group">
            <label className="filter-label">Search By</label>
            <select
              value={filters.ranker}
              onChange={(e) => handleFilterChange("ranker", e.target.value)}
              className="filter-select"
            >
              <option value="General">General</option>
              <option value="Hard Skill">Hard Skill</option>
              <option value="Title">Title</option>
            </select>
          </div>

          {/* Filter Actions */}
          <div className="filter-actions">
            <button
              onClick={() => {
                onClearFilters();
                onClose();
              }}
              className="btn-clear-filters"
            >
              Clear All
            </button>
            <button onClick={onClose} className="btn-apply-filters">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
