import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseRoutes from './Router/UseRoutes'
import React from 'react'

function App() {

  return (
    // <React.StrictMode>
     <BrowserRouter>
     <UseRoutes/>
     </BrowserRouter>
       
    // </React.StrictMode>
  )
}

export default App
