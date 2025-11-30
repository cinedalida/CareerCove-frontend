import { useState } from "react";
import "../../styles/MyProfile/Profile-Documents.css";

export default function ProfileDocuments() {
  const [documents, setDocuments] = useState([
    {
      id: "1",
      name: "Curriculum Vitae (CV)",
      type: "PDF",
      size: "2.4mb",
      date: "2 days ago",
    },
    {
      id: "2",
      name: "Cover Letter Template",
      type: "PDF",
      size: "1.1mb",
      date: "1 week ago",
    },
    {
      id: "3",
      name: "Portfolio Assets",
      type: "JPG",
      size: "5.2mb",
      date: "2 weeks ago",
    },
    {
      id: "4",
      name: "Certificate of Employment",
      type: "PDF",
      size: "800kb",
      date: "1 month ago",
    },
    {
      id: "5",
      name: "AWS AI Practitioner Cert",
      type: "PDF",
      size: "1.5mb",
      date: "1 month ago",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.name.split(".").pop()?.toUpperCase();
      const newDoc = {
        id: String(Date.now()),
        name: file.name.replace(/\.[^/.]+$/, ""),
        type: fileType || "FILE",
        size: `${(file.size / 1024 / 1024).toFixed(2)}mb`,
        date: "Just now",
      };
      setDocuments([newDoc, ...documents]);
    }
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFileIcon = (type) => {
    if (type === "PDF") return "picture_as_pdf";
    if (["JPG", "PNG", "JPEG"].includes(type)) return "image";
    return "description";
  };

  return (
    <div className="profile-docs">
      {/* Header & Upload */}
      <div className="profile-docs-header">
        <div>
          <h2 className="docs-title">My Documents</h2>
          <p className="docs-subtitle">
            Manage your resumes, certificates, and portfolios.
          </p>
        </div>

        <label className="docs-upload-btn">
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            className="hidden"
          />
          <span className="material-symbols-outlined">cloud_upload</span>
          <span>Upload New</span>
        </label>
      </div>

      {/* Search */}
      <div className="docs-search-wrapper">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          placeholder="Search your documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="docs-search-input"
        />
      </div>

      {/* Documents Grid */}
      <div className="docs-grid">
        {filteredDocs.map((doc) => (
          <div key={doc.id} className="doc-card">
            <div className={`doc-icon-wrapper ${doc.type.toLowerCase()}`}>
              <span className="material-symbols-outlined">
                {getFileIcon(doc.type)}
              </span>
            </div>

            <div className="doc-info">
              <h3 className="doc-name" title={doc.name}>
                {doc.name}
              </h3>
              <div className="doc-meta">
                <span>{doc.type}</span>
                <span className="dot">•</span>
                <span>{doc.size}</span>
                <span className="dot">•</span>
                <span>{doc.date}</span>
              </div>
            </div>

            <div className="doc-actions">
              <button className="doc-action-btn download" title="Download">
                <span className="material-symbols-outlined">download</span>
              </button>
              <button
                className="doc-action-btn delete"
                title="Delete"
                onClick={() => handleDelete(doc.id)}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredDocs.length === 0 && (
        <div className="docs-empty">
          <div className="empty-icon-circle">
            <span className="material-symbols-outlined">folder_off</span>
          </div>
          <p>No documents found</p>
        </div>
      )}
    </div>
  );
}
