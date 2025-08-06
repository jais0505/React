import React from "react";
import styles from './profile.module.css'
import RegistrationPage from "./Register";

const ProfilePage = () =>{
    return(
        <div>
            <div className={styles.profile_container}>
                <div className={styles.boxes}>
                    <div style={{textAlign:"center",padding:"10px",fontSize:"18px",fontFamily:"sans-serif", fontWeight:"bold",marginTop:"20px"}}>Profile Page</div>
                    <div className={styles.box_item_one}>
                        <label htmlFor="">Name:</label>
                        <div>
                            {name}
                        </div>
                    </div>
                    <div className={styles.box_item_two}>
                        <label htmlFor="">Email:</label>
                        {/* <div>{email}</div> */}
                    </div>
                    <div className={styles.box_item_three}>
                        <label htmlFor="">Bio:</label>
                        {/* <div>{bio}</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage