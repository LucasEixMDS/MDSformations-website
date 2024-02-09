import formationsData from '../../../json/CarrouselForm.json';
import "./formationModal.scss";
import PropTypes from 'prop-types';

// Fonction pour mélanger les formations
const shuffleFormations = (formations) => {
  const shuffled = [...formations];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const FormationLong = ({ filterCriteria }) => {
    let filteredFormations = formationsData.filter(formation => formation.idElement.includes(filterCriteria));

    // Mélanger les formations pour un ordre aléatoire
    filteredFormations = shuffleFormations(filteredFormations);

    return (
        <div className='formationLong'>
            {filteredFormations.map(formation => (
                <a href={formation.formationURL} target="_blank" rel="noopener noreferrer" key={formation.id}>
                    <div className="nosFormationsModal" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${formation.photo})` }}>
                        <div className="formationTextBottom">
                            <h3>{formation.name}</h3>
                            {formation.idElement.includes('certification') && (
                                <div className="clickModal">
                                    <button><p>Certifiante</p></button>
                                </div>
                        )}
                         
                            </div>
                            <div className="svgdiv">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <g opacity="0.9">
                                <path d="M12.5 24.9878C19.3383 24.9878 25 19.3166 25 12.4939C25 5.659 19.326 0 12.4877 0C5.66176 0 0 5.659 0 12.4939C0 19.3166 5.67401 24.9878 12.5 24.9878Z" fill="#F2F2F2"/>
                                <path d="M16.4579 15.6294C15.8942 15.6294 15.5265 15.2374 15.5265 14.6373V12.4692L15.7103 10.4971L13.8845 12.4447L9.26431 17.0748C9.06824 17.2586 8.8354 17.3688 8.52903 17.3688C7.97755 17.3688 7.59766 17.0013 7.59766 16.4256C7.59766 16.1807 7.7202 15.9234 7.90403 15.7397L12.5486 11.1096L14.5217 9.27226L12.6466 9.46824H10.3673C9.75452 9.46824 9.36236 9.10077 9.36236 8.54957C9.36236 7.98612 9.74226 7.61865 10.3428 7.61865H16.3231C16.9727 7.61865 17.3893 7.91262 17.3893 8.65981V14.6128C17.3893 15.2007 17.0094 15.6294 16.4579 15.6294Z" fill="#4F4F4F"/>
                                </g>
                                </svg>
                            </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

FormationLong.propTypes = {
  filterCriteria: PropTypes.string.isRequired,
};

export default FormationLong;