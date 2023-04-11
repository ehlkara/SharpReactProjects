import React from "react";
import BannerImage from "../assets/banner.png";
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label>Name surname</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter name surname..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter email..."
          />
          <label>Your Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Please enter message..."
          ></textarea>
        </form>
      </div>
    </div>
  );
}
