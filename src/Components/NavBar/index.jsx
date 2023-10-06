import {Link} from 'react-router-dom'
import './index.css'

const Navbar = ({ userNewName}) => {
  return (
<>
    <nav id="navbar-container">
   
    <Link to="/Game">Game</Link>
    <Link to="/CodeExamples">Code Examples</Link>
    {userNewName.length ? `Logged in as ${userNewName}` : <Link to="/Login">Login</Link>}

    
    
    </nav>
    </>
  )
}

export default Navbar