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
                <button>02 40 96 32 80</button>
                </div>
                <div>
                <button>camille.melodiedessens@gmail.com</button>
                </div>
                <p>Inscrivez-vous en quelques clics :</p>
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