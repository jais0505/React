import { useEffect, useState } from "react"
import styles from "./effectapp3.module.css";

const EffectApp3 = () =>{
    const [name,setName] = useState("");
    useEffect(() =>{
        const input = prompt("Enter name:");
        setName(input);
    },[]);
    return(
        <div>
            <div className={styles.name_div}>
                <div>Name</div>
                <div>
                    <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
            </div>
            <div className={styles.box}>
                <div>Name:{name}</div>
            </div>
        </div>
    )
}

export default EffectApp3