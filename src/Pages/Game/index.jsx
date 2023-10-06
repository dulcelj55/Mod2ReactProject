import { useContext, useState } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const Game = () => {
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
    <h1>Every Link has a point!
      <br/> Try to collect them all!
      <br/> So far your score is {score}
      <br/> Get your first point here!
      <button onClick={changeHandle}>Click Here for a Point!</button>
      </h1>
  )
}

export default Game