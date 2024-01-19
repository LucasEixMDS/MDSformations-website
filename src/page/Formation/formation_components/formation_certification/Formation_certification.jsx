import "./Formation_certification.scss";
import PropTypes from 'prop-types';
import parchemin from "../../../../../public/parchemin.svg";
import cible from "../../../../../public/cible.svg";
import trophy from "../../../../../public/trophy.svg";
import sacoche from "../../../../../public/sacoche.svg";
import couvert from "../../../../../public/couvert.svg";
import maison from "../../../../../public/maison.svg";


const Formation_certification = ({ formation }) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    return (
        <div className="formation-certification">
        <div className="certification">
            <h4>Optez pour <span style={colorStyle}>l'excellence et la crédibilité</span> en choisissant notre formation</h4>
            <div className="certification-container">
                <p><img src={parchemin} alt="icon d'un parchemin" />Certification Reconnue : Obtenez un diplôme qui fait la différence et ouvre des portes dans votre domaine.</p>
                <div className="certificationContainerDesktop">
                <div className="certification-modal">
                    <h2 style={colorStyle}>{formation.certification.title}</h2>
                    <h3>{formation.certification.rncp}</h3>
                    <h3>{formation.certification.level}</h3>
                    <button style={ {backgroundColor: formation.colorFormation}}>En savoir +</button>
                </div>
                </div>
            </div>
            <p className="certificationText"><img src={cible} alt="icon d'un parchemin" />Avancez avec Confiance : Élevez votre expertise et votre carrière grâce à notre accréditation reconnue.</p>
            <p className="certificationText"><img src={trophy} alt="icon d'un parchemin" />Excellence Récompensée : Notre certification est le gage de votre engagement envers l'apprentissage continu et la maîtrise de votre domaine.</p>
        </div>
        <div className="apprentissage">
            <h4>Concentrez-vous sur votre apprentissage, <span style={colorStyle}>nous nous occupons du reste !</span></h4>
            <p><img src={maison} alt="icon apple d'une maison" />Hébergement sur Place : Des chambres équipées pour un séjour confortable pendant votre formation.</p>
            <p><img src={couvert} alt="icon apple de couvert" />Tout à Portée de Main : Profitez de services complets pour vous permettre de vous concentrer sur votre apprentissage.</p>
            <p><img src={sacoche} alt="icon apple d'une sacoche" />Atmosphère d'Apprentissage : Bénéficiez d'une ambiance propice à la concentration et à l'épanouissement.</p>
            <p>Focalisez-vous sur votre développement, nous prenons soin de votre séjour. Cliquez pour en savoir plus sur nos offres d'hébergement et vivez une expérience de formation sans soucis !</p>
            <button style={ {backgroundColor: formation.colorFormation}}>Découvrir nos hébergements</button>
        </div>
        </div>
    );
};


Formation_certification.propTypes = {
    formation: PropTypes.object.isRequired
};

export default Formation_certification;