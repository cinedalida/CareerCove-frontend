import "../../styles/MyProfile/Profile-AboutMe.css";

import { useState, useRef } from "react";

export default function ProfileAboutMe() {
  const fileInputRef = useRef(null);
  const [editMode, setEditMode] = useState(null); // "education" | "experience" | "skills" | null

  const [education, setEducation] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua ex ea commodo consequat.`
  );

  const [experiences, setExperiences] = useState([
    {
      title: "Senior Frontend Developer",
      location: "Location: New York",
      experience: "3 years",
    },
    {
      title: "Junior Frontend Developer",
      location: "Location: San Francisco",
      experience: "2 years",
    },
    {
      title: "Intern Developer",
      location: "Location: Boston",
      experience: "6 months",
    },
  ]);

  const [editingExpIndex, setEditingExpIndex] = useState(null);
  const [tempExp, setTempExp] = useState({
    title: "",
    location: "",
    experience: "",
  });

  const [skills, setSkills] = useState([
    "Python",
    "JavaScript",
    "Firebase",
    "SQL",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ]);

  const [editingSkillIndex, setEditingSkillIndex] = useState(null);
  const [tempSkill, setTempSkill] = useState("");
  const [newSkill, setNewSkill] = useState("");

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

  const handleSaveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = tempSkill;
    setSkills(updatedSkills);
    setEditingSkillIndex(null);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      {/* Resume Upload */}
      <div className="flex justify-end">
        <button
          onClick={handleResumeUpload}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-80"
          style={{
            color: "rgb(255, 137, 34)",
            fontFamily: "Poppins",
          }}
        >
          <span>
            <h2>Upload Resume</h2>
          </span>
          <span class="material-symbols-outlined">upload</span>
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
            <span>{editMode === "education" ? "✓" : "✏️"}</span>
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
            <span>{editMode === "experience" ? "✓" : "✏️"}</span>
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
                    placeholder="Job Title"
                    className="aboutme-experience-input"
                  />
                  <input
                    type="text"
                    value={tempExp.location}
                    onChange={(e) =>
                      setTempExp({ ...tempExp, location: e.target.value })
                    }
                    placeholder="Location"
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
                    <p className="aboutme-experience-location">
                      <span class="material-symbols-outlined">pin_drop</span>
                      {exp.location}
                    </p>
                    <p className="aboutme-experience-duration">
                      <span class="material-symbols-outlined">schedule</span>{" "}
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
                  { title: "", location: "", experience: "" },
                ]);
                setEditingExpIndex(experiences.length);
                setTempExp({ title: "", location: "", experience: "" });
              }}
              className="aboutme-btn-add"
            >
              + Add Experience
            </button>
          )}
        </div>
      </section>

      {/* ---------------------- About Me Skills Section ---------------------- */}
      <section className="aboutMeSkills-section">
        <div className="aboutMeSkills-header">
          <h2 className="aboutMeSkills-title">Skills</h2>
          <button
            onClick={() => setEditMode(editMode === "skills" ? null : "skills")}
            className={`aboutMeSkills-edit-btn ${
              editMode === "skills" ? "edit-active" : ""
            }`}
          >
            <span>{editMode === "skills" ? "✓" : "✏️"}</span>
            {editMode === "skills" ? "Done" : "Edit"}
          </button>
        </div>

        <div className="aboutMeSkills-list">
          {skills.map((skill, idx) => (
            <div key={idx} className="aboutMeSkills-item">
              {editMode === "skills" && editingSkillIndex === idx ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tempSkill}
                    onChange={(e) => setTempSkill(e.target.value)}
                    className="aboutMeSkills-edit-input"
                  />
                  <button
                    onClick={() => handleSaveSkill(idx)}
                    className="aboutMeSkills-btn-save"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingSkillIndex(null)}
                    className="aboutMeSkills-btn-cancel"
                  >
                    X
                  </button>
                </div>
              ) : (
                <button
                  className="aboutMeSkills-btn"
                  onClick={() => {
                    if (editMode === "skills") {
                      setEditingSkillIndex(idx);
                      setTempSkill(skill);
                    }
                  }}
                >
                  {skill}
                  {editMode === "skills" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteSkill(idx);
                      }}
                      className="aboutMeSkills-btn-delete"
                    >
                      ✕
                    </button>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {editMode === "skills" && (
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
              placeholder="Add new skill..."
              className="aboutMeSkills-edit-input flex-1"
            />
            <button onClick={handleAddSkill} className="aboutMeSkills-btn-add">
              Add
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
