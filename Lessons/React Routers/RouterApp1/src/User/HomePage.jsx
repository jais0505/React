import { Link } from "react-router-dom"
import UserRouters from "../Routers/UserRouters"

const HomePage = () =>{
    return(
        <div>User Home Page
           <div><Link to="/user/Pro">MyProfile</Link></div> 
           <div><UserRouters/></div> 
        </div>
    )
}

export default HomePage