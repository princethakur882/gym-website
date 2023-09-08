import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_26ghf4k",
        "template_1ibgh3b",
        form.current,
        "vFBG2fAF6fbNLE7tr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <label>Name</label>
          <br />
          <input type="text" name="user_name" placeholder="Enter your Name" />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />
          <br />
          <label>Message</label>
          <br />
          <textarea maxlength="150" name="message" placeholder="Your Message" />
          <br />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
