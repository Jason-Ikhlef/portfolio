import React from 'react'
import "./formation.css"
import { FaAward } from "react-icons/fa"
import { GrLanguage } from "react-icons/gr"

function Formation() {
    return (
        <section id="formation">
            <h2>Diplômes et formations</h2>
            <div className="container">
                <div>
                    <div className="formation_cards">
                        <article className="formation_card div1">
                            <FaAward className="formation_icons" />
                            <h5>WebAcademy by Epitech - Lille</h5>
                            {/* <p>Epitech - Lille</p> */}
                            <small>Novembre 2022 - Novembre 2024</small>
                            {/* <small>Formation professionnelle intégrateur-développeur web</small> */}
                        </article>

                        <article className="formation_card div2">
                            <FaAward className="formation_icons" />
                            <h5>E2C Roubaix - prépa numérique</h5>
                            <small>Mai - Septembre 2022</small>
                            {/* <p>E2C - Roubaix</p> */}
                            {/* <small>Formation de découverte et d'initiation au developpement</small> */}
                        </article>

                        <article className="formation_card div3">
                            <FaAward className="formation_icons" />
                            <h5>Baccalauréat scientifique - Lycée EIC - Tourcoing</h5>
                            <small>2014</small>
                            {/* <p>Lycée EIC - Tourcoing</p>
        <small>options : ISN (informatique et sciences du numérique) et Histoire</small> */}
                        </article>

                        <article className="formation_card div4">
                            <h5><GrLanguage className="formation_icons" /> Langues</h5>
                            <p>Français - langue natale</p>
                            <p>Anglais courant</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Formation