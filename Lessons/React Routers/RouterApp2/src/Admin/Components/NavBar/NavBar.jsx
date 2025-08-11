import React from 'react'
import styles from './NavBar.module.css'
import { CgSearch } from 'react-icons/cg'
import { IoMenu } from 'react-icons/io5'

function NavBar() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.input_container}>
        <input className={styles.input_box} type="text" name="" id="" placeholder='Search'/>
        <div className={styles.search_icon}>
          <CgSearch />
        </div>
      </div>
      <div className={styles.menu_icon}>
       <IoMenu />
      </div>
    </div>
  )
}

export default NavBar