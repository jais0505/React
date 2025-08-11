import { useContext } from "react"
import { NameContext } from "./Manager";

const ChildOne = () =>{
    const {name} = useContext(NameContext);
    return(
        <div>
            Name : {name}
        </div>
    )
}

export default ChildOne