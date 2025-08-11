import { useRef } from "react";
import styles from "./RefApp2.module.css"

const RefUse2App = () =>{
    const clickCount = useRef(0);

    const handleClick = () =>{
        clickCount.current += 1;
        console.log("Button clicked ",clickCount.current," times")
    };
    return(
        <button className={styles.btn} onClick={handleClick}>Click</button>
    )
}

export default RefUse2App