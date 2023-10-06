import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const URL_Params = () => { 
  const [point, setPoint] = useState(true)

  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
    setScore(score +1)
    setPoint(false)
   
  }
  }

  return (
    <div>URL_Params page
      <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>

    // queires help identify cecrtain locations on a website or application
    // look for ? 
    // quaries are ids 
    // in order to make a quarie you need to add it to the link tag 
    // example:
    // <Link to {`/one_card?cardId= ${object.cardID}`} key

    // const location = useLocation();
    // const queryParams= new URLSearchParams (location.search);
    // const paramValue= quryParams.get('cardId')
    // useEffect (()=>{
    //   let correctObject =data.find((obj.cardId === paramValue))
    // }
    // )
    
  )
}

export default URL_Params