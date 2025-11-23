import { useState } from "react";
import "../../styles/MyProfile/Profile-Documents.css";

export default function ProfileDocuments() {
  const [documents, setDocuments] = useState([
    { id: "1", name: "Curriculum Vitae (CV)", type: "PDF", size: "10mb" },
    { id: "2", name: "Cover Letter Template", type: "PDF", size: "10mb" },
    { id: "3", name: "Portfolio", type: "PDF", size: "10mb" },
    { id: "4", name: "Certificate of Employment", type: "PDF", size: "10mb" },
    {
      id: "5",
      name: "AWS AI Practitioner Certificate",
      type: "PDF",
      size: "10mb",
    },
    { id: "6", name: "National ID", type: "PDF", size: "10mb" },
    { id: "7", name: "Student ID", type: "PDF", size: "10mb" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.name.split(".").pop()?.toUpperCase();
      if (fileType === "PDF" || fileType === "JPG") {
        const newDoc = {
          id: String(documents.length + 1),
          name: file.name.replace(/\.[^/.]+$/, ""),
          type: fileType,
          size: `${(file.size / 1024 / 1024).toFixed(2)}mb`,
        };
        setDocuments([...documents, newDoc]);
      }
    }
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="profile-docs">
      {/* Header */}
      <div className="profile-docs-header">
        <h2>
          <span className="material-symbols-outlined">files</span> Files:{" "}
          {documents.length}
        </h2>
        <label className="upload-label">
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleFileUpload}
            className="hidden"
          />
          <span className="material-symbols-outlined">upload</span>
          <h2>Upload Document</h2>
        </label>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search document"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="profile-docs-search"
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="profile-docs-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.map((doc) => (
              <tr key={doc.id}>
                <td className="items-center gap-2">
                  <span>{doc.name}</span>
                </td>
                <td>{doc.type}</td>
                <td>{doc.size}</td>
                <td className="flex gap-2">
                  <button className="doc-btn download" title="Download">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="doc-btn delete"
                    title="Delete"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredDocs.length === 0 && (
        <div className="profile-docs-empty">
          <p>No documents found</p>
        </div>
      )}
    </div>
  );
}
