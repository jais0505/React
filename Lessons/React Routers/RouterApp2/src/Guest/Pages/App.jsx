import { Link } from "react-router-dom"
import GuestRouter from "../../Routers/GuestRouter"

const App = () =>{
    return(
        <div>Index
            <div>
                <Link to="/guest/login">Login</Link>
            </div>
            <div>
                <Link to="/guest/registartion">Registration</Link>
            </div>
            <div>
                <GuestRouter />
            </div>
        </div>
    )
}
export default App