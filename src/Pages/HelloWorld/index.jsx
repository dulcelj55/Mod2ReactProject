import "./index.css";
import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";

const HelloWorld = () => {
  let code = `
  const HelloWorld = ()= {                                                              
  return ( 
     <h1>Hello World!</h1>
     )
  };
  
  export default HelloWorld`

  return (
    <div className="scroll">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">Hello World!</h1>
      <h4>
        This is an example of adding text inside the return statement. This is exactly like typing into HTML. You can use element tags like h1, p, or div tags. 
      </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          {/* where  output code goes */}
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
  );
};

export default HelloWorld
