import React from 'react'
import "./hobbies.css"
import { GiBookPile } from "react-icons/gi"
import { GrGamepad } from "react-icons/gr"
import { TbLego } from "react-icons/tb"

function Hobbies() {
    return (
        <section id="hobbies" className='container'>
            <h2>Hobbies</h2>

            <div className="hobbies_content">
                <div className="hobbies_cards">
                    <article className='hobbies_card'>
                        <GiBookPile className='hobbies_icons' />
                        <h2>Culture générale</h2>
                        <p>Appétence pour la découverte et la connaissance <br />(sciences, spatial/astronomie, esprit critique...)</p>
                    </article>
                    <article className='hobbies_card'>
                        <GrGamepad className='hobbies_icons' />
                        <h2>Jeux vidéos</h2>
                        <ul>
                            <li>FPS (CS2..)</li>
                            <li>Rogue Like (Slay the spire, The Binding of Isaac...)</li>
                            <li>MetroidVania (Hollow Knight...)</li>
                            <li>Jeux indépendants</li>
                            <li>Joueur complétionniste</li>
                        </ul>
                    </article>
                    <article className='hobbies_card'>
                        <TbLego className='hobbies_icons' />
                        <h2>Lego</h2>
                        <p>Construction de lego</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Hobbies