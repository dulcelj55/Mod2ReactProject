import {Link} from 'react-router-dom'
import './index.css'

const Navbar = ({userName, setIsSubmitted}) => {
  return (
<>
    <nav id="navbar-container">
     <Link to= "/ReactFacts">What is React?</Link>
    <Link to="/Game">Game</Link>
    <Link to="/CodeExamples">Code Examples</Link>
    setIsSubmitted ? "Logged in as {userName} : <Link to="/Login">Login</Link>

    
    
    </nav>
    </>
  )
}

export default Navbar