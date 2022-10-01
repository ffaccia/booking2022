import React from 'react';
import "./mailList.css";

function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money</h1>
        <span className="mailDesc">Sign up and we made the best deal for You</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
        <div className="radioTitle">
          <label class="container">
              <input type="checkbox" checked="" />
              <span class ="checkmark"></span>
              Send me a link to get the FREE Booking.com app
          </label>
        </div>
    </div>
  )
}

export default MailList
