import React, { useState } from 'react';
import './Profile.css'
import ProfileList from "./ProfileList";
import ProfileDetails from "./ProfileDetails";
import ConversationPanel from "./ConversationPanel";
import Catura from './Catura';


const profilesData = [
    {
      id: 1,
      name: "Cheyenne Bergson",
      email: "cheyenne@sample.com",
      phone: "9876543210",
      loyaltyTier: "Platinum",
      segment: "High Spender",
      lifetimeValue: "$1.5M",
      purchaseProbability: "90%",
      engagementScore: "95%",
      address: "456 Elm Street, LA",
      conversations: [
        {
          id: 1,
          sender: "Cheyenne Bergson",
          content: "I'm interested in a premium subscription.",
          time: "10:15 AM",
          platform: "SMS",
        },
        {
          id: 2,
          sender: "You",
          content: "I can assist you with that. Let's proceed.",
          time: "10:18 AM",
          platform: "SMS",
        },
      ],
    },
    {
      id: 2,
      name: "Jonathan Higgins",
      email: "jonathan@sample.com",
      phone: "123456789",
      loyaltyTier: "Gold",
      segment: "Active Customer",
      lifetimeValue: "$500K",
      purchaseProbability: "85%",
      engagementScore: "90%",
      address: "123 Pine Street, NY",
      conversations: [
        {
          id: 1,
          sender: "Jonathan Higgins",
          content: "Hey, can you help me with my order?",
          time: "6:45 PM",
          platform: "Email",
        },
        {
          id: 2,
          sender: "You",
          content: "Sure, I'd be happy to help.",
          time: "6:50 PM",
          platform: "Email",
        },
      ],
    },
    {
      id: 3,
      name: "Capt. Trunk",
      email: "trunk@sample.com",
      phone: "1122334455",
      loyaltyTier: "Bronze",
      segment: "Occasional Customer",
      lifetimeValue: "$300K",
      purchaseProbability: "55%",
      engagementScore: "60%",
      address: "789 Ocean Ave, Miami",
      conversations: [
        {
          id: 1,
          sender: "Capt. Trunk",
          content: "Do you have any discounts available?",
          time: "4:30 PM",
          platform: "Email",
        },
        {
          id: 2,
          sender: "You",
          content: "We have a 10% discount this week.",
          time: "4:35 PM",
          platform: "Email",
        },
      ],
    },
    {
      id: 4,
      name: "Hannibal Smith",
      email: "hannibal@sample.com",
      phone: "8051298905",
      loyaltyTier: "Silver",
      segment: "Sleepy Customer",
      lifetimeValue: "$1M",
      purchaseProbability: "75%",
      engagementScore: "80%",
      address: "1 Market Street San Francisco, CA 94105",
      conversations: [
        {
          id: 1,
          sender: "Rachel Adams",
          content: "Lorem ipsum dolor sit amet consectetur. Eti tincidunt.",
          time: "8:08 PM",
          platform: "WhatsApp",
        },
        {
          id: 2,
          sender: "You",
          content: "Lorem ipsum dolor sit amet consectetur. Eti tincidunt.",
          time: "8:09 PM",
          platform: "WhatsApp",
        },
      ],
    },
    {
      id: 5,
      name: "Capt. Trunk",
      email: "capt.trunk@sample.com",
      phone: "9988776655",
      loyaltyTier: "Bronze",
      segment: "Occasional Customer",
      lifetimeValue: "$350K",
      purchaseProbability: "60%",
      engagementScore: "70%",
      address: "1011 Harbor Rd, San Diego",
      conversations: [
        {
          id: 1,
          sender: "Capt. Trunk",
          content: "Can you check my previous order?",
          time: "9:00 AM",
          platform: "SMS",
        },
        {
          id: 2,
          sender: "You",
          content: "Sure, I will assist you with that.",
          time: "9:05 AM",
          platform: "SMS",
        },
      ],
    },
    {
      id: 6,
      name: "Hannibal Smith",
      email: "hannibal.smith@sample.com",
      phone: "1122339988",
      loyaltyTier: "Gold",
      segment: "Premium Customer",
      lifetimeValue: "$2M",
      purchaseProbability: "80%",
      engagementScore: "85%",
      address: "789 Sunset Blvd, LA",
      conversations: [
        {
          id: 1,
          sender: "Hannibal Smith",
          content: "I have a question about the new feature.",
          time: "11:15 AM",
          platform: "WhatsApp",
        },
        {
          id: 2,
          sender: "You",
          content: "I'd be happy to help. Please tell me your query.",
          time: "11:20 AM",
          platform: "WhatsApp",
        },
      ],
    },
  ];
  






const Profileuser = () => {
    const [activeProfile, setActiveProfile] = useState(profilesData[0]);

    const handleProfileClick = (profile) => {
      setActiveProfile(profile);
    };
  
    return (
      <div className="app-container">
        {/* Profile List */}
        <div className='profilelist-block-121'>
        <ProfileList
          profiles={profilesData}
          activeProfile={activeProfile}
          onProfileClick={handleProfileClick}
        />
        </div>
  
        {/* Main Content: Profile Details and Conversation */}
        <div className="main-content">

        <div className='profilelist-block -2-131'>
          <ProfileDetails profile={activeProfile} />
          </div>

          <div className='profilelist-block -3-141'>
          <ConversationPanel profile={activeProfile} /></div>
        

        <div className='catura-block-profile-4-1624'>
       <Catura />
        </div>
        </div>
        
      </div>
    );
};

export default Profileuser;
