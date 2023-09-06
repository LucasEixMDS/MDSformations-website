import HomeFinancement from "page/Home/homecomponents/HomeFinancement";
import HomeTemoin from "page/Home/homecomponents/HomeTemoin";
import Formulaireinscription from "./Formulaireinscription"
import "./inscription.scss"


const Inscription = () => {
    return (
        <div className="inscription">
            <div className="inscription_formulaire">
                <Formulaireinscription />
            </div>
            <HomeFinancement />
            <HomeTemoin />
        </div>
    );
};

export default Inscription;