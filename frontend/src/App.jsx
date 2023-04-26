import "./App.css";
import "./Home.css";

// theme
import "primereact/resources/themes/lara-dark-indigo/theme.css";
// core
import "primereact/resources/primereact.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemain from "./pages/Pokemain";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemain" element={<Pokemain />} />
        </Routes>
      </div>
    </Router>
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/pokemain" element={<Pokemain />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
