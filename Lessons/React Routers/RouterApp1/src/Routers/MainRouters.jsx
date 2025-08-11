import { Route, Routes } from "react-router-dom"
import AdminRouters from "./AdminRouters"
import GuestRouter from "./GuestRouter"
import HomePage from "../User/HomePage"
import AdminHomePage from "../Admin/AdminHomePage"

const MainRouters = () =>{
    return(
        <Routes>
            <Route path="admin/*" element={<AdminHomePage />}/>
            <Route path="/*" element={<GuestRouter />}/>
            <Route path="user/*" element={<HomePage/>} />
        </Routes>
    )
}

export default MainRouters