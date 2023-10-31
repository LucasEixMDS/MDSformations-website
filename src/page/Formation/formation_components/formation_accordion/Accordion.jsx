import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import "./Accordion.scss";

const Accordion = ({ block, formation }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setOpen(open => !open);

 
    
    if (contentRef.current) contentRef.current.style.height = open ? '0px' : `${contentRef.current.firstChild.scrollHeight}px`;
  }

  const colorStyle = {
    color: formation.colorFormation, // Pas besoin des parenthèses ou des backticks ici, juste la chaîne de caractères représentant le code hexadécimal de la couleur
};

  return (
    <div className='accordion'>
      <button className='accordion_header' onClick={toggleAccordion}>
        <div className="accordion-text">
      <h6>{block.title}</h6>
      <div className="details">
        <h6>{block.hours}</h6>
        <h6>{block.modalities}</h6>
      </div>
      </div>
        <div style={colorStyle} className={`accordion_arrow ${open ? 'accordion_arrow_open' : ''}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </button>
      <div ref={contentRef} className={`accordion_collapse ${open ? 'accordion_collapse_open' : ''}`}>
        <div>
          <ul>
            {block.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Accordion.propTypes = {
    block: PropTypes.object.isRequired,
    formation: PropTypes.object.isRequired
}

export default Accordion;