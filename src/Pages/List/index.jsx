import "./index.css"
import {Link} from 'react-router-dom'
import { CopyBlock, dracula } from "react-code-blocks";
import React, { useState } from 'react'

const List = () => {
  const [item, setItem]= useState('');
  const [items, setItems]= useState(["Start of List"]);
  const [newInput, setNewInput]= useState([" "]);
      let code = `
      import React, { useState } from 'react'

      const ListComponent = () => {
          const [items, setItems]= useState([]);
        return (
          <div>
               <button onClick={()=> setItems([...items, "I'm a new item!"])}>Add Item</button>
              <ul>
                  {items.map((item, index)=> {
                      <li key={index}>{item}</li>
                  }
                  )}
              </ul>
              
              
              
               </div>
        )
      }
      
      export default ListComponent`;
     
      const motion =(e) => {
       e.preventDefault()
        setItems([...items])
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
                <input value={newInput} onClick={()=> setItem(e.target.value)}></input>
                
               <button onClick={motion}>Add Item</button>
              <ul>
                  {items.map((item, index)=> {
                      <li key={index}>{item}</li>
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
        </div>
      );
    };
    


export default List