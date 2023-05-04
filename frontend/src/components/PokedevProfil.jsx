/* import PropTypes from "prop-types"; */
import React from "react";
import PropTypes from "prop-types";
import SideBarTop from "./SidebarTop";
import "../css/PokedevProfil.css";

function PokedevProfil({
  dataSelected,
  langSelected,
  click,
  count,
  setCount,
  dataTab,
  lang,
  dataGiters,
}) {
  // ajout des fonctionnalités pour les boutons du pokedev
  const handleClickPrec = () => {
    setCount(count - 1);
  };
  const handleClickSuiv = () => {
    setCount(count + 1);
  };

  const renderInit = () => {
    return (
      dataGiters && (
        <ul>
          <li className="PokeAvatar">
            <img src={dataGiters.avatar_url} alt={dataGiters.login} />
          </li>
          <li className="name">{dataGiters.name}</li>
          <li className="login">Pseudo: {dataGiters.login}</li>
          <li>
            Lien: <a href="dataGiters.html_url">{dataGiters.html_url}</a>
          </li>
          <li>Followers: {dataGiters.followers}</li>
          <li className="languages">
            {lang.map((langGitter) => (
              <li key={langGitter}>{langGitter}</li>
            ))}
          </li>
        </ul>
      )
    );
  };

  const renderSelected = () => {
    return (
      dataSelected && (
        <ul>
          <li className="PokeAvatar">
            <img src={dataSelected.avatar_url} alt={dataSelected.login} />
          </li>
          <li className="name">{dataSelected.name}</li>
          <li className="login">Pseudo: {dataSelected.login}</li>
          <li>
            Lien: <a href="dataSelected.html_url">{dataSelected.html_url}</a>
          </li>
          <li>Followers: {dataSelected.followers}</li>
          <li className="languages">
            {langSelected.map((langSelec) => (
              <li key={langSelec}>{langSelec}</li>
            ))}
          </li>
        </ul>
      )
    );
  };

  return (
    <div className="PokeProfil">
      <div className="PokedevHeader" />
      <SideBarTop />
      {click === true ? renderSelected() : renderInit()}
      <div className="PokedevButtons">
        <button
          className
          onClick={count > 0 ? handleClickPrec : null}
          type="button"
        >
          Précédent
        </button>
        <button
          type="button"
          onClick={count < dataTab.length - 1 ? handleClickSuiv : null}
        >
          Suivant
        </button>
      </div>
      <div className="PokedevFooter" />
    </div>
  );
}

PokedevProfil.propTypes = {
  dataTab: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,

  lang: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  dataGiters: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  click: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setCount: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  count: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  dataSelected: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  langSelected: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};

export default PokedevProfil;
