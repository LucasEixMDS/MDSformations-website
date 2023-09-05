import Modalite from "components/modalitesFormation/Modalite";
import HomeHeader from "./HomeHeader"
import CarrouselActu from "../../components/carrousels/CarrouselArticle/CarrouselArticle.jsx";
import { CarrouselFormation} from "components"
import Question from "components/modalitesFormation/Question";

const Home = () => {
    return (
        <div className="homePage">
            <HomeHeader />
            <div className="home">
            <h3>Nous avons forcément une formation <span>faites pour vous</span></h3>
            <CarrouselFormation filterValues={['certification', 'formation']} />
            <Modalite />
            
            </div>
            <Question />
            <div className="home">
            <h3>obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarrouselFormation filterValues={['certification']} />
            <button className="button_webinaire">Toutes nos formations certifiantes</button>
            </div>
            <div className="home_white">
                <h3>Les dernières <span>actualités</span></h3>
                <CarrouselActu />
                <button className="button_webinaire">Découvrir tous nos articles</button>
            </div>
            <div className="home">
                <h3>Financement à <span>100%</span> de vos formations : saisissez l'opportunité dès maintenant !</h3>
                <p>Formez-vous sans contrainte financière et donnez un nouvel élan à votre carrière. Inscrivez-vous aujourd'hui et bénéficiez du financement intégral de vos formations. Contactez-nous pour commencer votre parcours vers le succès.</p>
                <p className="opco">CPF, Pôle emploi, alternance, employeurs...</p>
                <div className="button_home_financement">
                <button className="button_contact">Nous contacter</button>
                <button className="button_savoir">En savoir +</button>
                </div>
            </div>
        </div>
    );
};

export default Home;