import "./index.css";
import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";

const CodeDisplay = ({title, discription, output, code}) => {
  
  return (
    <div className="scroll">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">{title}</h1>
      <h4>
      {discription}
      </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          {/* where  output code goes */}
          {output}
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

export default CodeDisplay