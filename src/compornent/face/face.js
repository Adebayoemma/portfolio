import React from "react";
import "./face.css";
import Ade from "../img/adeface.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function face() {
  return (
    <div className="backg">
      <div id="pic">
        <div className="taxt">
          <div className="iteam">
            <h1>Hi, it's ADEBAYO</h1>
            <h2 className="tex-animation">
              I'm a <span>frontend Designer.</span>
            </h2>
            <h2>web Designer, UI / UX Designer.</h2>
            <h2>web Designer.</h2>
            <h2></h2>
          </div>

          <div className="social">
            <div className="g">
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div className="g">
              <a href="#">
                <FaGithub />
              </a>
            </div>
            <div className="g">
              <a href="#">
                <FaTwitterSquare />
              </a>
            </div>
            <div className="g">
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="btn-group">
            <a href="#" className="btn">
              Hire
            </a>
            <a href="#" className="btn">
              contact
            </a>
          </div>
        </div>
        <div className="ade">
          <img src={Ade} alt="" />
        </div>
      </div>
    </div>
  );
}

export default face;
