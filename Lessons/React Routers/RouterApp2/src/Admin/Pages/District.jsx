import React from 'react'
import styles from './District.module.css'

function District() {
  return (
    <div className={styles.district_container}>
      <div className={styles.district_form}>
              <div className={styles.form_title}>Add district</div>
              <input className={styles.form_inp} type="text" name="" id="" placeholder='Enter district'/>
              <button className={styles.form_btn}>Submit</button>
            </div>
    </div>
  )
}

export default District