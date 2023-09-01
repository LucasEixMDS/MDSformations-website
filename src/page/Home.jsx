import TopPage from "../components/topPage/TopPage"
import Carrousselformation from "../components/Carroussel/Carrousselformation"

const Home = () => {
    return (
        <div className="homePage">
            <TopPage />
            <div className="home">
            <h3>Nous avons forcément une formation <span>faites pour vous</span></h3>
            <Carrousselformation />
            </div>

        </div>
    );
};

export default Home;