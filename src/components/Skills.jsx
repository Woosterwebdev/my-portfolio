import React from "react"
import data from "./data"
  
export default function Skills() {
    const skills = data.map(skill => {
        return(
            <div className="skill">
                <img key={skill.id} className="skills--img" src={`/assets/${skill.image}`} alt={skill.name} />
                <p>{skill.name}</p>
            </div>
    )
})

    return (
        <section className="skills">
            <h2 className="title">Skills</h2>
            <div className="skills--list max-width">
                {skills}
            </div>
        </section>
    )
}