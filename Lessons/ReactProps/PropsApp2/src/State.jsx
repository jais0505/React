import React from "react";
import styles from './state.module.css'

const StatePage = (props) =>{
    return(
        <div >
            <div className={styles.state_container}>
                <div>{props.state}</div>
                <div>Language: {props.language}</div>
                <div>Population: {props.population}</div>
            </div>
        </div>
    )
}

export default StatePage