import React from 'react';
import { useRef } from 'react';
import "./mailList.css";

function MailList() {
  const ref = useRef(null);

  //const handleClick = () => {
  //  console.log(ref.current.checked);
  //};

  const handleChange = e => {
    // 👇️ this is the checkbox itself
    console.log(e.target);

    // 👇️ this is the checked value of the field
    console.log(e.target.checked);
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we made the best deal for You</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
      <div className="radioTitle">
        <label class="container">
          <input type="checkbox" /*onClick={handleClick}*/ onChange={handleChange} defaultChecked={false} />
          <span class="checkmark"></span>
          Send me a link to get the FREE Booking.com app
        </label>
      </div>
    </div>
  )
}

export default MailList
