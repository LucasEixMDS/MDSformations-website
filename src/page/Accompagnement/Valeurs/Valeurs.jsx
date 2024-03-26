import "./valeurs.scss";
import { Link } from "react-router-dom";
import CarousselFormationDesktop from "components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import Accompa from "components/accompagnement/Accompa";
import { Helmet } from 'react-helmet-async';


const ValideIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219Z" fill="#7BC8CB"/>
      <path d="M8.86719 14.7363C8.53516 14.7363 8.26172 14.5996 8.00781 14.2578L5.55664 11.25C5.41016 11.0547 5.32227 10.8398 5.32227 10.6152C5.32227 10.1758 5.66406 9.81445 6.10352 9.81445C6.38672 9.81445 6.60156 9.90234 6.8457 10.2246L8.82812 12.7832L12.998 6.08398C13.1836 5.79102 13.4375 5.63477 13.6914 5.63477C14.1211 5.63477 14.5215 5.92773 14.5215 6.38672C14.5215 6.60156 14.3945 6.82617 14.2773 7.03125L9.6875 14.2578C9.48242 14.5801 9.19922 14.7363 8.86719 14.7363Z" fill="white"/>
    </svg>
  );


const Valeurs = () => {
    return (
        <div className="valeurs">

                <Helmet>
                    <title>Les valeurs du centre de formation</title>
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/valeurs-de-mdsformations" />
                </Helmet>

            
            <div className="headerValeurs">
                <h1>Les valeurs MDS</h1>
                <h2>L'essence de notre engagement dans le bien-être et l'esthétique</h2>
            </div>

            <div className="valeursContainer">
                <p>Chez MDS Formations, nos valeurs sont le socle de tout ce que nous faisons. Elles reflètent notre engagement profond envers l'excellence, la bienveillance, l'épanouissement, la convivialité familiale et l'humanité. </p>
                
                <Link to="/accompagnement-global" ><button>Comprendre notre accompagnement</button></Link>
                <p className="text">Nous vous proposons un accompagnement personnalisé, de l'orientation à l'insertion professionnelle, pour vous aider à réaliser votre projet.</p>

                <div className="postList">
                    <div className="item">
                        <ValideIcon />
                        <p><span>Excellence Professionnelle :</span>nous croyons en l'excellence en tout point. Nos programmes de formation sont conçus pour répondre aux normes les plus élevées de l'industrie du bien-être et de l'esthétique. Nous nous efforçons de fournir une éducation de qualité supérieure qui prépare nos étudiants à exceller dans leur carrière.</p>
                    </div>
                </div>

                <Link to="/notre-equipe-pedagogique" ><button>Découvrir l'équipe pédagogique</button></Link>

                <div className="postList">
                    <div className="item">
                        <ValideIcon />
                        <p><span>Accompagnement personnalisé :</span>chez MDS Formations, nous ne voyons pas nos étudiants comme de simples numéros, mais comme des individus uniques avec des besoins et des objectifs distincts. Nous offrons un accompagnement personnalisé pour répondre à ces besoins, que ce soit pour des conseils pédagogiques, des clarifications ou un soutien supplémentaire.</p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p><span>Intégrité et éthique :</span>nous nous engageons à maintenir les plus hauts niveaux d'intégrité et d'éthique dans notre enseignement. Nous encourageons nos étudiants à exercer leurs compétences de manière éthique et responsable, en mettant en avant le respect des clients et le bien-être. </p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p><span>Communauté bienveillante et familiale :</span>notre approche est axée sur la création d'une communauté bienveillante et familiale. Chez MDS Formations, nous croyons en la puissance de l'apprentissage collaboratif, où les étudiants deviennent une famille qui s'entraide et s'inspire mutuellement pour atteindre leur plein potentiel. </p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p><span>Innovation continue :</span>le domaine du bien-être et de l'esthétique évolue constamment. Nous encourageons nos étudiants et notre équipe pédagogique à rester à jour avec les dernières avancées et à innover dans leurs pratiques.</p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p><span>Respect de l'individu :</span>nous valorisons la diversité et respectons chaque individu, indépendamment de son origine, de son genre, de sa croyance ou de son parcours. C'est ce respect qui crée un environnement inclusif et ouvert à tous.</p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p><span>Passion pour le bien-être et l'humanité :</span>enfin, notre passion pour le bien-être et l'esthétique est le moteur de tout ce que nous faisons. Nous voulons transmettre cette passion à nos étudiants, les inspirer à poursuivre une carrière qui apporte du bonheur et du bien-être aux autres, et qui met en avant des valeurs humaines fortes.</p>
                    </div>
                    <div className="item">
                        <ValideIcon />
                        <p><span>Nos valeurs familiales et humaines :</span>guident notre mission de préparer nos étudiants à réussir dans l'industrie du bien-être et de l'esthétique. Nous sommes fiers de partager ces valeurs avec vous et sommes impatients de vous accompagner dans votre parcours d'apprentissage.</p>
                    </div>
                </div>
                 

            </div>

            <div className="home2">
                <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
                <CarousselFormationDesktop filterValues={['certification']} />
                <Link to="/toutes-nos-formations"><button className="button_webinaire">Toutes nos formations certifiantes</button></Link>
            </div>
            <Accompa />



        </div>
    );
};

export default Valeurs;