
import PropTypes from 'prop-types';
import "./formation_plannings.scss";

const Formation_plannings = ({ formation }) => {
    // Cette fonction est appelée lorsque l'utilisateur clique sur un bouton de téléchargement.
    const handleDownloadClick = (pdfLink) => {
        // Cela ouvre le lien du PDF dans un nouvel onglet du navigateur.
        window.open(pdfLink, '_blank');
    };

    // Ici, vous devez vous assurer que "formation" et "formation.plannings" existent avant de tenter d'y accéder.
    const plannings = formation?.plannings;

    if (!plannings) {
        return <div>Chargement...</div>; // ou tout autre composant de chargement
    }

    const colorStyle = {
        color: formation.colorFormation, 
    };
    const backgroundStyle = {
        backgroundColor: formation.colorFormation
    };

    return (
        <div className="plannings-container">
            <div className="planningsContainer">
            <h2 style={colorStyle}>Plannings <span>Cliquez sur la ville pour télécharger le planning</span></h2>
            <div className="planningContainerDesktopContainer">
            <div className="planningContainerDesktop">
            <p>Cursus du <span style={colorStyle}>{plannings.dateFirst}</span></p> {/* affiche la première date */}
            
            <div className="plannings-list">
                {/* Ici, je suppose que "list1" est un tableau valide dans votre objet "plannings". */}
                {formation.plannings.list1.map((planning, index) => (
                    <button 
                        style={backgroundStyle}
                        key={index} 
                        className="planning-download-button"
                        onClick={() => handleDownloadClick(planning.pdfLink)}
                    >
                        {planning.name} {/* Affichez ici la propriété 'name' de l'objet 'planning', pas l'objet entier */}
                    </button>
                ))}
            </div>
            </div>
            <div className="planningContainerDesktop">
            <p>Cursus du <span style={colorStyle}>{plannings.dateSecond}</span></p> {/* affiche la deuxième date */}

            <div className="plannings-list">
                {/* Encore une fois, assurez-vous que "list2" est un tableau valide dans votre objet "plannings". */}
                {formation.plannings.list2.map((planning, index) => (
                    <button 
                        style={backgroundStyle}
                        key={index} 
                        className="planning-download-button"
                        onClick={() => handleDownloadClick(planning.pdfLink)}
                    >
                        {planning.name} {/* Affichez ici la propriété 'name' de l'objet 'planning', pas l'objet entier */}
                    </button>
                ))}
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

Formation_plannings.propTypes = {
    formation: PropTypes.object.isRequired
};

export default Formation_plannings;