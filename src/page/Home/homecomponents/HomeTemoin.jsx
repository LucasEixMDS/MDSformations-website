import './HomeTemoin.scss';
import star from '../../../assets/star.svg';
import stars from '../../../assets/stars.svg';
import lolita from '../../../assets/lolita.png';


const HomeTemoin = () => {
    return (
        <div className='home_temoin_container'>
         <h3>Nos apprenants <span>témoignent</span> : leurs réussite parle d'elle-même</h3>
         <div className="home_temoin">
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