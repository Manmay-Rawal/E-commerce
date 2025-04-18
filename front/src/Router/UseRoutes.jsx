import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NavBar from '../component/NavBar.jsx'

const UseRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<NavBar />}></Route>
        </Routes>
    </div>
  )
}

export default UseRoutes