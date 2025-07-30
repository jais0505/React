import React from 'react'
import styles from './registartion.module.css'
const RegistartionPage = () =>{
    return(
        <div className={styles.maindiv}>
            <div className={styles.regform}>
                <div className={styles.regheading}>
                    <div style={{backgroundColor:"#ffffff"}}>Registration Form</div>
                </div>
                <div className={styles.namediv}>
                    <div className={styles.label}>
                        <label style={{backgroundColor:"#ffffff"}}>Name:</label>
                    </div>
                    <div style={{backgroundColor:"#ffffff"}}>
                        <input type="text" className={styles.inpfield}/>
                    </div>
                </div>
                <div className={styles.emaildiv}>
                    <div className={styles.label}>
                        <label style={{backgroundColor:"#ffffff"}}>Email:</label>
                    </div>
                    <div style={{backgroundColor:"#ffffff"}}>
                        <input type="email" className={styles.inpfield} />
                    </div>
                </div>
                <div className={styles.passworddiv}>
                    <div className={styles.label}>
                        <label style={{backgroundColor:"#ffffff"}}>Password:</label>
                    </div>
                    <div style={{backgroundColor:"#ffffff"}}>
                        <input type="password" className={styles.inpfield} />
                    </div>
                </div>
                <div className={styles.contactdiv}>
                    <div className={styles.label}>
                        <label style={{backgroundColor:"#ffffff"}}>Contact:</label>
                    </div>
                    <div style={{backgroundColor:"#ffffff"}}>
                        <input type="number" className={styles.inpfield} />
                    </div>
                </div>
                <div className={styles.addressdiv}>
                    <div className={styles.label}>
                        <label style={{backgroundColor:"#ffffff"}}>Address:</label>
                    </div>
                    <div style={{backgroundColor:"#ffffff"}}>
                        <textarea name="address" id="" className={styles.txtarea}></textarea>
                    </div>
                </div>
                <div  className={styles.genderdiv}>
                    <div className={styles.label}>
                        <label style={{backgroundColor:"#ffffff"}}>Gender:</label>
                    </div>
                    <div className={styles.radiobtn}>
                        <div className={styles.label}>
                            <input style={{ width: 16, height: 16, accentColor: "#1877f2" }} type="radio" name='gender' /> Male
                        </div>
                        <div className={styles.label}>
                            <input style={{ width: 16, height: 16, accentColor: "#d63384" }} type="radio" name='gender'/> Female
                        </div>
                    </div>
                </div>
                <div className={styles.btndiv}>
                   <div>
                     <input className={styles.submitbtn} type="submit" value="Submit" />
                   </div>
                   <div>
                     <input className={styles.resetbtn} type="reset" value="Reset"/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default RegistartionPage