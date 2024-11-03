import React from "react"
import "./footer.css"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#formation">Diplômes</a></li>
        <li><a href="#experience">Compétences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Jason Ikhlef. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer