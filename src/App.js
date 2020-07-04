import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/home"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"
import NavBar from "./pages/components/NavBar"

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            route: "signUp"
        }
    }

    routeChange = (page) => {
        this.setState({route: page})
    }

    render(){
        return(
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={SignIn}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/signup" component={SignUp}/>
                </Switch>
            </Router>
        )

    }

}

export default App