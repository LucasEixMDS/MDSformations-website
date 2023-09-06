import "./inscription.scss"
import { useState } from 'react';

function MonFormulaire() {
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        formation: '',
        accepterInformations: false,
        vae: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Ici, vous pouvez envoyer les données à Formspree
        // ...
    }

    return (
        <div className="container_formulaire_inscription">
            <select name="formation" value={formData.formation} onChange={handleChange}>
                <option value="">Formation</option>
                <option value="formation1">Reflexologie</option>
                <option value="formation2">Prothesie ongulaire</option>
                <option value="formation2">Formateur pour adulte</option>
                <option value="formation2">Maquillage permanent</option>
                <option value="formation2">Prothesie en ligne</option>
                <option value="formation2">Reflexologie en ligne</option>
                {/* Ajoutez d'autres formations si nécessaire */}
            </select>
        <form onSubmit={handleSubmit}>
            <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
            <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
            <input type="email" name="email" placeholder="Adresse mail" value={formData.email} onChange={handleChange} />
            <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />
            
            

            <label>
                <input type="checkbox" name="accepterInformations" checked={formData.accepterInformations} onChange={handleChange} />
                J'accepte que mes informations soient utilisées.
            </label>

            <label>
                <input type="checkbox" name="vae" checked={formData.vae} onChange={handleChange} />
                Je souhaite faire une VAE.
            </label>

            <button type="submit">Envoyer</button>
        </form>
        </div>
    );
}

export default MonFormulaire;
