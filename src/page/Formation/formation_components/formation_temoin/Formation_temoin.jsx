import './Formation_temoin.scss';
import star from '../../../../assets/star.svg';
import stars from '../../../../assets/stars.svg';
import lolita from '../../../../assets/lolita.png';
import PropTypes from 'prop-types';


const Formation_temoin = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    return (
        <div className='formation_temoin_container'>
         <h3>Nos apprenants <span style={colorStyle} >témoignent</span> : leurs réussite parle d'elle-même</h3>
         <div className="formation_temoin">
            <div className="formation_temoin_left">
                <p className='text'>Explorez nos avis Google pour en savoir plus sur l'expérience de nos apprenants.</p>
                <div className="formation_temoin_modal_google">
                    <p>4,9<span>/5</span></p>
                    <div className="temoin_modal_stars">
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={star} alt="étoile avis google pas entière, de moitié" />
                    </div>
                    <p className='google_text' style={colorStyle}>sur 192 avis google</p>
                </div>
                <div className="formation_temoin_modal_button">
                    <button>Voir tous les avis</button>
                </div>
            </div>
            <div className="formation_temoin_right">
                <div className="formation_temoin_modal_article" style={{ backgroundImage: `url(${lolita})` }}>
                    
                        <div className="formation_temoin_modal_mid">
                            <h3>Témoignage de lolita, masseuse</h3>
                            <h4>« J’ai enfin découvert ma voie... »</h4>
                           
                            
                        </div>
                        <button>Lire l'article</button>
                    
                </div>
                <div className="formation_temoin_right_button">
                    <button>En savoir +</button>
                </div>
            </div>
         </div>
        </div>
    );
};
Formation_temoin.propTypes = {
    formation: PropTypes.object.isRequired,
  };

export default Formation_temoin;