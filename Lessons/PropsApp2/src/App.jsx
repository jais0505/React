import StatePage from "./State"

const AppPage = () =>{
  return(
    <div style={{display:"flex"}}>
      <StatePage state={"Kerala"} language={"Malayalam"} population={"50000"}/>
      <StatePage state={"Tamil Nadu"} language={"Tamil"} population={"70000"}/>
    </div>
  )
}

export default AppPage