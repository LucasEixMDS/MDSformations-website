import Accompa from "components/accompagnement/Accompa";
import "./post.scss";
import { Link } from "react-router-dom";
import CarousselFormationDesktop from "components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import { Helmet } from 'react-helmet-async';



const ValideIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219Z" fill="#7BC8CB"/>
      <path d="M8.86719 14.7363C8.53516 14.7363 8.26172 14.5996 8.00781 14.2578L5.55664 11.25C5.41016 11.0547 5.32227 10.8398 5.32227 10.6152C5.32227 10.1758 5.66406 9.81445 6.10352 9.81445C6.38672 9.81445 6.60156 9.90234 6.8457 10.2246L8.82812 12.7832L12.998 6.08398C13.1836 5.79102 13.4375 5.63477 13.6914 5.63477C14.1211 5.63477 14.5215 5.92773 14.5215 6.38672C14.5215 6.60156 14.3945 6.82617 14.2773 7.03125L9.6875 14.2578C9.48242 14.5801 9.19922 14.7363 8.86719 14.7363Z" fill="white"/>
    </svg>
  );

const Post = () => {
    return (
        <div className="post">
             <Helmet>
        <title>Suivis post-formation des stagiaires</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/suivis-post-formation" />
             </Helmet>
            
                <div className="headerPost">
                    <h1>Suivi post-formation</h1>
                    <h2>Nous vous suivons même après votre formation</h2>
                </div>

                <div className="postContainer">
                    <p>Vous souhaitez vous former aux métiers du bien-être et de l'esthétique ? Vous avez des questions sur les formations, les débouchés professionnels ou la vie d'un professionnel du secteur ?</p>
                    <p className="text">Nous vous proposons un accompagnement personnalisé, de l'orientation à l'insertion professionnelle, pour vous aider à réaliser votre projet.</p>
                    <Link to="/Inscription" ><button>Nous contacter</button></Link>
                </div>

            <div className="postContain">
                <p>Le suivi des stagiaires en formation est une étape importante pour s'assurer de leur satisfaction et de leur réussite. Il permet également de recueillir des feedbacks précieux pour améliorer la formation.</p>
                <p>La technique du 3, 6, 9 est un outil efficace pour assurer un suivi de qualité des stagiaires. Elle consiste à prendre contact avec les stagiaires après la formation par téléphone pour un échange et un questionnaire. Ces contacts sont effectués à 3, 6 et 9 mois après la fin de la formation.</p>
                <p>La technique du 3, 6, 9 a trois objectifs principaux :</p>

                <div className="postList">
                    <div className="item">
                        <ValideIcon />
                        <p>Assurer un suivi personnalisé des stagiaires</p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p>Recevoir des feedbacks des stagiaires</p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p>Mesurer l'insertion professionnelle des stagiaires</p>
                    </div>
                </div>

                <p>Le déroulement de la technique du 3, 6, 9 est le suivant :</p>

                <div className="postList1">
                    <div className="item">
                        <ValideIcon />
                        <p>3 mois après la formation : un formateur ou un conseiller pédagogique prend contact avec le stagiaire par téléphone pour un entretien. L'entretien permet de discuter de l'expérience du stagiaire en entreprise, de ses éventuelles difficultés et de ses perspectives d'avenir. Un questionnaire est également envoyé au stagiaire afin de recueillir ses impressions sur la formation.</p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p>6 mois après la formation : un second entretien téléphonique est réalisé. Cet entretien permet de faire le point sur la situation du stagiaire : a-t-il trouvé un emploi ou une alternance ? Si oui, comment se déroule son intégration professionnelle ?</p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p>9 mois après la formation : un troisième entretien téléphonique est réalisé. Cet entretien permet de recueillir des informations sur l'évolution de la situation professionnelle du stagiaire.</p>
                    </div>
                </div>
            </div>

            <Accompa />

            <div className="home2">
                <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
                <CarousselFormationDesktop filterValues={['certification']} />
                <Link to="/toutes-nos-formations"><button className="button_webinaire">Toutes nos formations certifiantes</button></Link>
            </div>

        </div>
    );
};

export default Post;