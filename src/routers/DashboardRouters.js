import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

const DashboardRouters = () => {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Home />} />                                 
      </Routes>
    </>
  )
}

export default DashboardRouters