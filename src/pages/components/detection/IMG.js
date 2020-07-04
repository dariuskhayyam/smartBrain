import React from "react"
import "./IMg.css"

function Image(props){

    const imageStyles = {
        display:"block",
        marginTop:"2em",
        marginRight:"auto",
        marginLeft:"auto",
        width: 300,
        height: "auto"
        
    }
    const boundingBox = {

        top: props.box.topRow, 
        right: props.box.rightCol, 
        bottom: props.box.bottomRow, 
        left: props.box.leftCol,
    }
    const big = {
        display:"flex",
        justifyContent:"center"
    }

    return(
        <div style={big}> 
            <div className="container" >
                
                <img src={props.url} alt="" style={imageStyles} id="inputimage" />
                <div className="bounding-box" style={boundingBox}></div>
                
            </div>   
        </div>
    )
}

export default Image