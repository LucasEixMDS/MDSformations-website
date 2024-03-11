import { Link } from "react-router-dom";
import "./Error404.scss";

const Error404 = () => {
    return (
        <div className="ERROR">
          <div className="errorContainer">
            <h2>404</h2>
            <h1>Oups ! Page non trouvée</h1>
            <p>La page que vous tentez d'afficher n'existe pas ou une autre erreur s'est produite, vous pouvez revenir à la page d'accueil.</p>
            <Link to="/"><button>Page d'accueil</button></Link>
          </div>
        </div>
    );
};

export default Error404;