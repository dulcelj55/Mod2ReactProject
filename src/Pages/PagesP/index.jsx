import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const PagesP = () => {
  const [point, setPoint] = useState(true)
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
      setScore(score +1)
      setPoint(false)
     
    }
  }
  let code = `npm install react-router-dom`;
  let code1 = `import ReactDOM from 'react-dom/client'
  import App from './App.jsx'
  import './index.css'
  import { BrowserRouter } from 'react-router-dom'
  import PrimarayProvider from './Context/primaryContext.jsx'
  import { Routes,Route } from 'react-router-dom'
 `;
  let code2 = `<Routes>
    <Route path='/' element={<Home/>}/>
</Routes> `;
  let code3 = `<Link to="/Game">Game</Link>
<Link to="/Game"><button>Game<button/></Link>`;
let code4= ` <BrowserRouter>
<App.jsx />
</BrowserRouter>`
  return (
    <div>
      <h1 className="title" >How to Create Pages</h1>
    <br/>
       1. Install react-router-dom in terminal
      <CopyBlock
        language={"jsx"}
        text={code}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      2. In main.jsx we will: import BrowserRouter from 'react-router-dom' Seen in line 4
      <CopyBlock
        language={"jsx"}
        text={code1}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      3.Surround our App.jsx like this in main.jsx:
      <CopyBlock
        language={"jsx"}
        text={code4}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      4. In App.jsx you will need to import Routes, and Route from 'react-router-dom'(as seen above) Dont forget to Capitilize.<br/>
      5. Within App.jsx you will need this set up:
      <CopyBlock
        language={"jsx"}
        text={code2}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      The area after the '/' is called the path and will show up in the URL displaying what page you are on. It can be anything you want. The element part is the actual location of the page so make sure to put the right page or component.
      <br />
      <br/>
      3 Ways to change between pages after your routes are set up in
      App.jsx: 
      <br/>
      1. In the URL after the '/' type in the name of the path if you
      know it. <br/>
      2. Set up Links: Import Link from "react-router-dom" to the top
      of your Component/Page. Use this form to link pages or (Line 2) use a
      button or image tage
      <CopyBlock
        language={"jsx"}
        text={code3}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      3. Navigate <br/>
      Import useNavigate from "react-router-dom" Then is js area
      of the component:
      <br />
      const navigate= useNavigate() 
      <br/>
      Then use it like this: navigate('/about')
      <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  );
};

export default PagesP;
