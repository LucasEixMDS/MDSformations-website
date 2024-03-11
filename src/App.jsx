import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";  // Ajustez le chemin d'accès en conséquence
import Layout from "./Layout";
import Home from "./page/Home/index.jsx";
import Inscription from "./components/inscription/Inscription"
import Documentation from "./components/documentation/Documentation"
import ArticlePage from "./page/Article/Article"
import FormationPage from "./page/Formation/Formation.jsx";
import Error404 from "page/Error404/Error404";
import API from "./page/Orientation/BesoinAPI/Besoin";
import Hebergement from "./page/ChezMDS/Hebergement/Hebergement";
import DevenirModele from "page/ChezMDS/Modele/Modele";
import Vae from "page/Orientation/VAEVAP/Vae";
import RejoindreMDS from "page/ChezMDS/RejoindreMDS/RejoindreMDS";
import TouteNosFormations from "page/Liste formations/Toutes_formations/TouteNosFormations";
import FormationVae from "page/Liste formations/Toutes_formations_vae/FormationVae";
import DifferentFinancement from "page/Orientation/Financement/DifferentFinancement";
import ToutesFormationsDistanciel from "page/Liste formations/Toutes_formations_distanciel/ToutesFormationsDistanciel";
import NotreEquipe from "page/ChezMDS/NotreEquipe/NotreEquipe.jsx";
import CommentSinscrire from "page/Orientation/CommentSinscrire/CommentSinscrire";
import PaiementMensualites from "page/Orientation/PaiementMensualites/PaiementMensualites";
import UtiliserCPF from "page/Orientation/UtiliserCPF/UtiliserCPF";
import Handicap from "page/ChezMDS/Handicap/Handicap";
import Distanciel from "./page/ChezMDS/Distanciel/Distanciel"
import Global from "page/Accompagnement/Global/Global";
import Post from "page/Accompagnement/Post/Post";


const App = () => {
  return (

    <BrowserRouter>
       <ScrollToTop />     
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/articles/:articleLink" element={<ArticlePage />} />
        <Route path="/:formationLink" element={<FormationPage />} /> 
        <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription /> } />
          <Route path="/documentation" element={<Documentation /> } />
          <Route path="/api" element={<API/>} />
          <Route path="/hebergement" element={<Hebergement />} />
          <Route path="/devenir-modele" element={<DevenirModele />} />
          <Route path="/vae-vap" element={<Vae />} />
          <Route path="/rejoindre-MDS" element={<RejoindreMDS />} />
          <Route path="/toutes-nos-formations" element={<TouteNosFormations />} />
          <Route path="/formations-vae-vap" element={<FormationVae />} />
          <Route path="/formations-distanciel" element={<ToutesFormationsDistanciel />} />
          <Route path="/different-financement" element={<DifferentFinancement />} />
          <Route path="/notre-equipe-pedagogique" element={<NotreEquipe />} />
          <Route path="/comment-s'inscrire-en-formation" element={<CommentSinscrire />} />
          <Route path="/paiement-mensualites" element={<PaiementMensualites />} />
          <Route path="/utiliser-son-cpf" element={<UtiliserCPF />} />
          <Route path="/handicap" element={<Handicap />} />
          <Route path="/distanciel" element={<Distanciel />} />
          <Route path="/accompagnement-global" element={<Global />} />
          <Route path="/suivis-post-formation" element={<Post />} />
          <Route  element={<Error404 /> } />
          </Route>
      </Routes>
    </BrowserRouter>

 
  );
};

export default App;