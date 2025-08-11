import { useEffect, useState } from "react";

const EffectApp2 = () =>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const limit= 10;
        if(count>limit){
            alert("Count value excceded limit");
        }
    },[count]);
    return(
        <div>
            <p>count:{count}</p>
            <button onClick={() =>setCount(count + 1)}>+</button>
        </div>
    )
}
export default EffectApp2