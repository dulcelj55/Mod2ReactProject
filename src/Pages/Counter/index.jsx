
import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const Counter = () => {
  const {score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }
  const [count, setCount] = useState(0);
      const addOne = () => {
          setCount (count +1)
      }
      const minusOne = () => {
          setCount (count -1)
      }
  let code = `
 

  const Counter = () => {
      const [count, setCount] = useState(0);
      const addOne = () => {
          setCount (count +1)
      }
      const minusOne = () => {
          setCount (count -1)
      }
    return (
      <div>
          <h3>Current Count: {count}</h3>
         
          <button onClick={addOne}>Add +</button>
          <button onClick={ minusOne} >Subtract -</button>
  
      </div>
    )
  }
  
  export default Counter`;

  return (
    <div className="scroll">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">Counter</h1>
      <h4>This is an example of a simple counter.</h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <div>
          <h3>Current Count: {count}</h3>
          
          <button onClick={addOne}>Add +</button>
          <button onClick={ minusOne} >Subtract -</button>
  
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

export default Counter;
