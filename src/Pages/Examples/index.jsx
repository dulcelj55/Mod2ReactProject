import React from 'react'
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const Examples = () => {
  const {score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }
  return (
    <>
    <div>Examples page</div>
    <p>tic tac toe</p>
    <p>api movie</p> 
    <button onClick={changeHandle}>Click Here for a Point!</button>
    </>
  )
}

export default Examples