import formationData from "../../json/formation.json";
import { useParams } from "react-router-dom";
import "./formation.scss"
import FormationHeader from './formation_components/formation_header/formation_header';

function FormationPage() {
  const { formationLink } = useParams();  // Récupère le lien de la formation depuis l'URL

  // Trouvez la formation correspondante
  const formation = formationData.find(f => f.formationLink.endsWith(formationLink));

  if (!formation) {
      return <div>Formation introuvable</div>;
  }

  // Utilisez "formation" pour accéder aux détails de la formation
  return (
    <div>  
      <FormationHeader />
      <div className="texte">
        <p>hello </p>
      </div>
    </div>
  );
          }

export default FormationPage;

