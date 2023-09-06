
import "./HomeStyle/homeHeader.scss";
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div >
            <div className="container">
                <div className="container_titre">
                    <h1>Formez-vous</h1> 
                    <h2>au métier du bien-être, de la beauté et de l'ethétique</h2>
                </div>
                <div className="container_modal">
                    <div className="container_modal_left">
                        <div className="container_modal_left_top">
                            <div className="reflect">
                                <p>🤔</p>
                            </div>
                        </div>
                            <div className="container_modal_left_mid">
                                <h2>Quelles formations est faites pour moi ? </h2>
                            </div>
                        <div className="button">
                            <button>Faire le test</button>
                        </div>
                    </div>
                    <div className="container_modal_right">
                        <div className="container_modal_right_top">
                            <div className="fete">
                                <p>🥳</p>
                            </div>
                        </div>
                        <div className="container_modal_right_mid">
                            <h2>Je prend mon avenir en mains !</h2>
                        </div>
                        <div className="button">
                            <Link to="/inscription">
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