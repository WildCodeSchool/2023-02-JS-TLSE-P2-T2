import React from "react";
import PropTypes from "prop-types";
import X from "../assets/x-circle.svg";
import Etoile from "./etoiles";

function ModalProfile({ setIsVisible, dataTab, dataRepos, Lang, dataGiters }) {
  const tabRepos = dataRepos.slice();
  let stars = 0;
  for (let i = 0; i < tabRepos.length; i += 1) {
    stars += tabRepos[i].stargazers_count;
  }

  return (
    dataTab,
    dataRepos && (
      <div className="modalProfil shadow-xl shadow-gray-300  transform -translate-x-1/2 -translate-y-1/2 delay-1000 box-border w-[100dvw] bg-gradient-to-b from-indigo-900 via-rgba-27-3-199-3615 to-blue-200 absolute top-0 left-0 xl:xl:modal-bg xl:h-auto xl:bg-pink-100 xl:w-[60dvw] xl:top-1/2 xl:left-1/2 ">
        <button onClick={() => setIsVisible(false)} type="button">
          <img
            src={X}
            className="xl:bg-opacity-70 cursor-pointer xl:bg-slate-100 xl:m-5 m-7 rounded-full xl:w-[2dvw] xl:block xl:mx-auto block mx-auto transition-all duration-300 xl:hover:w-[4dvw] w-[7dvw] hover:w-[13dvw]"
            alt="closing button"
          />
        </button>

        <ul key={dataGiters.id}>
          <div className="xl:flex xl:w-[100%]  xl:flex-row xl:justify-between xl:modal-bg">
            <section className="xl:p-9 xl:rounded-bl-3xl xl:flex-shrink-0 xl:flex-calc">
              <div className="w-[70%] mx-auto xl:w-[17dvw]">
                <li>
                  <img
                    src={dataGiters.avatar_url}
                    alt={dataTab.login}
                    className="xl:h-[40dvh] xl:object-cover w-[100%] "
                  />
                </li>
              </div>
              <div>
                <div className="mt-8 mb-8 flex justify-around items-center">
                  <p className="xl:hidden text-2xl font-bold">
                    {" "}
                    {dataGiters.name}
                  </p>
                  <p className="text-white font-bold text-4xl xl:hidden">
                    # {dataGiters.id}
                  </p>
                </div>
              </div>
            </section>
            <section className="xl:flex-grow xl:flex xl:flex-col xl:justify-center xl:items-center ">
              <div className=" xl:hidden xl:m-3 xl:p-2 xl:bg-white xl:bg-opacity-60  xl:self-start">
                <p className="hidden text-white text-xl xl:text-blue-950 xl:text-3xl xl:font-bold">
                  {dataGiters.login}
                </p>
              </div>
              <div className="hidden xl:block self-start m-5 ">
                <p className=" pl-20 text-3xl text-white font-bold">
                  ID #{dataGiters.id}
                </p>
              </div>
              <div className=" block mx-auto text-left text-blue-300 bg-opacity-70 bg-white w-[70%] xl:m-5 xl:border-white xl:border-4 xl:border-solid">
                <div className="hidden  xl:flex xl:justify-between xl:items-center xl:m-2">
                  <p className="text-blue-950 font-bold text-xl">PokeDev : </p>
                  <p className="text-blue-950 text-xl font-bold">
                    {dataGiters.login}
                  </p>
                  <p className="invisible">lorem</p>
                </div>
                <div className="xl:bg-white xl:mt-5 xl:bg-opacity-40 xl:mx-auto xl:w-[30%] xl:m-3 xl:p-2">
                  <h2 className="text-center font-bold text-blue-950">TYPE</h2>
                </div>
                <div>
                  <ul className="flex flex-wrap justify-center items-center p-5 text-center text-white font-sans">
                    {Lang.map((lang) => (
                      <li
                        key={lang}
                        className="rounded-xl desc-bg w-[40%] p-1 m-2 font-sans"
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <section className="xl:flex xl:flex-col bg-blue-950 rounded-b-3xl">
            <div className="xl:flex-1 ">
              {stars < 200 ? (
                <div className="xl:flex xl:justify-center">
                  <Etoile />
                </div>
              ) : (
                <p />
              )}
              {stars > 200 && stars < 500 ? (
                <div className="xl:flex xl:justify-center">
                  <Etoile />
                  <Etoile />
                </div>
              ) : (
                <p />
              )}
              {stars > 500 && stars < 1000 ? (
                <div className="xl:flex xl:justify-center">
                  <Etoile />
                  <Etoile />
                  <Etoile />
                </div>
              ) : (
                <p />
              )}
              {stars > 1000 && stars < 2000 ? (
                <div className="xl:flex xl:justify-center">
                  <Etoile />
                  <Etoile />
                  <Etoile />
                  <Etoile />
                </div>
              ) : (
                <p />
              )}
              {stars > 2500 ? (
                <div className="flex justify-center">
                  <Etoile />
                  <Etoile />
                  <Etoile />
                  <Etoile />
                  <Etoile />
                </div>
              ) : (
                <p />
              )}
            </div>

            <div className="xl:flex-2 xl:p-5 text-white">
              <div className=" w-[80%] xl:w-[50%] mx-auto">
                <p>
                  {dataGiters.name} is a famous developer he has &nbsp;
                  <span className="text-yellow-300 font-bold">
                    {dataGiters.followers}
                  </span>{" "}
                  &nbsp; person following his journey he contributed at a total
                  of &nbsp;
                  <span className="text-yellow-300 font-bold">
                    {" "}
                    {dataGiters.public_repos}repos
                  </span>{" "}
                  &nbsp; making him a good assets for your projects. Based on
                  &nbsp;
                  <span className="text-yellow-300 font-bold">
                    {dataGiters.location}
                  </span>{" "}
                  &nbsp; you can teamup directly in person or remotly.
                </p>
              </div>
              <p className="m-5 xl:m-0">
                Dernière activité : &nbsp;{dataGiters.updated_at}
                &nbsp;
              </p>

              <div className="flex gap-5 justify-center m-3 text-blue-950">
                <button
                  className="bg-white p-3 rounded-xl xl:bg-white  xl:p-3 xl:rounded-xl"
                  type="button"
                >
                  <a href={dataGiters.html_url} target="blank">
                    Contact him
                  </a>
                </button>
                <button
                  className="bg-white  p-3 rounded-xl xl:bg-white  xl:p-3 xl:rounded-xl"
                  type="button"
                >
                  <a href={dataGiters.blog} target="blank">
                    His Blog
                  </a>
                </button>
              </div>
            </div>
          </section>
        </ul>
      </div>
    )
  );
}

ModalProfile.propTypes = {
  dataTab: PropTypes.objectOf({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    html_url: PropTypes.string,
    followers: PropTypes.string,
    public_repos: PropTypes.string,
    location: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
  setIsVisible: PropTypes.bool.isRequired,
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
};

export default ModalProfile;
