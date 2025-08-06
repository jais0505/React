import React from 'react'
import styles from './navbar.module.css'

const NavBar = () =>{
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
        </div>
    )
}

export default NavBar