import { useState, useEffect } from 'react';
import axios from 'axios';

const CompetenceFrance = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);  // État pour stocker le nombre total de résultats
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('Concepteur'); // Valeur initiale
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let filterString;
            if (selectedDate && selectedDate.length === 7) { // Format YYYY-MM
                filterString = `DATE_DECISION[$regex]=.{2}\/${selectedDate.slice(5)}\/${selectedDate.slice(0, 4)}`;
            } else {
                filterString = 'DATE_DECISION[$regex]=.{2}\/05\/2023';
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
        <div>
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
            <p>Total des résultats : {count}</p>

            {/* Affichage des données */}
            {data.map(item => (
                <div 
                    key={item._id.$oid}
                    onClick={() => handleRectangleClick(item)}
                    style={{border: '1px solid black', margin: '10px', padding: '10px', cursor: 'pointer'}}
                >
                    <h2>{item.INTITULE}</h2>
                    <p><strong>ID_FICHE:</strong> {item.ID_FICHE}</p>
                    <p><strong>NUMERO_FICHE:</strong> {item.NUMERO_FICHE}</p>
                    <p><strong>DATE_DECISION:</strong> {item.DATE_DECISION}</p>
                    <p><strong>DUREE_ENREGISTREMENT:</strong> {item.DUREE_ENREGISTREMENT}</p>
                    <p><strong>DATE_FIN_ENREGISTREMENT:</strong> {item.DATE_FIN_ENREGISTREMENT}</p>
                    <p>CERTIFICATEUR : {item.CERTIFICATEURS.CERTIFICATEUR.NOM_CERTIFICATEUR}</p>
                    <p>Partenaire existence : {item.EXISTENCE_PARTENAIRES}</p>
                    {item.EXISTENCE_PARTENAIRES === "Oui" && (
                        <p><strong>Nombre de partenaires :</strong> {item.PARTENAIRES.PARTENAIRE.length}</p>
                    )}
                </div>
            ))}


            {/* Modal */}
            {isModalOpen && selectedItem && (
    <div style={{position: 'fixed', top: '10%', left: '10%', width: '80%', height: '80%', background: 'white', overflowY: 'scroll', zIndex: 1000}}>
        <button onClick={closeModal}>Close</button>
        <h2>{selectedItem.INTITULE}</h2>
        {/* ... autres informations ... */}

        {selectedItem.EXISTENCE_PARTENAIRES === "Oui" && (
            <div>
                <h3>Partenaires :</h3>
                {selectedItem.PARTENAIRES.PARTENAIRE.map(partenaire => (
                    <div style={{
                        border: '1px solid gray',
                        borderRadius: '5px',
                        padding: '10px',
                        margin: '10px 0',
                        backgroundColor: '#f7f7f7'
                    }} key={partenaire.SIRET_PARTENAIRE}>
                        <p><strong>Nom:</strong> {partenaire.NOM_PARTENAIRE}</p>
                        <p><strong>Siret:</strong> {partenaire.SIRET_PARTENAIRE}</p>
                        <p><strong>Habilitation:</strong> {partenaire.HABILITATION_PARTENAIRE}</p>
                        <p><strong>État d'habilitation:</strong> {partenaire.ETAT_HABILITATION}</p>
                        <p><strong>Date de dernière modification:</strong> {partenaire.DATE_DERNIERE_MODIFICATION_ETAT}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
)}
        </div>
    );
}
export default CompetenceFrance;




