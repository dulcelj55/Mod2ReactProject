import { CopyBlock, dracula } from "react-code-blocks"
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const Props = () => {
  const [point, setPoint] = useState(true)
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
      setScore(score +1)
      setPoint(false)
     
    }
  }
  let code= `const Login = (props) => {
  const Login = ({userNewName, setUserNewName}) => {`

  let code1= `const App = () => {
    const Login = ({userNewName, setUserNewName}) => { 
      return( <Route path="/login" 
                element={<Login  setUserNewName={setUserNewName} userNewName={userNewName}   />}/>
      ) `
  let code2= `const Login = (props) => {
        const Login = ({userNewName, setUserNewName}) => {`
  let code3=` const Login = ()=>{
    const changeHandle=(info)=>{
      console.log("Button Clicked", info);
    }
    return <ChildComponent onClick={changeHandle}/>
  }`
  return (
    <div className="props">
    <h1 className="title">Props</h1>

    In React, "props" (short for properties) is a way to pass data (values, objects, arrays, and functions) from a parent component to a child component in a unidirectional data waterfall. Assumimg that the states are declared, to Pass props from the parent you would declare them in your return statement area like in line 4:
    <CopyBlock
          language={"jsx"}
          text={code1}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
 Props must be in the parameters portion of the componenet when being accepted by the child component (Line 1 ) and most of the time they are "destructured". This allows you to access the props directly (Line 2): 
    <CopyBlock
          language={"jsx"}
          text={code2}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />

   Props are know as Read-Only. Child components can not modify nor change. Props can work as functions as well within the same component and are often used for events or data changes (changeHandle for example):
   <CopyBlock
          language={"jsx"}
          text={code3}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <button onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  )
}

export default Props