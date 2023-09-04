import HomeHeader from "./HomeHeader"
// import CarrousselFormation from "../components/Carroussel/CarrousselFormation"
// import CarrousselBase from "../components/Carroussel/CarrousselBase"
import { CarrouselFormation} from "components"

const Home = () => {
    return (
        <div className="homePage">
            <HomeHeader />
            <div className="home">
            <h3>Nous avons forcément une formation <span>faites pour vous</span></h3>
            <CarrouselFormation />
            </div>

        </div>
    );
};

export default Home;