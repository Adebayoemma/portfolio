import React, { useState } from "react";
import "./topbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function topbar() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#home" className="logo">
          <h1>
            EMMNA <span>BAYO</span>
          </h1>
        </a>
      </div>

      <div className="navbar">
        

        <a href="./">Home</a>

        <a href="/">About</a>

        <a href="/">services</a>

        <a href="/">Works</a>

        <a href="/">Contact</a>
      </div>
      {/* <button>Home</button> */}
    </div>
  );
}

export default topbar;
