import { Route, Routes } from "react-router-dom"
import HomePage from "../User/HomePage"
import Profile from "../User/Profile"

const UserRouters = () =>{
    return(
        <Routes>
            <Route path="Hom" element={<HomePage />}/>
            <Route path="Pro" element={<Profile />}/>
        </Routes>
    )
}

export default UserRouters