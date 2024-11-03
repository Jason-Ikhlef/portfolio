import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Formation from "./components/formation/Formation"
import Hobbies from "./components/hobbies/Hobbies"

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Formation />
            <Experience />
            <Portfolio />
            <Hobbies />
            <Contact />
            <Footer />
        </>
    )
}

export default App