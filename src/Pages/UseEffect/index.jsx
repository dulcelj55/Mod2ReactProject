import React from 'react'

const UseEffect = () => {
  return (
    <></>
    // <div>
    //     a hook that is requested during a time of the components life cycle
    //     looks like useEffect(()=>{

    //     }, [])
    //     will run on first render and if empty array only render that first time
    //     unless directed otherwise by input variable  in that array

    //     will have a "protect" from rerending too many times

    //     example:
    //     useEffect(()=>{
    //         if (count> 20){
    //             setCountIsBig(true)
    //         }
    //     },[count])


    //     useEffect is used often when gathering infomation from an API, a database or sever outside the appilcaiton. Most times this takes awhile to return that information.  In that event a "promise" is made to return data. This is where in React we use ".then" and use "response"

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