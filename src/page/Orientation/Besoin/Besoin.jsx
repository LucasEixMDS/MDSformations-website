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
                </div>
            ))}

            {/* Modal */}
            {isModalOpen && selectedItem && (
                <div style={{position: 'fixed', top: '10%', left: '10%', width: '80%', height: '80%', background: 'white', overflowY: 'scroll', zIndex: 1000}}>
                    <button onClick={closeModal}>Close</button>
                    {/* Ici, affichez toutes les informations de `selectedItem` */}
                    <h2>{selectedItem.INTITULE}</h2>
                    {/* ... autres informations ... */}
                </div>
            )}
        </div>
    );
}
export default CompetenceFrance;




