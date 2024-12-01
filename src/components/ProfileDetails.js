import React from "react";
import "./ProfileDetails.css";

const ProfileDetails = ({ profile }) => {
    const initials = profile.name.slice(0, 2).toUpperCase();
  return (

    <div className="profile-card">
    {/* User Info Section */}
    <div className="user-info">
      <div className="avatar">{initials}</div>
      <div className="user-details">
        <h2 className="user-name">{profile.name}</h2>
        <p className="user-address">
        {profile.address}
        </p>
      </div>
    </div>

    {/* Details Section */}
    <div className="details-section">
      <div className="detail">
        <span>Customer ID</span>
        <span>{profile.id}</span>
      </div>
      <div className="detail">
        <span>Email Address</span>
        <span className="highlight">{profile.email}</span>
      </div>
      <div className="detail">
        <span>Phone Number</span>
        <span>{profile.phone}</span>
      </div>
      <button className="add-btn">+ Add</button>
    </div>

    <div className="details-section">
      <div className="detail">
        <span>Loyalty Tier</span>
        <span>{profile.loyaltyTier}</span>
      </div>
      <div className="detail">
        <span>Segment</span>
        <span className="highlight">{profile.segment}</span>
      </div>
      <button className="add-btn">+ Add</button>
    </div>

    <div className="details-section">
      <div className="detail">
        <span>Lifetime Value</span>
        <span>{profile.lifetimeValue}</span>
      </div>
      <div className="detail">
        <span>Propensity to Purchase</span>
        <span className="highlight">{profile.purchaseProbability}</span>
      </div>
      <button className="add-btn">+ Add</button>
    </div>

    <div className="details-section">
      <div className="detail">
        <span>Engagement Score</span>
        <span className="highlight">{profile.engagementScore}</span>
      </div>
      <button className="add-btn">+ Add</button>
    </div>

    {/* Action Buttons */}
    <button className="assign-agent-btn">
    <img src='/assets/widget.jpg' alt='widget' className="widget-1-3041" /> Assign other Agent
    </button>
    <button className="add-widget-btn">Add New Widget</button>
  </div>

    // <div className="profile-details">
    //   <h3>{profile.name}</h3>
    //   <p><strong>Customer ID:</strong> {profile.id}</p>
    //   <p><strong>Email:</strong> {profile.email}</p>
    //   <p><strong>Phone:</strong> {profile.phone}</p>
    //   <p><strong>Loyalty Tier:</strong> {profile.loyaltyTier}</p>
    //   <p><strong>Segment:</strong> {profile.segment}</p>
    //   <p><strong>Lifetime Value:</strong> {profile.lifetimeValue}</p>
    //   <p><strong>Purchase Probability:</strong> {profile.purchaseProbability}</p>
    //   <p><strong>Engagement Score:</strong> {profile.engagementScore}</p>
    //   <p><strong>Address:</strong> {profile.address}</p>
    // </div>


  );
};

export default ProfileDetails;


// import React from "react";
// import "./ProfileCard.css";

// const ProfileCard = () => {
//   return (
//     <div className="profile-card">
//       {/* User Info Section */}
//       <div className="user-info">
//         <div className="avatar">CB</div>
//         <div className="user-details">
//           <h2 className="user-name">{profile.name}</h2>
//           <p className="user-address">
//           {profile.address}
//           </p>
//         </div>
//       </div>

//       {/* Details Section */}
//       <div className="details-section">
//         <div className="detail">
//           <span>Customer ID</span>
//           <span>{profile.id}</span>
//         </div>
//         <div className="detail">
//           <span>Email Address</span>
//           <span className="highlight">{profile.email}</span>
//         </div>
//         <div className="detail">
//           <span>Phone Number</span>
//           <span>{profile.phone}</span>
//         </div>
//         <button className="add-btn">+ Add</button>
//       </div>

//       <div className="details-section">
//         <div className="detail">
//           <span>Loyalty Tier</span>
//           <span>{profile.loyaltyTier}</span>
//         </div>
//         <div className="detail">
//           <span>Segment</span>
//           <span className="highlight">{profile.segment}</span>
//         </div>
//         <button className="add-btn">+ Add</button>
//       </div>

//       <div className="details-section">
//         <div className="detail">
//           <span>Lifetime Value</span>
//           <span>{profile.lifetimeValue}</span>
//         </div>
//         <div className="detail">
//           <span>Propensity to Purchase</span>
//           <span className="highlight">{profile.purchaseProbability}</span>
//         </div>
//         <button className="add-btn">+ Add</button>
//       </div>

//       <div className="details-section">
//         <div className="detail">
//           <span>Engagement Score</span>
//           <span className="highlight">{profile.engagementScore}</span>
//         </div>
//         <button className="add-btn">+ Add</button>
//       </div>

//       {/* Action Buttons */}
//       <button className="assign-agent-btn">
//         👤 Assign other Agent
//       </button>
//       <button className="add-widget-btn">Add New Widget</button>
//     </div>
//   );
// };

// export default ProfileCard;
