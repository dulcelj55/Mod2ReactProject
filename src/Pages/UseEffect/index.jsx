import {Link} from 'react-router-dom'

const UseEffect = () => {
  return (
    <>
    <Link to="/Hooks"><button>Back</button></Link>
    </>
    // <div>
    //     a hook that is requested during a time of the components life cycle
    //     looks like useEffect(()=>{

    //     }, [])

    // we give it two things: 1. the function with our code, 2. a dependency array thatcontrols  when that function will run 
    //     will run on first render and if empty array only render that first time
    //     unless directed otherwise by input variable  in that array or if the value in that array changes

    //      when code is placed inside we will have a "protection" from that code rerending too many times
    // it goes right before the return statement in our component

    //     example:
    //     useEffect(()=>{
    //         if (count> 20){
    //             setCountIsBig(true)
    //         }
    //     },[count])


    //     useEffect is used often when gathering infomation from an API, a database or sever outside the appilcaiton. Most times this takes awhile to return that information.  In that event a "promise" is made to return data. This is where in React we use ".then" and use "response" as a paramater

    //     example:
    //     const[data, setData]= useState([]);
    //     useEffect(()=>{
    //         axios("https://jsonplaceholder.type.com/todos").then(response =>{
    //             setData(response.data)
    //         });
    //     }, []);

    //     if useEffect uses return it renders right before dismount part of life cycle
    // </div>
  )
}

export default UseEffect