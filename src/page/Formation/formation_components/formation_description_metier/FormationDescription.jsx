import "./formationDescription.scss"
import PropTypes from 'prop-types';

function FormationDescription({formation}) {

    return (
        <div >
          <p>{formation.header.description}</p>
          <p>{formation.header.description1}</p>
          <p>{formation.header.description2}</p>
          <p>{formation.header.description3}</p>
          <p>{formation.header.description4}</p>
          <p>{formation.header.description5}</p>
        </div>
    );
}

FormationDescription.propTypes = {
    formation: PropTypes.object.isRequired // Vous indiquez que 'formation' est un objet et est requis
};

export default FormationDescription;