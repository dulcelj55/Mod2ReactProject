import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext} from "react";

const ChangeColor = () => {
  const [point, setPoint] = useState(true)
  const [color, setColor] = useState("grey");
  const [boxClass, setBoxClass] = useState("original-class");
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
  let code2 = `import React, { useState } from 'react'

  const ChangingClasses = () => {
      const [boxClass, setBoxClass] = useState('');
    return (
      <div>
          <div className={boxClass} Watch the text Grow>
          <button onClick={()=> setBoxClass('fontsize')}>Update Class</button>
          {console.log("updated")}
          </div>
      </div>
    )
  }
  
  export default ChangingClasses`;
  const {score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if(point){
      setScore(score +1)
      setPoint(false)
    }
   
   
  }

  return (
    <div className="bgcolor">
    <div className="scroll">
      <div className="topButtons">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <button onClick={changeHandle}>Click Here for a Point!</button>
      </div>
      <h1 className="title">Change Classes</h1>
      <h4>
        In many programs we want to change the className of elements for many
        reasons: to style them or change boolean value. This first example shows
        a className change that determines the background color of the button
        when clicked. The second example shows the font size changing.
      </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <p>Click a color button.</p>

          <div>
            <button id="border" onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("green")}>Green</button>
            <br/>
            <br/>
            <button className={color}>The current Color is {color}</button>
          </div>
          <div>
            <div className={boxClass}>
              Watch the text grow when you click below.
              <button onClick={() => setBoxClass("fontsize")}>
                Update Class
              </button>
            </div>
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
          <br />
          <CopyBlock
            language={"jsx"}
            text={code2}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default ChangeColor;
