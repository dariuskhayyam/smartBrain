import React from "react"

const style = {
    color: "white",
    dispaly: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "3em"
}

function Rank(props){

    console.log(props)

    let {entries, name} = props.user

    return(
        <div style={style}>
            <h1>{`Hi ${name} You Are Rank number...`}</h1>
            <h1>{` ${entries} `}</h1>
        </div>
    )
}

export default Rank