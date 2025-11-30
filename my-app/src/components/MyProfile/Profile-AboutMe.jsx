// React
import { useState, useRef } from "react";

// Styles
import "../../styles/MyProfile/Profile-AboutMe.css";

export default function ProfileAboutMe() {
  const fileInputRef = useRef(null);
  const [editMode, setEditMode] = useState(null); // "education" | "experience" | "hardSkills" | "softSkills" | null

  const [education, setEducation] = useState(
    `BS Computer Science, De La Salle University - Dasmariñas (2019 - 2023). Graduated with Honors.`
  );

  const [experiences, setExperiences] = useState([
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp Inc.",
      location: "New York, NY",
      experience: "2023 - Present",
    },
    {
      title: "Junior Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "San Francisco, CA",
      experience: "2021 - 2023",
    },
  ]);

  const [editingExpIndex, setEditingExpIndex] = useState(null);
  const [tempExp, setTempExp] = useState({
    title: "",
    company: "",
    location: "",
    experience: "",
  });

  const [hardSkills, setHardSkills] = useState([
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "SQL",
    "Firebase",
    "Tailwind",
  ]);
  const [softSkills, setSoftSkills] = useState([
    "Leadership",
    "Communication",
    "Problem Solving",
    "Adaptability",
  ]);

  const [newHardSkill, setNewHardSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");

  const handleResumeUpload = () => {
    fileInputRef.current?.click();
  };

  // --- Handlers (Simplified for brevity) ---
  const handleSaveExperience = (index) => {
    const updated = [...experiences];
    updated[index] = tempExp;
    setExperiences(updated);
    setEditingExpIndex(null);
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      { title: "", company: "", location: "", experience: "" },
    ]);
    setEditingExpIndex(experiences.length);
    setTempExp({ title: "", company: "", location: "", experience: "" });
  };

  const handleDeleteExperience = (index) =>
    setExperiences(experiences.filter((_, i) => i !== index));

  const handleAddSkill = (type) => {
    if (type === "hard" && newHardSkill.trim()) {
      setHardSkills([...hardSkills, newHardSkill]);
      setNewHardSkill("");
    }
    if (type === "soft" && newSoftSkill.trim()) {
      setSoftSkills([...softSkills, newSoftSkill]);
      setNewSoftSkill("");
    }
  };

  const handleDeleteSkill = (type, index) => {
    if (type === "hard")
      setHardSkills(hardSkills.filter((_, i) => i !== index));
    if (type === "soft")
      setSoftSkills(softSkills.filter((_, i) => i !== index));
  };

  return (
    <div className="aboutme-container">
      {/* Resume Section */}
      <div className="resume-upload-card">
        <div className="resume-info">
          <h3>Resume</h3>
          <p>Keep your resume updated to get better job recommendations.</p>
        </div>
        <div className="resume-actions">
          <button onClick={handleResumeUpload} className="upload-resume-btn">
            <span className="material-symbols-outlined">upload_file</span>
            Upload Resume
          </button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf"
          />
        </div>
      </div>

      {/* Education */}
      <section className="profile-section">
        <div className="section-header">
          <h2>Education</h2>
          <button
            className={`icon-btn ${editMode === "education" ? "active" : ""}`}
            onClick={() =>
              setEditMode(editMode === "education" ? null : "education")
            }
          >
            <span className="material-symbols-outlined">
              {editMode === "education" ? "check" : "edit"}
            </span>
          </button>
        </div>
        {editMode === "education" ? (
          <textarea
            className="edit-textarea"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            rows={4}
          />
        ) : (
          <p className="section-text">{education}</p>
        )}
      </section>

      {/* Experience */}
      <section className="profile-section">
        <div className="section-header">
          <h2>Experience</h2>
          <button
            className={`icon-btn ${editMode === "experience" ? "active" : ""}`}
            onClick={() =>
              setEditMode(editMode === "experience" ? null : "experience")
            }
          >
            <span className="material-symbols-outlined">
              {editMode === "experience" ? "check" : "edit"}
            </span>
          </button>
        </div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              {editMode === "experience" && editingExpIndex === idx ? (
                <div className="experience-edit-form">
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={tempExp.title}
                    onChange={(e) =>
                      setTempExp({ ...tempExp, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={tempExp.company}
                    onChange={(e) =>
                      setTempExp({ ...tempExp, company: e.target.value })
                    }
                  />
                  <div className="form-row">
                    <input
                      type="text"
                      placeholder="Location"
                      value={tempExp.location}
                      onChange={(e) =>
                        setTempExp({ ...tempExp, location: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Duration"
                      value={tempExp.experience}
                      onChange={(e) =>
                        setTempExp({ ...tempExp, experience: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-actions">
                    <button
                      className="save-btn"
                      onClick={() => handleSaveExperience(idx)}
                    >
                      Save
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => setEditingExpIndex(null)}
                    >
                      Cancel
                    </button>
                    <button
                      className="delete-text-btn"
                      onClick={() => handleDeleteExperience(idx)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="experience-view">
                  <div className="exp-main">
                    <h3>{exp.title}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                  <div className="exp-meta">
                    <span>{exp.location}</span>
                    <span className="dot">•</span>
                    <span>{exp.experience}</span>
                  </div>
                  {editMode === "experience" && (
                    <button
                      className="edit-item-btn"
                      onClick={() => {
                        setEditingExpIndex(idx);
                        setTempExp(exp);
                      }}
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
          {editMode === "experience" && (
            <button className="add-item-btn" onClick={handleAddExperience}>
              <span className="material-symbols-outlined">add</span> Add
              Experience
            </button>
          )}
        </div>
      </section>

      {/* Hard Skills */}
      <section className="profile-section">
        <div className="section-header">
          <h2>Hard Skills</h2>
          <button
            className={`icon-btn ${editMode === "hardSkills" ? "active" : ""}`}
            onClick={() =>
              setEditMode(editMode === "hardSkills" ? null : "hardSkills")
            }
          >
            <span className="material-symbols-outlined">
              {editMode === "hardSkills" ? "check" : "edit"}
            </span>
          </button>
        </div>
        <div className="skills-container">
          {hardSkills.map((skill, idx) => (
            <span key={idx} className="skill-chip hard">
              {skill}
              {editMode === "hardSkills" && (
                <button
                  onClick={() => handleDeleteSkill("hard", idx)}
                  className="remove-skill"
                >
                  ×
                </button>
              )}
            </span>
          ))}
          {editMode === "hardSkills" && (
            <div className="add-skill-wrapper">
              <input
                type="text"
                placeholder="Add skill..."
                value={newHardSkill}
                onChange={(e) => setNewHardSkill(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddSkill("hard")}
              />
              <button onClick={() => handleAddSkill("hard")}>+</button>
            </div>
          )}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="profile-section">
        <div className="section-header">
          <h2>Soft Skills</h2>
          <button
            className={`icon-btn ${editMode === "softSkills" ? "active" : ""}`}
            onClick={() =>
              setEditMode(editMode === "softSkills" ? null : "softSkills")
            }
          >
            <span className="material-symbols-outlined">
              {editMode === "softSkills" ? "check" : "edit"}
            </span>
          </button>
        </div>
        <div className="skills-container">
          {softSkills.map((skill, idx) => (
            <span key={idx} className="skill-chip soft">
              {skill}
              {editMode === "softSkills" && (
                <button
                  onClick={() => handleDeleteSkill("soft", idx)}
                  className="remove-skill"
                >
                  ×
                </button>
              )}
            </span>
          ))}
          {editMode === "softSkills" && (
            <div className="add-skill-wrapper">
              <input
                type="text"
                placeholder="Add skill..."
                value={newSoftSkill}
                onChange={(e) => setNewSoftSkill(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddSkill("soft")}
              />
              <button onClick={() => handleAddSkill("soft")}>+</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
