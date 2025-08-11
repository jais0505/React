import { useState } from "react"
import DisplayDetails from "./DisplayDetails"
import FormPage from "./Form"
import { DetailsContext } from "./Manager";

const App = () =>{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
     return(
        <div style={{display:"flex",justifyContent:'center',marginTop:"50px"}}>
            <DetailsContext.Provider value={{name,setName,email,setEmail,pass,setPass}}>
                <FormPage />
                <DisplayDetails />
            </DetailsContext.Provider>
        </div>
    )
}

export default App