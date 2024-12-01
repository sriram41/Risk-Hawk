import React from "react";
import "./Header.css";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span className="header-title">Chat / Feed chat</span>
      </div>
      <div className="header-right">
        <button className="role-button process-owner">Process Owner HOD</button>
        <button className="role-button admin">Admin</button>
        <div className="profile">
         
          <span className="profile-name">Palak Bansal</span>
          <img
            src="/assets/profilepic.png" // Replace with actual image URL
            alt="Profile"
            className="profile-image"
          />
          <img
            src="/assets/settings.jpg" // Replace with actual image URL
            alt="Profile"
            className="settings-image"
          />
          <div className="nav-block-pic-comp-83-142">
          <img
            src="/assets/logouticon.jpg" // Replace with actual image URL
            alt="Profile"
            className="logouticon-image"
          />
          <Navbar />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
