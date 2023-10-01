import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Basics from './Pages/Basics'
import CodeExamples from './Pages/CodeExamples'
import Game from './Pages/Game'
import Login from './Pages/Login'
import ReactFacts from './Pages/ReactFacts'
import StartUp from './Pages/StartUp'
import State from './Pages/State'
import URL_Params from './Pages/URL_Params'
import UseState from './Pages/UseState'
import UseContext from './Pages/UseContext'
import UseEffect from './Pages/UseEffect'
import Examples from './Pages/Examples'
import Hooks from './Pages/Hooks'
import PagesP from './Pages/PagesP'
import Props from './Pages/Props'

function App() {
 

  return (
    <div className='app'>
    <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basics" element={<Basics/>}/>
        <Route path="/codeexamples" element={<CodeExamples/>}/>
        <Route path="/examples" element={<Examples/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/hooks" element={<Hooks/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/papesp" element={<PagesP/>}/>
        <Route path="/props" element={<Props/>}/>
        <Route path="/reactfacts" element={<ReactFacts/>}/>
        <Route path="/startup" element={<StartUp/>}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/url_params" element={<URL_Params/>}/>
        <Route path="/usestate" element={<UseState/>}/>
        <Route path="/usecontext" element={<UseContext/>}/>
        <Route path="/useeffect" element={<UseEffect/>}/>

        

      </Routes>
      <SideBar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
