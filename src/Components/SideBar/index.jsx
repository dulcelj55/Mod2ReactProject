import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <section id="sidebar">
    <h1>React Elements</h1>
    <Link to= "/basics">Basics</Link>
    <br/>
    <Link to="/ComponentsP">Components</Link>
   
    <br/>
    <Link to="/Hooks">Hooks</Link>
    <Link to="/PagesP">How to make Pages</Link>
    <Link to="/Props">Props</Link>
    <Link to="/ReactFacts">ReactFacts</Link>
    <Link to="/StartUp">Create a Project</Link>
    <Link to="/State">What is State?</Link>
    <Link to="/URL_Params">URL and Params</Link>
   

    </section>




    </>
  )
}

export default SideBar