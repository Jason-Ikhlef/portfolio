import React from "react"
import "./nav.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { FaAward } from "react-icons/fa"
import { BsBookmarkHeartFill } from "react-icons/bs"
import { useState } from "react"


function Nav() {
  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#formation" onClick={() => setActiveNav("#formation")} className={activeNav === "#formation" ? "active" : ""}><FaAward /></a> 
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBook /></a>
      <a href="#hobbies" onClick={() => setActiveNav("#hobbies")} className={activeNav === "#hobbies" ? "active" : ""}><BsBookmarkHeartFill /></a> 
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a> 
    </nav>
  )
}

export default Nav