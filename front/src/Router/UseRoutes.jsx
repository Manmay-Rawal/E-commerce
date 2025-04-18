import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NavBar from '../Coustomer/component/Navigation/Navigation.jsx'
import HomePage from '../Coustomer/pages/HomePages/HomePage.jsx'

const UseRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<><NavBar /><HomePage /></>}></Route>
        </Routes>
    </div>
  )
}

export default UseRoutes