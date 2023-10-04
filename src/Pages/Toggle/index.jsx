import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Toggle = () => {
  let code = `
  
  import { useState } from "react";
  
  const Toggle = () => {
 const[isMessageVisible, setMessageVisible]= useState(false)
  const toggleMessage = () => {
    setMessageVisible(!isMessageVisible)
  }
    return (
     <div>
      <button onClick={toggleMessage}>Toggle Message</button>
              {isMessageVisible && (<p>This is a hidden message that can be toggled.</p>)}
    </div>
    );
  };
  
  export default Toggle
  `
const[isMessageVisible, setMessageVisible]= useState(false)
const toggleMessage = () => {
  setMessageVisible(!isMessageVisible)
}
  return (
    <div className="scroll">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">Toggle Message</h1>
      <h4>
        This is an example of toggling a message to appear and disappear. Most common way is to use a ternary operator.  
      </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <div>
<p>Press the button to revel a message:</p>
            <button onClick={toggleMessage}>Toggle Message</button>
            {isMessageVisible && (<p>YOU'RE LEARNING REACT! <br/>This is a hidden message that can be toggled.</p>)}
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

export default Toggle