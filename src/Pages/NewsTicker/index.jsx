import "./index.css";
import { CopyBlock, dracula } from "react-code-blocks";
import {useState} from "react"
import { Link } from "react-router-dom";

const NewsTicker = () => {
  const [news, setNews]= useState(["Paris has beg bugs","Jimmy Carter turns 99", "Taylor Swift dates football Player", "Mojo Dojo Casa House Burns"]) 
  const [currentNewsIndex, setCurrentNewsIndex]= useState(0)
  const nextNewsItem =(e)=>{
    e.preventDefault
    setCurrentNewsIndex(currentNewsIndex +1)
     if (currentNewsIndex==news.length-1){
         setCurrentNewsIndex(0)
     }
 }

  let code = `

  import {useState} from "react"
  
  const NewsTicker = (props) => {
    const [news, setNews]= useState(["Paris has beg bugs","Jimmy Carter turns 99", "Taylor Swift dates football Player", "Mojo Dojo Casa House Burns"])
  const [currentNewsIndex, setCurrentNewsIndex]= useState(0)
  
  const nextNewsItem =(e)=>{
     e.preventDefault
     setCurrentNewsIndex(currentNewsIndex +1)
      if (currentNewsIndex==news.length-1){
          setCurrentNewsIndex(0)
      }
  }
  
    return (
      <>
      <div> NewsTicker</div>
      <div> {news[currentNewsIndex]}</div>
      <button onClick={nextNewsItem}>Next</button>
      
      </>
  
    )
  }
  
  export default NewsTicker`;

  return (
    <div className="scroll">
       <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <h1 className="title">News Ticker</h1>
      <h4>Notice in this eaxmple the continous scrolling in one direction.  </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <div> News:</div>
      <div> {news[currentNewsIndex]}</div>
      <button onClick={nextNewsItem}>Next</button>
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



export default NewsTicker