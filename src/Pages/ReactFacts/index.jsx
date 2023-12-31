import "./index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext,useState } from "react";




const ReactFacts = () => {
  const [point, setPoint] = useState(true)
  const navigate = useNavigate();
  let code1 = `npm install
  npm install react-router-dom
  npm install react-code-blocks`;
  let code2 = `import "./index.css"
  import {useState} from  'react'
  import { useNavigate } from "react-router-dom"
  import { CopyBlock, dracula } from "react-code-blocks";`
  let code3= `import {useState} from  'react'
  // This is where all imports go

  
  const NameOfComponent =({this is where you would pass props})=>{
    // This area is where you would put useState and write functions in JavaScript
 //Example: 
  const [input, setInput]= useState ("")

  return(
  //   This area is what will show up on the DOM
    <h1 className= "title"> Hello World! </h1>
   {/*this is how you comment out items in JSX*/}
  )
  }
  
  export default NameOfComponents
  //Don't forget to always export your component`
const {score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
      setScore(score +1)
      setPoint(false)
     
    }
  }

  return (
    
    <div id="react-container">
      <h1 className="title"> What is React?</h1>
        
        React is a JavaScript library tool that has several characteristics of a
        framework. It was created by Jordan Walke, a software engineer at Meta
        (Facebook) in 2011. React is made up of components that will become elements compiled into an HTML file using JSX. Browsers cannot read
        JSX, thus the need for React to translation into HTML files. When using
        React, several libraries need to be installed. Once installed, they need
        to be imported. Some examples of installs and imports include:
        <br/>
        <br/>
        <CopyBlock
          language={"jsx"}
          text={code1}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <CopyBlock
          language={"jsx"}
          text={code2}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      
      <br />
      <p>
        The newest way of <Link to = "/startup">creating a project</Link> can be found using Vite. Some
        previous knowledge is needed when using React including: HTML, CSS, and
        JavaScript. Some skills to revisit include .map, tinary functions, and
        spread operators. Because React uses JSX here are some things to note:
        the component is split between JavaScript (above the return statement)
        and JSX anything in the return statement. If using JavaScript in the
        lower half you will need to use curly brackets. When using a "class" selector, JSX
        requires "className" instead. This is what React Components look like this:
        <CopyBlock
          language={"jsx"}
          text={code3}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </p>
      In React there are mulitple CSS files. Index.css is the main file that
      will effect the whole project, ie border box. App.css will only design
      what's in the App.jsx folder: example could be a grid layout. Other
      index.css files are tied to the Componenets and usually only influence those
      components. In some cases, if a className is not declared in that component, the style will continue through out the project.
      
     

      <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  );
};

export default ReactFacts;
