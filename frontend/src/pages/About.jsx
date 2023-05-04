import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

function About({ aboutProfiles, getAboutProfiles }) {
  const [count, setCount] = useState(0);
  const breakpoint = () => window.innerWidth >= 600;

  useEffect(() => {
    getAboutProfiles();
  }, [breakpoint]);

  const prevSlide = () => {
    if (count === 0) {
      setCount(aboutProfiles.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const nextSlide = () => {
    if (count === aboutProfiles.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const renderMobile = () => {
    return (
      <div className="containerProfiles">
        <ul className="ul_dataProfilesList" key={aboutProfiles[count].data.id}>
          <div className="borderCardTop" />
          <li className="loginAbout">{aboutProfiles[count].data.login}</li>
          <li className="li_imgAboutProfile">
            <img
              className="imgAboutProfile"
              src={aboutProfiles[count].data.avatar_url}
              alt="Profile"
            />
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Nom d'utilisateur : </span>
            {aboutProfiles[count].data.name}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Lien Github : </span>
            {aboutProfiles[count].data.html_url}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Blog : </span>{" "}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Followers : </span>
            {aboutProfiles[count].data.followers}{" "}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Repositories : </span>
            {aboutProfiles[count].data.public_repos}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Localisation : </span>
            {aboutProfiles[count].data.location || "non renseigné"}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Dernière activité : </span>
            {aboutProfiles[count].data.updated_at}
          </li>
        </ul>
        <div className="borderCardBottom" />
      </div>
    );
  };

  const renderDesktop = () => {
    return aboutProfiles.map((el) => (
      <ul className="ul_dataProfilesList" key={el.data.id}>
        <div className="borderCardTop" />
        <li>{el.data.login}</li>
        <li className="li_imgAboutProfile">
          <img
            className="imgAboutProfile"
            src={el.data.avatar_url}
            alt="Profile"
          />
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Nom d'utilisateur : </span>
          {el.data.name}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Lien Github : </span>
          {el.data.html_url}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Blog : </span>
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Followers : </span>
          {el.data.followers}{" "}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Repositories : </span>
          {el.data.public_repos}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Localisation : </span>
          {el.data.location || "non renseigné"}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Dernière activité : </span>{" "}
          {el.data.updated_at}
        </li>
        <div className="borderCardBottom" />
      </ul>
    ));
  };

  return (
    <div className="mainAbout">
      <h1 className="h1About">Pokedex</h1>
      <div className="flex gap-2 justify-content-center">
        <Link to="/pokemain">
          {" "}
          <Button icon="pi pi-home" className="p-button-rounded" />
        </Link>
      </div>
      <div className="aboutBox">
        <section>
          <h3 className="h3About">A propos..</h3>
          <p className="textAbout">
            Si vous êtes à la recherche d'une expertise ou d'un futur
            collaborateur, ce site est fait pour vous ! Il vous aidera à trouver
            la perle rare parmi l'une des plus grandes communautés de
            développeurs au monde : Github. Son fonctionnement repose sur le
            principe du Pokedex, et comme pour son homologue vous devrez
            l'utiliser pour rechercher et trouver des informations sur les
            développeurs. Lorsque vous aurez trouvé le ou les profiles qui vous
            convient, vous n'aurez plus qu'à les contacter aux coordonnés
            indiqués sur leur carte.
            <br />
            Ce site a été réalisé sous la forme d'une application dynamique avec
            'React', une bibliothèque Javascript permettant la création d'une
            interface utilisateur. Les informations obtenues sur les
            développeurs ont été récupérées grâce l'API de GITHUB.
          </p>
        </section>
        <section className="section_dev">
          <h3 className="h3About">Les développeurs</h3>
          <p className="textAbout">
            Ce projet a été réalisé dans le cadre de notre formation de
            développeur web avec la Wild Code School de Toulouse et finalisé le
            05 mai 2023. Vous retrouverez ci-dessous nos propres profiles Github
            et quelques informations sur nos premiers pas en temps que
            développeur junior.
            <br />
          </p>
          <div className="containerProfilesDeskt">
            {aboutProfiles.length > 0 &&
              (window.innerWidth >= 600 ? renderDesktop() : renderMobile())}
          </div>
          <div className="buttonsAbout">
            <button type="button" className="arrowLeft" onClick={prevSlide}>
              &#10094;
            </button>
            <button type="button" className="arrowRight" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </section>
      </div>
      <footer>
        <p>&copy;WCS Projet 2 - 06 Mai 2023</p>
      </footer>
    </div>
  );
}

About.propTypes = {
  aboutProfiles: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  getAboutProfiles: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};

export default About;
