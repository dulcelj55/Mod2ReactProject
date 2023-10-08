import {Link} from 'react-router-dom'
import './index.css'
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const Navbar = ({ userNewName}) => {
  const { user, isSubmitted} = useContext(primaryContext)
  return (
<>
    <nav id="navbar-container">
   
    <Link to="/Game">Game</Link>
    <Link to="/CodeExamples">React Sample</Link>
    { isSubmitted? `Logged in as ${user}` : <Link to="/Login">Login</Link>}

    
    
    </nav>
    </>
  )
}

export default Navbar