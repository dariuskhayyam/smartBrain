import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/home"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"


class App extends React.Component{

    constructor(){
        super()
        this.state = {
            isLoggedIn: false,
            user: {
                name: "",
                email: "",
                password: "",
                joined: "",
                entries: 0
            }
        }
    }

    incrementEntries = () => {
        this.setState(prevState => {
           return {
                user: {
                ...prevState.user,
                entries: prevState.user.entries + 1
                }
            }
        })
        console.log("incremented")
    }

    loadUser = (user) => {
        this.setState({
            user: {
                name: user.name,
                email: user.email,
                joined: user.joined,
                entries: Number(user.entries)
            }
        })
        console.log(this.state.user)
    }

    render(){

        return(
            <Router>
                <Switch>
                    <Route exact path="/"  render={(props) => <SignIn {...props} loadUser={this.loadUser} />} />
                    <Route path={"/home"} render={(props) => <Home {...props} user={this.state.user} loadUser={this.loadUser} incrementEntries={this.incrementEntries}/>} />
                    <Route path="/signup" render={(props) => <SignUp {...props} loadUser={this.loadUser} />}  />
                </Switch>
            </Router>
        )

    }

}

export default App