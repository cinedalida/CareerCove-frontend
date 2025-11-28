import "../../styles/MyProfile/Profile-AboutMe.css";

import { useState, useRef } from "react";

export default function ProfileAboutMe() {
  const fileInputRef = useRef(null);
  const [editMode, setEditMode] = useState(null); // "education" | "experience" | "hardSkills" | "softSkills" | null

  const [education, setEducation] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua ex ea commodo consequat.`
  );

  const [experiences, setExperiences] = useState([
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp Inc.",
      location: "New York",
      experience: "3 years",
    },
    {
      title: "Junior Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "San Francisco",
      experience: "2 years",
    },
    {
      title: "Intern Developer",
      company: "StartUp Hub",
      location: "Boston",
      experience: "6 months",
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
    "Python",
    "JavaScript",
    "Firebase",
    "SQL",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ]);

  const [softSkills, setSoftSkills] = useState([
    "Communication",
    "Leadership",
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
  ]);

  const [editingHardSkillIndex, setEditingHardSkillIndex] = useState(null);
  const [tempHardSkill, setTempHardSkill] = useState("");
  const [newHardSkill, setNewHardSkill] = useState("");

  const [editingSoftSkillIndex, setEditingSoftSkillIndex] = useState(null);
  const [tempSoftSkill, setTempSoftSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");

  const handleResumeUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type.startsWith("image/"))
    ) {
      console.log("[v0] Resume uploaded:", file.name);
    }
  };

  const handleEducationSave = (newEducation) => {
    setEducation(newEducation);
    setEditMode(null);
  };

  const handleSaveExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = tempExp;
    setExperiences(updatedExperiences);
    setEditingExpIndex(null);
  };

  const handleEditExperience = (index) => {
    setEditingExpIndex(index);
    setTempExp(experiences[index]);
  };

  const handleDeleteExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  // Hard Skills handlers
  const handleSaveHardSkill = (index) => {
    const updatedSkills = [...hardSkills];
    updatedSkills[index] = tempHardSkill;
    setHardSkills(updatedSkills);
    setEditingHardSkillIndex(null);
  };

  const handleAddHardSkill = () => {
    if (newHardSkill.trim()) {
      setHardSkills([...hardSkills, newHardSkill]);
      setNewHardSkill("");
    }
  };

  const handleDeleteHardSkill = (index) => {
    setHardSkills(hardSkills.filter((_, i) => i !== index));
  };

  // Soft Skills handlers
  const handleSaveSoftSkill = (index) => {
    const updatedSkills = [...softSkills];
    updatedSkills[index] = tempSoftSkill;
    setSoftSkills(updatedSkills);
    setEditingSoftSkillIndex(null);
  };

  const handleAddSoftSkill = () => {
    if (newSoftSkill.trim()) {
      setSoftSkills([...softSkills, newSoftSkill]);
      setNewSoftSkill("");
    }
  };

  const handleDeleteSoftSkill = (index) => {
    setSoftSkills(softSkills.filter((_, i) => i !== index));
  };

  return (
    <div className="aboutme-container">
      {/* Resume Upload */}
      <div className="profile-aboutme-header">
        <button
          onClick={handleResumeUpload}
          className="aboutme-upload-resume-btn"
          style={{ fontFamily: "Poppins", color: "var(--color-neutral-100)" }}
        >
          <span className="material-symbols-outlined">upload</span>
          <h2 className="m-0 p-0">Upload Resume</h2>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* ---------------------- About Me Education Section ---------------------- */}
      <section className="aboutme-section">
        <div className="aboutme-header">
          <h2 className="aboutme-title">Education</h2>
          <button
            onClick={() =>
              setEditMode(editMode === "education" ? null : "education")
            }
            className={`aboutme-edit-btn ${
              editMode === "education" ? "edit-active" : ""
            }`}
          >
            <span>
              {editMode === "education" ? (
                "✓"
              ) : (
                <span className="material-symbols-outlined">border_color</span>
              )}
            </span>
            {editMode === "education" ? "Done" : "Edit"}
          </button>
        </div>

        {editMode === "education" ? (
          <textarea
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            onBlur={() => handleEducationSave(education)}
            className="aboutme-textarea"
            rows={4}
          />
        ) : (
          <p className="aboutme-text">{education}</p>
        )}
      </section>

      {/* ---------------------- About Me Experience Section ---------------------- */}
      <section className="aboutme-section">
        <div className="aboutme-header">
          <h2 className="aboutme-title">Experience</h2>
          <button
            onClick={() =>
              setEditMode(editMode === "experience" ? null : "experience")
            }
            className={`aboutme-edit-btn ${
              editMode === "experience" ? "edit-active" : ""
            }`}
          >
            <span>
              {editMode === "experience" ? (
                "✓"
              ) : (
                <span className="material-symbols-outlined">border_color</span>
              )}
            </span>
            {editMode === "experience" ? "Done" : "Edit"}
          </button>
        </div>
        <div className="aboutme-experience-list">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`aboutme-experience-item ${
                editingExpIndex === idx ? "aboutme-experience-editing" : ""
              }`}
            >
              {editMode === "experience" && editingExpIndex === idx ? (
                <div className="aboutme-experience-edit-fields">
                  <input
                    type="text"
                    value={tempExp.title}
                    onChange={(e) =>
                      setTempExp({ ...tempExp, title: e.target.value })
                    }
                    placeholder="Job Title / Position"
                    className="aboutme-experience-input"
                  />
                  <input
                    type="text"
                    value={tempExp.company}
                    onChange={(e) =>
                      setTempExp({ ...tempExp, company: e.target.value })
                    }
                    placeholder="Company Name"
                    className="aboutme-experience-input"
                  />
                  <input
                    type="text"
                    value={tempExp.location}
                    onChange={(e) =>
                      setTempExp({ ...tempExp, location: e.target.value })
                    }
                    placeholder="Location (e.g., New York)"
                    className="aboutme-experience-input"
                  />
                  <input
                    type="text"
                    value={tempExp.experience}
                    onChange={(e) =>
                      setTempExp({ ...tempExp, experience: e.target.value })
                    }
                    placeholder="Duration (e.g., 2 years)"
                    className="aboutme-experience-input"
                  />
                  <div className="aboutme-experience-actions">
                    <button
                      onClick={() => handleSaveExperience(idx)}
                      className="aboutme-btn-save"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingExpIndex(null)}
                      className="aboutme-btn-cancel"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDeleteExperience(idx)}
                      className="aboutme-btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="aboutme-experience-display">
                  <div className="aboutme-experience-info">
                    <h3 className="aboutme-experience-title">{exp.title}</h3>
                    <p className="aboutme-experience-company">
                      <span className="material-symbols-outlined">
                        business
                      </span>
                      {exp.company}
                    </p>
                    <p className="aboutme-experience-location">
                      <span className="material-symbols-outlined">
                        pin_drop
                      </span>
                      {exp.location}
                    </p>
                    <p className="aboutme-experience-duration">
                      <span className="material-symbols-outlined">
                        schedule
                      </span>{" "}
                      {exp.experience}
                    </p>
                  </div>
                  {editMode === "experience" && (
                    <button
                      onClick={() => handleEditExperience(idx)}
                      className="aboutme-btn-edit"
                    >
                      Edit
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}

          {editMode === "experience" && (
            <button
              onClick={() => {
                setExperiences([
                  ...experiences,
                  { title: "", company: "", location: "", experience: "" },
                ]);
                setEditingExpIndex(experiences.length);
                setTempExp({
                  title: "",
                  company: "",
                  location: "",
                  experience: "",
                });
              }}
              className="aboutme-btn-add"
            >
              + Add Experience
            </button>
          )}
        </div>
      </section>

      {/* ---------------------- About Me Hard Skills Section ---------------------- */}
      <section className="aboutMeHardSkills-section">
        <div className="aboutMeHardSkills-header">
          <h2 className="aboutMeHardSkills-title">Hard Skills</h2>
          <button
            onClick={() =>
              setEditMode(editMode === "hardSkills" ? null : "hardSkills")
            }
            className={`aboutMeHardSkills-edit-btn ${
              editMode === "hardSkills" ? "edit-active" : ""
            }`}
          >
            <span>
              {editMode === "hardSkills" ? (
                "✓"
              ) : (
                <span className="material-symbols-outlined">border_color</span>
              )}
            </span>
            {editMode === "hardSkills" ? "Done" : "Edit"}
          </button>
        </div>

        <div className="aboutMeHardSkills-list">
          {hardSkills.map((skill, idx) => (
            <div key={idx} className="aboutMeHardSkills-item">
              {editMode === "hardSkills" && editingHardSkillIndex === idx ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tempHardSkill}
                    onChange={(e) => setTempHardSkill(e.target.value)}
                    className="aboutMeHardSkills-edit-input"
                  />
                  <button
                    onClick={() => handleSaveHardSkill(idx)}
                    className="aboutMeHardSkills-btn-save"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingHardSkillIndex(null)}
                    className="aboutMeHardSkills-btn-cancel"
                  >
                    X
                  </button>
                </div>
              ) : (
                <button
                  className="aboutMeHardSkills-btn"
                  onClick={() => {
                    if (editMode === "hardSkills") {
                      setEditingHardSkillIndex(idx);
                      setTempHardSkill(skill);
                    }
                  }}
                >
                  {skill}
                  {editMode === "hardSkills" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteHardSkill(idx);
                      }}
                      className="aboutMeHardSkills-btn-delete"
                    >
                      ✕
                    </button>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {editMode === "hardSkills" && (
          <div className="hardSkills-input-add-section">
            <input
              type="text"
              value={newHardSkill}
              onChange={(e) => setNewHardSkill(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddHardSkill()}
              placeholder="Add new skill..."
              className="aboutMeHardSkills-edit-input flex-1"
            />
            <button
              onClick={handleAddHardSkill}
              className="aboutMeHardSkills-btn-add"
            >
              Add
            </button>
          </div>
        )}
      </section>

      {/* ---------------------- About Me Soft Skills Section ---------------------- */}
      <section className="aboutMeSoftSkills-section">
        <div className="aboutMeSoftSkills-header">
          <h2 className="aboutMeSoftSkills-title">Soft Skills</h2>
          <button
            onClick={() =>
              setEditMode(editMode === "softSkills" ? null : "softSkills")
            }
            className={`aboutMeSoftSkills-edit-btn ${
              editMode === "softSkills" ? "edit-active" : ""
            }`}
          >
            <span>
              {editMode === "softSkills" ? (
                "✓"
              ) : (
                <span className="material-symbols-outlined">border_color</span>
              )}
            </span>
            {editMode === "softSkills" ? "Done" : "Edit"}
          </button>
        </div>

        <div className="aboutMeSoftSkills-list">
          {softSkills.map((skill, idx) => (
            <div key={idx} className="aboutMeSoftSkills-item">
              {editMode === "softSkills" && editingSoftSkillIndex === idx ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tempSoftSkill}
                    onChange={(e) => setTempSoftSkill(e.target.value)}
                    className="aboutMeSoftSkills-edit-input"
                  />
                  <button
                    onClick={() => handleSaveSoftSkill(idx)}
                    className="aboutMeSoftSkills-btn-save"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingSoftSkillIndex(null)}
                    className="aboutMeSoftSkills-btn-cancel"
                  >
                    X
                  </button>
                </div>
              ) : (
                <button
                  className="aboutMeSoftSkills-btn"
                  onClick={() => {
                    if (editMode === "softSkills") {
                      setEditingSoftSkillIndex(idx);
                      setTempSoftSkill(skill);
                    }
                  }}
                >
                  {skill}
                  {editMode === "softSkills" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteSoftSkill(idx);
                      }}
                      className="aboutMeSoftSkills-btn-delete"
                    >
                      ✕
                    </button>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {editMode === "softSkills" && (
          <div className="softSkills-input-add-section">
            <input
              type="text"
              value={newSoftSkill}
              onChange={(e) => setNewSoftSkill(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddSoftSkill()}
              placeholder="Add new skill..."
              className="aboutMeSoftSkills-edit-input flex-1"
            />
            <button
              onClick={handleAddSoftSkill}
              className="aboutMeSoftSkills-btn-add"
            >
              Add
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
