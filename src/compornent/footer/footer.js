import React from "react";
import "./footer.css";
import Foot from "../img/about-logo.jpg";
import { TfiUser } from "react-icons/tfi";

function footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-lift">
          <img src={Foot} alt="" />
          <p>
            I am a frontend developer from, Nigeria with 5 years of experience
            in companies like microsoft, Thetravelhunter
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src="" alt="" />
            <TfiUser size={20} />

            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2023 Alex Bennett.All rights</p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>privacy policy</p>
          <p>connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
