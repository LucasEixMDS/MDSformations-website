import formationData from "../../json/formation.json";
import { useParams } from "react-router-dom";
import "./formation.scss"
import FormationHeader from './formation_components/formation_header/formation_header';
import Carrousel_inscription from "./formation_components/formation_caroussel/Caroussel_inscription";
import FormationDescription from "./formation_components/formation_description_metier/FormationDescription"
import Formation_metier from "./formation_components/formation_description_metier/Formation_metier";
import HomeCadreQuestion from "../Home/homecomponents/HomeCadreQuestion";
import Caroussel_pointfort from "./formation_components/formation_caroussel/CarousselPointFort"
import pouceHaut from "../../assets/pouceHaut.svg";
import Formation_financement from "./formation_components/formation_financement/Formation_financement";
import Formation_cadre from "./formation_components/formation_cadreFinancement/formation_cadreFinancement";
import Formation_plannings from "./formation_components/formation_plannings/Formation_plannings";



function FormationPage() {
  const { formationLink } = useParams();  // Récupère le lien de la formation depuis l'URL

  // Trouvez la formation correspondante
  const formation = formationData.find(f => f.formationLink.endsWith(formationLink));

  if (!formation) {
      return <div>Formation introuvable</div>;
  }

  const colorStyle = {
    color: formation.colorFormation, // Pas besoin des parenthèses ou des backticks ici, juste la chaîne de caractères représentant le code hexadécimal de la couleur
};

  // Utilisez "formation" pour accéder aux détails de la formation
  return (
    <div className="page_formation">  
      <FormationHeader formation={formation} />
      <div className="formation_container">
      <FormationDescription formation={formation}/>
      <Carrousel_inscription formation={formation}/>
      </div>
      <div className="formation_metier">
      <Formation_metier formation={formation} svgColor={formation.colorFormation} /> 
      </div>
      <HomeCadreQuestion />
      <div className="formation_container">
        <div className="formation_pointfort">
        <h3 style={colorStyle}>Nos points forts</h3>
        <div className="modal_emoji">
        <img src={pouceHaut} alt="emoji d'un pouce vers le haut avec le point fermé" />
        </div>
        </div>
        <Caroussel_pointfort formation={formation}/>
      </div>
      <Formation_financement formation={formation} />
      <Formation_cadre />
      <Formation_plannings formation={formation} /> 
    </div>
  );
          }

export default FormationPage;

