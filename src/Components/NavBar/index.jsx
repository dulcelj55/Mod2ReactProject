import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
<>
    <nav id="navbar-container">
     <Link to= "/ReactFacts">React Facts</Link>
    <Link to="/Game"><button>Game</button></Link>
    <Link to="/CodeExamples">Code Examples</Link>
    <Link to="/Login">Login</Link>

    
    
    </nav>
    </>
  )
}

export default Navbar