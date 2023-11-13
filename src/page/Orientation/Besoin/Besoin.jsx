import { useState, useEffect } from 'react';
import axios from 'axios';
import "./besoin.scss"

const CompetenceFrance = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);  // État pour stocker le nombre total de résultats
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // Valeur initiale
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            let filterString;
            if (selectedDate && selectedDate.length === 7) { // Format YYYY-MM
                filterString = `DATE_DECISION[$regex]=.{2}/${selectedDate.slice(5)}/${selectedDate.slice(0, 4)}`;
            } else {
                filterString = 'DATE_DECISION[$regex]=.{2}/05/2023';

            }

            try {
                const response = await axios.get('https://datasets.formatools.fr/api/francecompetences/', {
                    params: {
                        search: searchTerm,
                        filter: filterString,
                        offset: 0,
                        limit: 100
                    }
                });

                setData(response.data.data);
                setCount(response.data.count);  // Mise à jour de l'état count
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm, selectedDate]);

    const handleRectangleClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='container-page-api'>
            {/* Champ de recherche et bouton de soumission */}
           
            <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
               
                <input
                    type="month"
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <button type="submit">Rechercher</button>
            </form>

            {/* Affichage du nombre total de résultats */}
            <p className='text-result'>Total des résultats : {count}</p>
            <div className="certif">
            {/* Affichage des données */}
            {data.map(item => (
                <div 
                    key={item._id.$oid}
                    onClick={() => handleRectangleClick(item)}
                    className='container-certif'
                   
                >
                    <h2>{item.INTITULE}</h2>
                    <p>ID_FICHE: {item.ID_FICHE}</p>
                    <p>NUMERO_FICHE: {item.NUMERO_FICHE}</p>
                    <p>DATE_DECISION: {item.DATE_DECISION}</p>
                    <p>DUREE_ENREGISTREMENT: {item.DUREE_ENREGISTREMENT} ans</p>
                    <p>DATE_FIN_ENREGISTREMENT: {item.DATE_FIN_ENREGISTREMENT}</p>
                    <p>CERTIFICATEUR : {item.CERTIFICATEURS.CERTIFICATEUR.NOM_CERTIFICATEUR}</p>
                    <p>Partenaire existence : {item.EXISTENCE_PARTENAIRES}</p>
                    {item.EXISTENCE_PARTENAIRES === "Oui" && (
                        <p>Nombre de partenaires : {item.PARTENAIRES.PARTENAIRE.length}</p>
                    )}
                </div>
            ))}


            {/* Modal */}
            {isModalOpen && selectedItem && (
    <div className='container-partenaire'  style={{position: 'fixed', top: '10%', left: '10%', width: '80%', height: '80%', background: 'white', overflowY: 'scroll', zIndex: 1000}}>
        <button onClick={closeModal}>Fermer</button>
        <h2>{selectedItem.INTITULE}</h2>
        {/* ... autres informations ... */}

        {selectedItem.EXISTENCE_PARTENAIRES === "Oui" && (
            <div>
                <h3>Partenaires :</h3>
                {selectedItem.PARTENAIRES.PARTENAIRE.map(partenaire => (
                    <div
                    className='container-container-partenaire' style={{
                        border: '1px solid gray',
                        borderRadius: '5px',
                        padding: '10px',
                        margin: '10px 0',
                        backgroundColor: '#f7f7f7'
                    }} key={partenaire.SIRET_PARTENAIRE}>
                        <p>Nom: {partenaire.NOM_PARTENAIRE}</p>
                        <p>Siret: {partenaire.SIRET_PARTENAIRE}</p>
                        <p>Habilitation: {partenaire.HABILITATION_PARTENAIRE}</p>
                        <p>État d'habilitation: {partenaire.ETAT_HABILITATION}</p>
                        <p>Date de dernière modification: {partenaire.DATE_DERNIERE_MODIFICATION_ETAT}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
)}
        </div>
        </div>
    );
}
export default CompetenceFrance;




