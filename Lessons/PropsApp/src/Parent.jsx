import { useState } from "react"
import ChildOne from "./ChildOne"
import ChildTwo from "./ChildTwo"

const ParentPage = () =>{
    const[name,setName] =useState('Anu')
    return(
        <div>
            Parent  Page
            <ChildOne name={name}/>
            <ChildTwo setName={setName}/>

        </div>
    )
}

export default ParentPage