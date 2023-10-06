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
    <div className="title">
    <h1>Every Link has a point!
      <br/> Try to collect them all!
      <br/> So far your score is {score}
      <br/> Get your first point here!
      <br/><button onClick={changeHandle}>Click Here for a Point!</button>
      </h1>
      </div>
  )
}

export default Game