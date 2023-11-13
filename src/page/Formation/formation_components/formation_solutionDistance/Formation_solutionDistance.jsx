import "./Formation_solutionDistance.scss";
import PropTypes from 'prop-types';

const Formation_solutionDistance = ({formation}) => {


    const colorStyle = {
        color: formation.colorFormation, 
    };

    return (
        <div className="solutionDistance">
            <h3>Formez-vous aussi <span style={colorStyle}>dans le monde entier.</span></h3>
            <p>Formez-vous sans quitter votre domicile avec notre solution 100 % en ligne.</p>

            <div className="container-distance">
                <div className="container-distance-left">
                <img src="https://mdsformations-website-u5520.vm.elestio.app/distance.png" alt="photo d'une site qui permet de faire des formatiosn à distance" />
                </div>
                <div className="container-distance-right">
                    <p><img src="https://mdsformations-website-u5520.vm.elestio.app/internet.svg" alt="icon de internet en globe tréssé" />Liberté d'Apprentissage : Formez-vous selon votre emploi du temps.</p>
                    <p><img src="https://mdsformations-website-u5520.vm.elestio.app/pc.svg" alt="icon d'un ordinateur portable" />Connexion Virtuelle : Apprenez en ligne, en restant connecté.</p>
                    <p><img src="https://mdsformations-website-u5520.vm.elestio.app/loupe.svg" alt="icon d'une loupe" />Ressources de Qualité : Accédez à un contenu enrichissant.</p>
                    <button style={ {backgroundColor: formation.colorFormation}}>En savoir +</button>
                </div>
            </div>
        </div>
    );
};

Formation_solutionDistance.propTypes = {
    formation: PropTypes.object.isRequired,
  };

export default Formation_solutionDistance;