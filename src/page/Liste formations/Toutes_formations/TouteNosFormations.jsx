import "./touteNosFormations.scss";
import FormationLong from "../components/FormationModal";
import Accompa from "components/accompagnement/Accompa";

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
                    <FormationLong filterCriteria="distanciel" />
                    <h3>Formations en VAE et VAP</h3>
                    <FormationLong filterCriteria="vae" />
                </div>
            </div>
            <Accompa />
        </div>
    );
};

export default TouteNosFormations;