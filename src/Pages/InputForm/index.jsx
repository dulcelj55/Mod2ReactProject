import "./index.css";
import {useState}from 'react'
import {Link} from "react-router-dom"
import { CopyBlock, dracula } from "react-code-blocks";

const InputForm = () => {
  let code = `import {useState}from 'react'
  const [userName, setUserName]= useState('')
  const [userAge, setUserAge]= useState('')
  const [userGender, setUserGender]= useState('')
  const [userNewName, setUserNewName]= useState('')
  const [userNewAge, setUserNewAge]= useState('')
  const [userNewGender, setUserNewGender]= useState('')
  const [isSubmitted, setIsSubmitted]= useState(false)
  const profile= [userNewName, userNewAge, userNewGender]
    
  const showInfo = (e) =>{
    e.preventDefault()
    setUserNewName(userName)
    setUserNewAge(userAge)
    setUserNewGender(userGender)
    setIsSubmitted(true)                
    }
    const reset = (e) =>{
    setUserName("")
    setUserAge("")
    setUserGender("")
    setIsSubmitted(false)                
    }
    
      
       
     const returnInputsOrTexts =()=>{
      if (!isSubmitted){
        return(
          <>
            <h3>Please Enter your Information</h3>
            <form onSubmit={showInfo}>
              <input value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder= 'User Name'></input>
              <input value={userAge}  onChange={(e)=> setUserAge(e.target.value)} placeholder= 'Use Age'></input>
              <input value={userGender} onChange={(e)=> setUserGender(e.target.value)} placeholder='User Gender'></input>
              <button >Submit</button>
            </form>         
          </>
        )
          }else{
            return(
              <>
                <p>You're logged in as: {profile[0]}</p>
                <p>User Age: {profile[1]}</p>
                <p>User Gender: {profile[2]}</p> 
                <button onClick={reset}>Reset</button>       
              </>
            )
          }
}
  
return (
      <>
      {returnInputsOrTexts()}
      </>
         
    );
  };
  
  export default InputForm;`;

  const [userName, setUserName]= useState('')
      const [userAge, setUserAge]= useState('')
      const [userGender, setUserGender]= useState('')
      const [userNewName, setUserNewName]= useState('')
      const [userNewAge, setUserNewAge]= useState('')
      const [userNewGender, setUserNewGender]= useState('')
      const[isSubmitted, setIsSubmitted]= useState(false)
  
  
      const profile= [userNewName, userNewAge, userNewGender]
  
      const showInfo = (e) =>{
      e.preventDefault()
      setUserNewName(userName)
      setUserNewAge(userAge)
      setUserNewGender(userGender)
      setIsSubmitted(true)                
      }
      const reset = (e) =>{
        setUserName("")
      setUserAge("")
      setUserGender("")
       setIsSubmitted(false)                
        }
  
    
     
   const returnInputsOrTexts =()=>{
          if (!isSubmitted){
            return(
              <>
              <h3>Please Enter your Information</h3>
          <form onSubmit={showInfo}>
              <input value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder= 'User Name'></input>
              <input value={userAge}  onChange={(e)=> setUserAge(e.target.value)} placeholder= 'Use Age'></input>
              <input value={userGender} onChange={(e)=> setUserGender(e.target.value)} placeholder='User Gender'></input>
              <button >Submit</button>
          </form>         
          </>
          )
      }else{
          return(
          <>
              
              <p>You're logged in as: {profile[0]}</p>
              <p>User Age: {profile[1]}</p>
              <p>User Gender: {profile[2]}</p> 
              <button onClick={reset}>Reset</button>       
          </>
          )
      }

}

  return (
    <div className="scroll">
       <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">Input Forms</h1>
      <h4>This example has many steps to it. The goal was to accept the input, display it back, and reset the form. Notice in the code that there are three input values, three inline functions(onChange), and three functions above the return statement.  When accepting inputs, most time you will have to have two states for that variable, state, and newState.   </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <>
    
    {returnInputsOrTexts()}
  </>
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

export default InputForm;