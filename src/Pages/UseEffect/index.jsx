import {Link} from 'react-router-dom'
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks"

const UseEffect = () => {
  const [point, setPoint] = useState(true)
  const{score, setScore}= useContext(primaryContext)
  const changeHandle =(e)=>{
    e.preventDefault()
    if (point){
    setScore(score +1)
    setPoint(false)
   }
  }
  let code= `useEffect(()=>{

  }, [])`
  let code1=`  useEffect(()=>{
    if (count> 20){
        setCountIsBig(true)
    }
},[count])`
let code2= `useEffect(()=>{
  axios("https://jsonplaceholder.type.com/todos").then(response =>{
    setData(response.data)
});
}, []);`

  return (
    <div>
    <Link to="/Hooks"><button>Back</button></Link>
    <button onClick={changeHandle}>Click Here for a Point!</button>
    
   
      <p>useEffect is a hook that is requested during a given  point of the components life cycle and interacts with outside the DOM such as making API calls, gathering  data, manipulating the DOM, or performing any action that cannot or should not be done during the rendering phase of your component. It must be imported just like useState. An empty useEffect looks like this:
        </p> 
        <CopyBlock
          language={"jsx"}
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />


     <p>useEffect breaks down into two parts: 
      <br/>
      1. the function with our code <br/>
      2. a dependency array that controls  when that function will run  <br/>
       useEffect will always run on the first render and only once if there is an empty array. Otherwise if follows directions by the input variable in that array or if the value in that array changes. When useEffect is placed above the return statement in a component, we will have a "protection" from that code rerending too many times.
    </p>

    <CopyBlock
          language={"jsx"}
          text={code1}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />

         useEffect is used often when gathering infomation from an API, a database or sever outside the appilcaiton. Most times this takes awhile to return that information.  In that event a "promise" is made to return data. This is where in React we use ".then" and use "response" as a paramater

        example:
        <CopyBlock
          language={"jsx"}
          text={code2}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      if useEffect uses return it renders right before dismount part of life cycle
     </div>
  )
}

export default UseEffect