import React from 'react'
import styles from './NavBar.module.css'
import { FaRegMoon } from 'react-icons/fa'
import { IoReorderThree } from 'react-icons/io5'
const NavBar = () => {
  return (
    <div className={styles.navbar_container}>
      <input className={styles.search} type="text" placeholder='Search' />
      <button className={styles.theme_btn}>
        <FaRegMoon />
      </button>
      <div className={styles.options}>
        <IoReorderThree />
      </div>
    </div>
  )
}

export default NavBar