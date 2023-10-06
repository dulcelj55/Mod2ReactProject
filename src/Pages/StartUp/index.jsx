import React from "react";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const StartUp = () => {
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    setScore(score +1)
    console.log ("works")
  }

  return (
    <>
      <div>
        <h1>How to Start a Project</h1>
        <h4>
          There are many ways to create an appilcaiton in React version 18 but the most
          common is using a library called Vite. Here are the steps:
        </h4>
      

      <div className="steps">
        1.  Choose the folder you want your project in and navgate there in your Terminal. Next, type: npm create vite@latest projectname
        <br />
        2. confirm your project folder Name
        <br />
        3. Choose React and JavaScript SWC when prompted
        <br />
        4. At this point you want to open your project either using "code ." or
        opening in VSCode.
        <br />
        5. In the VSCode terminal type: npm install
        <br />
        6. Vite has it's own material in App.jsx and Index.css. Feel free to
        make changes to the HTML title, update/ clear App.jsx App.css and the index.css
        <br />
        7. In the terminal  type: npm run dev. (Make sure you are in the right folder)This makes a http link that by
        holding the command and click button will show up in the broswer so you can see your project. This updates in real time.
        <br />
        8. Create you project using components, pages, context out of the Source (src) folder.
        <br />
        9. Towards the end of your project in the terminal type: npm run build.
        This will give your project a dist folder. This is how the browser reads
        your final project.
      </div>
      package.json is what holds our dependencies "tools we use"
//         
//         package-lock.json has the right versions of the tools we are using
// src folder is where everything is/ home
// app css is for the app folder
// index css is for the whole project
// app jsx is where we write our code
// main jsx puts it into the root
no modules folder on git hub
      </div>
      <button onClick={changeHandle}>Click Here for a Point!</button>
    </>
  );
};

export default StartUp;
