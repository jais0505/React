import { Link } from "react-router-dom"
import AdminRouters from "../Routers/AdminRouters"

const AdminHomePage = () =>{
    return(
        <div>
            Admin Home
            <div>
                <div>
                    <Link to="/admin/Pro">Profile</Link>
                </div>
                <div>
                    <Link to="/admin/Dis">District</Link>
                </div>
                <div>
                    <Link to="/admin/Cat">Category</Link>
                </div>
                <div>
                    <AdminRouters />
                </div>
            </div>
        </div>
    )
}

export default AdminHomePage