const StatePage = (props) =>{
    return(
        <div style={{marginTop:"20px"}}>
            <div>State:<input type="text" onChange={(e) =>props.setState(e.target.value)}/></div>
            <div>Language:<input type="text" onChange={(e) =>props.setLanguage(e.target.value)}/></div>
            <div>Population:<input type="text" onChange={(e) =>props.setPopulation(e.target.value)}/></div>
        </div>
    )
}

export default StatePage 