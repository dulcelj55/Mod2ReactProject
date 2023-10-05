import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

const State = () => {
  let code = `const [count, setCount]= useState(1)
  const [name, setName]= useState("Bob")
  const [isOn, setIsON]= useState(true)
  const [car, setCar]= useState({car= make:ford, model:F150, color:red)
  const [needs, setNeeds]= useState(["air", "water", "food", "shelter"])`  
  
  return (
   
    <div>
      <h1 className="title">State</h1>
      In programing and application developement, "state" refers to the current condition or data of an application at any given moment. State can be any data type: number, string, boolean, object or array. State can include things like user data, configuration settings, UI condition, whether a button is disabled, and more. Managing state is essential because it determines how an application behaves and presents itself to the user. In the following examples you would say 'The count state is 1', 'The name state is Bob', and the 'IsOn set is true'.
      <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />

     

         In normal javascript we have varibles and can change them; in react we have state and only the DOM can change state. When state is rerender the program runs again. When using state we want to "push state up" meaning if possbile we should try to have our state in the App.jsx file.  Any input variables will start as empty strings and need to be tied to state. This sometimes will need two variables, the (current) state, and the (new) state. When state is reassigned in a component it refelcts on the render, therefore you can't have mulitple assignemnts of a state in one component. Go to useState under Hooks to find out how state is used. 


    </div>
  )
}

export default State