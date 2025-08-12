import styles from './NavBar.module.css'
import { IoReorderThree, IoSunnyOutline } from 'react-icons/io5'
import { BsMoonStars } from 'react-icons/bs'
import { useContext } from 'react'
import { ThemeContext } from '../../Manger'
const NavBar = () => {
    const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div className={`${styles.navbar_container} ${styles[theme]}`}>
      <input className={styles.search} type="text" placeholder='Search' />
     <button className={`${styles.theme_btn} ${theme === 'light' ? styles.theme_btn_light : styles.theme_btn_dark}`} onClick={()=>{setTheme(theme === 'light' ? 'dark' : 'light')}}>
        {theme === 'light' ? <BsMoonStars /> : <IoSunnyOutline />}
      </button> 
      <div className={styles.options}>
        <IoReorderThree />
      </div>
    </div>
  )
}

export default NavBar