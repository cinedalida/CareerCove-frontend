import { useRef, useState } from "react";
import "../../styles/MyProfile/Profile-Header.css";

export default function ProfileHeader() {
  const fileInputRef = useRef(null);

  // Editable state
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    role: "Frontend Developer",
    email: "john.doe@example.com",
    contact: "+1 234 567 890",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleProfileImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Profile image selected:", file.name);
      // Add image upload logic here
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="profile-header">
      {/* Left side: Avatar */}
      <div className="profile-avatar-container">
        <div
          className="profile-avatar"
          onClick={handleProfileImageUpload}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleProfileImageUpload()}
        />
        <button
          onClick={handleProfileImageUpload}
          className="profile-upload-btn"
          title="Upload profile picture"
        >
          <span className="material-symbols-outlined">upload</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Middle: User Info */}
      <div className="profile-user-info">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="profile-input"
            />
            <input
              type="text"
              name="role"
              value={userInfo.role}
              onChange={handleInputChange}
              className="profile-input"
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="profile-input"
            />
            <input
              type="text"
              name="contact"
              value={userInfo.contact}
              onChange={handleInputChange}
              className="profile-input"
            />
          </>
        ) : (
          <>
            <h1>{userInfo.name}</h1>
            <p>{userInfo.role}</p>
            <p className="profile-contact">
              {userInfo.email} | {userInfo.contact}
            </p>
          </>
        )}
      </div>

      {/* Right side: Edit button */}
      <div className="profile-edit-btn-container">
        <button
          className="profile-edit-btn"
          onClick={() => setIsEditing((prev) => !prev)}
          title={isEditing ? "Save" : "Edit Profile"}
        >
          <span className="material-symbols-outlined">
            {isEditing ? "check" : "edit"}
          </span>
        </button>
      </div>
    </div>
  );
}
