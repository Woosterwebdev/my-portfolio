import React from "react"
import construction from "../assets/construction.jpg"

export default function Demos() {
    return (
        <section className="demos">
            <h2 className="title">Demos</h2>
            <p className="demos--content m-0">Demos coming soon</p>
            <img className="demos--img" src={construction} />
        </section>
    )
}