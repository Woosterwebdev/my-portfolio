import React from "react"
import chris from '../assets/chris.png'
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

export default function Bio() {
    return (
        <div className="bio-skills">
            <div className="bio">
                <img className="bio--img" src={chris} />
                <h2 className="bio--title">I am a self taught Web Developer</h2>
                <p className="bio--content">Since late 2021, I have been working on learning Web development. I began using Udemy courses in my spare 
                time. In late 2023 I realized that I needed to commit more time to learning and started on my path of full time education. 
                I found Scrimba in January 2024 and began their Frontend Developer Career Path. It was with Scrimba that
                I really grew in condience and ability.</p>
            </div>
            <h2 className="skills--title">Skills</h2>
            <div className="skills">
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
        </div>
    )
}