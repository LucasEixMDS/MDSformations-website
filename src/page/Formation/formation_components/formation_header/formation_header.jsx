import "./formation_header.scss"
import { Link } from 'react-router-dom';
import formationData from "../../../../json/formation.json";
import { useParams } from "react-router-dom";

function FormationHeader() {
    const { formationLink } = useParams();  // Récupère le lien de la formation depuis l'URL
  
    // Trouvez la formation correspondante
    const formation = formationData.find(f => f.formationLink.endsWith(formationLink));
  
    if (!formation) {
        return <div>Formation introuvable</div>;
    }

    const backgroundStyle = {
        backgroundImage: `url(${formation.header.imagePath})`,};

        const colorStyle = {
            background: formation.colorFormation, // Pas besoin des parenthèses ou des backticks ici, juste la chaîne de caractères représentant le code hexadécimal de la couleur
        };

    return (
        <div >
            <div className="formation_header" style={backgroundStyle}>
                <div className="formation_header_titre">
                    <h1>{formation.header.subtitle}</h1> 
                    <h2>{formation.header.title}</h2>
                </div>
                <div className="formation_header_modal">
                    <div className="formation_header_modal_left">
                        <div className="formation_header_modal_left_top">
                            <div className="reflect">
                                <p>{formation.emoji}</p>
                            </div>
                        </div>
                            <div className="formation_header_modal_left_mid">
                                <h2>{formation.header.imageAltText}</h2>
                            </div>
                        <div className="button">
                            <Link to="/documentation">
                            <button style={colorStyle}>Faire le test</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FormationHeader;