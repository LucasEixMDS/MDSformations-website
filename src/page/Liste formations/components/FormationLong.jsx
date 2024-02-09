import formationsData from '../../../json/CarrouselForm.json';
import "./formationLong.scss";

const FormationLong = () => {
    // Exemple de filtrage pour les formations longues (en utilisant 'vae' comme critère)
    const longFormations = formationsData.filter(formation => formation.idElement.includes('vae'));

    return (
        <div>
            {longFormations.map(formation => (
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

export default FormationLong;