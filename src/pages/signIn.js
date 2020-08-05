import React from "react"
import "./inStyles.css"
import {Link} from "react-router-dom"

class SignIn extends React.Component{

    

    constructor(){
        super()
        this.state = {
            SignInUsername: "",
            SignInPassword: "",
            placeHolder: "",
            isSignedIn: false
        }
    }

    SignInUsername = (event) => {
        let {value} = event.target
        this.setState({SignInUsername: value})
    }

    SignInPassword = (event) => {
        let {value} = event.target
        this.setState({SignInPassword: value})
    }

    submitHandler = () => {

        let route = ""

        fetch("https://lit-atoll-44265.herokuapp.com/signin", {
            method: "post",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({
                name: this.state.SignInUsername,
                password: this.state.SignInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === "You are in the database!"){
                this.setState({isSignedIn: true})
                route = "/home"
            }else{
                this.setState({placeHolder: "That might be incorrect"})
                route = "/"
            }
        })

        fetch(`https://lit-atoll-44265.herokuapp.com/profile/${this.state.SignInUsername}?`)
        .then(response => response.json())
        .then(data => this.props.loadUser(data))

        this.setState({
                SignInUsername: "",
                SignInPassword: ""
            })

        return route
    }

    render(){
        return(
            <div className="containDiv">
                <form >
                    <h1>Sign In!</h1> 
                    <br />
                    <label><h3>Username:</h3></label>
                    <br />
                    <input type="text" onChange = {this.SignInUsername} value={this.state.SignInUsername} placeholder={this.state.placeHolder}/>
                    <br />
                    <label><h3>Password:</h3></label>
                    <br />
                    <input type="password" onChange = {this.SignInPassword} value={this.state.SignInPassword} placeholder={this.state.placeHolder} />
                    <br />
                    <Link onClick={this.submitHandler} to={(this.state.isSignedIn) ? "/home" : "/" }className="link"><button>Sign In</button></Link>
                    <br />
                    <small>Don't have an account? <Link to="signup">Sign Up</Link></small>
                </form>
            </div>
        )
    }
}

export default SignIn