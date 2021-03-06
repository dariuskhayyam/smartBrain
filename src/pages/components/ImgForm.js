import React from "react"

class ImgForm extends React.Component{

    

    constructor(){
        super()
        this.state = {
            text: "",
            url: "",
        }
    }

    changeHandler = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
        this.props.inputUpdater(value)
    }

    submitHandler = (event) => {
        event.preventDefault()
        let link = this.state.text
        this.setState({url: link});
        this.props.urlPush(link)
    }

    clickHandler = () => {

        let {name, incrementEntries} = this.props

        console.log(name)

        fetch("https://lit-atoll-44265.herokuapp.com/image",{
            method: "put",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({
                name: name
            })
        })

        incrementEntries()
    }

    render(){

        const divStyles = {
            textAlign: "center"
        }
        const inputStyles = {
            display:"block",
            marginRight:"auto",
            marginLeft:"auto",
            width: "30em",
            height: "2em",
            fontSize: "1em",
            textAlign: "center"
        }
        const buttonStyles = {
            height:"2.5em",
            width:"6em",
            display:"block",
            marginRight:"auto",
            marginLeft:"auto",
        }

        return(
            <div style={divStyles}>
                <form onSubmit={this.submitHandler}>
                    
                    <h1>Give us an image and we'll find a face!</h1>
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Image URL" 
                        value={this.state.text} 
                        onChange={this.changeHandler} 
                        style={inputStyles}
                    />

                <button style={buttonStyles} onClick={this.clickHandler}>Find!</button>
                    
                </form>
                
            </div>
        )
    }

}

export default ImgForm