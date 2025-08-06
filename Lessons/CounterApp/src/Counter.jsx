import React, { useState } from "react";
import styles from './counter.module.css'

const CounterPage = () =>{
    const [count, setCount] = useState(0)
    return(
        <div className={styles.main_container}>
            <div className={styles.counter_container}>
                <div className={styles.counter_div}>Counter: {count}</div>
                <div className={styles.btns_container}>
                    <div>
                        <button className={styles.btns} onClick={() =>setCount((count) => count + 1)}>+</button>
                    </div>
                    <div>
                        <button className={styles.btns} onClick={() =>setCount((count) => count - 1)}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterPage