import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/twitter.jpg";
import IMG2 from "../../assets/ecom.png"
import IMG3 from "../../assets/isaac.png"

function Portfolio() {
  const [showDescription, setShowDescription] = useState([false, false, false]);

  const toggleDescription = (index) => {
    const updatedShowDescription = [...showDescription];
    updatedShowDescription[index] = !updatedShowDescription[index];
    setShowDescription(updatedShowDescription);
  };

  return (
    <section id="portfolio">
      <h5>Mes projets récents</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className={`portfolio_item ${showDescription[0] ? "show-description" : ""}`}>
          <h3>Projet my_twitter</h3>
          <div className="portfolio_item-content">
            {showDescription[0] ? (
              <div className="portfolio_item-description">
                <p>Reconstitution du projet twitter</p>
                <small>Durée : 2 semaines / Groupe : 4</small> <br />
                <small>Langages : PHP, MySQL, HTML, Tailwind</small>
                <p>Objectif : Réaliser une copie la plus proche possible de twitter en local</p>
                <p>Feature principales réalisées :</p>
                <ul>
                  <li>Tweeter/retweeter/retweeter avec citation. Avec ou sans image</li>
                  <li>Répondre aux tweets, et aux réponses de tweets</li>
                  <li>Follow/unfollow</li>
                  <li>Page de profil avec edit possible. Gestion de l'image de profil et de la bannière</li>
                  <li>Recherche par hashtag ou par pseudo</li>
                </ul>
              </div>
            ) : (
              <div className="portfolio_item-image">
                <img src={IMG1} alt="" />
              </div>
            )}
            <div className="btn_container">
              <a href="https://github.com/EpitechWebAcademiePromo2024/W-WEB-090-LIL-1-1-academie-quentin.guidez" className="btn github_btn" target="_blank" rel="noreferrer">Github</a>
              <button className="btn description_btn" onClick={() => toggleDescription(0)}>
                {showDescription[0] ? "Image" : "Description"}
              </button>
            </div>
          </div>
        </article>

        <article className={`portfolio_item ${showDescription[1] ? "show-description" : ""}`}>
          <h3>Projet site e-commerce</h3>
          <div className="portfolio_item-content">
            {showDescription[1] ? (
              <div className="portfolio_item-description">
                <p>Création d'un site e-commerce</p>
                <small>Durée : 6 semaines / Groupe : 6</small> <br />
                <small>Langages : MongoDB / Express / React / NodeJS</small>
                <p>Objectif : Création d'un site e-commerce en stack MERN</p>
                <p>Feature principales réalisées :</p>
                <ul>
                  <li>Structure de la base de données</li>
                  <li>Gestion du stockage et de l'upload des images</li>
                  <li>CRUD articles</li>
                  <li>Recherche et filtres</li>
                </ul>
              </div>
            ) : (
              <div className="portfolio_item-image">
                <img src={IMG2} alt="" />
              </div>
            )}
            <div className="btn_container">
              <a href="https://github.com/EpitechWebAcademiePromo2024/W-PHP-502-LIL-2-1-Quiz-jason.ikhlef" className="btn github_btn" target="_blank" rel="noreferrer">Github</a>
              <button className="btn description_btn" onClick={() => toggleDescription(1)}>
                {showDescription[1] ? "Image" : "Description"}
              </button>
            </div>
          </div>
        </article>

        <article className={`portfolio_item ${showDescription[2] ? "show-description" : ""}`}>
          <h3>Projet jeu navigateur</h3>
          <div className="portfolio_item-content">
            {showDescription[2] ? (
              <div className="portfolio_item-description">
                <p>Création d'un site jeu vidéo sur navigateur</p>
                <small>Durée : 5 semaines / Groupe : 2</small> <br />
                <small>Langages : Phaser.js </small>
                <p>Objectif : Création d'un jeu vidéo au choix sous Phaser</p>
                <p>Feature principales réalisées :</p>
                <ul>
                  <li>Structure du projet</li>
                  <li>Création du personnage</li>
                  <li>Création des monstres + ia</li>
                  <li>Déplacements entre les cartes</li>
                  <li>UI complète</li>
                  <li>Object, dropmanager..</li>
                  <li>Animations</li>
                </ul>
              </div>
            ) : (
              <div className="portfolio_item-image">
                <img src={IMG3} alt="" />
              </div>
            )}
            <div className="btn_container">
              <a href="https://github.com/EpitechWebAcademiePromo2024/W-PHP-502-LIL-2-1-FreeAds-jason.ikhlef" className="btn github_btn" target="_blank" rel="noreferrer">Github</a>
              <button className="btn description_btn" onClick={() => toggleDescription(2)}>
                {showDescription[2] ? "Image" : "Description"}
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;

