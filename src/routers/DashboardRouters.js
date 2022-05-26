import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from '../components/CRUD-Firestore/Add'
import Detail from '../components/Detail'
import HomeApi from '../components/HomeApi'
import NavbarP from '../components/NavbarP'
import Pokemon from '../components/Pokemon'

const DashboardRouters = () => {
  return (
    <>
      <NavbarP />
      <Routes>
        <Route path="/" element={<HomeApi />} />
        <Route path="/poke" element={<Pokemon />} />
        <Route path="/*" element={<HomeApi />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default DashboardRouters