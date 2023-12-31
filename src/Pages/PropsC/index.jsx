import './index.css'
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const PropsC = () => {
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
          code goes inside here`;
    
      return (
        <div className="scroll">
          <h1 className="title">title</h1>
          <h4>Event Listeners </h4>
    
          <div className="container">
            <div className="lesson">
              <p className="title">Output:</p>
              {/* where code goes */}
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
    
  

export default PropsC