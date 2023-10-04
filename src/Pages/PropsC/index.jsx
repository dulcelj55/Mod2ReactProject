import './index.css'
import { CopyBlock, dracula } from "react-code-blocks";

const PropsC = () => {
    

 
      let code = `
          code goes inside here`;
    
      return (
        <div className="scroll">
          <h1 className="title">title</h1>
          <h4>Event Listeners </h4>
    
          <div className="container">
            <div className="lesson">
              <p className="title">Output:</p>
              {/* where code goes */}
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
    
  

export default PropsC