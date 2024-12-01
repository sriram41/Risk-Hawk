// src/components/Chat.js
import React from 'react';

const Chat = () => {
  return (
    <section className="chat">
      <h2>Chat / Feed Chat</h2>
      <div className="conversation">
        <div className="message">
          <strong>Rachel Adams:</strong> Lorem ipsum dolor sit amet...
        </div>
        <div className="message">
          <strong>You:</strong> Lorem ipsum dolor sit amet...
        </div>
      </div>
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </section>
  );
};

export default Chat;
