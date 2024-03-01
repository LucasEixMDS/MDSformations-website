import HomeFinancement from "page/Home/homecomponents/HomeFinancement";
import HomeTemoin from "page/Home/homecomponents/HomeTemoin";
import Formulaireinscription from "./Formulaireinscription"
import "./inscription.scss"


const Inscription = () => {
    return (
        <div className="inscription">
            <div className="inscription_text">
                <h1>Inscription en ligne</h1>
                <p>Vous êtes prêt(e) à vous lancer ?</p>
                <div>
                    <p>Contactez nous directement par téléphone ou mail</p>
                <button>02 40 96 32 80</button>
                </div>
                <div>
                <button>camille.melodiedessens@gmail.com</button>
                </div>
                <p>Sinon, nous vous contacterons dans les plus brefs délais pour votre inscription :</p>
                </div>
            <div className="inscription_formulaire">
                
                <Formulaireinscription />
            </div>
            <HomeFinancement />
            <HomeTemoin />
           
        </div>
    );
};

export default Inscription;