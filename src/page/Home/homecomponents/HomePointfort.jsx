import './homePointfort.scss'
import coche from '../../../assets/coche.svg';

const HomePointfort = () => {
    return (
        <div className='homepointfort'>
                        <div className="homepointfort_titre">
                            <h3>Découvrez <span>nos points forts</span> et choisissez <span>l'excellence </span>pour votre formation !</h3>
                            <div className="homepointfort_container_modal">
                                <div className="pointfort_modal">
                                    <p>👍</p>
                                </div>
                            </div> 
                        </div>
            <div className="homepointfort_liste">
                    <ul>
                <li>
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div>
                            <span>Expertise pédagogique : </span>
                            formateurs expérimentés et passionnés
                        </div>
                    </div>
                </li>
                <li>
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div>
                            <span>Contenus pertinents : </span>
                            formation constamment actualisées
                        </div>
                    </div>
                </li>
                <li>
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div>
                            <span>Flexibilité et adaptabilité : </span>
                            formations en ligne et plateforme de cours accessibles 24h/24 et 7j/7
                        </div>
                    </div>
                </li>
                <li>
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div>
                            <span>Accompagnement personnalisé : </span>
                            suivi individualisé pour maximiser votre apprentissage
                        </div>
                    </div>
                </li>
                <li>
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div>
                            <span>Reconnaissance et diplômes : </span>
                            formations reconnues et des diplômes qualifiants
                        </div>
                    </div>
                </li>
                <li>
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div>
                            <span>Communauté dynamique : </span>
                            connectez-vous avec des professionnels partageant les mêmes intérêts
                        </div>
                    </div>
                </li>
            </ul>

            </div>
                    <div className="homepointfort_button">
                        <button>En savoir +</button>
                    </div>
        </div>
    );
};

export default HomePointfort;