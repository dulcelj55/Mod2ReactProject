import "./index.css";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const CodeExamples = () => {
  let code = `
      code goes inside here`;
      const {score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }

  return (
    <>
    <p>
   tic tac Toe 
   movie API
   </p>
    <button onClick={changeHandle}>Click Here for a Point!</button>
  
    </>
      );
};

export default CodeExamples;
//   const [inputValue, setInputValue] = useState('')
//   const [newInputValue, setNewInputValue] = useState('')

// const handleSubmit = (e) =>{
//   e.preventDefault() 

// }


//   return (
//     <>
//     <div>CodeExamples page</div>

//     <form onSumbit={handleSubmit}>
//       <input  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//       <button>Sumbit</button>






//     </form>

// todo list, movie display,  link to react router assignment

//     </>
//   )
