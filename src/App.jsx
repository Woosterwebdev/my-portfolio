import React from "react"
import Nav from "./components/Nav"
import Bio from "./components/Bio"
import Demos from "./components/Demos"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Nav />
      <div className="content">
        <Bio />
        <Demos />
      </div>
      <Footer />
    </div>
  )
}