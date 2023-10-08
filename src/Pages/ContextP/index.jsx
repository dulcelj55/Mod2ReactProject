import "./index.css";
import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const ContextP = () => {
  const [point, setPoint] = useState(true)
  const {score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
      setScore(score +1)
      setPoint(false)
     
    }
  }
    let code =`
    export const primaryContext = createContext();
    const PrimarayProvider = (props) =>{
        const[user, setUser] = useState({name: "Jared", email: "Jared@gmail.com})
    const [activities, setActivities] = useState(["basketball", "running", "poker"])
    
    return (
        <primaryContext.Provider value={
            {
                user,
                setUser,
                activities,
                setActivities

            }
        }
        {props.children}
    )
    </primaryContext.Provider>
    
    
    }
    
    
    
    
    
    `
  return (
    <div>
    
    <CopyBlock
    language={"jsx"}
    text={code}
    showLineNumbers={true}
    theme={dracula}
    wrapLines={true}
    codeBlock
  />
<button onClick={changeHandle}>Click Here for a Point!</button>
</div>
  )
}

export default ContextP