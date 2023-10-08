import "./index.css";
import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from "../../Context/primaryContext";
import { useContext, useState } from "react";

const HelloWorld = () => {
  const [point, setPoint] = useState(true);
  const { score, setScore } = useContext(primaryContext);
  const changeHandle = (e) => {
    e.preventDefault();
    if (point) {
      setScore(score + 1);
      setPoint(false);
    }
  };
  let code = `
  const HelloWorld = ()= {                                                              
  return ( 
     <h1>Hello World!</h1>
     )
  };
  
  export default HelloWorld`;

  return (
    <div className="bgcolor">
      <div className="scroll">
        <div className="topButtons">
          <Link to="/ComponentsP">
            <button>BACK TO COMPONENTS</button>
          </Link>
          <button onClick={changeHandle}>Click Here for a Point!</button>
        </div>
        <h1 className="title">Hello World!</h1>
        <h4>
          This is an example of adding text inside the return statement. This is
          exactly like typing into HTML. You can use element tags like h1, p, or
          div tags.
        </h4>
        <br />
        <div className="container">
          <div className="lesson">
            <p className="title">Output:</p>
          
            <h1>Hello World!</h1>
          </div>

          <div className="code">
            <p className="title">Code:</p>
            <CopyBlock
              language={"jsx"}
              text={code}
              showLineNumbers={true}
              theme={dracula}
              wrapLines={true}
              codeBlock
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
