import { Route, Routes } from "react-router-dom"
import AdminHome from "../Admin/Pages/AdminHome"
import Category from "../Admin/Pages/Category"
import District from "../Admin/Pages/District"

const AdminRouter = () =>{
    return(
        <Routes>
          <Route path="category" element={<Category/>}/>
          <Route path="district" element={<District />} />
        </Routes>
    )
}

export default AdminRouter