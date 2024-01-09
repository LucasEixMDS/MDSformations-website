import './HomeTemoin.scss';
import star from '../../../assets/star.svg';
import stars from '../../../assets/stars.svg';
import lolita from '../../../assets/lolita.png';

const HomeTemoin = () => {
    return (
        <div className='home_temoin_container'>
         <h3>Nos apprenants <span>témoignent</span> : leurs réussite parle d'elle-même</h3>

                <div className="home_temoin_desktop">
                    <div className="modal">
                        <div className="modalText">
                            <img src={"https://mdsformations-website-u5520.vm.elestio.app/googleAvis1"} alt="" />
                            <p>La formation longue en réflexologie m'ouvre le "champ des possibles". Les divers formateurs, Laure, Elise, Mélodie (Duane, Benjamin..) sont passionnés, accessibles et disponibles. Je les remercie pour leur écoute et leur patience.</p>
                        </div>
                        <div className="temoin_modal_stars">
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={star} alt="étoile avis google pas entière, de moitié" />
                        </div>
                    </div>
                    <div className="modal">
                    <div className="modalText">
                            <img src={"https://mdsformations-website-u5520.vm.elestio.app/googleAvis2"} alt="" />
                            <p>La formation longue en réflexologie m'ouvre le "champ des possibles". Les divers formateurs, Laure, Elise, Mélodie (Duane, Benjamin..) sont passionnés, accessibles et disponibles. Je les remercie pour leur écoute et leur patience.</p>
                        </div>
                        <div className="temoin_modal_stars">
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={star} alt="étoile avis google pas entière, de moitié" />
                        </div>
                    </div>
                </div>
         <div className="home_temoin">
         <div className="home_temoin_hide">
                
                </div>
            <div className="home_temoin_left">
                <div className="home_temoin_modal_google">
                    <p>4,9<span>/5</span></p>
                    <div className="temoin_modal_stars">
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={star} alt="étoile avis google pas entière, de moitié" />
                    </div>
                    <p className='google_text'>sur 192 avis google</p>
                </div>
                <div className="home_temoin_modal_button">
                    <button>Voir tous les avis</button>
                </div>
            </div>
            <div className="home_temoin_right">
                <div className="home_temoin_modal_article" style={{ backgroundImage: `url(${lolita})` }}>
                    
                        <div className="home_temoin_modal_mid">
                            <h3>Témoignage de lolita, masseuse</h3>
                            <h4>« J’ai enfin découvert ma voie... »</h4>
                           
                            
                        </div>
                        <button>Lire l'article</button>
                    
                </div>
                <div className="home_temoin_right_button">
                    <button>En savoir +</button>
                </div>
            </div>
           
         </div>
        </div>
    );
};

export default HomeTemoin;