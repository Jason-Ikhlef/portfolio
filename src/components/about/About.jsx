import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import { FaAward } from 'react-icons/fa';
import { SlMagnifier } from 'react-icons/sl';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsMortarboard } from 'react-icons/bs';

const About = () => {
  return (
    <section id="about">
      <h2>À propos de moi</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="A propos" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icons" />
              <h5>Formation</h5>
              <p>WebAcademy Epitech</p>
              <p>Novembre 2022 - Novembre 2024</p>
              <small>
                {' '}
                <BsMortarboard className="about_icons" /> Major de promo
              </small>
            </article>

            <article className="about_card">
              <SlMagnifier className="about_icons" />
              <h5>Recherche</h5>
              <p>Développeur fullstack</p>
              <p>Backend : Symfony</p>
              <p>Frontend : Nuxt/Vue/React</p>
            </article>

            <article className="about_card">
              <AiOutlineCalendar className="about_icons" />
              <h5>Calendrier</h5>
              <p>Disponible à partir de decembre 2024</p>
            </article>
          </div>
          <p>
            Développeur fullstack passionné par le backend, avec une expérience
            d'un an en alternance sur des projets Symfony et Nuxt. Polyvalent,
            je peux travailler à la fois sur du PHP/Symfony, et des stacks
            frontend comme Vue.js/Nuxt et React. Consciencieux, investi et
            curieux, mon objectif est de contribuer à des projets innovants et
            continuer à développer mon expertise en développement backend.
          </p>
          <div className="btn-container">
            <a href="#contact" className="btn btn-primary talk">
              Discutons !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
