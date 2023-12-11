import { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './headerDesktop.scss';

const MenuItem = ({ title, children }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleToggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // Gestionnaire pour fermer le SubMenu si l'utilisateur clique en dehors
  const handleCloseSubMenu = (event) => {
    if (!event.target.closest('.submenu-container')) {
      setIsSubMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isSubMenuOpen) {
      document.addEventListener('click', handleCloseSubMenu);
    } else {
      document.removeEventListener('click', handleCloseSubMenu);
    }

    // Nettoyage de l'écouteur d'événements
    return () => {
      document.removeEventListener('click', handleCloseSubMenu);
    };
  }, [isSubMenuOpen]);

  return (
    <div className="submenu-container">
      <button onClick={handleToggleSubMenu}>
        {title}
      </button>
      {isSubMenuOpen && children}
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default MenuItem;