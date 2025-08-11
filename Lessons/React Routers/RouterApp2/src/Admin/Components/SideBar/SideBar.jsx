import React from 'react'
import styles from "./SideBar.module.css"
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { TbCategory, TbLogout } from 'react-icons/tb'
import { MdOutlinePlace } from 'react-icons/md'

function SideBar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_title}>Sidebar</div>
       <div className={styles.sidebar_items}>
            <div className={styles.sidebar_item1}>
              <div className={styles.item_icon}>
                <FaHome />
              </div>
                <Link className={styles.custom_link} to="/admin">Home</Link>
            </div>
            <div className={styles.sidebar_item1}>
              <div className={styles.item_icon}>
                <TbCategory />
              </div>
                <Link className={styles.custom_link} to="/admin/category">Category</Link>  
            </div>
            <div className={styles.sidebar_item1}>
              <div className={styles.item_icon}>
                <MdOutlinePlace />
              </div>
                <Link className={styles.custom_link} to="/admin/district">District</Link>
            </div>
            <div className={styles.sidebar_item_logout}>
              <div className={styles.item_icon}>
                <TbLogout />
              </div>
                <Link className={styles.custom_link} to="/admin/district">Logout</Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar