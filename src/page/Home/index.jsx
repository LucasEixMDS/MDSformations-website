import Modalite from "page/Home/homecomponents/HomeModalite";
import HomeHeader from "./HomeHeader"
import CarrouselActu from "../../components/carrousels/CarrouselArticle/CarrouselArticle.jsx";
import CarousselFormationDesktop from "../../components/carrousels/CarrouselFormation/CarousselFormationDesktop"
import Question from "components/inscription/HomeCadreQuestion";
import HomeFinancement from "./homecomponents/HomeFinancement";
import HomeTemoin from "./homecomponents/HomeTemoin";
import HomeCadreTestformation from "../../components/inscription/HomeCadreTestformation";
import HomePointfort from "./homecomponents/HomePointfort";
import { Link } from "react-router-dom";
import SeoBreadcrumb from "SEOBreadcrumb";
import { Helmet } from 'react-helmet-async';

const Home = () => {


    return (
        <div className="homePage">

                <Helmet>
                    <title>Page d'accueil</title>
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/" />
                </Helmet>
            <SeoBreadcrumb pageType="home" />
            <HomeHeader />
            <div className="home2">
            <h3 className="text_shadows">Nous avons forcément une formation <span>faites pour vous !</span></h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to={"/toutes-nos-formations"}><button >Nos formations</button></Link>
            <Modalite />
            </div>
            <Question />
            <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to={"/toutes-nos-formations"}><button className="button_webinaire">Toutes nos formations certifiantes</button> </Link> 
            </div>
            <div className="home_white">
                <h3>Les dernières <span>actualités</span></h3>
                <CarrouselActu />
                <button className="button_webinaire">Découvrir tous nos articles</button>
            </div>
            <HomeFinancement />
            <HomeTemoin />
            <HomeCadreTestformation />
            <HomePointfort />
            <div className="googlemapdiv">
                <h3>Former-vous <span>là où vous le souhaitez !</span></h3>
                <p>Découvrez nos formations disponibles dans plusieurs villes pour répondre à vos besoins.</p>
                <div className="contactGoogleDesktop">
                    <p><strong>33 Blanche Lande 44521, Oudon</strong></p>
                    <p><strong>02 40 96 32 80 |</strong> du lundi au vendredi de 10 heures à 17 heures</p>
                    <p><strong>contact@mdsformations.fr</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Home;