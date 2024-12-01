import React from "react";
import "./ProfileList.css";

const ProfileList = ({ profiles, activeProfile, onProfileClick }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => {
        const nameslice = profile.name.slice(0,2).toUpperCase();
        return (
        <div
          key={profile.id}
          className={`profile-tab ${
            activeProfile.id === profile.id ? "active" : ""
          }`}
          onClick={() => onProfileClick(profile)}
        >
          <div className="profile-icon">{nameslice}</div>
          <div className="profile-name">{profile.name}</div>
        </div>
)})}
      <button className="messaging-button">
      <div class="icon">
   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="20"
      height="20"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 10h.01M12 10h.01M16 10h.01M21 16.5A2.5 2.5 0 0018.5 14H4l-2 2V5a2.5 2.5 0 012.5-2.5h13A2.5 2.5 0 0121 5v11.5z"
      />
    </svg>
  </div>
        Messaging
        <span class="arrow">›</span>
        </button>
    </div>
  );
};

export default ProfileList;
