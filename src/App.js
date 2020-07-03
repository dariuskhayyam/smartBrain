import React from "react"
import Clarifai from "clarifai"
import NavBar from "./components/NavBar"
import ImgForm from "./components/ImgForm"
import Image from "./components/IMG"
import Logo from "./components/Logo"

const app = new Clarifai.App({
    apiKey: '5be6015745dc4b36ac810d7e2a826da0'
    });

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            input:"",
            url:""
        }
    }

    inputUpdater = (input) =>{
        this.setState({input: input})
    }

    urlPush = (url) => {
        this.setState({url: url})
        app.models.predict(Clarifai.GENERAL_MODEL, this.state.input)
        .then(response => {
          console.log(response.outputs[0].data.regions[0].regions_info.bounding_box);
        })
        .catch(err => {
          console.log(err);
        });
    }

    render(){
        return(
            <div>
               <NavBar />
               <Logo />
               <ImgForm urlPush={this.urlPush} inputUpdater={this.inputUpdater}/>
               <Image url={this.state.url} />
            </div>
        )
    }

}

export default App