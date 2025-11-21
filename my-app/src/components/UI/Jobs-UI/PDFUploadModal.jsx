import React, { useState, useRef } from "react";
import "../../../styles/JobsPage/PDFUploadModal.css";

export default function PDFUploadModal({ isOpen, onClose }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === "application/pdf") {
        setUploadedFile(file);
      } else {
        alert("Please drop a PDF file");
      }
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handlePreview = () => {
    if (uploadedFile) {
      alert(`File ready: ${uploadedFile.name}`);
      onClose();
      setUploadedFile(null);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="modal-wrapper">
        <div
          className={`modal-container ${isOpen ? "slide-up" : "slide-down"}`}
        >
          {/* Header */}
          <div className="modal-header">
            <button onClick={onClose} className="icon-btn">
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 className="modal-title">Attach PDF</h2>
            <button onClick={onClose} className="icon-btn">
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="modal-content">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleClick}
              className={`upload-area ${
                isDragging ? "dragging" : uploadedFile ? "uploaded" : ""
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                className="hidden"
              />

              {uploadedFile ? (
                <div className="upload-preview">
                  <svg
                    className="upload-icon success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="file-name">{uploadedFile.name}</p>
                  <p className="file-size">
                    {(uploadedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <svg
                    className="upload-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <div>
                    <p className="upload-text">Import PDF File</p>
                    <p className="upload-subtext">
                      Drop file or click here to choose file
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="download-template">
              <svg
                className="icon-small"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download example
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              onClick={handlePreview}
              disabled={!uploadedFile}
              className={`submit-btn ${uploadedFile ? "enabled" : "disabled"}`}
            >
              {uploadedFile ? "Upload PDF" : <h2>Select PDF file</h2>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
