import PropTypes from "prop-types";
import { useState } from "react";
import SideBarTop from "../components/SidebarTop";
import CardProfil from "../components/CardProfil";
import loadingImg from "../assets/loadingImg.gif";
import ModalProfile from "../components/ModalProfile";
import "../css/CardProfil.css";
import "../css/ModalProfile.css";

// dataTabUser est une fonction qui retourne un tableau d'objet avec les infos des users 6 par 6
// qui est passé en props au composant CardProfil, il est le résultat de l'appel API sur le endpoint user

export default function Pokemain({
  dataTab,
  dataRepos,
  Lang,
  dataGiters,
  startIndex,
  loading,
  setStartIndex,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const nextCards = () => {
    if (startIndex + 6 < dataTab.length) {
      setStartIndex(startIndex + 6);
    }
  };
  // Création du bouton "précédent" pour faire apparaitre 4 profils et faire disparaitre ceux actuels
  const prevCards = () => {
    if (startIndex - 6 >= 0) {
      setStartIndex(startIndex - 6);
    }
  };

  // Création d'un bouton random pour faire apparaitre 4 profils au hasard
  const randomCards = () => {
    const randomStartIndex = Math.floor(Math.random() * (dataTab.length - 6));
    setStartIndex(randomStartIndex);
  };

  // sélection de 4 profil parmi la liste des données retournées
  const getCurrentCards = () => {
    return dataTab.slice(startIndex, startIndex + 6);
  };
  return (
    <>
      <p>Pokemain</p>
      <SideBarTop />
    </>
  );
}

// Pokemain.propTypes = {
//   dataTab: PropTypes.arrayOf(
//     PropTypes.objectOf(
//       PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
//     )
//   ).isRequired,
//   dataRepos: PropTypes.arrayOf(
//     PropTypes.objectOf(
//       PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
//     )
//   ).isRequired,
//   Lang: PropTypes.arrayOf(
//     PropTypes.objectOf(
//       PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
//     )
//   ).isRequired,
//   dataGiters: PropTypes.arrayOf(
//     PropTypes.objectOf(
//       PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
//     )
//   ).isRequired,
//   startIndex: PropTypes.number.isRequired,
//   loading: PropTypes.bool.isRequired,
//   setStartIndex: PropTypes.number.isRequired,
// };
