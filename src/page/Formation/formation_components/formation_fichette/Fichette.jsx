import "./Fichette.scss";
import PropTypes from 'prop-types'; // Importez PropTypes

const Fichette = ({ formation }) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    const colorBack = {
        backgroundColor: formation.colorFormation, 
    };

  return (
    <div className="modalFichette">
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
                        <button>En savoir+</button>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>Financement</p>
                    <div className="textFichette">
                        <p>{formation.fichette.financement}</p>
                        <button>En savoir+</button>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>{formation.fichette.titreVae}</p>
                    <div className="textFichette">
                        <p>{formation.fichette.vae}</p>
                        <button>En savoir+</button>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>Hébergement</p>
                    <div className="textFichette">
                        <p>Accessible sur el lieu de formation</p>
                        <button>En savoir+</button>
                    </div>
            </div>
        <div className="buttonDoc">
        <button style={colorBack}>Demander la documentation</button>
        </div>
    </div>
  );
};

Fichette.propTypes = {
  formation: PropTypes.object.isRequired, // Ajoutez la validation de type pour formation
};

export default Fichette;