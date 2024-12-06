import React from "react";
import "./contect.css";
import logocnt from "../img/about-logo.jpg";
import { MdAddCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

function contect() {
  return (
    <div id="contect" className="contect">
      <div className="contect-title">
        <h1>Get in touch</h1>
        <img src={logocnt} alt="" />
      </div>
      <div className="contect-section">
        <div className="contact-lift">
          <h1>Let's talk</h1>
          <p>
            I'm curretly avaliable to take on new project, so feel free to send
            me a message about anything that you want me to work on.You can
            contact anytime.
          </p>
          <div className="contect-details">
            <div className="contact-detail">
              <MdAddCall size={40} />
              <p>08100958523</p>
            </div>
            <div className="contact-detail">
              <CiLocationOn size={40} />
              <p>Nigeria</p>
            </div>
            <div className="contact-detail">
              <MdOutlineMail size={40} />
              <p>decobricks7@gmail.com</p>
            </div>
          </div>
        </div>
        <form className="contect-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your email</label>
          <input type="text" placeholder="Enter your emil" name="emil" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="Submit" className="contact-submit">
            submit now
          </button>
        </form>
      </div>
    </div>
  );
}
export default contect;
