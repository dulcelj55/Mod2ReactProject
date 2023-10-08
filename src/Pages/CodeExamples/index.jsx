import "./index.css";
import { primaryContext } from "../../Context/primaryContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";

const CodeExamples = () => {
  const [point, setPoint] = useState(true);

  const { score, setScore } = useContext(primaryContext);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  
  let code0 = `//sidebar component//
  import "./index.css";
  import { Link } from "react-router-dom";
  import AccountBoxIcon from '@mui/icons-material/AccountBox';
  import  LightModeIcon  from '@mui/icons-material/LightMode';
  
  const Sidebar = ({lightIsOn}) => {
    return (
      <aside id="sidebar">
        <LightModeIcon className={\`light-icon \${lightIsOn ? "color-yellow" : ""}\`}/>
      
        <AccountBoxIcon />
        {/* <button>Login/Create</button> */}
        <Link to="/">
          <button>LightSwitch</button>
        </Link>
        <Link to="/new">
          <button>New Book</button>
        </Link>
        <Link to="/library">
          <button>View Books</button>
        </Link>
      </aside>
    );
  };
  
  export default Sidebar;
  `;
  let code1 = `//Library component//
  import { Link} from "react-router-dom";


  const Library = ({ books }) => {
      
    return (
      <div className="page-container">
        <h1>Library</h1>
        {books.map((eachBook) => {
          return (
            <Link to={\`/single_book/?bookId=\${eachBook.id}\`} key={JSON.stringify(eachBook)}>
              <div key={JSON.stringify(eachBook)}>{eachBook.title}</div>
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default Library;
  `;
  let code2 = `//LightSwitch Component//
  import "./index.css"
  import  LightModeIcon  from '@mui/icons-material/LightMode';
  import { useState } from "react";
  
  
  const LightSwitch = ({lightIsOn, setLightIsOn}) => {
      
    return (
      
//       <div className="page-container">
//       {/* // 
//       // Text
//       // button to change the Icon */}
//       <LightModeIcon className={\`light-icon \${lightIsOn ? "color-yellow" : ""}\`}/>
//       <button onClick={()=>setLightIsOn(!lightIsOn)}>Change the light!</button>
//       </div>
//     )
//   }
  
//   export default LightSwitch`;
  let code3 =`//NewBook Component//
   import "./index.css"
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  const NewBook = ({books, setBooks}) => {
      const[title, setTitle]=useState("")
      const[author, setAuthor]=useState("")
      const[pages, setPages]=useState(0)
      const[submitSuccess, setSubmitSuccess]= useState(false)
  
      const handleTitleChange= (e)=>{
          setTitle(e.target.value);
          setSubmitSuccess(false)
      } 
      const handleAuthorChange= (e)=>{
          setAuthor(e.target.value);
      } 
      const handlePagesChange= (e)=>{
          if (e.target.value > 0){
          setPages(e.target.value);
      }} 
  
      function generateID(length = 10) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
        }
  
  
  
  
  
  
      const handleSubmit= (e)=>{
           e.preventDefault()
      let newBooksArray= [ ...books,{title: title, author: author, pages: pages, id:generateID()}]   
      localStorage.setItem('books', JSON.stringify(newBooksArray))    
      setBooks(newBooksArray)
          setTitle("")
          setAuthor("")
          setPages(1)
          setSubmitSuccess(true)
         
      } 
  
    return (
      <div className="page-container">
//           {submitSuccess ? <p style={{color: "green"}}>Your book was submitted!</p> : <></>}
//         <h2>Enter a new book</h2>
//   <form className="flex-form" onSubmit={handleSubmit}>
//         <label htmlFor="title"> Title </label>
//         <input onChange={handleTitleChange} name="title" type="text" value={title}/>
//         <label htmlFor="author">Author</label>
//         <input onChange={handleAuthorChange}  name= "author" type="text" value={author}/>
//         <label htmlFor="pages">Pages</label>
//         <input onChange={handlePagesChange}   min="1"  name= "pages" type="number" value={pages}/>
//         <button type="submit">Submit</button>
        </form>
//       </div>
     
    );
  };
  
  export default NewBook;
  `;
  let code4 = `//SingleBook Component//
  import {useState, useEffect} from 'react'
  import { Link, useLocation } from "react-router-dom";
  
  
  const SingleBook = ({books}) => {
      const [bookToShow, setBookToShow] = useState(null);
      const location = useLocation()
      const params = new URLSearchParams(location.search);
      const bookIdFromURL = params.get('bookId');
      console.log(bookIdFromURL);
  
  
      useEffect(() =>{
          let myBook = books.find((book) => book.id === bookIdFromURL)
          console.log(myBook)
          if (myBook !== undefined) {
              setBookToShow(myBook)
          }
      }, [books] )
  
    return (
      <div className="page-container">
          {bookToShow ?
          <>
          <h1>{bookToShow.title}</h1>
          <p>{bookToShow.author}</p>
          <p>{bookToShow.pages}</p>
          </>
          : 
          <></>}
  
      </div>
    )
  }
  
  export default SingleBook`;
  let code5 = `//App.jsx//
  //this is the App.jsx//
  import { useEffect, useState } from "react";
  import "./index.css";
  import "./App.css";
  import Sidebar from "./Component/Sidebar";
  import { Routes, Route } from "react-router-dom";
  import NewBook from "./Pages/NewBook";
  import LightSwitch from "./Pages/Lightswitch";
  import Library from "./Pages/Library";
  import SingleBook from "./Pages/SingleBook";
  
  
  function App() {
    const [lightIsOn, setLightIsOn]= useState(false)
    const [books, setBooks] = useState([]);
    useEffect(()=>{
      let result = localStorage.getItem('books')
      console.log(result)
      if (result){
        setBooks(JSON.parse(result))
      }
    }, [] )
    return (
      <>
        <div id="app-container">
          <Sidebar lightIsOn={lightIsOn}/>
          <Routes>
            <Route path="/" element={<LightSwitch lightIsOn={lightIsOn} setLightIsOn={setLightIsOn} />} />
            <Route path="/new" element={<NewBook  books={books}  setBooks={setBooks}/>} />
            <Route path="/library" element={<Library books={books} setBookds={setBooks}/>} />
            <Route path="/single_book" element={<SingleBook books={books} />} />
          </Routes>
        </div>
      </>
    );
  }
  
  export default App;
  `;
  const [code, setCode] = useState([code0, code1, code2, code3, code4, code5]);

  const changeHandle = (e) => {
    if (point) {
      setScore(score + 1);
      setPoint(false);
    }
  };

  const nextCodeItem = (e) => {
    e.preventDefault;
    setCurrentCodeIndex(currentCodeIndex + 1);
    if (currentCodeIndex == code.length - 1) {
      setCurrentCodeIndex(0);
    }
  };
  const previousCodeItem = (e) => {
    e.preventDefault;
    setCurrentCodeIndex(currentCodeIndex - 1);
    if (currentCodeIndex == code.length - 1) {
      setCurrentCodeIndex(0);
    }
  };

  return (
    <div>
      <div>
        <button onClick={changeHandle}>Click Here for a Point!</button>
      </div>
      <div className="scroll">
        <h1 className="title">Library App</h1>
        <h4>
          This is a Library codealong. Look at the different components it took
          to make this in React.
        </h4>
      </div>
      <div className="container">
        <div className="lesson">
          <p className="title">Output:</p>
          <div id="app-container"></div>
        </div>

        <div className="code">
          <></>
          <p className="title">Code:</p>
          <button onClick={previousCodeItem}>Previous</button>
          <button onClick={nextCodeItem}>Next</button>

          <CopyBlock
            language={"jsx"}
            text={code[currentCodeIndex]}
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

export default CodeExamples;
