import React from "react"
import "./inStyles.css"
import {Link} from "react-router-dom"

class SignUp extends React.Component{

    render(){
        return(
            <div>
                <div className="containDiv">
                    <form>
                        <h1>Sign Up!</h1> 
                        <br />
                        <label><h3>Username:</h3></label>
                        <br />
                        <input type="text" />
                        <br />
                        <label><h3>Email Adress:</h3></label>
                        <br />
                        <input type="email" />
                        <br />
                        <label><h3>Password:</h3></label>
                        <br />
                        <input type="password" />
                        <br />
                        <label><h3>Confirm Password:</h3></label>
                        <br />
                        <input type="password" />
                        <br />
                        <Link to="home" className="link"><button>Sign Up</button></Link>
                        <br />
                        <small>Already have an account? <Link to="/">Sign in</Link></small>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp