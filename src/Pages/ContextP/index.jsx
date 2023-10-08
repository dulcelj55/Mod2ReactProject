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
  let code0= `import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.jsx'
  import './index.css'
  import { BrowserRouter } from 'react-router-dom'
  import PrimarayProvider from './Context/primaryContext.jsx'
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <PrimarayProvider>  
      <App />
      </PrimarayProvider>
      </BrowserRouter>
    </React.StrictMode>,
  )`
    let code =`//Notice the export on top and that its set up like a component
    export const primaryContext = createContext();
    const PrimarayProvider = (props) =>{
      //This is where you will declare your state variables
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
        //Don't forget this line
        {props.children}
        
    )
    </primaryContext.Provider>
    
    
    }`
    let code2= `import "./index.css"
    import { useContext } from 'react'
    import { primaryContext } from '../../Context/primaryContext'
    
    const Footer = () => {
    
    const {score, user, isSubmitted } = useContext(primaryContext)`
  return (
    <div>
    <p>
      Context is a way to use props on a global level. It's a state managenment system that allows the sharing of data between components and through the project. There are many steps to set up Context but when working with a larger application it's worth the time. 
      <br/>
The set up:
<br/>
1. In main.jsx you will need to wrap App.jsx and have your imports like line 6 and 11-13:

    <CopyBlock
    language={"jsx"}
    text={code0}
    showLineNumbers={true}
    theme={dracula}
    wrapLines={true}
    codeBlock
  />


      2. Make a new folder on the same level of Components and Pages called Context.<br/>
      3. Create a folder inside called primaryContex.jsx <br/>
      4. Your folder will be set up like this:
    </p>
    <CopyBlock
    language={"jsx"}
    text={code}
    showLineNumbers={true}
    theme={dracula}
    wrapLines={true}
    codeBlock
  />
  5. Inside every component that you set up you will have to import useContext and state it. Then you can use your variables as if they were props.
  <CopyBlock
    language={"jsx"}
    text={code2}
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