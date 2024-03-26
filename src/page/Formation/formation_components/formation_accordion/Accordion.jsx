import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import "./Accordion.scss";

const Accordion = ({ block, formation }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = open ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [open]);

  const toggleAccordion = () => {
    setOpen(!open);
  }

  const colorStyle = {
    color: formation.colorFormation,
  };

  return (
    <div className='accordion'>
      <button className={`accordion_header ${open ? 'accordion_header_open' : ''}`} onClick={toggleAccordion}>
        <div className="accordion-text">
          <span  className='accordion-titre'>{block.title}</span>
          <div className="details">
            <span style={colorStyle} className='accordion-hours'>{block.hours}</span>
            <span className='accordion-modalities'>{block.modalities}</span>
          </div>
        </div>
        <div className="arrow-container">
          <div style={colorStyle} className={`accordion_arrow ${open ? 'accordion_arrow_open' : ''}`}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
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