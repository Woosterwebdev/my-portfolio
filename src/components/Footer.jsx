import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--contacts">
                <a href="https://github.com/Woosterwebdev" target="_blank"><img className="footer--img" src="/assets/github.svg" alt="github logo." /></a>
                <a href="https://www.linkedin.com/in/chris-wooster/" target="_blank"><img className="footer--img" src="/assets/linkedin.svg" alt="Linkedin logo." /></a>
                <a href="mailto:woosterwebdev@gmail.com" target="_blank"><img className="footer--img" src="/assets/email.svg" alt="Email logo." /></a>
            </div>
            <p className="footer--content">&copy; 2024 Christopher Wooster</p>
        </footer>
    )
}