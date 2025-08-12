import styles from './SideBar.module.css'
import { IoHome, IoSettings } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { IoIosLogOut } from 'react-icons/io'
import { useContext } from 'react'
import { ThemeContext } from '../../Manger'
const SideBar = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`${styles.sidebar_container} ${styles[theme]}`}>
        <div className={styles.sidebar_title}>Logo</div>
        <div className={styles.sidebar_items}>
            <div className={styles.item}>
                <div className={styles.item_icon}>
                    <IoHome />
                </div>
                <div className={styles.item_text}>
                    Home
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_icon}>
                    <CgProfile />
                </div>
                <div className={styles.item_text}>
                    Profile
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_icon}>
                    <IoSettings />
                </div>
                <div className={styles.item_text}>
                    Settings
                </div>
            </div>
            <div className={styles.iteml}>
                <div className={styles.item_icon}>
                    <IoIosLogOut />
                </div>
                <div className={styles.item_text}>
                    Logout
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar