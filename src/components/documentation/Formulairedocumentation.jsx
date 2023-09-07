import "./Documentation"
import { useState } from 'react';
import envoyer from "../../assets/envoyer.svg"


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

    const [message, setMessage] = useState(''); // État pour le message après soumission

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mnqkvlwd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({
                    prenom: '',
                    nom: '',
                    email: '',
                    telephone: '',
                    formation: '',
                    accepterInformations: false,
                    vae: false
                });
                setMessage("Merci !");
            } else {
                setMessage("Ooops! une erreur dans votre formulaire");
            }
        } catch (error) {
            setMessage("Ooops! une erreur dans votre formulaire");
        }
    }

    return (
        <div>
            
        <form onSubmit={handleSubmit}>
            <div className="select-container">
        <select 
        name="formation" 
        value={formData.formation} 
        onChange={handleChange}
        >
            <option value="">Sélectionnez une formation</option>
                <option value="Reflexologie">Reflexologie</option>
                <option value="Prothesie ongulaire">Prothesie ongulaire</option>
                <option value="Formateur pour adulte">Formateur pour adulte</option>
                <option value="Maquillage permanent">Maquillage permanent</option>
                <option value="Prothesie en ligne">Prothesie en ligne</option>
                <option value="Reflexologie en ligne">Reflexologie en ligne</option>
            </select>
            </div>
            <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
            <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
            <input type="email" name="email" placeholder="Adresse mail" value={formData.email} onChange={handleChange} />
            <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />
            
            <label className="vae">
                <input type="checkbox" name="vae" checked={formData.vae} onChange={handleChange} />
                <span>Je souhaite faire une VAE.</span>
            </label>

            <label className="info">
                <input type="checkbox" name="accepterInformations" checked={formData.accepterInformations} onChange={handleChange} />
                <span>En cochant cette case, j’accepte que mes données personnelles soient utilisées et stockées par MDS Formations à des fins de marketing direct.*</span>
            </label>

            
        <div >
                <button type="submit">Recevoir la documentation<img src={envoyer} alt="logo envoyer" /> </button>
                </div>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default MonFormulaire;

