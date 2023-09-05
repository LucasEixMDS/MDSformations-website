import Modalite from "components/modalitesFormation/Modalite";
import HomeHeader from "./HomeHeader"
// import CarrousselFormation from "../components/Carroussel/CarrousselFormation"
// import CarrousselBase from "../components/Carroussel/CarrousselBase"
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
        </div>
    );
};

export default Home;