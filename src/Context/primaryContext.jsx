import { createContext } from "react";
import {useState} from 'react'

 export const primaryContext = createContext();
    const PrimaryProvider = (props) =>{
        const[user, setUser] = useState('BOB')
    const [score, setScore] = useState(0)
    
    return (
        <primaryContext.Provider value={
            {
                user,
                setUser,
                score,
                setScore

            }
        }>
        {props.children}
   
    </primaryContext.Provider>

    )}
    export default PrimaryProvider
  
    
    
    