import { useEffect } from "react"

const Effect = () =>{
    
    useEffect(() => 
    {
        // console.log("hai");
        alert("hai");
    },[])
    return(
        <div>Hlo</div> 
    )
}

export default Effect