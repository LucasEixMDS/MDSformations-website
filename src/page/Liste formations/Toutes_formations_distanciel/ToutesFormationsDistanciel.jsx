import "./toutesFormationsDistanciel.scss";
import FormationLong from "../components/FormationModal";
import Accompa from "components/accompagnement/Accompa";


const ToutesFormationsDistanciel = () => {
    return (
        <div className="toutesFormationsDistanciel">
            <div className="headerFormationsDistanciel">
                <h1>Les formations en ligne</h1>
                <h2>L’excellence professionnelle à tout moment</h2>
            </div>
            <div className="containerFormationsDistanciel">
                <div className="texteFormationsDistanciel">
                    <p>Bienvenue dans le monde des formations en ligne de MDS Formations, votre passerelle vers une carrière florissante dans le bien-être et l'esthétique. Que vous cherchiez à perfectionner vos compétences, à vous reconvertir professionnellement ou à débuter une nouvelle carrière, nos formations en ligne sont conçues pour répondre à vos besoins.</p>
                    <button>Comprendre la formation à distance</button>
                </div>
                <div className="listeFormationsDistanciel">
                    
                    <h3>Formations en lignes</h3>
                    <div className="formationLigne">
                    <FormationLong filterCriteria="distanciel" />
                    <div className="formationLigneText">
                        <p>Lancez-vous dans une expérience d'apprentissage en ligne qui transformera votre carrière. Que vous cherchiez à perfectionner vos compétences actuelles ou à en acquérir de nouvelles, nos formations en ligne sont conçues pour vous ouvrir les portes de l'excellence professionnelle dans le domaine du bien-être et de l'esthétique. Rejoignez-nous dès aujourd'hui pour une formation complète et personnalisée, où que vous soyez.</p>
                        <button>Comprendre nos valeurs</button>
                    </div>
                    </div>
                </div>
            </div>
            <Accompa />
        </div>
    );
};

export default ToutesFormationsDistanciel;