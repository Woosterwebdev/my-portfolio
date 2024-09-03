//this is currently being developed
import React from 'react'
import data from './project-data'


export default function Project() {
    const projects = data.map(project => {
        <div key={project.id} className="project-card">
            <div>
                <h3 className="project-card--title">{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <img className="screenshot" src={`/assets/${project.image}`} alt={`screenshot of ${project.title}.`} />
        </div> 
    })

    return(
        <>
            {projects}
        </>
    )
}