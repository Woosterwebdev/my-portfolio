import React from "react"
import chris from '../assets/chris.png'

export default function Bio() {
    return (
        <div className="bio max-width">    
            <img className="bio--img" src={chris} />
            <h2 className="title m-10">I am a self taught Web Developer</h2>
            <p className="bio--content m-0">Since late 2021, I have been working on learning Web development. I began using Udemy courses in my spare 
                time. In late 2023 I realized that I needed to commit more time to learning and started on my path of full time education. 
                I found Scrimba in January 2024 and began their Frontend Developer Career Path. It was with Scrimba that
                I really grew in condience and ability.</p>
        </div>
    )
}