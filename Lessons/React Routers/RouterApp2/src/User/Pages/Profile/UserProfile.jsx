import React from 'react'
import styles from './UserProfile.module.css'
import { CgProfile } from 'react-icons/cg'

function UserProfile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_card}>
        <div className={styles.card_item1}>
          
        </div>
        <div className={styles.card_item2}>
          <div className={styles.profile_title}>Profile</div>
          <div className={styles.profile_img}>
            <img style={{width: '150px',
                         height: '150px',
                         borderRadius: '50%',
                         border:"3px soild white",
                         objectFit: 'cover'}} src="/profile.jpg" alt="img" />
          </div>
          <div className={styles.details_container}>
            <div style={{padding:"5px"}}>Alex Peter</div>
            <div style={{padding:"5px"}}>React Developer</div>
            
          </div> 
        </div>
      </div>
    </div>
  )
}

export default UserProfile