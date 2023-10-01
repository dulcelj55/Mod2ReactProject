import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const PagesP = () => {
  return (
    <div>
        {/* when creating pages:
        1.  install react-router-dom in terminal:
        npm install react-router-dom
        2. in main.jsx we will:
         import { BrowserRouter} from 'react-router-dom'
         3.surround our App.jsx like this:
         <BrowserRouter>
         <App.jsx/>
         </BrowserRouter>
         4. in Apps.jsx you will need to import {Routes, route} from 'react-router-dom'
         5. in the jsx part of component you will need this set up:
         <Routes>
            <Route path='/' element={<Home/>}/>
            </Routes> 

            the path will show up right after the the URL. it tells you what page should be on the screen.

            ways to change between pages:
            links:
            import {Link} from "react-router-dom" 
             <Link to="/Game">Game</Link>
             or use a button like this:
              <Link to="/Game"><button>Game<button/></Link>
you could also place and image 
              other way is use navigate
              import {useNavigate} from "react-router-dom"
              then is js area
              const navigate= useNavigate() 
              then use it like this:
              navigate('/about')
            */}

    </div>
  )
}

export default PagesP