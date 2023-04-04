import React from "react";
import "./index.css";
import ecell from "./e cell logo.png";

function Heading() {
  return (
    <div>
      <div className="logo">
        {" "}
        <img src={ecell} />
      </div>
      {/* <img className= "logo"  src={ecell}/> */}
      <div class="Heading">
        <h1>THE ENTREPRENEURSHIP CELL CHITKARA UNIVERSITY</h1>
        <h2>"Creating job creators"</h2>
      </div>

      <img
        className="Image"
        src="https://www.chitkara.edu.in/ciif/images/about-CIIF.jpg "
      />
    </div>
  );
}

export default Heading;
