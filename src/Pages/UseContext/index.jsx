// when to use: you want to use a theme across your project
// loging in a program/ user
// creating state at the global level
import { CopyBlock, dracula } from "react-code-blocks";
import {Link} from 'react-router-dom'

const UseContext= () => {
  return (
    <>
    <div>UseContext page</div>
    <Link to="/Hooks"><button>Back</button></Link>
    </>
  )
}

export default UseContext