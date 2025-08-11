import { useContext } from "react";
import NameProvider from "./Parent"
import { NameContext } from "./Manager";

const ChildTwo = () =>{
    const{setName} = useContext(NameContext);
    return(
        <div>
            <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}

export default ChildTwo
