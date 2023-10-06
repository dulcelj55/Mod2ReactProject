import "./index.css";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";
import {Link} from "react-router-dom"
import { CopyBlock, dracula } from "react-code-blocks";

const CodeExamples = () => {
  const [point, setPoint] = useState(true)
 
  const {score, setScore}= useContext(primaryContext)
  const [currentCodeIndex, setCurrentCodeIndex]= useState(0)
  let code0= `a`
  let code1= `b`
  let code2= `c`
  let code3= `d`
  let code4= `e`
  let code5= `
  const Square = () => {
    return (
      <div>
      <h4 className="square">Open</h4>
      </div>
    )
  }
  
  export default Square`
  const [code, setCode]= useState([code0, code1, code2, code3, code4, code5 ])

  const changeHandle =(e)=>{
    if (point){
      setScore(score +1)
      setPoint(false)
     }}
    
 
  
  const nextCodeItem =(e)=>{
     e.preventDefault
     setCurrentCodeIndex(currentCodeIndex +1)
      if (currentCodeIndex==code.length-1){
          setCurrentCodeIndex(0)
      }
    }
    const previousCodeItem =(e)=>{
      e.preventDefault
      setCurrentCodeIndex(currentCodeIndex -1)
       if (currentCodeIndex==code.length-1){
           setCurrentCodeIndex(0)
       }
     }
 

  return(
    <div>
    <div className="scroll">
       <h1>TIC TAC TOE</h1>
        <h4>This is a simple TIC TAC TOE game. Look at the different codes it took to make this in React.</h4>
  </div>
    <div className="container">
      <div className="lesson">
      <p className="title">Output:</p>
        {/* where  output code goes */}
        <h1>TIC TAC TOE</h1>
      </div>

    <div className="code">
    <>
      
    
      
      
      </>
      <p className="title">Code:</p>
      <button onClick={nextCodeItem}>Next</button>
      <button onClick={previousCodeItem}>Previous</button>
      <CopyBlock
      language={"jsx"}
      text= {code[currentCodeIndex]}
      showLineNumbers={true}
      theme={dracula}
      wrapLines={true}
      codeBlock/>
    </div>
  </div>
  
   
  <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  );
};

export default CodeExamples
