
import "./index.css"
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const Footer = () => {

const {score, user} = useContext(primaryContext)
const display =()=>{
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