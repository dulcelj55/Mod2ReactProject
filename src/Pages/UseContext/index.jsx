// when to use: you want to use a theme across your project
// loging in a program/ user
// creating state at the global level
import { CopyBlock, dracula } from "react-code-blocks";
import {Link} from 'react-router-dom'
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const UseContext= () => {

  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }

  return (
    <>
    <div>UseContext page</div>
    <Link to="/Hooks"><button>Back</button></Link>
    <button onClick={changeHandle}>Click Here for a Point!</button>
    </>
  )
}

export default UseContext