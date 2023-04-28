import "./App.css";
import "./css/SideBarTop.css";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
// theme
import "primereact/resources/themes/lara-dark-indigo/theme.css";
// core
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemain from "./pages/Pokemain";
import About from "./pages/About";




function App() {
  // Création des variables à remplir 
  const [dataTab, setDataTab] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [dataUsers, setDataUsers] = useState([]);
  const [dataRepos, setDataRepos] = useState([]);
  const [Lang, setLang] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dataGiters, setDataGiters] = useState([]);
  // const [startIndex,setStartIndex] = useState(0);
  
  // 1e Fetch pour récupérer l'intégralité des données des users remplir un tableau dataTab avec
    
      useEffect(() => {
        axios
          .get("https://api.github.com/users")
          .then((response) => {
            setDataTab(response.data);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }, []);

      // 2e Fetch pour obtenir les infos pour remplir la petite card
    useEffect(() => {
      if (dataTab.length > 0) {
        setLoading(true);
        axios
          .get(`https://api.github.com/users/${dataTab[count].login}`)
          .then((response) => {
            console.log(response);
            setDataGiters(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error.message);
            setLoading(false);
          });
      }
    }, [dataTab, count, setLoading]);

    
    // 3e Fecth pour récupérer les infos pour remplir la modal

    useEffect(() => {
        if (dataTab.length > 0) {
          setLoading(true);
          axios
            .get(`https://api.github.com/users/${dataTab[count].login}/repos`)
            .then((response) => {
              console.log(response);
              setDataRepos(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error(error.message);
              setLoading(false);
            });
        }
      }, [dataTab, count, setLoading]); 

        // on récupére les langages de l'endpoint repos
        useEffect(() => {
          const langSet = new Set();
          for (const repo of dataRepos) {
            if (repo.language) {
              langSet.add(repo.language);
            }
          }
          setLang(Array.from(langSet));
        }, [dataRepos]);
      
        // on récupére les donner du endpoint user(avatar, nomn infos etc...)
      
        
      // Création du bouton "next" pour faire apparaitre 4 profils et faire disparaitre ceux actuels
     
    
      // récupération des infos pour la modal Profil
    
   
    
    
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemain" element={<Pokemain 
                dataTab={dataTab}
                dataRepos={dataRepos}
                Lang={Lang}
                count={count}
                setCount={setCount}
                dataGiters={dataGiters}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
                loading={loading}
                />
                  }/>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
