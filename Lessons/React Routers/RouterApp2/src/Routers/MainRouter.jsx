import { Route, Routes } from "react-router-dom"
import AdminHome from "../Admin/Pages/AdminHome"
import UserHome from "../User/Pages/HomePage/UserHome"
import App from "../Guest/Pages/App"
const MainRouter = () =>{
    return(
        <Routes>
            <Route path="admin/*" element={<AdminHome />} />
            <Route path="user/*" element={<UserHome />}/>
            <Route path="guest/*" element={<App />} />
        </Routes>
    )
}

export default MainRouter