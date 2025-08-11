import React from 'react'
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <div className={styles.navbar_container}>
      <div>
        <input className={styles.search} type="text" name="" id="" placeholder='Search notes'/>
      </div>
    </div>
  )
}

export default NavBar