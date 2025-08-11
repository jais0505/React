import React from 'react'
import Login from '../Guest/Pages/Login'
import Registration from '../Guest/Pages/Registration'
import { Route, Routes } from 'react-router-dom'

function GuestRouter() {
  return (
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="registartion" element={<Registration  />} />
    </Routes>
  )
}

export default GuestRouter