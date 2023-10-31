
import PropTypes from 'prop-types';
import Accordion from './Accordion';

const AccordionWrapper = ({ formation }) => {


    const colorStyle = {
        color: formation.colorFormation, // Pas besoin des parenthèses ou des backticks ici, juste la chaîne de caractères représentant le code hexadécimal de la couleur
    };

  return (
    <div className='programme-container'>
        <h3 style={colorStyle}>Programme de formation</h3>
      {formation.program.blocks.map((block, index) => (
        <Accordion key={index} block={block} formation={formation}/>
      ))}
    </div>
  );
}

AccordionWrapper.propTypes = {
  formation: PropTypes.shape({
    program: PropTypes.shape({
      blocks: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired
  }).isRequired
}

export default AccordionWrapper;