import React from 'react'
import styles from './footer.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () =>{
    return(
        <div>
             <div className={styles.footer}>
                <div className={styles.footertop}>

                </div>
                <hr style={{ border: "0.3px solid #ccc", margin: "5px 0" }} />
                <div className={styles.footercenter}>
                    <div className={styles.footercenteritem1} >
                        <div className={styles.item1icon}>
                            <FaPhoneAlt style={{ color: "#1755a7", fontSize: "30px" }} />
                        </div>
                        <div className={styles.item1txt}>
                            <div className={styles.item1call}>Call us at</div>
                            <div className={styles.item1no}>0485-2811607</div>
                        </div>
                    </div>
                    <div className={styles.footercenteritem2} >
                        <div className={styles.item2icon}>
                            <FaLocationDot style={{ color: "#1755a7", fontSize: "30px" }} />
                        </div>
                        <div className={styles.item2txt}>
                            <div className={styles.item2call}>Visit us</div>
                            <div className={styles.item2no}>Muvattupuzha</div>
                        </div>
                    </div>
                    <div className={styles.footercenteritem3} >
                        <div className={styles.item3icon}>
                             <IoMdMail style={{ color: "#1755a7", fontSize: "30px" }} />
                        </div>
                        <div className={styles.item3txt}>
                            <div className={styles.item3call}>Email us at</div>
                            <div className={styles.item3no}>ilahiaartscollege@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerbottom}>
                    <div className={styles.fotterbottomtxt}>© 2024 Ilahia College of Arts & Science. All rights reserved.</div>
                    <img style={{ width: "90px", height: "30px"}} src="./src/assets/uxb.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer