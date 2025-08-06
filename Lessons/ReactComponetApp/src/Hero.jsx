import React from 'react'
import styles from './hero.module.css'

const Hero = () =>{
    return(
        <div>
            <div className={styles.imgdiv}>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://icas.ac.in/mobilehero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero