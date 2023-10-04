import "./index.css"
import {Link} from 'react-router-dom'

const RandomVariable = () => {

   

   
      let code = `
          code goes inside here`;
    
      return (
        <div className="scroll">
           <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
          <h1 className="title">Random Variable</h1>
          <h4>In some cases we want to us a random variable.  This is an example on how to use one for text/"string" and notice how we assigned the varible too.  </h4>
    
          <div className="container">
            <div className="lesson">
              <p className="title">Output:</p>
              {/* where code goes */}
            </div>
    
            <div className="code">
              <p className="title">Code:</p>
              <code>{code}</code>
            </div>
          </div>
        </div>
      );
    };
    


export default RandomVariable