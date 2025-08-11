import React from 'react'
import UserProfile from '../Profile/UserProfile'
import { Link } from 'react-router-dom'
import UserRouter from '../../../Routers/UserRouter'
import SideBar from '../../Components/SideBar/SideBar'
import styles from './UserHome.module.css'
import NavBar from '../../Components/NavBar/NavBar'

function UserHome() {
   const notes = [
    { id: 1, title: "Introduction to Data Science", date: "2025-08-10", subject: "Data Science" },
    { id: 2, title: "Flutter Widgets Overview", date: "2025-08-09", subject: "Flutter Development" },
    { id: 3, title: "Operating System Notes", date: "2025-08-07", subject: "Computer Science" },
  ];

  const notifications = [
    "Your note 'Flutter Widgets Overview' got 12 downloads!",
    "New note added in 'Web Development' category.",
    "System maintenance scheduled for 15th Aug."
  ];

  return (
    <div className={styles.main_container}>
      <div className={styles.sidebar_container}>
        <SideBar />
      </div>
      <div className={styles.navhero_container}>
        <div className={styles.navbar_container}>
          <NavBar />
        </div>

        <div>
          <UserRouter />

          <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Welcome Section */}
      <h1>Welcome Back, User 👋</h1>
      <p>Here’s what’s new today on NotesHub.</p>

      {/* Latest Notes */}
      <section style={{ marginTop: "30px" }}>
        <h2>📄 Latest Notes</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {notes.map(note => (
            <div
              key={note.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                width: "250px",
                background: "#f9f9f9"
              }}
            >
              <h3>{note.title}</h3>
              <p><b>Subject:</b> {note.subject}</p>
              <p style={{ fontSize: "14px", color: "gray" }}>
                Uploaded on {note.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section style={{ marginTop: "40px" }}>
        <h2>🔔 Notifications</h2>
        <ul>
          {notifications.map((note, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Quick Actions */}
      <section style={{ marginTop: "40px" }}>
        <h2>⚡ Quick Actions</h2>
        <div style={{ display: "flex", gap: "15px" }}>
          <button style={buttonStyle}>Upload New Note</button>
          <button style={buttonStyle}>View All Notes</button>
          <button style={buttonStyle}>Profile Settings</button>
        </div>
      </section>
    </div>
        </div>
      </div>
    </div>
  )
}

const buttonStyle = {
  padding: "10px 15px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default UserHome