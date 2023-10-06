import { useState } from "react";
import "./index.css";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext} from "react";


const Rendering = () => {
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }
 

  return (
    <div>
   <h1 className="title">Rendering</h1>
   <p>Rendering is a fundamental concept in React that updates the UI in response to the changes in data or user interactions. React has a Virtual DOM copy of the actual DOM. When a React componenet's state or props change, React compares the two Doms and renders the new changes; this process is called reconiliation. Re-rendering is the response to changes in componenets by either their own state or their parent componenet, like a continous cycle of updating the DOM. 
    <br/>

      IMAGE OF CYCLE

      <br/>
    Another concept to understand about rendering is the Life Cycle of a component.  The four parts to the life cycle include: Initialization, Mounting, Updation, and Unmounting. Initialzation is when the component first renders based on the created State and JSX. Mounting  is the action of putting it in the DOM. Updation is where it rerenders/ reconiliation. Last is the Unmount which is leaving the DOM. 



   </p>

       

   <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  );
};

export default Rendering