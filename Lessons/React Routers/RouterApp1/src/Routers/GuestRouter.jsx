import { Route, Routes } from "react-router-dom"
import Registartion from "../Guest/Registration"
import Login from "../Guest/Login"

const GuestRouter = () =>{
    return(
        <Routes>
            <Route path="Log" element={<Login />}/>
            <Route path="Reg" element={<Registartion/>}/>
        </Routes>
    )
}

export default GuestRouter