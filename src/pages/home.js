import React from "react"
import Clarifai from "clarifai"
import ImgForm from "./components/ImgForm.js"
import Image from "./components/detection/IMG.js"
import Logo from "./components/Logo.js"
import Rank from "./components/Rank"
import NavBar from "./components/Rank.js"

const app = new Clarifai.App({
    apiKey: '5be6015745dc4b36ac810d7e2a826da0'
});

class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            input:"",
            url:"",
            box:{

            }
        }
    }

    inputUpdater = (input) =>{
        this.setState({input: input})
    }

    urlPush = (url) => {
        this.setState({url: url})
        app.models.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        .then(response => {
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
            this.displayFace(this.calculateFaceLocation(response))
        })
            .catch(err => console.log(err))
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        }
      }

    displayFace = (box) => {
        this.setState({box: box})
        // alert(this.state.box.leftCol)
    } 

    render(){
        return(
            <div>
               <Logo />
               <Rank user={this.props.user}/>
               <ImgForm urlPush={this.urlPush} inputUpdater={this.inputUpdater} loadUser={this.props.loadUser} incrementEntries={this.props.incrementEntries} name={this.props.user.name}/>
               <Image url={this.state.url} box={this.state.box}/>
            </div>
        )
    }
}

export default Home 