import { useState } from "react";
import ChildOne from "./Child1";
import ChildTwo from "./Child2";
import { NameContext } from "./Manager";

const NameProvider = () =>{
    const [name,setName] = useState('Anu');
    return(
        <NameContext.Provider value = {{name,setName}}>
            <ChildOne />
            <ChildTwo />
        </NameContext.Provider>
    )
}

export default NameProvider