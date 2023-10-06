import {Link} from 'react-router-dom'
import { CopyBlock, dracula } from "react-code-blocks"
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";


const UseState = () => {
  let code1 =``
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }

  let code = `import {useState} from 'react`
  return (
    <div>
      <h1 className="title">useState</h1>
      <p>use State is a hook that allow you to add state to a function. useState must be imported from react like so:
      <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />


      </p>
   
  
 
  <p className="hooks"> usestate info </p>
       <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <div className="states">
<button onClick={changeHandle}>Click Here for a Point!</button>
<Link to="/Hooks"><button>Back</button></Link>
    </div>
    </div>

    
  )
}

export default UseState
 
 
//     <div>
//         const [isOn, setIsOn]= useState(false)
// /variable/ name of "function" /useState is the actual function/ inside is our starting value
// when we have an input field our useState should always be empty
//     whenever used it must be imported
    
    
//     </div>