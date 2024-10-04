import React from "react"

export default function Demos() {
    return (
        <section className="demos max-width">
            <h2 className="title">Demos</h2>
            <div className="project-cards-container">
                <a href="https://reactcomponentlibrary-351329.netlify.app/" target="_blank">
                    <div className="project-card">
                        <div>
                            <h3 className="project-card--title">React Component Library</h3>
                            <p>Using React and JavaScript, these components are flexible and reusable.</p>
                        </div>
                        <img className="screenshot" src="/assets/react-screenshot.png" alt="React Component Library." />
                    </div>
                </a>
                <a href="https://addtocart-351329.netlify.app/" target="_blank">
                    <div className="project-card">
                        <div className="project-details">
                            <h3 className="project-card--title">Add to Cart</h3>
                            <p>Using JavaScript and Firebase, this shopping list Progressive Web App helps my household 
                            stay on top of our grocery shopping.</p>
                        </div>
                        <img className="screenshot" src="/assets/add-to-cart-screenshot.png" alt="Add to Cart app." />
                    </div>
                </a>
                <a href="https://quizzical-351329.netlify.app/" target="_blank">
                    <div className="project-card">
                        <div className="project-details">
                            <h3 className="project-card--title">Quizzical Movie Trivia App</h3>
                            <p>Using React, JavaScript, and Open Trivia Database API. This movie trivia app has the
                            ability to entertain without falling down a TikTok/Reels/Shorts wormhole and losing track of time.</p>
                        </div>
                        <img className="screenshot" src="/assets/quizzical-screenshot.png" alt="Quizzical Movie Trivia App." />
                    </div>
                </a>
                <a href="#" target="_blank">
                    <div className="project-card">
                        <div className="project-details">
                            <h3 className="project-card--title">3D Model Tracker Chrome Extension</h3>
                            <p>This is a Chrome extension I created to help me track 3D models over various sites. With this app 
                                I am able to drastically reduce the number of models I lose track of.</p>
                        </div>
                        <img className="screenshot" src="/assets/quizzical-screenshot.png" alt="Quizzical Movie Trivia App." />
                    </div>
                </a>
            </div>
        </section>
    )
}