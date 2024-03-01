import "./accompa.scss";
import { Link } from 'react-router-dom';

const Accompa = () => {
    return (
        <div className="accompa">
            <div className="accompaContainer">
            <div className="accompaModal">
                    <div className="modalIcon">
                        <p><img src="https://mdsformations-website-u5520.vm.elestio.app/selfie.svg" alt="icon apple d'une femme sur un pc" /></p>
                    </div>
                    <div className="accompaText">
                        <h3>Besoin d'être accompagné ?</h3>
                        <h4>Financements, plannings, débouchés...</h4>
                    </div>
                </div>
                <h3>Posez-nous vos questions ! </h3>
                <Link to="/Inscription" ><button className="buttonAccompa">Prendre rdv par téléphone</button></Link>
            </div>
        </div>
    );
};

export default Accompa;