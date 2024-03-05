import "./commentSinscrire.scss";
import { Link } from "react-router-dom";

const CommentSinscrire = () => {
    return (
        <div className="comment">
            
            <div className="headerComment">
                <h1>Comment s’inscrire en formation ?</h1>
                <h2>Votre chemin vers une carrière épanouissante commence ici !</h2>
            </div>


        <div className="commentContainer">
            <p>
            Chez MDS Formations, nous avons simplifié le processus d'inscription pour nos formations en bien-être et esthétique. Notre démarche d'accompagnement vise à rendre votre inscription aussi fluide que possible. Voici comment vous pouvez vous inscrire en quelques étapes simples :
            </p>

            <h3><span>Étape 1 :</span> choisissez votre formation</h3>

            <p>La première étape pour entamer votre parcours vers une carrière épanouissante est de <strong>parcourir notre sélection de formations sur notre site web</strong> ou<strong> téléchargez notre catalogue de formation.</strong> Explorez les différentes options de cours et trouvez celui qui correspond le mieux à vos objectifs professionnels et à vos intérêts.</p>
            <button>Télécharger notre catalogue</button>

        </div>

        <div className="commentContain">
        <h3><span>Étape 2 :</span> options d'inscriptions</h3>

        <p>Une fois que vous avez choisi la formation qui vous convient, plusieurs options s'offrent à vous :</p>

                    <div className="itemsComment">
                        <div className="topContainer">
                            <div className="icon">
                                <h2>Tous savoir sur une formation</h2>
                                <h3 className='date'>Toutes les informations dont vous avez besoin.</h3>
                            </div>
                        </div>
                        
                        <div className="bottomContainer">
                            <div className="buttons">
                                <Link to="/Inscription"><button>En savoir +</button></Link>
                            </div>
                        </div>
                    </div>
        </div>



        </div>
    );
};

export default CommentSinscrire;