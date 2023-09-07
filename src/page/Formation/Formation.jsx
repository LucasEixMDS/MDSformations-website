import formationData from "../../json/formation.json";
import { useParams } from "react-router-dom";

function FormationPage() {
  const { formationLink } = useParams();  // Récupère le lien de la formation depuis l'URL

  // Trouvez la formation correspondante
  const formation = formationData.find(f => f.formationLink.endsWith(formationLink));

  if (!formation) {
      return <div>Formation introuvable</div>;
  }

  // Utilisez "formation" pour accéder aux détails de la formation
  return (
    <div className="formation-container">  {/* Utilisez la classe CSS ici */}
        <h1>{formation.header.title}</h1>
        <h2>{formation.header.subtitle}</h2>
        <img src={formation.header.imagePath} alt={formation.header.imageAltText} />
        <p>{formation.header.description}</p>

        <h3>{formation.objectives.title}</h3>
        <ul>
          {formation.objectives.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  );
          }

export default FormationPage;

