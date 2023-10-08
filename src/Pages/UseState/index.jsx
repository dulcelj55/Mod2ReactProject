import {Link} from 'react-router-dom'
import { CopyBlock, dracula } from "react-code-blocks"
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";


const UseState = () => {
  const [point, setPoint] = useState(true)
  let code1 =`const [score, setScore] = useState(0)
  const [name, setName] = useState("BOB")
  const [isOn, setIsOn] = useState(true)
  const [names, setNames] = useState(["Charles", "William", "Henry"])
  const [car, setCar] = useState([{car= make:ford, model:F150})`
  let code3 =`const [name, setName] = useState('')
  const [newName, setNewName]= useState( '')`
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
    setScore(score +1)
    setPoint(false)
   
  }
  }

  let code = `import {useState} from 'react'`
  return (
    <div>
      <Link to="/Hooks"><button>Back to Hooks</button></Link>
      <h1 className="title">useState</h1>
      <p>useState is a hook that allows you to add state to a function. useState is written in camelCase. useState must be imported to the top of your component/page from react like so:
      <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />


      </p>
   
  
 
  <p className="hooks"> This is what useState looks like below. We start by making useState a constant variable.  We will never change it directly; setting/updating state in our function changes the state of the variable. Set in an array, there is always the variable and the way to change it. Inside the parathesis is the actual starting value of state. It can be a number, an string set in quotes, a boolean, an array, or an object set in curly braces.  </p>
       <CopyBlock
          language={"jsx"}
          text={code1}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <p> One thing to note is that when we have inputs, we will need two useState variables to accept and use the new value:</p>
        <CopyBlock
          language={"jsx"}
          text={code3}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <div className="statesn">
<button onClick={changeHandle}>Click Here for a Point!</button>

    </div>
    </div>

    
  )
}

export default UseState
 
 


// when we have an input field our useState should always be empty
//     whenever used it must be imported
    
    
//     </div>