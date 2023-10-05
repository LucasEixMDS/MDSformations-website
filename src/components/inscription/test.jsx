import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
  const [email, setEmail] = useState(''); // État pour stocker l'adresse e-mail
  const [password, setPassword] = useState(''); // État pour stocker le mot de passe
  
  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    
    const auth = getAuth();
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert('Utilisateur connecté: ' + user.email); // Alert pour montrer que l'utilisateur est connecté
    } catch (error) {
      alert(error.message); // Affiche l'erreur dans une alerte
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <br />
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default SignUp;
