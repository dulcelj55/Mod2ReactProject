import "./index.css";

const Arrays = () => {
 
  let code = `
      code goes inside here`;

  return (
    <div className="scroll">
      <h1 className="title">title</h1>
      <h4>Arrays </h4>

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


  )
}

export default Arrays