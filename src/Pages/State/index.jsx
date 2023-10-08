import {Link} from 'react-router-dom'
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const State = () => {
  const [point, setPoint] = useState(true)
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
    setScore(score +1)
    setPoint(false)
   
  }
  }

  let code = `const [count, setCount]= useState(1)
  const [name, setName]= useState("Bob")
  const [isOn, setIsON]= useState(true)
  const [car, setCar]= useState({car= make:ford, model:F150, color:red)
  const [needs, setNeeds]= useState(["air", "water", "food", "shelter"])`  
  
  return (
   
    <div>
      <h1 className="title">State</h1>
      In programing and application developement, "state" refers to the current condition or data of an application at any given moment. State can be any data type: number, string, boolean, object or array. State can include things like user data, configuration settings, UI condition, whether a button is disabled, and more. Managing state is essential because it determines how an application behaves and presents itself to the user. In the following examples you would say 'The count state is 1', 'The name state is Bob', and the 'IsOn set is true' etc.
      <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />

     

         In normal javascript we have varibles and can change them; in react we have state and only the DOM can change state. When state is <Link to="/rendering">rerendered </Link>the program runs again. When using state we want to "push state up" meaning if possbile we should try to have our state in the App.jsx file. This will make it easier when using <Link to="/props">props</Link> or using <Link to="/contextp">context</Link>.  Any input variables will start as empty strings and need to be tied to state. This sometimes will need two variables, the (current) state, and the (new) state. When state is reassigned in a component it will cause a rerender, therefore you can't have mulitple assignemnts of a state in one component. Make sure to check out <Link to="/usestate">useState
        </Link> under Hooks to find out how state is used. 

         <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  )
}

export default State