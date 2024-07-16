import React from "react"

export default function language(props){
    console.log(props)
    return(
    <img className="skills--img" src={props.image} />
    )
}