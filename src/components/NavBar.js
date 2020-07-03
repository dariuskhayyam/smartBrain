import React from "react"

class NavBar extends React.Component{

    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    clickHandler = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
          }));
    }

    render(){

        let buttonText  = this.state.isLoggedIn ? "Log Out" : "Log In" 
        
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
                <button onClick={this.clickHandler} style={buttonStyles}>{buttonText}</button>
            </div>
        )
    }
}

export default NavBar