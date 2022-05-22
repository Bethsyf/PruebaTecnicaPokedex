import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from '../components/CRUD/Add'
import Home from '../components/Home'
import NavbarP from '../components/NavbarP'


const DashboardRouters = () => {
  return (
    <>  
    <NavbarP/>       
      <Routes>        
        <Route path="/" element={<Home />} /> 
        <Route path="/add" element={<Add />} />                                
      </Routes>
    </>
  )
}

export default DashboardRouters