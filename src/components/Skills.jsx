import React from "react"
import html from '../assets/html.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import nodejs from '../assets/nodejs.png'
import npm from '../assets/npm.png'
import postgre from '../assets/postgre.png'
import git from '../assets/git.png'
import github from '../assets/github.svg'
import firebase from '../assets/firebase.png'


export default function Skills() {
    return (
        <section className="skills">
            <h2 className="title">Skills</h2>
            <div className="skills--list">
                <img className="skills--img" src={html} />
                <img className="skills--img" src={css} />
                <img className="skills--img" src={bootstrap} />
                <img className="skills--img" src={js} />
                <img className="skills--img" src={react} />
                <img className="skills--img" src={nodejs} />
                <img className="skills--img" src={npm} />
                <img className="skills--img" src={postgre} />
                <img className="skills--img" src={git} />
                <img className="skills--img" src={github} />
                <img className="skills--img" src={firebase} />
            </div>
        </section>
        
    )
}
    
    
    // export default function Skills() {
        // const skills = data.map(skill => <img className="skills--img" src={skill.name} />)
        
        // return (
        //     <section className="skills max-width">
        //         <h2 className="title">Skills</h2>
        //         <div className="skills--list">
        //             {skills}
        //         </div>
        //     </section>
        // )