import "./touteNosFormations.scss";
import FormationLong from "../components/FormationLong";
import FormationCourte from "../components/FormationCourte";

const TouteNosFormations = () => {

    return (
        <div className="toutesNosFormations">
            <div className="headerNosFormations">
                <h1>Toutes nos formations</h1>
                <h2>Votre porte d'accès à l'excellence en bien-être et esthétique</h2>
            </div>
            <div className="texteNosFormations">
                <p>Bienvenue dans l'univers des formations...</p>
            </div>
            <div className="nosFormationsListe">
                <h3>Formations longues</h3>
                <FormationLong />
                <h3>Formations courtes</h3>
                <FormationCourte />
            </div>
        </div>
    );
};

export default TouteNosFormations;