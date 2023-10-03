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
      
      <div>

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
