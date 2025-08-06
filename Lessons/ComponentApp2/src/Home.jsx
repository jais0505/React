import React from 'react'
import SideBar from './Sidebar'
import NavBar from './Navbar'
import DashBoard from './Dashboard'
import Footer from './Footer'
import styles from './home.module.css'

const HomePage = () =>{
    return(
        <div className={styles.homemaindiv}>
            <div>
                <NavBar />
            </div>
            <div className={styles.divtwo}>
                <div> 
                    <SideBar />
                </div>
                <div>
                    <DashBoard />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HomePage