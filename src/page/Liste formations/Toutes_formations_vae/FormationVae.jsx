import FormationModal from "../components/FormationModal";
import HomeCadreQuestion from "../../../components/inscription/HomeCadreQuestion";
import "./formationVae.scss";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


const FormationVae = () => {
    return (
        <div className="formationVae">

                <Helmet>
                    <title>Toutes nos formations en VAE ou VAPl</title>
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/formations-vae-vap" />
                </Helmet>               
            <div className="headerFormationVae">
                <h1>Les formations VAE et VAP</h1>
                <h2>Valorisez votre expérience avec nos formations en VAE et VAP</h2>
            </div>
            <div className="containerFormationVae">
            <div className="formationVaeText">
                <p>Chez MDS Formations, nous comprenons que l'expérience est une précieuse ressource. C'est pourquoi nous proposons un large éventail de formations en Validation des Acquis de l'Expérience (VAE) et en Validation des Acquis Professionnels (VAP) pour vous permettre de valoriser vos compétences et d'obtenir une certification dans le domaine du bien-être et de l'esthétique.</p>
                <Link to="/toutes-nos-formations"><button>Toutes nos formations</button></Link>
            </div>
            <h3>Les formations en VAE et VAP </h3>
            <FormationModal filterCriteria="vae" />
            <Link to="/vae-vap"><button className="button">Comprendre la VAE/VAP</button></Link>
            </div>
            <HomeCadreQuestion />
            
        </div>
    );
};

export default FormationVae;