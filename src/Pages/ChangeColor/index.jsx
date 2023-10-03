import "./index.css";
import { useState } from "react";

const ChangeColor = () => {
  const[color, setColor]= useState("grey")
  let code = `
  import "./index.css";
import { useState } from "react";

const ChangeColor = () => {
  const[color, setColor]= useState("grey")
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
   <div>
    <button onClick={() => setColor("blue")}>Blue</button>
    <button onClick={() => setColor("red")}>Red</button>
    <button onClick={() => setColor("green")}>Green</button>
    <button className={color}>The current Color is {color}</button>
  </div>
  );
};

export default ChangeColor
  `;
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="scroll">
      <h1 className="title">Change Classes</h1>
      <h4>
        In many programs we want to change the color of items. This is an example of changing a className that determines the background color.
      </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>

          <div>

        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>

      <button className={color}>The current Color is {color}</button>
      </div>
          
        </div>

        <div className="code">
          <p className="title">Code:</p>
          <code>{code}</code>
        </div>
      </div>
    </div>
  );
};

export default ChangeColor





