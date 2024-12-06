import React from "react";
import "./services.css";
import Logo from "../img/about-logo.jpg";
import Services_data from "../../assets/servicecs";
// import { IoArrowForward } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

function services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>my services</h1>
        <img src={Logo} alt="" />
      </div>
      <div className="services-container">
        {Services_data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h1>{service.s_no}</h1>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>read more</p>
                {/* <IoArrowForward /> */}
                <GoArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default services;
