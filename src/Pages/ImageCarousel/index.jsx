import "./index.css";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const ImageCarousel = () => {
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
  
  const [images, setImages] = useState([
   "1",
   "2",
  "3",
   "4",
  "5"
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
    <div className="scroll">
      <h1 className="title">title</h1>
      <h4>Event Listeners </h4>

      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <>
            <div>ImageCarousel</div>
            <img src={images[currentIndex]} />
            <button onClick={preHandle}>Previous</button>
            <button onClick={nextHandle}>Next</button>
          </>
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

export default ImageCarousel
