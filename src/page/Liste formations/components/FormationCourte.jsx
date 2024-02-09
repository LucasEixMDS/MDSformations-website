import "./formationCourte.scss";
import formationsData from '../../../json/CarrouselForm.json';

const FormationCourte = () => {
    // Exemple de filtrage pour les formations longues (en utilisant 'vae' comme critère)
    const formationCourte = formationsData.filter(formation => formation.idElement.includes('courte'));

    return (
        <div>
            {formationCourte.map(formation => (
                   <div className="nosFormationsModal" key={formation.id}>
                   <h3>{formation.name}</h3>
                   {formation.idElement.includes('certification') && (
                       <button>Certifiante</button>
                   )}
               </div>
                ))}
        </div>
    );
};

export default FormationCourte;