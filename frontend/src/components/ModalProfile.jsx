import React from "react";
import PropTypes from "prop-types";

function ModalProfile({setIsTrue,dataTab,dataRepos,Lang,dataGiters}) {
  const tabRepos = dataRepos.slice();
  let stars = 0;
  for (let i = 0; i < tabRepos.length; i++) {
    stars += tabRepos[i].stargazers_count;
  }

  return (
    dataTab,
    dataRepos && (
      <div className="giter">
        <button onClick={()=> setIsTrue(false)} className="text-lg">CLOSE</button>
        <ul className="infos" key={dataGiters.id}>
          <div className="profil_header">
            <li className="name">{dataGiters.name}</li>
            <li className="avatar">
              <img src={dataGiters.avatar_url} />{" "}
            </li>
          </div>

          <div className="info-container">
            <li className="login">Pseudo: {dataGiters.login}</li>
            <li>Followers: {dataGiters.followers}</li>
            <li>Repos total: {dataGiters.public_repos}</li>
            <li>localisation : {dataGiters.location}</li>
            <li>Dernière activité : {dataGiters.updated_at}</li>
            <li>Nombre de mis en favoris (Stars) : {stars}</li>
            <li>
              Blog:{" "}
              <a href="{dataGiters.blog}" target="blank">
                {" "}
                {dataGiters.blog}
              </a>
            </li>
            <li>
              Github:{" "}
              <a href="{dataGiters.html_url}" target="blank">
                {dataGiters.html_url}
              </a>
            </li>
          </div>
        </ul>
        <div className="langages">
          <h4 className="langage_title">Langages</h4>
          <ul>
            {Lang.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}

ModalProfile.propTypes = {
  dataUsers: PropTypes.shape({
    avatar_url: "",
    login: "",
    name: "",
    id: "",
    html_url: "",
    followers: "",
    public_repos: "",
    location: "",
    updated_at: "",
  }).isRequired,
};

ModalProfile.propTypes = {
  dataRepo: PropTypes.shape({
    name: "",
    full_name: "",
    stargazers_count: "",
    language: "",
    updated_at: "",
  }).isRequired,
};

export default ModalProfile;
