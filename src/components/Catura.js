import React from 'react'
import './catura.css'

const Catura = () => {
    return (
        <div className="container">
          {/* Ask Catura Section */}
          <div className="ask-catura">
            <div className="header">
              <h2>Ask Catura</h2>
              <div className="platforms">
                <span>WhatsApp</span>
                <span>Greetings</span>
              </div>
            </div>
            <div className="greeting-template">
              <div className="template-content">
                <h3>Greeting Template</h3>
              </div>
              <div className="template-buttons">
                <button>Copy to Send</button>
                <button>Preview</button>
              </div>
            </div>
            <div className="message-box">
              <input type="text" placeholder="Type a message..." />
              <button className="send-button">&#10148;</button>
            </div>
          </div>
    
          {/* Action Launcher */}
          <div className="action-launcher">
            <h3>Action Launcher</h3>
            <input type="text" placeholder="Search actions..." />
            <div className="actions">
              <button>Add Action</button>
              <button>Fee Reversal</button>
              <button>Retail Onboarding</button>
              <button>Address Update</button>
            </div>
          </div>
    
          {/* Case Favorite */}
          <div className="case-favorite">
            <h3>Case Favorite</h3>
            <div className="favorite-item">Lorem ipsum dolor sit amet consectetur. Et tincidunt</div>
            <div className="favorite-item">
              <span role="img" aria-label="photo"><img className='photo-1054' src='./assets/photo.png' alt='photo1' /></span> Photo
            </div>
            <div className="favorite-item">Lorem ipsum dolor sit amet consectetur. Et tincidunt</div>
          </div>
        </div>
      );
}

export default Catura