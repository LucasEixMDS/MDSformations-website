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
            <CarrouselFormation />
            <Modalite />
            
            </div>
            <Question />
        </div>
    );
};

export default Home;