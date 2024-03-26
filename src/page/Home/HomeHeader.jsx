
import "./HomeStyle/homeHeader.scss";
import { Link } from 'react-router-dom';


const HomeHeader = () => {


    return ( 
        <div >
            <div className="container" decoding="async">
                <div className="container_titre" >
                    <h1>Formez-vous</h1> 
                    <h1 className="titre-home-desktop"><span>Une école à taille </span>humaine avec des valeurs <span>humaine</span></h1>
                    <h2>Formez-vous au métier du bien-être et de la beauté</h2>
                </div>
                <div className="container_modal">
                <div className="container_modal_left">
                    <div className="container_modal_left_top">
                            <div className="reflect">
                                <p><img src="https://mdsformations-website-u5520.vm.elestio.app/reflechir.svg" alt="icon apple d'une personne qui reflechis" /></p>
                            </div> 
                        </div>
                            <div className="container_modal_left_mid">
                                <h2>Comment m'inscrire ? </h2>
                            </div>
                        <div className="button">
                            <Link to="/comment-s'inscrire-en-formation">
                            <button>En savoir +</button>
                            </Link>
                        </div>
                    </div>
                    <div className="container_modal_right">
                        <div className="container_modal_right_top">
                            <div className="fete">
                                <p><img src="https://mdsformations-website-u5520.vm.elestio.app/fete.svg" alt="icon apple d'une personne qui fait la fete" /></p>
                            </div>
                        </div>
                        <div className="container_modal_right_mid">
                            <h2>Je prend mon avenir en mains !</h2>
                        </div>
                        <div className="button">
                            <Link to="/Inscription">
                            <button>S'inscrire</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;