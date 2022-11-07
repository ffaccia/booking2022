import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./mailList.css";

function MailList() {
  const ref = useRef(null);
  const [name, setName] = useState('')

  //const handleClick = () => {
  //  console.log(ref.current.checked);
  //};

  useEffect(() => {
    console.log("startttttY")
    console.log(name);
    console.log(ref.current);
    console.log("finishhhhh")
    ref.current = name
  }, [name])

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
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <h2>{ref.current}</h2>
    </div>
  )
}

export default MailList
