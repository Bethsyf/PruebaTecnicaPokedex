import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from '../components/CRUD/Add'
import Search from '../components/CRUD/Search'
import Detail from '../components/Detail'
import Home from '../components/Home'
import NavbarP from '../components/NavbarP'
import Pokemon from '../components/Pokemon'


const DashboardRouters = () => {
  return (
    <>  
    <NavbarP/>       
      <Routes>        
        <Route path="/" element={<Home />} /> 
        <Route path="/poke" element={<Pokemon />} /> 
        <Route path="/*" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />     
        <Route path="/detail/:id" element={<Detail />} />                                
      </Routes>
    </>
  )
}

export default DashboardRouters