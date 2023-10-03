import React from 'react'

const Login = () => {
  return (
    <div>I'm a Login page</div>
//     import {useState}from 'react'

// const UserProfileCard = () => {
//     const [userName, setUserName]= useState('')
//     const [userImage, setUserImage]= useState('')
//     const [userBio, setUserBio]= useState('')
//     const [userNewName, setUserNewName]= useState('')
//     const [userNewImage, setUserNewImage]= useState('')
//     const [userNewBio, setUserNewBio]= useState('')
//     const[isSubmitted, setIsSubmitted]= useState(false)


//     const profile= [userNewName, userNewImage, userNewBio]

//     const showInfo = (e) =>{
//     e.preventDefault()
//     setUserNewName(userName)
//     setUserNewImage(userImage)
//     setUserNewBio(userBio)
//     setIsSubmitted(true)                
//     }

  
   
//  const returnInputsOrTexts =()=>{
//         if (!isSubmitted){
//             return(
//                 <>
//                 <h3>Please Enter your Information</h3>
//             <form onSubmit={showInfo}>
//                 <input value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder= 'User Name'></input>
//                 <input value={userImage}  onChange={(e)=> setUserImage(e.target.value)} placeholder= 'Use Image'></input>
//                 <input value={userBio} onChange={(e)=> setUserBio(e.target.value)} placeholder='UserBio'></input>
//                 <button >Submit</button>
//             </form>         
//             </>
//             )
//         }else{
//             return(
//             <>
//                 <p>User Image: {profile[1]}</p>
//                 <p>You're logged in as: {profile[0]}</p>
//                 <p>User Bio: {profile[2]}</p>       
//             </>
//             )
//         }

//  }

//   return (
//     <>
//     <div>UserProfileCard</div>
//     {returnInputsOrTexts()}
//   </>
//   )
// }

// export default UserProfileCard
//   )
)
}

export default Login