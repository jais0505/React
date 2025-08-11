import { useEffect, useState } from "react";
import styles from "./counter.module.css"

const CounterApp = () =>{
    const [count,setCount] = useState(0);
    const [value,setValue] = useState();
    useEffect(()=>{
        setValue(count * 3);
    },[count])
    return(
        <div className={styles.main_container}>
            <div className={styles.counter_container}>
                <div className={styles.counter_div}>Counter:{count}</div>
                <div className={styles.btn_container}>
                    <button className={styles.btn} onClick={() =>{setCount(count + 1)}}>+</button>
                </div>
                <div className={styles.counter_value_div}>
                    Counter value:{value}
                </div>
            </div>
            
        </div>
    )
}

export default CounterApp