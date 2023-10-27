
import { CarrouselFormation } from "components/carrousels";
import HomeCadreQuestion from "../inscription/HomeCadreQuestion";
import CarrouselArticle from "../carrousels/CarrouselArticle/CarrouselArticle"
import Formulairedocumentation from "./Formulairedocumentation"
import "./documentation.scss"


const Inscription = () => {
    return (

        
        <div className="documentation">
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
            
            <div className="home">
            <h3>Nous avons forcément une formation <span>faites pour vous</span></h3>
            <CarrouselFormation />
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