import "./index.css";
import {Link} from "react-router-dom"
import { CopyBlock, dracula } from "react-code-blocks";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const ImageCarousel = () => {
  const [point, setPoint] = useState(true)
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
      setScore(score +1)
      setPoint(false)
     
    }
  }
  let code = `
  import {useState} from 'react'


  const ImageCarousel = () => {
  const [images, setImages]= useState([])
  const [currentIndex, setCurrentIndex]= useState(0)
  const nextHandle =(e)=>{
  e.preventDefault() 
  if (currentIndex=== images.length-1){
      setCurrentIndex(0)
  }else{
      setCurrentIndex(currentIndex +1)
  }
  }
  const preHandle =(e)=>{
      e.preventDefault() 
      if (currentIndex== 0){
          setCurrentIndex(images.length-1)
      }else{
          setCurrentIndex(currentIndex -1)
      }}
    
  
    return (
      <>
      <div>ImageCarousel</div>
      <img src={images[currentIndex]}/>
      <button onClick={preHandle}>Previous</button>
      <button onClick={nextHandle}>Next</button>
  
  </>
    )
  }
  
  export default ImageCarousel`;
  
  const [images, setImages] = useState(["src/assets/homeImage.jpeg","src/assets/lifecycle.png", "src/assets/Spike.jpeg"
   
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextHandle = (e) => {
    e.preventDefault();
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const preHandle = (e) => {
    e.preventDefault();
    if (currentIndex == 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bgcolor">
   
      <div className="topButtons">
      <Link to="/ComponentsP"><button>BACK TO COMPONENTS</button></Link>
      <button onClick={changeHandle}>Click Here for a Point!</button>
      </div>
    <div className="scroll">
      <h1 className="title">Image Carousel</h1>
   

      <div className="container">
        <div className="lesson">
          <p >Output:</p>
          <>
            <div>ImageCarousel</div>
            <img src={images[currentIndex]} />
            <button onClick={preHandle}>Previous</button>
            <button onClick={nextHandle}>Next</button>
          </>
        </div>

        <div className="code">
          <p>Code:</p>
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

export default ImageCarousel
