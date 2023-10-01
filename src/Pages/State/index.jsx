import React from 'react'

const State = () => {
  return (
    <></>
//     <div>State is the current data of our appilication. could be the variables of the state. 
//          "" In programing and application developement, "state" refers to the current condition or data of an application at any given moment. In other words, it's a representation of the app's knowleadge at a praticular time.  State can include things like user data, configuration settings, UI condition (e.g., whether a button is disabled), and more. Managing state is essential because it determines how an application behaves and presents itself to the user."- chase

//          in normal javascript we have varibles... in react we have state
// when we change the state we rerender the program
//          state control the dom
//          we want to push state up- meaning put it in our app.jsx

// use const cause we shouldn't be changing the variables
// inputs need to be tied to state and must start as empty strings
// when state is reassigned in a component it refelcts on the render, therefore you can't have mulitple assignemnts of a state in one componemt

// differences between normal variables is how they are made/ changed vs how they behave
// example: const[name, setName]= useState("Bob") <= will cause rerender vs.let name= "Bob"

// when making inputs usually you'll find that having two states will help to recieve that input and update the new state ex name vs new name
//     </div>
  )
}

export default State