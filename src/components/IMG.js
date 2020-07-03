import React from "react"

const imageStyles = {
    display:"block",
    marginTop:"2em",
    marginRight:"auto",
    marginLeft:"auto",
    width: 300,
    height: "auto"
}

function Image(props){
    return(
        <div>
            <img src={props.url} alt="" style={imageStyles}/>
        </div>
    )
}

export default Image