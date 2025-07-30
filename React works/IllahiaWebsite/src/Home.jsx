import React from 'react'
import styles from './home.module.css'
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const HomePage = () =>{
    return(
        <div>
            <div className={styles.headbar}>
                <div className={styles.logdiv}>
                    <div className={styles.logo1}>
                        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="./src/assets/icaslogo.jpeg" alt="logo" />
                    </div>
                    <div className={styles.logoarea2}>
                        <div className={styles.logo2}>
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="./src/assets/ilahiatextlogo.png" alt="logo2" />
                        </div>
                        <div className={styles.logotxt1}>
                            COLLEGE OF ARTS & SCIENCE
                        </div>
                        <div className={styles.logotxt2}>
                            Affiliated to MG University<br/>
                            & AICTE Approved
                        </div>
                    </div>
                </div>
                <div className={styles.headbardiv2}>
                    <div className={styles.linkdiv}>
                        <div className={styles.alink}>Contact</div>
                        <div className={styles.alink}>ERP</div>
                        <div className={styles.alink}>News</div>
                        <div className={styles.alink}>Alumini</div>
                        <div className={styles.alink}>Careers</div>
                        <div className={styles.alink}>Quik Links</div>
                    </div>
                    <div className={styles.logobtndiv}>
                        <div className={styles.mgulogo}>
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="./src/assets/mgu.png" alt="" />
                        </div>
                        <div className={styles.aictelogo}>
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="./src/assets/aicte.png" alt="" />
                        </div>
                        <div className={styles.admbtndiv}>
                            <button className={styles.admbtn} >ADDMISSION 2025</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navbar}>
                <div className={styles.navbaritems1}>HOME</div>
                <div className={styles.navbaritems}>ABOUT</div>
                <div className={styles.navbaritems}>ACADEMICS</div>
                <div className={styles.navbaritems}>DEPARTMENTS</div>
                <div className={styles.navbaritems}>STUDENTS</div>
                <div className={styles.navbaritems}>STUDENTS</div>
                <div className={styles.navbaritems}>RESOURCES</div>
                <div className={styles.navbaritems}>IQAC</div>
                <div className={styles.navbaritems}>CAMPUS LIFE</div>
                <div className={styles.navbaritems}>INNOVATION</div>
            </div>
            <div className={styles.imgdiv}>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://icas.ac.in/mobilehero.png" alt="" />
            </div>
            <div className={styles.headlinediv}>
                <div style={{margin:"15px",display: "flex",gap:"20px"}}>
                <div className={styles.headlineitems1}>HEADLINES &gt;&gt;&gt;</div>  
                <div className={styles.headlineitems}>COLLEGE DAY CELEBRATION</div>|
                <div className={styles.headlineitems}>ANNUAL SPORTS MEET 2025</div>|
                <div className={styles.headlineitems}>COLLEGE ARTS DAY 2025</div>|
                <div className={styles.headlineitems}>AKHDAR FILM FESTIVAL</div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footertop}>

                </div>
                <hr />
                <div className={styles.footercenter}>
                    <div className={styles.footercenteritem1} >
                        <div>
                            <FaPhone style={{ color: "#1755a7", fontSize: "30px" }} />
                        </div>
                    </div>
                    {/* <div>
                        <FaLocationDot style={{ color: "#1755a7", fontSize: "30px" }} />
                    </div>
                    <div>
                        <IoMdMail style={{ color: "#1755a7", fontSize: "30px" }} />
                    </div> */}
                </div>
                <div className={styles.footerbottom}>
                    <div className={styles.fotterbottomtxt}>© 2024 Ilahia College of Arts & Science. All rights reserved.</div>
                    <img style={{ width: "90px", height: "30px"}} src="./src/assets/uxb.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage