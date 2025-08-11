import { Route, Routes } from "react-router-dom"
import District from "../Admin/District"
import Category from "../Admin/Category"
import AdminProfile from "../Admin/Profile"

const AdminRouters = () =>{
    return(
             <Routes>
                <Route path="Pro" element={<AdminProfile  />}/>
                <Route path="Dis" element={<District/>} />
                 <Route path="Cat" element={<Category/>} />
             </Routes>
    )
}

export default AdminRouters