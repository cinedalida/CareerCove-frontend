import { useState } from "react";
import "../../styles/MyProfile/Profile-Navigation.css";

export default function ProfileNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "about",
      label: <h2>About me</h2>,
      icon: <span className="material-symbols-outlined">face</span>,
    },
    {
      id: "documents",
      label: <h2>Documents</h2>,
      icon: <span className="material-symbols-outlined">article</span>,
    },
    {
      id: "activity",
      label: <h2>Recent Activity</h2>,
      icon: <span className="material-symbols-outlined">schedule</span>,
    },
    {
      id: "tracker",
      label: <h2>Application Tracker</h2>,
      icon: <span className="material-symbols-outlined">track_changes</span>,
    },
  ];

  return (
    <div className="profile-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`profile-tab  ${activeTab === tab.id ? "active" : ""}`}
        >
          <span className="icon">{tab.icon}</span>
          <span className="label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
