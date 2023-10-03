import {Link} from 'react-router-dom'

const Hooks = () => {
  return (
   <> <div>

       <p> conceptually hook on to the life cycle of the component</p>
        <Link to="/UseContext"><button>Use Context</button></Link>
    <Link to="/UseEffect"><button>UseEffect</button></Link>

    <Link to="/UseState"><button>UseState</button></Link>
    <Link to="/UseSelector"><button>UseSelector</button></Link>
    <Link to="/UseDispatch"><button>UseDispatch</button></Link>

    </div>

    </>
  )
}

export default Hooks