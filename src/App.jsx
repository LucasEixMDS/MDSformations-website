import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";  // Ajustez le chemin d'accès en conséquence
import Layout from "./Layout";
import Home from "./page/Home/index.jsx";
import Inscription from "./components/inscription/Inscription"
import Documentation from "./components/documentation/Documentation"
import ArticlePage from "./page/Article/Article"
import FormationPage from "./page/Formation/Formation.jsx";
import Error404 from "page/Error404/Error404";
import Besoin from "./page/Orientation/Besoin/Besoin";
import Hebergement from "./page/ChezMDS/Hebergement/Hebergement";
import Modele from "page/ChezMDS/Modele/Modele";
import Vae from "page/Orientation/VAEVAP/Vae";
import RejoindreMDS from "page/ChezMDS/RejoindreMDS/RejoindreMDS";
import TouteNosFormations from "page/Liste formations/Toutes_formations/TouteNosFormations";
import FormationVae from "page/Liste formations/Toutes_formations_vae/FormationVae";

const App = () => {
  return (
    <BrowserRouter>
       <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/articles/:articleLink" element={<ArticlePage />} />
        <Route path="/:formationLink" element={<FormationPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription /> } />
          <Route path="/documentation" element={<Documentation /> } />
          <Route path="/api" element={<Besoin/>} />
          <Route path="/hebergement" element={<Hebergement />} />
          <Route path="/devenir-modele" element={<Modele />} />
          <Route path="/vae-vap" element={<Vae />} />
          <Route path="/rejoindre-MDS" element={<RejoindreMDS />} />
          <Route path="/toutes-nos-formations" element={<TouteNosFormations />} />
          <Route path="/formations-vae-vap" element={<FormationVae />} />
          <Route  element={<Error404 /> } />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;