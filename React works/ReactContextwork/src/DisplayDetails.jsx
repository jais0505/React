import { useContext } from "react"
import Styles from "./Details.module.css"
import { DetailsContext } from "./Manager";

const DisplayDetails = () =>{
    const {name} = useContext(DetailsContext);
    const {email} = useContext(DetailsContext);
    const {pass} = useContext(DetailsContext);
    return(
        <div>
            <div className={Styles.details_main_container}>
                <div className={Styles.title}>Details</div>
                <div className={Styles.details_div}>
                    <div className={Styles.items}>Name:{name}</div>
                    <div className={Styles.items}>Email:{email}</div>
                    <div className={Styles.items}>Password:{pass}</div>
                </div>
            </div>
        </div>
    )
}

export default DisplayDetails