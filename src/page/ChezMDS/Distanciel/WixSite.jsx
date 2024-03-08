import "./distanciel.scss";
import { Link } from 'react-router-dom';
import pied from "../../../../public/pied.svg";
import ongle from "../../../assets/ongle.svg";


const WixSite = () => {
    return (
        <div className="wix">




            <div className="wix-lienPage">
                <div className="wix-inner">
                            <Link to="/reflexologue">
                                        <div className="items" style={{backgroundImage: 'url("https://mdsformations-website-u5520.vm.elestio.app/reflexologue.webp")'}}>
                                    <div className="topContainer">
                                        <div className="icon">
                                            <p><img src={pied} alt="" /></p>
                                        </div>
                                    </div>
                                    <div className="midContainer">
                                        <h2>Réflexologie à distance</h2>
                                    </div>
                                    <div className="bottomContainer">
                                        <div className="buttons">
                                        <button style={{color: "#64B768"}}>En savoir +</button>
                                        </div>
                                    </div>
                        </div>
                            </Link>
                    </div>
                    <div className="wix-inner">
                            <Link to="/reflexologue">
                            <div className="items" style={{backgroundImage: 'url("https://mdsformations-website-u5520.vm.elestio.app/prothesie.webp")'}}>
                                    <div className="topContainer">
                                        <div className="icon">
                                            <p><img src={ongle} alt="" /></p>
                                        </div>
                                    </div>
                                    <div className="midContainer">
                                        <h2>Réflexologie à distance</h2>
                                    </div>
                                    <div className="bottomContainer">
                                        <div className="buttons">
                                            <button style={{color: "#8A88C1"}}>En savoir +</button>
                                        </div>
                                    </div>
                        </div>
                            </Link>
                </div>
            </div>

            <div className="wix-lienD">
                <div className="wix-inner">
                        <Link to="/reflexologue">
                            <div className="items">
                                <div className="topContainer">
                                    <div className="icon">
                                        <h2>Prothésie Ongulaire</h2> 
                                        <h3 className='date'>Pour en savoir plus sur la formation vous pouvez téléchargez notre programme</h3>
                                    </div>
                                </div>
                                
                                <div className="bottomContainer">
                                    <div className="buttons">
                                        <Link to="/reflexologue"><button>En savoir +</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                </div>
                <div className="wix-inner">
                        <Link to="/reflexologue">
                            <div className="items">
                                <div className="topContainer">
                                    <div className="icon">
                                        <h2>Réflexologie</h2> 
                                        <h3 className='date'>Pour en savoir plus sur la formation vous pouvez téléchargez notre programme</h3>
                                    </div>
                                </div>
                                
                                <div className="bottomContainer">
                                    <div className="buttons">
                                        <Link to="/reflexologue"><button>En savoir +</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                </div>
                <div className="wix-inner">
                        <Link to="/reflexologue">
                            <div className="items">
                                <div className="topContainer">
                                    <div className="icon">
                                        <h2>Massage bien-être</h2> 
                                        <h3 className='date'>Pour en savoir plus sur la formation vous pouvez téléchargez notre programme</h3>
                                    </div>
                                </div>
                                
                                <div className="bottomContainer">
                                    <div className="buttons">
                                        <Link to="/reflexologue"><button>En savoir +</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                </div>
            </div>
            
        </div>
    );
};

export default WixSite;