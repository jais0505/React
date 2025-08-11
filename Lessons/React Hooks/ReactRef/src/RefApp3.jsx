import { useRef, useState } from "react";
import styles from "./RefApp3.module.css"

const RefApp3 = () =>{
    const [size,setSize] = useState(100);
     const [radius,setRadius] = useState(0);

    const elementRef = useRef();
    console.log(elementRef);
    const sizeInHandle = () =>{
        const newSize =size + 10;
        setSize(newSize);
        elementRef.current.style.width=`${newSize}px`;
        elementRef.current.style.height=`${newSize}px`;

    }
    const sizeDeHandle = () =>{
        const newSize =size - 10;
        setSize(newSize);
        elementRef.current.style.width=`${newSize}px`;
        elementRef.current.style.height=`${newSize}px`;

    }

    const radiusInHandle = () =>{
        const newRadius =radius + 5;
        setRadius(newRadius);
        elementRef.current.style.borderRadius=`${newRadius}px`;

    }
    const radiusDeHandle = () =>{
        const newRadius =radius - 5;
        setRadius(newRadius);
        elementRef.current.style.borderRadius=`${newRadius}px`;

    }


    return(
        <div className={styles.main_container}>
            <div className={styles.container} ref={elementRef}></div>
            <div className={styles.btn_container}>
                <div>Change size buttons</div>
                <button className={styles.btn1} onClick={sizeInHandle}>+</button>
                <button className={styles.btn2} onClick={sizeDeHandle}>-</button>
            </div>
            <div className={styles.btn_container}>
                <div>Chaneg boder radius buttons</div>
                <button className={styles.btn1} onClick={radiusInHandle}>+</button>
                <button className={styles.btn2} onClick={radiusDeHandle}>-</button>
            </div>
        </div>
    )
}

export default RefApp3