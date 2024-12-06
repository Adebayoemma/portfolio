import React from "react";
import "./mywork.css";
import Logo from "../img/about-logo.jpg";
import mywork_data from "../../assets/mywork";
import { GoArrowRight } from "react-icons/go";

function mywork() {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={Logo} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <GoArrowRight />
      </div>
    </div>
  );
}
export default mywork;
