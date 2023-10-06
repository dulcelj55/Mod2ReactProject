import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PrimarayProvider from './Context/primaryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PrimarayProvider>  
    <App />
    </PrimarayProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
