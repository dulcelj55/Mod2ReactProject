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
    <Link to="/PagesP"><button>How to make Pages</button></Link>
    <Link to="/Props"><button>Props</button></Link>
    <Link to="/ReactFacts"><button>ReactFacts</button></Link>
    <Link to="/StartUp"><button>Create a Project</button></Link>
    <Link to="/State"><button>What is State?</button></Link>
    <Link to="/URL_Params"><button>URL and Params</button></Link>
   

    </section>




    </>
  )
}

export default SideBar