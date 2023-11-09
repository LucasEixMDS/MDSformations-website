import "./formation_metierVise.scss";
import carousselData from "../../../../json/CarrouselActu.json";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const FormationMetierVise = ({ formation }) => {
    const colorStyle = {
        color: formation.colorFormation, 
    };

    const article1 = carousselData.find(a => a.id === "001");
    const article2 = carousselData.find(a => a.id === "004");

    return (
        <div className="metierVise-container">
            <h4>Explorez la carrière passionnante de {formation.articleTitle} et découvrez le succès à travers <span style={colorStyle}>les yeux d'un ancien stagiaire !</span></h4>
            
            <div className="metierVise-modal">
                {article1 && (
                    <Link to={article1.articleLink} key={article1.id}>
                    <div className="metierVise_modal_article" style={{ backgroundImage: `url(${article1.photo})` }}>
                        <div className="metierVise_modal_mid">
                            <h3>{article1.text}</h3>
                            <h4>{article1.date}</h4>
                        </div>
                        <button>Lire l'article</button>
                    </div>
                    </Link>
                )}
                {article2 && (
                    <Link to={article2.articleLink} key={article2.id}>
                    <div className="metierVise_modal_article" style={{ backgroundImage: `url(${article2.photo})` }}>
                        <div className="metierVise_modal_mid">
                            <h3>{article2.text}</h3>
                            <h4>{article2.date}</h4>
                        </div>
                        <button>Lire l'article</button>
                    </div>
                    </Link>
                )}
            </div>
            
            <h5 style={colorStyle}>Métiers visés après la formation</h5>
            <ul>
                {formation.jobsAfterTraining.list.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
            
            <h5 style={colorStyle}>Structures envisageables</h5>
            <ul>
                {formation.potentialStructures.list.map((structure, index) => (
                    <li key={index}>{structure}</li>
                ))}
            </ul>
        </div>
    );
};

FormationMetierVise.propTypes = {
    formation: PropTypes.object.isRequired
};

export default FormationMetierVise;