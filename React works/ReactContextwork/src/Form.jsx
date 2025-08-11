import { useContext } from "react"
import Styles from "./Form.module.css"
import { DetailsContext } from "./Manager"

const FormPage = () =>{
    const {setName} = useContext(DetailsContext);
    const {setEmail} = useContext(DetailsContext);
    const {setPass} = useContext(DetailsContext);
    return(
       <div className={Styles.main_container}>
         <div className={Styles.form_container}>
            <div className={Styles.title}>Form</div>
            <div className={Styles.sub_container}>
                <div className={Styles.items}>
                    <div>Name</div>
                    <div>
                        <input type="text" onChange={(e)=>setName(e.target.value)} />
                    </div>
                </div>
            <div className={Styles.items}>
                <div>Email</div>
                <div>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} />
                </div>
            </div>
            <div className={Styles.items}>
                <div>Password</div>
                <div>
                    <input type="password" onChange={(e)=>setPass(e.target.value)} />
                </div>
            </div>
            </div>
         </div>
       </div>
    )
}

export default FormPage