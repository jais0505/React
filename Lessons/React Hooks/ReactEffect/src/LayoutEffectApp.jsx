import { useEffect,  } from "react"

const LayoutEffectApp = () =>{

    useEffect(() =>{
        // console.log("useEffect hook works after rendering");
        alert("useEffect hook works after rendering");
    },[]);
    // useLayoutEffect(() =>{
    //     // console.log("useLayoutEffect hook works before rendering");
    //     alert("useLayoutEffect hook works before rendering");
    // },[]);
    return(
        <div>Hlo useLayoutEffect hook</div>
    )
}

export default LayoutEffectApp