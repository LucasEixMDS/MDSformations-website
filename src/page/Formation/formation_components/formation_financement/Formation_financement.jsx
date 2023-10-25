import "./formation_financement.scss";
import PropTypes from 'prop-types';
import Caroussel_financement from "../formation_financement/Caroussel_financement"



const Formation_financement = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    return (
        <div className="financement">
                <div className="financement_tarifs">
                        <h3>Des tarifs <span className="text-color" style={colorStyle}>clairs et transparents</span></h3>
                    <div className="financement_complet">
                        <p className="text-color" style={colorStyle}>{formation.pricing.completForm}</p>
                        <p>formation complète</p>
                    </div>
                </div>
                <Caroussel_financement formation={formation} />
            <div className="financement_prix">
                <div className="financement_prix_top">
                    <div className="financement_dossier">
                        <p>Frais de dossier</p>
                        <p className="text-color" style={colorStyle}>80 €</p>
                    </div>
                    <div className="financement_examen">
                        <p>Frais d'examen</p>
                        <p className="text-color" style={colorStyle}>120 €</p>
                    </div>
                </div>
                <div className="financement_prix_mid">
                    <div className="financement_paiement">
                        <p>Facilité de paiement en plusieurs fois</p>
                        <p className="text-color" style={colorStyle}>sans frais supplémentaires</p>
                    </div>
                </div>
                <div className="financement_prix_bottom">
                    <div className="financement_bloc">
                        <div className="financement_cpf">
                            <p>Formation au bloc 1</p>
                            <p className="text-color" style={colorStyle}>3 100 €</p>
                        </div>
                        <div className="financement_perso">
                            <p>financement personnel</p>
                            <p className="text-color" style={colorStyle}>2 700 €</p>
                        </div>
                    </div>
                    <div className="financement_bloc">
                        <div className="financement_cpf">
                            <p>Formation au bloc 2</p>
                            <p className="text-color" style={colorStyle}>3 500 €</p>
                        </div>
                        <div className="financement_perso">
                            <p>financement personnel</p>
                            <p className="text-color" style={colorStyle}>2 800 €</p>
                        </div>
                    </div>
                    <div className="financement_bloc">
                        <div className="financement_cpf">
                            <p>Formation au bloc 3</p>
                            <p className="text-color" style={colorStyle}>850 €</p>
                        </div>
                        <div className="financement_perso">
                            <p>financement personnel</p>
                            <p className="text-color" style={colorStyle}>650 €</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Formation_financement.propTypes = {
    formation: PropTypes.object.isRequired
};

export default Formation_financement;