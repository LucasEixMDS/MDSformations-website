
import CarousselFormationDesktop from "../carrousels/CarrouselFormation/CarousselFormationDesktop";
import HomeCadreQuestion from "../inscription/HomeCadreQuestion";
import CarrouselArticle from "../carrousels/CarrouselArticle/CarrouselArticle"
import Formulairedocumentation from "./Formulairedocumentation"
import "./documentation.scss"
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Inscription = () => {
    return (

        
        <div className="documentation">

                <Helmet>
                    <title>Demande de documentation</title>
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/documentation" />
                </Helmet>  
            <div className="documentation_text">
                <h1>Demande de documentation</h1>
                <p>Vous souhaitez developper votre carrière professionnelle ?</p>
                <div>
                <button>02 40 96 32 80</button>
                </div>
                <div>
                <button>camille.melodiedessens@gmail.com</button>
                </div>
                <p>Vous voulez des informations sur une formation :</p>
                </div>
            <div className="documentation_formulaire">
                
                <Formulairedocumentation />
            </div>
            <HomeCadreQuestion />
            
            <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to={"/toutes-nos-formations"}><button className="button_webinaire">Toutes nos formations certifiantes</button> </Link> 
            </div>
            <div className="home_white">
                <h3>les dernières <span>actualités</span></h3>
            <CarrouselArticle />
            
            </div>
            <button className="articles_button">Découvrir tous nos articles</button>
        </div>


    );
};

export default Inscription;