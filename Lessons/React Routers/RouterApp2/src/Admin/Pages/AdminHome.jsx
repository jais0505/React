import { Link } from "react-router-dom"
import NavBar from "../Components/NavBar/NavBar"
import styles from "./AdminHome.module.css"
import SideBar from "../Components/SideBar/SideBar"
import AdminRouter from "../../Routers/AdminRouter"

const AdminHome = () => {
    return (
        <div className={styles.home_container}>
            <div className={styles.left_container}>
                <SideBar />
            </div>
            <div className={styles.right_container}>
                <div className={styles.navbar_div}>
                    <NavBar />
                </div>
                <div className={styles.hero_container}>
                    <AdminRouter />

                    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                        <h1>Welcome, Admin!</h1>

                        <section style={{ marginTop: '30px' }}>
                            <h2>Dashboard Overview</h2>
                            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                                <div style={{ flex: 1, background: '#e3f2fd', padding: '20px', borderRadius: '10px' }}>
                                    <h3>Users</h3>
                                    <p>Total: 1200</p>
                                </div>
                                <div style={{ flex: 1, background: '#fce4ec', padding: '20px', borderRadius: '10px' }}>
                                    <h3>Projects</h3>
                                    <p>Active: 58</p>
                                </div>
                                <div style={{ flex: 1, background: '#e8f5e9', padding: '20px', borderRadius: '10px' }}>
                                    <h3>Reports</h3>
                                    <p>New: 9</p>
                                </div>
                            </div>
                        </section>

                        <section style={{ marginTop: '40px' }}>
                            <h2>Recent Activities</h2>
                            <ul>
                                <li>User <strong>JohnDoe</strong> updated a project</li>
                                <li>New user <strong>JaneAdmin</strong> registered</li>
                                <li>Report generated on <strong>7th Aug, 2025</strong></li>
                            </ul>
                        </section>

                        <section style={{ marginTop: '40px' }}>
                            <h2>Quick Actions</h2>
                            <button style={{ padding: '10px 15px', marginRight: '10px' }}>Add User</button>
                            <button style={{ padding: '10px 15px', marginRight: '10px' }}>Create Report</button>
                            <button style={{ padding: '10px 15px' }}>Settings</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome