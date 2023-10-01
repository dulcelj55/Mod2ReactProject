import { useState } from "react";
import "./index.css";

const Basics = () => {
  // Declare your useState here:
  const [color, setColor] = useState("blue");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>Hello World! In the JSX portion of a component function, you can type just like you would type in HTML.</div>
      <div>
        <p> This is an example of changing a className that determines the background color.</p>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
      </div>
     

      <button className={color}>The current Color is {color}</button>

    
  <p></p>    
Example of Input tied to State:
<p></p>
      <input
        value={name}
        placeholder="Name"
        onChange={(e) => handleChange(e)}
      ></input>

      
    </div>
  );
};

export default Basics;
