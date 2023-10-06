
import { CopyBlock, dracula } from "react-code-blocks";
import "./index.css";
import { Link } from "react-router-dom";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const TrafficLight = () => {
  const [point, setPoint] = useState(true)
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
    setScore(score +1)
    setPoint(false)
   
  }
  }

    const [color, setColor]= useState("grey")
    // we have to "escape" the ` inside the ``
    // we do this using  \
  let code = `
  <div onClick={()=> setColor("red")}
  className={\`circle  \${color=== "red" ? "red": ""}\`}></div>
  <div onClick={()=> setColor("yellow")}className={\`circle  \${color=== "yellow" ? "yellow": ""}\`}></div>
  `

      
  return (
    <div className="scroll">
      <div className="clicks">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <button onClick={changeHandle}>Click Here for a Point!</button>
      </div>
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
      
    </div>
  );
};

export default TrafficLight