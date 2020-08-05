import React from "react"
import "./inStyles.css"
import {Link} from "react-router-dom"

class SignUp extends React.Component{

    constructor(){
        super()
        this.state = {
            SignUpUsername: "",
            SignUpPassword: "",
            SignUpemail: "",

        }
    }

    submitHandler = () => {
        fetch("https://lit-atoll-44265.herokuapp.com/register", {
            method: "post",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({
                name: this.state.SignUpUsername,
                password: this.state.SignUpPassword,
                email: this.state.SignUpemail,
                entries: 0
            })
        })
        
        let data = {
            name: this.state.SignUpUsername,
            password: this.state.SignUpPassword,
            email: this.state.SignUpemail
        }

        this.props.loadUser(data)

        this.setState({
                SignUpUsername: "",
                SignUpPassword: ""
            })

    }

    SignUpUsername = (event) => {
        let {value} = event.target
        this.setState({SignUpUsername: value})
    }

    SignUpPassword = (event) => {
        let {value} = event.target
        this.setState({SignUpPassword: value})
    }

    SignUpEmail = (event) => {
        let {value} = event.target
        this.setState({SignUpemail: value})
    }

    render(){
        return(
            <div>
                <div className="containDiv">
                    <form>
                        <h1>Sign Up!</h1> 
                        <br />
                        <label><h3>Username:</h3></label>
                        <br />
                        <input type="text" onChange={this.SignUpUsername}/>
                        <br />
                        <label><h3>Email Adress:</h3></label>
                        <br />
                        <input type="email" onChange={this.SignUpEmail}/>
                        <br />
                        <label><h3>Password:</h3></label>
                        <br />
                        <input type="password" onChange={this.SignUpPassword}/>
                        <br />
                        <label><h3>Confirm Password:</h3></label>
                        <br />
                        <input type="password" />
                        <br />
                        <Link to="home" className="link"><button onClick={this.submitHandler}>Sign Up</button></Link>
                        <br />
                        <small>Already have an account? <Link to="/">Sign in</Link></small>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp