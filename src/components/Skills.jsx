import React from "react"
import data from "./data"
  
export default function Skills() {
    const skills = data.map(skill => <img className="skills--img" src={`./assets/${skill.image}`} alt={skill.name} />)

    return (
        <section className="skills max-width">
            <h2 className="title">Skills</h2>
            <div className="skills--list">
                {skills}
            </div>
        </section>
    )
}