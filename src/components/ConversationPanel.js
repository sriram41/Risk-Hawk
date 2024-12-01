import React from "react";
import "./ConversationPanel.css";

const ConversationPanel = ({ profile }) => {
    
  return (
    <div className="chat-interface">
      <div className="chat-tabs">
        <button className="active-tab">Conversation</button>
        <button>Attachment</button>
      </div>
      <div className="messages">
        {profile.conversations.map((message, index) => {
          
           const initials = message.sender.slice(0, 2).toUpperCase(); 
           return (
          <div
            key={index}
            className={`message ${
              message.sender === "You" ? "sent" : "received"
            }`}
          >
            {/* <div className="message-content">
              <strong>{message.sender}:</strong> {message.content}
            </div>
            <div className="message-info">
              <span>{message.time}</span> | <span>{message.platform}</span>
            </div> */}


      {/* Chat Messages */}
      <div className="chat-messages">
        {/* Message 1 */}
        <div className="message">
       <div className="msg-1-1" >  <div className="message-avatar cb">{initials}</div> <h4>{message.sender}</h4> </div>
          <div className="message-content">
            <div className="message-header">
              <span className="message-author"></span>
              <span className="message-meta">
              {message.time} · Received By WhatsApp
              </span>
            </div>
            <div className="message-text">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus
              ac aliquam. Placerat maecenas quis ut elementum praesent
              imperdiet. Egestas mattis pellentesque nibh dui sed malesuada
              dolor eget ipsum.
            </div>
          </div>
        </div>

        {/* Message 2 */}
       
      </div>


          </div>
)})}
      </div>

      <div className="chat-input">
        <div className="chat-channels">
          <label>
            <input type="checkbox" /> SMS
          </label>
          <label>
            <input type="checkbox" /> WhatsApp
          </label>
          <label>
            <input type="checkbox" /> Email
          </label>
        </div>
        <div className="chat-input-box">
          <input type="text" placeholder="Type a message..." />
          <button className="send-button">Send ➔</button>
        </div>
      </div>
      {/* <div className="message-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div> */}
    </div>
  );
};

export default ConversationPanel;



// {
//     id: 1,
//     name: "Cheyenne Bergson",
//     email: "cheyenne@sample.com",
//     phone: "9876543210",
//     loyaltyTier: "Platinum",
//     segment: "High Spender",
//     lifetimeValue: "$1.5M",
//     purchaseProbability: "90%",
//     engagementScore: "95%",
//     address: "456 Elm Street, LA",
//     conversations: [
//       {
//         id: 1,
//         sender: "Cheyenne Bergson",
//         content: "I'm interested in a premium subscription.",
//         time: "10:15 AM",
//         platform: "SMS",
//       }




// import React from "react";
// import "./ChatInterface.css";

// const ChatInterface = () => {
//   return (
//     <div className="chat-interface">
//       {/* Tabs */}
//       <div className="chat-tabs">
//         <button className="active-tab">Conversation</button>
//         <button>Attachment</button>
//       </div>

//       {/* Chat Messages */}
//       <div className="chat-messages">
//         {/* Message 1 */}
//         <div className="message">
//           <div className="message-avatar cb">CB</div>
//           <div className="message-content">
//             <div className="message-header">
//               <span className="message-author">{message.name}</span>
//               <span className="message-meta">
//               {message.time} · Received By WhatsApp
//               </span>
//             </div>
//             <div className="message-text">
//             {message.sender}
//             </div>
//           </div>
//         </div>

//         {/* Message 2 */}
//         <div className="message sent">
//           <div className="message-avatar hk">HK</div>
//           <div className="message-content">
//             <div className="message-header">
//               <span className="message-author">You</span>
//               <span className="message-meta">
//                 27 Jul, 2024 9:08 PM · Sent By WhatsApp
//               </span>
//             </div>
//             <div className="message-text">
//             {message.content}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Message Input */}
//       <div className="chat-input">
//         <div className="chat-channels">
//           <label>
//             <input type="checkbox" /> SMS
//           </label>
//           <label>
//             <input type="checkbox" /> WhatsApp
//           </label>
//           <label>
//             <input type="checkbox" /> Email
//           </label>
//         </div>
//         <div className="chat-input-box">
//           <input type="text" placeholder="Type a message..." />
//           <button className="send-button">Send ➔</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatInterface;
