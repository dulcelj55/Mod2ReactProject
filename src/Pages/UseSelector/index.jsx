import {Link} from 'react-router-dom'
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const UseSelector = () => {

  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }

  return (
    <>
    <div>UseSelector</div>
    <Link to="/Hooks"><button>Back</button></Link>
    <button onClick={changeHandle}>Click Here for a Point!</button>
    </>
  )
}

export default UseSelector