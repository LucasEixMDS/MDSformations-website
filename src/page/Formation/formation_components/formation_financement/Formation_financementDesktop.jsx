import "./formation_financementDesktop.scss";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Formation_financementDesktop = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
        
    };

    const backgroundStyle = {
        backgroundColor:formation.colorFormation,
    };

    return (
        <div className="financementDesktop">
            <div className="financementDesktopLeft">
                <div className="financementTitleDesktop">
                    <h2>Des tarifs <span style={colorStyle}>clairs et transparent</span></h2>
                </div>
                <div className="financementTarifsDesktop">
                    <div className="financementItems">
                            <div className="financementTopContainer">
                                <div className="financementIcon">
                                    <h2>Financement Personnel</h2>
                                    <h3 className='date'>{formation.pricing.financementPerso}</h3>
                                </div>
                            </div>
                    </div>
                    <div className="financementTarifsDesktop2">
                        <h2 style={colorStyle}>{formation.pricing.completForm}</h2>
                        <p>Formation complète</p>
                    </div>
                </div>
                <div className="financementModalBottom">
                <Link to="/Inscription">
                    <div className="financementItems">
                            <div className="financementTopContainer">
                                <div className="financementIcon">
                                    <h2>Financement Pôle emploi à partir de 0 €</h2>
                                </div>
                            </div>
                            <div className="financementButton">
                                <button style={backgroundStyle}>En savoir +</button>
                            </div>
                    </div>
                    </Link>
                    <Link to="/Inscription">
                    <div className="financementItems">
                            <div className="financementTopContainer">
                                <div className="financementIcon">
                                    <h2>Alternance prise en charge à <span>100%</span></h2>
                                </div>
                            </div>
                            <div className="financementButton">
                               <button style={backgroundStyle}>En savoir +</button>
                            </div>
                    </div>
                    </Link>
                    <Link to="/Inscription">
                    <div className="financementItems">
                            <div className="financementTopContainer">
                                <div className="financementIcon">
                                    <h2>Financement CPF jusqu'à <span>100%</span></h2>
                                </div>
                            </div>
                            <div className="financementButton">
                               <button style={backgroundStyle}>S'inscrire</button>
                            </div>
                    </div>
                    </Link>
                </div>
            </div>



            <div className="financementDesktopRight">
                <div className="fichetteTarifs">
                    <div className="financeItem">
                        <div className="fraisDossier">
                            <p>Frais de dossier</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.registrationFee}</p>
                        </div>
                        <div className="financeItem2">
                            <p>Frais d'examen</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.examFee}</p>
                        </div>
                    </div>
                    <div className="financeItem3">
                        <p>Facilité de paiement en plusieurs fois,</p>
                        <p className="prix" style={colorStyle}>{formation.pricing.paymentOption}</p>
                    </div>
                    <div className="financeItem">
                        <div className="block">
                            <p>Formation au bloc 1</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.block1}</p>
                        </div>
                        <div className="financePerso">
                            <p>Financement personnel</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.personalBlock1}</p>
                        </div>
                    </div>
                    <div className="financeItem">
                        <div className="block">
                            <p>Formation au bloc 2</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.block2}</p>
                        </div>
                        <div className="financePerso">
                            <p>Financement personnel</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.personalBlock2}</p>
                        </div>
                    </div>
                    <div className="financeItem">
                        <div className="block">
                            <p>Formation au bloc 3</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.block3}</p>
                        </div>
                        <div className="financePerso">
                            <p>Financement personnel</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.personalBlock3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Formation_financementDesktop.propTypes = {
    formation: PropTypes.object.isRequired
};


export default Formation_financementDesktop;