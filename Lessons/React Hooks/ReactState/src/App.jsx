import React from 'react'
import RegistrationPage from './Register'
import ProfilePage from './Profile'
import styles from './app.module.css'

const AppPage = () =>{
  return(
    <div className={styles.maincontainer}>
      <RegistrationPage />
    </div>
  )
}

export default AppPage