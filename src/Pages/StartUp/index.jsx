import React from "react";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const StartUp = () => {
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
    <>
      <div id="startup">
        <h1>How to Start a Project</h1>
        <h4>
          There are many ways to create an appilcaiton in React version 18 but the most
          common is using a library called Vite. Here are the steps:
        </h4>
      

      <div className="steps">
        1.  In your Terminal, choose the folder you want your project in and navigate there. Next, type: npm create vite@latest projectname
        <br />
        2. Confirm your project folder Name
        <br />
        3. Choose React and JavaScript SWC when prompted
        <br />
        4. At this point you want to open your project either using "code ." or
        opening in VSCode.
        <br />
        5. In the VSCode terminal type: npm install. This brings all the node_modules to help run React.  Another thing to know is that React has such a large library, that when projects are saved to github, there is a built-it function that saves the file from bringing all the node_modules.  This also means that when projects are clone, they will need to reinstall npm.
        <br />
        6. Vite has it's own material in App.jsx and Index.css. Feel free to
        make changes to the HTML title, update/ clear App.jsx App.css and the index.css
        <br />
        7. In the terminal  type: npm run dev. (Make sure you are in the right folder)This makes a http link that by
        holding the command and click button will show up in the broswer so you can see your project. This updates in real time.
        <br />
        8. Create your project using components, pages, context out of the Source (src) folder.
        <br />
        9. Towards the end of your project in the terminal type: npm run build.
        This will give your project a dist folder. This is how the browser reads
        your final project.
      </div>
      Here are some other things to know:
      <br/>
      - package.json is what holds our dependencies "tools we use"
      <br/>
      - package-lock.json has the current versions of the tools we are using
      <br/>
      - Source (src) folder is where everything is located in
      <br/>
      - App.css is for the app folder; index.css is for the    whole project
      <br/>
      - App.jsx is where we write our outline for code if using components and pages. <br/>
      -Main.jsx is the main file put in the root <br/>
      -No modules folders are saved to git hub
      </div>
      <br/>
      <button onClick={changeHandle}>Click Here for a Point!</button>
    </>
  );
};

export default StartUp;
