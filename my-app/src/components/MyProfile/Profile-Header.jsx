// React
import { useRef, useState } from "react";

// Styles
import "../../styles/MyProfile/Profile-Header.css";

export default function ProfileHeader() {
  const fileInputRef = useRef(null);

  // Editable state
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    role: "Frontend Developer",
    location: "New York, USA",
    email: "john.doe@example.com",
    contact: "+1 234 567 890",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempInfo, setTempInfo] = useState(userInfo);

  const handleProfileImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Profile image selected:", file.name);
      // Add logic to display preview or upload
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempInfo((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    setUserInfo(tempInfo);
    setIsEditing(false);
  };

  const cancelChanges = () => {
    setTempInfo(userInfo);
    setIsEditing(false);
  };

  return (
    <div className="profile-header-card">
      {/* Decorative Banner */}
      <div className="profile-banner"></div>

      <div className="profile-content">
        {/* Avatar Section */}
        <div className="profile-avatar-wrapper">
          <div className="profile-avatar" onClick={handleProfileImageUpload}>
            {/* Placeholder for image, or use <img src={...} /> */}
            <span className="avatar-placeholder">
              {userInfo.name.charAt(0)}
            </span>

            <div className="avatar-overlay">
              <span className="material-symbols-outlined">photo_camera</span>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* User Info Section */}
        <div className="profile-details">
          <div className="profile-main-info">
            {isEditing ? (
              <div className="profile-edit-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={tempInfo.name}
                    onChange={handleInputChange}
                    className="header-input large"
                  />
                </div>
                <div className="form-group">
                  <label>Headline / Role</label>
                  <input
                    type="text"
                    name="role"
                    value={tempInfo.role}
                    onChange={handleInputChange}
                    className="header-input"
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={tempInfo.location}
                    onChange={handleInputChange}
                    className="header-input"
                  />
                </div>
              </div>
            ) : (
              <>
                <h1 className="profile-name">{userInfo.name}</h1>
                <p className="profile-role">{userInfo.role}</p>
                <div className="profile-meta">
                  <span className="meta-item">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                    {userInfo.location}
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">mail</span>
                    {userInfo.email}
                  </span>
                  <span className="meta-item">
                    <span className="material-symbols-outlined">call</span>
                    {userInfo.contact}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="profile-actions">
            {isEditing ? (
              <div className="edit-actions">
                <button className="header-btn cancel" onClick={cancelChanges}>
                  Cancel
                </button>
                <button className="header-btn save" onClick={saveChanges}>
                  Save Changes
                </button>
              </div>
            ) : (
              <button
                className="header-btn edit"
                onClick={() => setIsEditing(true)}
              >
                <span className="material-symbols-outlined">edit</span>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
