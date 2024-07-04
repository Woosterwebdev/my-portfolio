import React from "react"
import construction from "../assets/construction.jpg"

export default function Demos() {
    return (
        <div className="demos">
            <h2 className="demos--title">Demos</h2>
            <p className="demos--content">Demos coming soon</p>
            <img className="demos--img" src={construction} />
        </div>
    )
}