import { useState } from "react"
import StatePage from "./State"

const AppPage = () =>{
  const [state,setState] = useState("Kerala")
  const [language,setLanguage] = useState("Malayalam")
  const [population,setPopulation] = useState(10000)
  return(
    <div>
      <div>State:{state}</div>
      <div>Language:{language}</div>
      <div>Population:{population}</div>
      
      <StatePage setState={setState} setLanguage={setLanguage} setPopulation={setPopulation}/>
    </div>
  )
}

export default AppPage