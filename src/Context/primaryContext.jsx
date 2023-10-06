import { createContext } from "react";
import {useState} from 'react'

 export const primaryContext = createContext();
    const PrimaryProvider = (props) =>{
    const[user, setUser] = useState('')
    const [score, setScore] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState('');

    
    return (
        <primaryContext.Provider value={
            {
                user,
                setUser,
                score,
                setScore,
                isSubmitted,
                setIsSubmitted


            }
        }>
        {props.children}
   
    </primaryContext.Provider>

    )}
    export default PrimaryProvider
  
    
    
    