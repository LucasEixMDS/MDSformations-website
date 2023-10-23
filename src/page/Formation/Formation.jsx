import formationData from "../../json/formation.json";
import { useParams } from "react-router-dom";
import "./formation.scss"
import FormationHeader from './formation_components/formation_header/formation_header';
import Carrousel_inscription from "./formation_components/formation_caroussel/Caroussel_inscription";
import FormationDescription from "./formation_components/formation_description_metier/FormationDescription"
import Formation_metier from "./formation_components/formation_description_metier/Formation_metier";

function FormationPage() {
  const { formationLink } = useParams();  // Récupère le lien de la formation depuis l'URL

  // Trouvez la formation correspondante
  const formation = formationData.find(f => f.formationLink.endsWith(formationLink));

  if (!formation) {
      return <div>Formation introuvable</div>;
  }

  // Utilisez "formation" pour accéder aux détails de la formation
  return (
    <div className="page_formation">  
      <FormationHeader formation={formation} />
      <div className="formation_description">
        <FormationDescription formation={formation}/>
        <Carrousel_inscription formation={formation}/>
      </div>
      <div className="formation_metier">
        <Formation_metier formation={formation} svgColor={formation.colorFormation} /> 
      </div>
    </div>
  );
          }

export default FormationPage;

