
import { CopyBlock, dracula } from "react-code-blocks";
import {Link} from 'react-router-dom'
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const UseContext= () => {
  const [point, setPoint] = useState(true)
  let code= `const {data}= useContext(primaryContext)`

  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
if (point){

    setScore(score +1)
    setPoint(false)
} 
  }

  return (
    <div>
    <Link to="/Hooks"><button>Back to Hooks</button></Link>
    <br/>
    <h1 className="title">useContext </h1>
    <br/>
    <p>The useConext hook is part of a systems managenment that allows props to be used through out all the pages and componets of the project, on a global level. Examples of that could be user information, continous information needed through out like time, weather or items in a cart. useContext is set up similar to useState except the variavle are now in curly brackets that were passed down from the primaryContext folder. That's why the "primaryContext is the intital state." Check out CONTEXT for more on how it works and the set up.</p>
    <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />

    <br/>
    <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  )
}

export default UseContext