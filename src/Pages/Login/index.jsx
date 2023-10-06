import "./index.css";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const Login = () => {
  const [point, setPoint] = useState(true)
  const{score, setScore, user, setUser, isSubmitted, setIsSubmitted}= useContext(primaryContext)
 
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
      setScore(score +1)
      setPoint(false)
     
    }
  }
 
 
 


  const showInfo = (e) => {
    e.preventDefault();
    setUser(user);
    setIsSubmitted(true);
   
  };

  const returnInputsOrTexts = () => {
    if (!isSubmitted) {
      return (
        <div>
          <h3 className="center">Please Enter your Name</h3>
          <form className="center" onSubmit={showInfo}>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="User Name"
             
            ></input>
            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="banner">
          <p className="center">Welcome {user}!</p>
          <p className="center"> I hope you learn something new today!</p>
        </div>
      );
    }
  };

  return <>{returnInputsOrTexts()}
  <br/>
  <button onClick={changeHandle}>Click Here for a Point!</button></>;
};

export default Login;
