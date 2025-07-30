import React from 'react'
import RegistartionPage from './Registartion'
import LoginPage from './App'

const HomePage = () =>{
    return(
       <div style={{display: "flex",gap:"200px"}}>
            <div>
                <LoginPage />
            </div>
            <div>
                <RegistartionPage />
            </div>
       </div>
    
    )
}

export default HomePage