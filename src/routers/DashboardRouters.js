import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from '../components/CRUD/Add'
import Search from '../components/CRUD/Search'
import Home from '../components/Home'
import NavbarP from '../components/NavbarP'


const DashboardRouters = () => {
  return (
    <>  
    <NavbarP/>       
      <Routes>        
        <Route path="/" element={<Home />} /> 
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />                                
      </Routes>
    </>
  )
}

export default DashboardRouters