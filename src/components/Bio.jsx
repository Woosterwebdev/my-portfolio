import React from "react"

export default function Bio() {    
    return (
        <section className="bio">
            <img className="bio--img" src="/assets/chris.jpg" alt="Christopher Wooster." />
            <div className="bio--content">
                <h2 className="title m-10">I am a self taught Web Developer</h2>
                <p className="m-0">Since late 2021, I have been working on learning Web development. I began using Udemy courses in my spare 
                    time. In late 2023 I realized that I needed to commit more time to learning and started on my path of full time education. 
                    I found Scrimba in January 2024 and completed their Frontend Developer Career Path. It was with Scrimba that
                    I really grew in condience and ability.</p>
                <div className="bio--contacts">
                    <a href="https://github.com/Woosterwebdev" target="_blank"><img className="footer--img" src="/assets/github.svg" alt="Christopher Wooster's github." /></a>
                    <a href="https://www.linkedin.com/in/chris-wooster/" target="_blank"><img className="footer--img" src="/assets/linkedin.svg" alt="Christopher Wooster's Linkedin." /></a>
                    <a href="mailto:woosterwebdev@gmail.com" target="_blank"><img className="footer--img" src="/assets/email.svg" alt="Christopher Wooster's Email." /></a>
                </div>
            </div>
        </section>
    )
}

/*

Image by <a href="https://www.freepik.com/free-vector/realistic-lightning-effect_19343405.htm#page=3&query=png&position=12&from_view=keyword&track=ais_hybrid&uuid=fd820f9b-eca4-4cbb-8b2e-ed1f5d18df4c">Freepik</a>



*/
// document.addEventListener('mousemove', function(e) {
//     const button = document.getElementById('contact-me')
//     const offset = 100
//     const xDistance = e.clientX - (button.offsetLeft + button.offsetWidth / 2)
//     const yDistance = e.clientY - (button.offsetTop + button.offsetHeight / 2)
//     if (Math.abs(xDistance) < offset && Math.abs(yDistance) < offset) {
//         const newX = button.offsetLeft + (xDistance > 0 ? -offset : offset)
//         const newY = button.offsetTop + (yDistance > 0 ? -offset : offset)
//         const maxX = window.innerWidth - button.offsetWidth
//         const maxY = window.innerHeight - button.offsetHeight
    
//         button.style.left = Math.max(0, Math.min(newX, maxX)) + 'px'
//         button.style.top = Math.max(0, Math.min(newY, maxY)) + 'px'
//     }
// })