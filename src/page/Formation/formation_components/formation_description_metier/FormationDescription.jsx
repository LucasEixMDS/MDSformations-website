import "./formationDescription.scss";
import React from 'react';
import PropTypes from 'prop-types';

class FormationDescription extends React.Component {
  handleDownloadClick = () => {
    // Créez un élément <a> (lien)
    const downloadLink = document.createElement('a');
  
    // Définissez l'URL du fichier que vous souhaitez télécharger en utilisant formation.programme
    const fileUrl = this.props.formation.programme; // Utilisation de la propriété formation.programme
  
    // Définissez le nom du fichier à télécharger
    const fileName = 'nom-du-fichier.extension'; // Remplacez par le nom du fichier
  
    // Définissez l'attribut "href" avec l'URL du fichier
    downloadLink.href = fileUrl;
  
    // Définissez l'attribut "download" avec le nom du fichier
    downloadLink.download = fileName;
  
    // Simulez un clic sur le lien pour déclencher le téléchargement
    downloadLink.click();
  };

  render() {
    const { formation } = this.props;

    return (
      <div className="descriptionContainer">
        <p>{formation.header.description}</p>
        <p>{formation.header.description1}</p>
        <p>{formation.header.description2}</p>
        <p>{formation.header.description3}</p>
        <p>{formation.header.description4}</p>
        <p>{formation.header.description5}</p>
        <button onClick={this.handleDownloadClick} style={{ backgroundColor: formation.colorFormation }}>
          Télécharger le programme de formation
        </button>
      </div>
    );
  }
}

FormationDescription.propTypes = {
  formation: PropTypes.object.isRequired // Vous indiquez que 'formation' est un objet et est requis
};

export default FormationDescription;