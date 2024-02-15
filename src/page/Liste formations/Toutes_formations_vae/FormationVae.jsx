import FormationModal from "../components/FormationModal";
import HomeCadreQuestion from "../../../components/inscription/HomeCadreQuestion";
import "./formationVae.scss";

const FormationVae = () => {
    return (
        <div className="formationVae">
            <div className="headerFormationVae">
                <h1>Toutes nos formations</h1>
                <h2>Votre porte d'accès à l'excellence en bien-être et esthétique</h2>
            </div>
            <div className="containerFormationVae">
            <div className="formationVaeText">
                <p>Chez MDS Formations, nous comprenons que l'expérience est une précieuse ressource. C'est pourquoi nous proposons un large éventail de formations en Validation des Acquis de l'Expérience (VAE) et en Validation des Acquis Professionnels (VAP) pour vous permettre de valoriser vos compétences et d'obtenir une certification dans le domaine du bien-être et de l'esthétique.</p>
                <button>Toutes nos formations</button>
            </div>
            <h3>Les formations en VAE et VAP </h3>
            <FormationModal filterCriteria="vae" />
            <button className="button">Comprendre la VAE/VAP</button>
            </div>
            <HomeCadreQuestion />
            
        </div>
    );
};

export default FormationVae;