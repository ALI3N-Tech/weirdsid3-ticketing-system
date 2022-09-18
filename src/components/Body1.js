import React from "react";
import event from "../images/partypic.png";
import "./Body1.css";
// import "../App.css";

function Body1() {
  return (
    <div className="hero-container">
      <div className="partyBackground">
        <img src={event} alt="" />
        <h1>
          <span>2 e - RESPONSIBLE</span>
          CONCERT
        </h1>
      </div>
      <div>
        <p>
          LIKE ALWAYS IF YOU’RE NOT ON THE WEIRDSIDE, THE PARTY IS NOT OVER BUT
          THIS TIME YOU’RE NOT READY, WE AREE!!!
        </p>
      </div>
    </div>
  );
}

export default Body1;
