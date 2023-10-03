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
import UseSelector from './Pages/UseSelector'
import UseDispatch from './Pages/UseDispatch'
import ComponentsP from './Pages/ComponentsP'
import HandleClick from './Pages/HandleClick'

function App() {
 

  return (
   
    <div className='app'>
    <Header id="header-container"/>
      <Navbar id="nav-container"/>
      <SideBar id="sidebar-container"/>
      <Routes >
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
        <Route path="/useselector" element={<UseSelector/>}/>
        <Route path="/usedispatch" element={<UseDispatch/>}/>
        <Route path="/componentsp" element={<ComponentsP/>}/>
        <Route path="/handleclick" element={<HandleClick/>}/>



        

      </Routes>
      
    
      <Footer id="footer-container"/>
    </div>
  )
}

export default App
