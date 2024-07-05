import React from "react"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import email from "../assets/email.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--contacts max-width">
                <a href="https://github.com/Woosterwebdev"><img className="footer--img" src={github} /></a>
                <a href="https://www.linkedin.com/in/chris-wooster/"><img className="footer--img" src={linkedin} /></a>
                <a href="mailto:woosterwebdev@gmail.com"><img className="footer--img" src={email} /></a>
            </div>
            <p className="footer--content">&copy; 2024 Christopher Wooster</p>
        </footer>
    )
}