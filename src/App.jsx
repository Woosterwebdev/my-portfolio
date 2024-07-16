import React from "react"
import Nav from "./components/Nav"
import Bio from "./components/Bio"
import Skills from "./components/Skills"
import Demos from "./components/Demos"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Nav />
      <Bio />
      <Skills />
      <Demos />
      <Footer />
    </div>
        )
}

      
      // return (
      //   <div>
      //     <Nav />
      //     <div className="content">
      //       <Bio />
      //       <Skills />
      //       <Demos />
      //     </div>
      //     <Footer />
      //   </div>
      // )