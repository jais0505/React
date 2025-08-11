import { useRef } from "react"

const RefUse1App = () =>{
  const sampleRef = useRef();
  console.log(sampleRef);
  const Click = () => {
    sampleRef.current.style.backgroundColor="red";
  }
  return(
    <div>
      <h1 ref={sampleRef}>hai</h1>
      <input type="text"/>
      <button onClick={Click}>Click</button>
    </div>
  )
}

export default RefUse1App