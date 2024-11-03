import React from "react"
import "./header.css"
import CV from "../../assets/CV-JASON-IKHLEF.pdf"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Portfolio de</h5>
        <h1>Jason Ikhlef</h1>
        <h3 className="text-light title">Developpeur fullstack</h3>
        <div>
          <a href={CV} download className="btn dl-CV">Télécharger le CV</a>
          <a href="#contact" className="btn btn-primary">Discutons</a>
        </div>
        <div className="header_socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
        <a href="#contact" className="scroll_down">Bas de page</a>
      </div>
    </header>
  )
}

export default Header