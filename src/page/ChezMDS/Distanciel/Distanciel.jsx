import "./distanciel.scss";
import coche from "../../../assets/coche.svg";
import { Link } from 'react-router-dom';
import HomeCadreTestformation from "components/inscription/HomeCadreTestformation";
import WixSite from "./WixSite";

const Distanciel = () => {
    return (
        <div className="distanciel">

            <div className="distancielHeader">        
                <h1>Formation à distance</h1>
                <h2>Apprendre à votre rythme, où que vous soyez</h2>
            </div>


            <div className="distancielContainer">
            <p>Chez MDS Formations, nous comprenons que la flexibilité est essentielle dans le domaine de la formation professionnelle. C'est pourquoi nous proposons deux options 
                de formation à distance pour répondre à vos besoins et à votre style d'apprentissage.</p>

                <h3>Plateforme de formation 100% en ligne : <span>l'apprentissage sans contraintes</span></h3>

            <p>Notre plateforme de formation en ligne offre une expérience d'apprentissage riche et diversifiée, adaptée à un monde en constante évolution. </p>

            <p>Voici les avantages de choisir cette option :</p>

            <div className="distancielContain">
                <div className="distancielContainItem">
                        <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Flexibilité totale : </span>
                                apprenez à votre rythme, quand vous le souhaitez. Notre plateforme est accessible 24 heures sur 24, 7 jours sur 7, vous permettant de planifier vos sessions d'étude selon votre emploi du temps.
                            </div>
                        </div>
                        <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Accès universel : </span>
                                où que vous soyez, tant que vous disposez d'une connexion Internet, vous avez accès à notre contenu pédagogique. Il n'y a plus de barrières géographiques pour l'apprentissage.
                            </div>
                        </div>
                        <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Contenu interactif : </span>
                                notre plateforme propose des ressources multimédias riches, notamment des vidéos, des quiz, des exercices pratiques pour faciliter votre apprentissage. Les vidéos de démonstration complètent nos cours, vous montrant précisément comment mettre en œuvre les techniques que vous apprenez. Cela vous donne un aperçu visuel et vous guide dans votre pratique.
                            </div>
                        </div>
                </div>


                <div className="distancielContainItem">
                <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Suivi personnalisé :  </span>
                                vous n'êtes pas seul. Notre équipe pédagogique vous propose un suivi personnalisé par e-mail et téléphone pour répondre à vos questions et vous soutenir tout au long de votre parcours de formation.
                            </div>
                        </div>
                        <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Webinaires en direct : </span>
                                nous organisons régulièrement des webinaires en groupe pour effectuer des démonstrations de techniques en direct. Cela vous permet de voir les compétences en action, de poser des questions en temps réel, et d'interagir avec vos collègues apprenants.
                            </div>
                        </div>
                        <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Communauté en ligne :</span>
                                notre plateforme dispose d'un espace dédié où les élèves peuvent échanger entre eux. Vous pouvez partager vos expériences, poser des questions, et établir des liens avec d'autres passionnés du bien-être et de l'esthétique.
                            </div>
                        </div>

                        <Link to="https://mdsformations.wixsite.com/mdsformationmassage"><button>Découvrir la plateforme</button></Link>
                </div>
            </div>

            <p>Actuellement, nous proposons des formations en prothésie ongulaire 
                et en réflexologie. Restez à l'écoute, car d'autres formations passionnantes 
                seront bientôt disponibles pour élargir vos horizons dans le bien-être et l'esthétique. 
                Chez MDS Formations, nous nous engageons à vous offrir des solutions d'apprentissage 
                modernes et pratiques pour atteindre vos objectifs professionnels.</p>


            <WixSite />

            <Link to="/toutes-nos-formations"><button>Toutes nos formations</button></Link>

            </div>

            <div className="distancielContainer">
                <h3>Plateforme de cours et documentation en ligne pour les élèves en présentiel : <span>votre bibliothèque de formation</span></h3>

                <p>Pour nos élèves en présentiel, nous offrons une plateforme dédiée de cours et documentation en ligne totalement gratuite. Voici comment cela vous bénéficie :</p>

            <div className="distancielContain">
                <div className="distancielContainItem" style={{width: '100%'}}>
                <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Accès illimité : </span>
                                apprenez à votre rythme, quand vous le souhaitez. Notre plateforme est accessible 24 heures sur 24, 7 jours sur 7, vous permettant de planifier vos sessions d'étude selon votre emploi du temps.
                            </div>
                        </div>
                        <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Renforcement de l'apprentissage :</span>
                                vous pouvez consulter notre contenu pédagogique à tout moment, ce qui facilite la consolidation de vos connaissances et la préparation à vos évaluations.
                            </div>
                        </div>
                        <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Mobilité maximale : </span>
                                vous n'êtes plus limité par l'emplacement physique de notre centre de formation. Vos cours et documents sont à portée de clic, où que vous soyez.
                            </div>
                        </div>
                        <div className="list-content">
                            <img src={coche} alt="rond avec un signe valider" />
                            <div className='text'>
                                <span>Soutien continu :  </span>
                                notre plateforme est conçue pour soutenir votre expérience d'apprentissage en présentiel. Vous pouvez accéder à des informations claires et pertinentes pour enrichir vos cours.
                            </div>
                        </div>
                </div>
                </div>

                <Link to="https://mdsformations.wixsite.com/mdsformationmassage"><button>Découvrir la plateforme</button></Link>

                <p>Choisissez l'option qui correspond le mieux à vos besoins, que vous souhaitiez une formation 100% en ligne ou un accès flexible à des ressources en présentiel. Chez MDS Formations, nous nous engageons à vous offrir des solutions d'apprentissage modernes et pratiques pour atteindre vos objectifs professionnels dans le bien-être et l'esthétique.</p>
            </div>
            <HomeCadreTestformation />
        </div>
    );
};

export default Distanciel;