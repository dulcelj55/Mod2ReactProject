import "./index.css"
import {Link} from 'react-router-dom'
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const List = () => {
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }
  const [items, setItems]= useState([]);
  const [newInput, setNewInput]= useState([" "]);
      let code = `import "./index.css"
import React, { useState } from 'react'
const List = () => {
const [items, setItems]= useState([]);
const [newInput, setNewInput]= useState([" "]);
const motion =() => {
      setItems([...items, newInput])
      setNewInput('')
      }
    
      return (
  <div>
      <input value={newInput} onChange={(e)=> setNewInput(e.target.value)}></input>
      <button onClick={motion}>Add Item</button>
        <ul>
            {items.map((item, index)=> {
              return<li key={index}>{item}</li>
                  }
            )}
        </ul>
  </div>
                     
      );
    };
    


export default List
      `;
     
      const motion =() => {
       
        setItems([...items, newInput])
        setNewInput('')
      }
    
      return (
        <div className="scroll">
           <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
          <h1 className="title">List Items</h1>
          <h4>This is an example of how to make a list using .map</h4>
          <div className="container">
            <div className="lesson">
              <p className="title">Output:</p>
              <div>
                <input value={newInput} onChange={(e)=> setNewInput(e.target.value)}></input>
                
               <button onClick={motion}>Add Item</button>
              <ul> Start List:
                  {items.map((item, index)=> {
                    return<li key={index}>{item}</li>
                  }
                  )}
              </ul>
              
              
              
               </div>
            </div>
    
            <div className="code">
              <p className="title">Code:</p>
              <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
            </div>
          </div>
          <button onClick={changeHandle}>Click Here for a Point!</button>
        </div>
      );
    };
    


export default List