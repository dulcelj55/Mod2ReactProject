import { useState } from "react";
import "./index.css";

const Basics = () => {
 

  return (
    <div>
    inline style: <div style={{display:flex, backgroundColor: "blue"}}>This Example</div>
     

      <button className={color}>The current Color is {color}</button>

    
  <p></p>    
Example of Input tied to State:
<p></p>
      <input
        value={name}
        placeholder="Name"
        onChange={(e) => handleChange(e)}
      ></input>
{/* //         package.json is what holds our dependencies "tools we use"
//         we need to install these...  node package manager
//         package-lock.json has the right versions of the tools we are using
// src folder is where everything is/ home
// app css is for the app folder
// index css is for the whole project
// app jsx is where we write our code
// main jsx puts it into the root <div>
//     npm run dev allows you to see your project
//     you can delete all stuff in app jsx and index css
//     no modules folder on git hub
//     npm run build creates dist folder so browsers can read  */}
      
    </div>
  );
};

export default Basics;
