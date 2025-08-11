import { useEffect, useState } from "react";

const Timer = () =>{
    const [count,setCount] = useState(0);
    useEffect(() =>{
        const timer = setInterval(() =>{
            setCount(c => c + 1);
        },1000);

        return () =>{
            clearInterval(timer);
            console.log("Timer stopped")
        }
        
    },[])
    return(
        <div>
           Seconds passed:{count}
        </div>
    )
}

export default Timer;