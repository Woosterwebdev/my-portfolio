import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--contacts">
                <a href="https://github.com/Woosterwebdev" target="_blank"><img className="footer--img" src="/assets/github.svg" alt="Christopher Wooster's github." /></a>
                <a href="https://www.linkedin.com/in/chris-wooster/" target="_blank"><img className="footer--img" src="/assets/linkedin.svg" alt="Christopher Wooster's Linkedin." /></a>
                <a href="mailto:woosterwebdev@gmail.com" target="_blank"><img className="footer--img" src="/assets/email.svg" alt="Christopher Wooster's Email." /></a>
            </div>
            <p className="footer--content">&copy; 2024 Christopher Wooster</p>
            <a target="_blank" href="https://www.freepik.com/free-vector/realistic-lightning-effect_19343405.htm#page=3&query=png&position=12&from_view=keyword&track=ais_hybrid&uuid=fd820f9b-eca4-4cbb-8b2e-ed1f5d18df4c">Background image provided by Freepik</a>
        </footer>
    )
}