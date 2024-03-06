import PropTypes from 'prop-types';
import './headerDesktop.scss';
import { useRef } from 'react';

const MenuItem = ({ title, onOpen }) => {
  const ref = useRef(null);
  return (
    <button ref={ref} className="menu-item" onClick={() => onOpen(ref)}>
      {title}
    </button>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default MenuItem;
