import PropTypes from "prop-types";
import { useState } from "react";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.css";
import SideBarTop from "../components/SidebarTop";
import CardProfil from "../components/CardProfil";
import loadingImg from "../assets/loadingImg.gif";
import ModalProfile from "../components/ModalProfile";
import lightLogo from "../assets/LogoLight.png";
import leftArrow from "../assets/arrow-left-test.svg";
import rightArrow from "../assets/arrow-right-test.svg";

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

  // sélection de 6 profil parmi la liste des données retournées
  const getCurrentCards = () => {
    return dataTab.slice(startIndex, startIndex + 6);
  };
  return (
    <div
      className={`h-[auto] w-[100dvw] bg-gradient-to-b from-indigo-900 backdrop-blur-3xl via-rgba-27-3-199-3615 to-blue-200 xl:pokemain-bg bg-cover bg-center relative ${
        isVisible ? "backdrop-filter backdrop-blur-lg" : ""
      }`}
    >
      <div className="p-7 xl:p-0 xl:w-[100dvw]">
        <h1 className="font-bold bg-gradient-to-b from-indigo-400 to-purple-600 text-transparent bg-clip-text text-5xl xl:m-3 xl:text-left xl:p-5">
          PokeDev
        </h1>
        <div className="hidden  xl:flex xl:items-center xl:mb-5">
          <div className="xl:bg-gray-300 xl:w-1/2 xl:h-1 ">
            <p className="xl:invisible">Lorem</p>
          </div>

          <div className="xl:flex 1">
            <SideBarTop />
          </div>
          <div className="xl:bg-gray-300 xl:w-1/2 xl:h-1">
            <p className="xl:invisible">Lorem</p>
          </div>
        </div>
      </div>
      <div className="xl:flex xl:flex-wrap xl:w-[100dvw]">
        <div className=" xl:w-[100%] xl:flex">
          <div>
            {getCurrentCards().length > 0 ? (
              <CardProfil
                dataTabUsers={getCurrentCards()}
                dataGiters={dataGiters}
              />
            ) : (
              <p>Désolé, pas de profils en vue</p>
            )}
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center">
            <div className="xl:w-[50%] xl:h-[70%] w-[70%] h-[80dvh] bg-white text-black">
              <p>CECI EST LE COMPOSANT POKEDEV</p>
              {loading ? (
                <img src={loadingImg} alt="Loading..." />
              ) : (
                <div>
                  <div>
                    <button type="button" onClick={() => setIsVisible(true)}>
                      Get user
                    </button>
                  </div>
                  {isVisible && (
                    <ModalProfile
                      setIsVisible={setIsVisible}
                      dataRepos={dataRepos}
                      dataTab={dataTab}
                      Lang={Lang}
                      dataGiters={dataGiters}
                    />
                  )}
                </div>
              )}
              <div className="flex justify-center gap-7 p-3 xl:hidden">
                <button onClick={prevCards} type="button">
                  <img
                    src={leftArrow}
                    alt="arrow"
                    className="cursor-pointer w-[3.5dvw]"
                  />
                </button>

                <button type="button" onClick={randomCards} className="hidden">
                  Random
                </button>
                <button className=" onClick={nextCards}" type="button">
                  <img
                    src={rightArrow}
                    alt="arrow"
                    className="cursor-pointer w-[3.5dvw]"
                  />
                </button>
              </div>
            </div>
            <div className="hidden xl:flex xl:mt-5 xl:w-[17dvw] xl:justify-between  xl:p-3">
              <button type="button" onClick={prevCards}>
                <img
                  src={leftArrow}
                  alt="arrow"
                  className="xl:cursor-pointer xl:w-[3.5dvw]"
                />
              </button>

              <button type="button" onClick={randomCards} className="hidden">
                Random
              </button>
              <button onClick={nextCards} type="button">
                <img
                  src={rightArrow}
                  alt="arrow"
                  className="xl:cursor-pointer xl:w-[3.5dvw]"
                />
              </button>
            </div>
          </div>
        </div>
        <div />
      </div>
      <div className="flex m-5 justify-center xl:hidden">
        <img src={lightLogo} className="w-[39dvw] cursor-pointer" alt="logo" />
      </div>
      <div className="w-[100dvw] xl:text-blue-800 ">
        <p>FOOTER</p>
      </div>
    </div>
  );
}

Pokemain.propTypes = {
  dataTab: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  dataRepos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  Lang: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  dataGiters: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  startIndex: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  setStartIndex: PropTypes.number.isRequired,
};
