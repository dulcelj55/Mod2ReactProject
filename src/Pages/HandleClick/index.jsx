import "./index.css";

import {Link} from "react-router-dom"
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const HandleClick = () => {
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }
  const [buttonColor, setBackgroundColor] = useState("red");
  let code = `import "./index.css";
  import { useState } from "react";
  
  const HandleClick = () => {
  const [buttonColor, setBackgroundColor] = useState("red");
   
  const color = () => {
      const setBGC = Math.floor(Math.random() * 16777215).toString(16);
      return "#" + setBGC;
    };
  
    return (
            <div>
              <button
                onClick={() => setBackgroundColor(color)}
                style={{ backgroundColor: buttonColor }}
              >
                {" "}
                Change Color By Clicking{" "}
              </button>
            </div>
          </div>
  
      
    );
  };
  
  export default HandleClick;`;

  const color = () => {
    const setBGC = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + setBGC;
  };

  return (
    <div className="scroll">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">Event Listeners</h1>
      <h4 className="info">
        In React the DOM changes state. That's why we have to "state" our
        variables and how to change or "set" them. Revist state//add link to
        state// here if this is confusing. We can change state by updating/
        rerendering variables using event listeners. Event listens are functions
        that you can code ABOVE the return statement in JavaScript or code INSIDE the return
        statement using JSX. When referencing code from above the return statement  you
        must use curly brackets. If you notice there is function above the return statement and the click event is in 
      </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <div>
            <button
              onClick={() => setBackgroundColor(color)}
              style={{ backgroundColor: buttonColor }}
            >
              {" "}
              Change Color By Clicking{" "}
            </button>
          </div>
        </div>

        <div className="code">
          <p className="title">Code:</p>
          <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        </div>
      </div>
      <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  );
};

export default HandleClick;
