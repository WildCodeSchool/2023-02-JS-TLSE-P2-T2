import { useState, useEffect } from "react";
import text from "./auto-text.json";
import logolight from "../assets/LogoLight.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ModalHome = () => {
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
    }, 15);
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
    <div className="bg-color">
      <div className="container">
        <div className="text-container">
          <h1 className="main-title">PokeDev</h1>
          <p className="auto-generated-text">{generatedText}</p>
          <p className="auto-generated-text">{generatedCta}</p>
        </div>
        <div className="img-container">
          <img
            className="fleche"
            src="https://e7.pngegg.com/pngimages/150/238/png-clipart-arrow-logo-three-arrow-angle-rectangle.png"
            alt="flèche"
          />
          <Link to="/pokemain">
            <img src={logolight} alt="logo" className="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalHome;
