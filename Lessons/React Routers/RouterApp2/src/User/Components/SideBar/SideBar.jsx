import React from 'react'
import styles from './SideBar.module.css'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { TbLogout } from 'react-icons/tb'
import { IoHome, IoSettings } from 'react-icons/io5'
function SideBar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_title}>SideBar</div>
      <div className={styles.sidebar_items}>
        <div className={styles.sidebar_item1}>
            <div className={styles.item_icon}>
              <IoHome />
            </div>
              <Link className={styles.custom_link} to="/user">Home</Link>
          </div>
          <div className={styles.sidebar_item1}>
            <div className={styles.item_icon}>
              <CgProfile />
            </div>
              <Link className={styles.custom_link} to="/user/profile">Profile</Link>
          </div>
          <div className={styles.sidebar_item1}>
            <div className={styles.item_icon}>
              <IoSettings />
            </div>
              <Link className={styles.custom_link} to="/user/profile">Settings</Link>
          </div>
          <div className={styles.sidebar_item2}>
            <div className={styles.item_icon}>
              <TbLogout />
            </div>
              <Link className={styles.custom_link} to="">Logout</Link>
          </div>
      </div>
    </div>
  )
}

export default SideBar