
import "./index.css"
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const Footer = () => {

const {score, user} = useContext(primaryContext)
const display =()=>{
  if (!isSubmitted) {
    return (
      <div>
        <h3 className="center">Please Enter your Name</h3>
        <form className="center" onSubmit={showInfo}>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
            username={userName}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="banner">
        <p className="center">Welcome {userNewName}!</p>
        <p className="center"> I hope you learn something new today!</p>
      </div>
    );
  }
  
  
  
  
  if (score<0){
  return "You Should Play the Game!"
} else if(score<1 && score>5){
  return "React is Great, Huh?!"
}else if (score> 10){
  return "yeah"
}
}

  return (
    <div id="footer"> 
    
    
     {user}'s Score is: {score} 
        
    </div>
  )
}

export default Footer