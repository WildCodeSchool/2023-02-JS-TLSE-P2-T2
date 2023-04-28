import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import text from "./auto-text.json";
import logolight from "../assets/LogoLight.png";
import arrow from "../assets/arrow.svg";

function ModalHome() {
  const [generatedText, setGeneratedText] = useState("");
  const [generatedCta, setGeneratedCta] = useState("");
  const [firstIntervalDone, setFirstIntervalDone] = useState(false);

  const description = text.text1;
  const cta = text.text2;

  useEffect(() => {
    const timer = setInterval(() => {
      setGeneratedText(
        (prevText) => prevText + description.charAt(prevText.length)
      );
    }, 30);
    if (generatedText.length === description.length) {
      setFirstIntervalDone(true);
    }
    if (firstIntervalDone) {
      const ctaTimer = setInterval(() => {
        setGeneratedCta((prevText) => prevText + cta.charAt(prevText.length));
      }, 150);
      return () => clearInterval(ctaTimer);
    }

    return () => clearInterval(timer);
  }, [description, cta, generatedText, firstIntervalDone]);

  return (
    <div className="bg-black h-[100dvh] w-[100dvw]">
      <div className="w-full bg-black flex flex-col flex-wrap items-center">
        <div
          className="text-base leading-10 p-10 w-[100dvw]

        xl:text-xl  xl:leading-10 xl:p-10 xl:mx-auto xl:w-1/2 xl:flex xl:flex-col"
        >
          <h1
            className="text-4xl mb-3 bg-gradient-to-r from-indigo-800 to-purple-500 text-transparent bg-clip-text
          
          xl:mb-6"
          >
            PokeDev
          </h1>
          <p className="text-white">{generatedText}</p>
          <p className="text-white mt-5 xl:mt-9">{generatedCta}</p>
        </div>
        <div className=" flex flex-col items-center  mt-10">
          <img className="fleche" src={arrow} alt="flèche" />
          <Link to="/pokemain">
            <img
              src={logolight}
              alt="logo"
              className="mt-2 w-[20dvw]
            xl:mt-1  xl:w-[10dvw]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModalHome;
