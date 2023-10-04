

import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const TrafficLight = () => {
    const [color, setColor]= useState("grey")
  let code = `

  `

  return (
    <div className="scroll">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">Traffic Light</h1>
      <h4>
        In this example there is a event listener, a inline function, a class name change and ternary statement.
      </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <div className = 'traffic'>
  <div onClick={()=> setColor("red")}
  className={`circle  ${color=== "red" ? "red": ""}`}></div>
  <div onClick={()=> setColor("yellow")}className={`circle  ${color=== "yellow" ? "yellow": ""}`}></div>
  <div onClick={()=> setColor("green")}className={`circle  ${color=== "green" ? "green": ""}`}></div>
       
       </div>
          <h1>Traffic Light</h1>
        </div>

        <div className="code">
          <p className="title">Code:</p>
          <code>{code}</code>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight