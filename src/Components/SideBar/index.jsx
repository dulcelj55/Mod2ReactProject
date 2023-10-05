import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <section className="links" id="sidebar">
    <h1>React Elements</h1>
    
    <br/>
    <Link to="/startup">Create a Project</Link>
    <br/>
    <Link to="/state">What is State?</Link>
    <br/>
    <Link to="/rendering">Rendering</Link>
    <br/>
    <Link to="/hooks">Hooks</Link>
    <br/>
    <Link to="/ComponentsP">Components</Link>
    <br/>
    <Link to="/props">Props</Link>
    <br/>
    <Link to="/pagesp">How to make Pages</Link>
    <br/>
    <Link to="/URL_Params">URL and Params</Link>
    <br/>
    context  
    redux

    </section>




    </>
  )
}

export default SideBar