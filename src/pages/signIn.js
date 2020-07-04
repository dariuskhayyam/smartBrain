import React from "react"
import "./inStyles.css"
import {Link} from "react-router-dom"

class SignIn extends React.Component{

    render(){
        return(
            <div className="containDiv">
                <form>
                    <h1>Sign In!</h1> 
                    <br />
                    <label><h3>Username:</h3></label>
                    <br />
                    <input type="text" />
                    <br />
                    <label><h3>Password:</h3></label>
                    <br />
                    <input type="password" />
                    <br />
                    <Link to="home" className="link"><button>Sign In</button></Link>
                    <br />
                    <small>Don't have an account? <Link to="signup">Sign Up</Link></small>
                </form>
            </div>
        )
    }
}

export default SignIn