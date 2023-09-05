import Modalite from "page/Home/homecomponents/Modalite";
import HomeHeader from "./HomeHeader"
import CarrouselActu from "../../components/carrousels/CarrouselArticle/CarrouselArticle.jsx";
import { CarrouselFormation} from "components"
import Question from "page/Home/homecomponents/Question";
import HomeFinancement from "./homecomponents/HomeFinancement";
import HomeTemoin from "./homecomponents/HomeTemoin";

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
            <HomeFinancement />
            <HomeTemoin />
        </div>
    );
};

export default Home;