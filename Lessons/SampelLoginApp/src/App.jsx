import React from 'react'
import styles from './loginstyle.module.css'
const LoginPage = () =>{
  return(
    <div className={styles.maindiv}>
      <div className={styles.fblogo}><img style={{height:90,width:300}} src="./src/assets/fblogo.svg" alt="" /></div>
      <div className={styles.logindiv}>
        <div className={styles.logtxt}>Log in to Facebook</div>
        <div className={styles.emaildiv}>
         <input
  style={{
    height: 55,
    width: 390,
    fontSize: 20,
    borderRadius: 8,
    paddingInlineStart: 20,
    border: "1px solid #ddd",     
    outline: "none",              
  }}
  type="email"
  placeholder="Email address or phone number"
/>
        </div>
        <div className={styles.passworddiv}>
          <input style={{height:55,width:390,fontSize:20,borderRadius:8,paddingInlineStart:20,border: "1px solid #ddd",     
    outline: "none", }} type="password" placeholder='Password' />
        </div>
        <div className={styles.loginbtn}>
          <input className={styles.btn} type="button" value="Log in" />
        </div>
        <div className={styles.linkdiv}>
          <div className={styles.forgottendiv}>
            <a className={styles.customlink} href="">Forgotten account?</a>
          </div>
          <div className={styles.signupdiv}>
            <a className={styles.customlink} href="">Sign up for Facebook</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage