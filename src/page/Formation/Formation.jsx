import formationData from "../../json/formation.json";
import { useParams } from "react-router-dom";
import "./formation.scss"
import FormationHeader from './formation_components/formation_header/formation_header';
import Carrousel_inscription from "./formation_components/formation_caroussel/Caroussel_inscription";
import FormationDescription from "./formation_components/formation_description_metier/FormationDescription"
import Formation_metier from "./formation_components/formation_description_metier/Formation_metier";
import HomeCadreQuestion from "../Home/homecomponents/HomeCadreQuestion"
import Caroussel_financement from "./formation_components/formation_caroussel/CarousselPointFort"
import pouceHaut from "../../assets/pouceHaut.svg"


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
      <Caroussel_financement formation={formation}/>
      </div>
    </div>
  );
          }

export default FormationPage;

