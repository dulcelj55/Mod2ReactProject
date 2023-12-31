import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext} from "react";

const Toggle = () => {
  const [point, setPoint] = useState(true)
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
    setScore(score +1)
    setPoint(false)
   
  }
  }
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
  let code1 = `import { useState } from "react"

  const ToggleComponent = () => {
      const [isOn, setIsOn] = useState(false);
  
      const toggleState = () =>{
          setIsOn(!isOn);
      };
    return (
      <div>
          <button onClick={toggleState} >Click Here</button>
          <p>State is {isOn ? 'ON' : 'OFF'}</p>
  
  
      </div>
    )
  }`
const[isMessageVisible, setMessageVisible]= useState(false)
const toggleMessage = () => {
  setMessageVisible(!isMessageVisible)
}
const [isOn, setIsOn] = useState(false);
  
const toggleState = () =>{
    setIsOn(!isOn);
};
  return (
    <div className="scroll">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">Toggle Message</h1>
      <h4>
        This is an example of toggling a message to appear and disappear. Most common way is to use a ternary operator.  
      </h4>

      <div className="container">
        <div className="lesson">
          <p >Output:</p>
          <div>
<p>Press the button to revel a message:</p>
            <button onClick={toggleMessage}>Toggle Message</button>
            {isMessageVisible && (<p>YOU'RE LEARNING REACT! <br/>This is a hidden message that can be toggled.</p>)}
          </div>
          <br/>
          <div>
            <p>Here's another simple example:</p>
          <button onClick={toggleState} >Click Here</button>
          <p>State is {isOn ? 'ON' : 'OFF'}</p>
  
  
      </div>
         
        </div>

        <div className="code">
          <p >Code:</p>
          <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br/>
        <CopyBlock
          language={"jsx"}
          text={code1}
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

export default Toggle