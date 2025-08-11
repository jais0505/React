import { useRef, useState } from "react"

const App = () =>{
  const [cvalue,setCvalue] = useState();
 const pRefValue = useRef();
  const inputRef = useRef();
  console.log(inputRef);
  const ChangeValue = () =>{
    pRefValue.current = cvalue ;
    setCvalue(inputRef.current.value);
  }
  return(
    <div>
      <div>
        <input ref={inputRef} type="text" onChange={ChangeValue}/>
      </div>
      <div>
         Current value:{cvalue}
      </div>
      <div>
        Previuous value:{pRefValue.current}
      </div>
    </div>
  )
}

export default App