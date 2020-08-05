import React from "react"
import {Link} from "react-router-dom"

function NavBar({isLoggedIn, clickHandler}){

        let buttonText  = "log out"
        
        const divStyles = {
            textAlign:"right",
        }
        const buttonStyles = {
            padding:"0.5rem 2rem 0.5rem",
            backgroundColor:"rgb(1, 1, 1, 0)",
            margin:"1rem",
        }

        return(
            <div style={divStyles}>
               <Link to="/"><button style={buttonStyles}> {buttonText}</button></Link> 
            </div>
        )
    }

export default NavBar