
import "./index.css"
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const Footer = () => {

const {score, user, isSubmitted } = useContext(primaryContext)

  
  
  
  
//   if (score<0){
//   return "You Should Play the Game!"
// } else if(score<1 && score>5){
//   return "React is Great, Huh?!"
// }else if (score> 10){
//   return "yeah"
// }
// }


const footerInfo = () => {
  if (!isSubmitted) {
    return (
      <div>
       <p>Feel free to log in and play the Game!</p>
      </div>
    ); 
   } else {
      return (
        <div >
         
          <p className="center"> {user}'s Score is: {score}</p>

        </div>
      );
    }
  }

  return (
    <div id="footer"> 
    
    {footerInfo()}
    
        
    </div>
  )
}

export default Footer