const ChildTwo = ({setName}) =>{
    return(
        <div>
           ChildTwo:
           <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}

export default ChildTwo