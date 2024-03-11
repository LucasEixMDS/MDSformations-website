import "./touteNosFormations.scss";
import FormationLong from "../components/FormationModal";
import Accompa from "components/accompagnement/Accompa";
import { Link } from 'react-router-dom';

const TouteNosFormations = () => {
    return (
        <div className="toutesNosFormations">
            <div className="headerNosFormations">
                <h1>Toutes nos formations</h1>
                <h2>Votre porte d'accès à l'excellence en bien-être et esthétique</h2>
            </div>
            <div className="containerNosFormations">
                <div className="texteNosFormations">
                    <p>Bienvenue dans l'univers des formations en bien-être et esthétique chez MDS Formations. Notre vaste catalogue de formations vous offre une opportunité unique de développer vos compétences, d'acquérir de nouvelles connaissances, et de réaliser vos aspirations professionnelles. Découvrez nos formations diversifiées, conçues pour répondre aux besoins de chaque élève et aux exigences du marché du bien-être et de l'esthétique.</p>
                </div>
                <div className="listeNosFormations">
                    <h3>Formations longues</h3>
                    <FormationLong filterCriteria="vae" />
                    <h3>Formations courtes</h3>
                    <FormationLong filterCriteria="courte" />
                    
                    <h3>Formations en lignes</h3>
                    <div className="formationLigne">
                    <FormationLong filterCriteria="distanciel" />
                    <div className="formationLigneText">
                        <p>Nos formations sont conçues pour être flexibles et adaptées à votre emploi du temps. Que vous préfériez des cours en présentiel, en ligne, ou les deux, nous avons des options pour vous. Nous nous engageons à vous offrir un environnement d'apprentissage positif, dynamique et inclusif, où vous pouvez acquérir les compétences dont vous avez besoin pour exceller dans l'industrie du bien-être et de l'esthétique.</p>
                        <Link to="/valeurs-de-mdsformations"><button>Comprendre nos valeurs</button></Link>
                    </div>
                    </div>
                    <h3>Formations en VAE et VAP</h3>
                    <div className="formationLigne">
                    <FormationLong filterCriteria="vae" />
                    <div className="formationLigneText">
                        <p>Que vous débutiez tout juste votre parcours ou que vous souhaitiez perfectionner vos compétences existantes, nos formations sont un excellent moyen d'acquérir de nouvelles compétences et de progresser dans votre carrière. Rejoignez-nous chez MDS Formations pour explorer le monde passionnant du bien-être et de l'esthétique. Vous êtes sur la voie de la réussite.</p>
                        <Link to="/different-financement" ><button>Comprendre tous les financements</button></Link>
                    </div>
                    </div>
                </div>
            </div>
            <Accompa />
        </div>
    );
};

export default TouteNosFormations;