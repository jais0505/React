import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProfile from '../User/Pages/Profile/UserProfile'

function UserRouter() {
  return (
    <Routes>
        <Route path="profile" element={<UserProfile/>} />
    </Routes>
  )
}

export default UserRouter