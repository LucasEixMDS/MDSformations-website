import "./FichetteDesktop.scss";
import PropTypes from 'prop-types'; // Importez PropTypes
import { Link } from "react-router-dom";

const Fichette = ({ formation }) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    const colorBack = {
        backgroundColor: formation.colorFormation, 
    };

  return (
    <div className="modalFichette">
        <div className="fichetteContainer">
      <h2>Toutes les informations</h2>
            <div className="containTextFichette">
                <p style={colorStyle}>Durée</p>
                <div className="textFichette">
                    <p>{formation.fichette.time1}</p>
                    <p>{formation.fichette.time2}</p>
                </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>Lieu</p>
                <div className="textFichette">
                    <p>{formation.fichette.lieu}</p>
                </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>Tarifs</p>
                <div className="textFichette">
                    <p>{formation.fichette.tarifs}</p>
                </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>Formation certifiante</p>
                    <div className="textFichette">
                        <p>{formation.certification.rncp}</p>
                        <p>{formation.certification.level}</p>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>Accessibilité</p>
                    <div className="textFichette">
                        <p>Accessible aux personnes en situations de handicap</p>
                        <Link to="/handicap"><button>En savoir+</button></Link>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>Financement</p>
                    <div className="textFichette">
                        <p>{formation.fichette.financement}</p>
                        <Link to="/different-financement"><button>En savoir+</button></Link>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>{formation.fichette.titreVae}</p>
                    <div className="textFichette">
                        <p>{formation.fichette.vae}</p>
                        <Link to="/vae-vap"><button>En savoir+</button></Link>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>Hébergement</p>
                    <div className="textFichette">
                        <p>Accessible sur el lieu de formation</p>
                        <Link to="/hebergement"><button>En savoir+</button></Link>
                    </div>
            </div>
        <div className="buttonDoc">
        <Link to="/Inscription"><button style={colorBack}>Demander la documentation <img src="https://mdsformations-website-u5520.vm.elestio.app/flecheFichette.svg" alt="fleche vers le haut" /></button></Link>
        </div>
        </div>
    </div>
  );
};

Fichette.propTypes = {
  formation: PropTypes.object.isRequired, // Ajoutez la validation de type pour formation
};

export default Fichette;