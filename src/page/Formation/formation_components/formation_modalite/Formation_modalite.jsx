import './formation_modalite.scss'
import PropTypes from 'prop-types';
import ecole from "../../../../../public/ecole.svg";
import correction from "../../../../../public/correction.svg";
import siege from "../../../../../public/siege.svg";
import avocate from "../../../../../public/avocate.svg";

const Formation_modalite = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    return (
        <div className='modalite'>
            <h3><span style={colorStyle}>Modalités</span> de la formation</h3>

        <div className="modalite-container">
                <div className="container-left">
                    <div className="modal-top">
                        <div className="modal-top-icon">
                            <img src={ecole} alt="icon apple d'une ecole" />
                        </div>
                        <h4>Pré-requis</h4>
                        <p>Brevet des collèges ou équivalent.</p>
                    </div>
                    <div className="modal-bottom">
                    <div className="modal-bottom-icon">
                            <img src={siege} alt="icon apple d'une personne en siège roulant avec une personne qui roule" />
                        </div>
                        <h4>Accessibilité</h4>
                        <p>Des formations conçues pour accueillir tous les apprenants, quelles que soient leurs capacités.</p>
                        <button>En savoir +</button>
                    </div>
                </div>
                <div className="container-right">
                <div className="modal-top">
                        <div className="modal-top-icon">
                            <img src={correction} alt="icon apple d'une page et d'un stylo pour une copie écrite" />
                        </div>
                        <h4>Examens</h4>
                        <ul>
                            <li>Épreuve théorique écrite</li>
                            <li>Mise en pratique</li>
                            <li>Dossier professionnel</li>
                        </ul>
                    </div>
                    <div className="modal-bottom">
                    <div className="modal-bottom-icon">
                            <img src={avocate} alt="icon apple d'une femme avocate" />
                        </div>
                        <h4>VAE & VAP</h4>
                        <p>Reconnaissance de vos compétences existantes et obtenez la certification que vous méritez.</p>
                        <button>En savoir +</button>
                    </div> 
                </div>
        </div>

        </div>
    );
};


Formation_modalite.propTypes = {
    formation: PropTypes.object.isRequired
};
export default Formation_modalite;