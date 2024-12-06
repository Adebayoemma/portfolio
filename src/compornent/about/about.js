import React from "react";
import "./about.css";
import pic from "../img/adeface.jpg";
import Loge from "../img/about-logo.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={Loge} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-lift">
          <img src={pic} alt="" />
        </div>

        <div className="about-right">
          <div className="about-Ade">
            <p>
              I am a experienced frontend Developer with over many years of
              experienceds
            </p>
            <p> My passion for frontend Development is not only </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>yesrs of EXPERIENCE</p>{" "}
        </div>

        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>HAPPY CLINTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
