import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from "../../Context/primaryContext";
import { useContext, useState } from "react";
import "./index.css"

const Hooks = () => {
  const [point, setPoint] = useState(true)
  const { score, setScore } = useContext(primaryContext);
  const changeHandle = (e) => {
    e.preventDefault();
    if (point){
      setScore(score +1)
      setPoint(false)
     
    }
  };
  let code = `import {useState} from 'react`;
  return (
    <div>
      <h1 className="title">Hooks</h1>
      <p className="hooks">
        {" "}
        Hooks help manage components making it easier to reuse data and write
        cleaner code. You can tell you are using a hook by the "use" in front of
        the word. They call them hooks because they hook on to the life cycle. Hooks must be imported by the library they are from. Here are examples of the what Hooks
        look like in code. Click each button to see a demo.
      </p>
      <div className="states">
      <Link to="/usestate">
          <button>Use State</button>
        </Link>
        <Link to="/UseContext">
          <button>Use Context</button>
        </Link>
        <Link to="/UseEffect">
          <button>UseEffect</button>
        </Link>
        <Link to="/UseSelector">
          <button>UseSelector</button>
        </Link>
        <Link to="/UseDispatch">
          <button>UseDispatch</button>
        </Link>
      </div>
      <br/>
      <br/>
      <br/>
      <button className="gameB" onClick={changeHandle}>Click Here for a Point!</button>
    </div>
  );
};

export default Hooks;
