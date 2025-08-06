import React, { useState } from "react";
import styles from './register.module.css'

const RegistrationPage = () =>{
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [bio, setBio] = useState()
    
    return(
        <div className={styles.main_container}>
            <div className={styles.register_box}>
                <div style={{textAlign:"center"}}>
                    Registration Page
                </div>
                <div className={styles.box_one}>
                    <div className={styles.item_one}>
                        <label>Name</label>
                    </div>
                    <div className={styles.item_two}>
                        <input type="text" onChange={(e) => setName(e.target.value)}/>   
                    </div>
                </div>
                <div className={styles.box_two}>
                    <div className={styles.item_three}>
                        <label>Email</label>
                    </div>
                    <div className={styles.item_four}>
                        <input type="text" onChange={(e) => setEmail(e.target.value)}/>   
                    </div>
                </div>
                <div className={styles.box_three}>
                    <div className={styles.item_five}>
                        <label>Bio</label>
                    </div>
                    <div className={styles.item_six}>
                        <input type="text" onChange={(e) => setBio(e.target.value)} />   
                    </div>
                </div>
            </div>
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
                                    <div>{email}</div>
                                </div>
                                <div className={styles.box_item_three}>
                                    <label htmlFor="">Bio:</label>
                                    <div>{bio}</div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default RegistrationPage