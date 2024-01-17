import "./Fichette.scss";
import { useState } from 'react';
import fichette from "../../../../../public/fichette.svg";
import Fichette from './Fichette'; // Importez le composant Fichette
import fermer from "../../../../../public/fermer.svg"
import PropTypes from 'prop-types'; // Importez PropTypes

const BouttonFichetteMobile = ({formation}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Fonction pour ouvrir la modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="fichette">
      {/* Bouton pour ouvrir la modal */}
      <div className="buttonFichette" onClick={openModal}>
        <img src={fichette} alt="Image d'un i dans un rond pour information" />
      </div>

      {/* La modal (overlay) */}
      {modalOpen && (
        <div className="modalOverlay">
          {/* Contenu de la modal */}
          <div className="modalContent">
            {/* Bouton pour fermer la modal */}
            <button className="closeButton" onClick={closeModal}>
             <img src={fermer} alt="" />
            </button>
            {/* Contenu de la modal, vous pouvez utiliser le composant Fichette ici */}
            <Fichette formation={formation} />
          </div>
        </div>
      )}
    </div>
  );
};

BouttonFichetteMobile.propTypes = {
    formation: PropTypes.object.isRequired, // Ajoutez la validation de type pour formation
  };

export default BouttonFichetteMobile;