import { useState } from 'react'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import SideBar from './components/sidebar/SideBar'
import styles from './Home.module.css'
import { ThemeContext } from './Manger'

const Homepage = () =>{
    const [theme, setTheme] = useState('light');
    return(

         <ThemeContext.Provider value = {{theme,setTheme}}>
            <div className={styles.home_container}>
            <div className={styles.left_container}>
                <SideBar />
            </div>
            <div className={styles.right_container}>
                <NavBar />
                <Hero />
            </div>
         </div>
         </ThemeContext.Provider>
    )
}

export default Homepage