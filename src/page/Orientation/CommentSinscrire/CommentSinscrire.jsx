import HomeCadreTestformation from "components/inscription/HomeCadreTestformation";
import "./commentSinscrire.scss";
import { Link } from "react-router-dom";
import Accompa from "components/accompagnement/Accompa";

const CommentSinscrire = () => {
    return (
        <div className="comment">
            
            <div className="headerComment">
                <h1>Comment s’inscrire en formation ?</h1>
                <h2>Votre chemin vers une carrière épanouissante commence ici !</h2>
            </div>


        <div className="commentContainer">
            <p className="commentFirstText">
            Chez MDS Formations, nous avons simplifié le processus d'inscription pour nos formations en bien-être et esthétique. Notre démarche d'accompagnement vise à rendre votre inscription aussi fluide que possible. Voici comment vous pouvez vous inscrire en quelques étapes simples :
            </p>

            <h3><span>Étape 1 :</span> choisissez votre formation</h3>

            <p>La première étape pour entamer votre parcours vers une carrière épanouissante est de <strong>parcourir notre sélection de formations sur notre site web</strong> ou<strong> téléchargez notre catalogue de formation.</strong> Explorez les différentes options de cours et trouvez celui qui correspond le mieux à vos objectifs professionnels et à vos intérêts.</p>
            <button>Télécharger notre catalogue</button>

        </div>

        <div className="commentContain">
        <h3><span>Étape 2 :</span> options d'inscriptions</h3>

        <p>Une fois que vous avez choisi la formation qui vous convient, plusieurs options s'offrent à vous :</p>

            <div className="commentExplain">
                <div className="commentDiv">
                        <div className="itemsComment">
                            <div className="topContainer">
                                <div className="icon">
                                    <h2>Tous savoir sur une formation</h2>
                                    <h3 className='date'>Toutes les informations dont vous avez besoin.</h3>
                                </div>
                            </div>
                            
                            <div className="bottomContainer">
                                <div className="buttons">
                                    <Link to="/toutes-nos-formations"><button>En savoir +</button></Link>
                                </div>
                            </div>
                        </div>

                        <p><strong>Demande de documentation :</strong> si vous souhaitez en savoir plus sur <strong>le contenu de la formation, 
                            les horaires, et les tarifs</strong>, vous pouvez remplir notre <strong>formulaire de demande </strong> 
                            de documentation en ligne. Nous vous enverrons toutes les informations nécessaires.</p>
                </div>
                <div className="commentDiv">
                        <div className="itemsComment">
                            <div className="topContainer">
                                <div className="icon">
                                    <h2>Vous souhaitez un devis ?</h2>
                                    <h3 className='date'>Complétez le formulaire</h3>
                                </div>
                            </div>
                            
                            <div className="bottomContainer">
                                <div className="buttons">
                                    <Link to="/Inscription"><button>En savoir +</button></Link>
                                </div>
                            </div>
                        </div>

                        <p><strong>Demande de devis : </strong> si vous avez besoin d'une  <strong>estimation des coûts et des modalités de paiement,</strong>utilisez notre formulaire de<strong> demande de devis en ligne.</strong> 
                        Cela vous permettra de planifier votre financement.</p>
                </div>
                <div className="commentDiv">
                        <div className="itemsComment">
                            <div className="topContainer">
                                <div className="icon">
                                    <h2>S’inscrire en ligne !</h2>
                                    <h3 className='date'>Sélectionnez une sessions disponibles et inscrivez-vous.</h3>
                                </div>
                            </div>
                            
                            <div className="bottomContainer">
                                <div className="buttons">
                                    <Link to="/Inscription"><button>En savoir +</button></Link>
                                </div>
                            </div>
                        </div>

                        <p><strong>Demande de documentation :</strong> si vous souhaitez en savoir plus sur <strong>le contenu de la formation, 
                            les horaires, et les tarifs</strong>, vous pouvez remplir notre <strong>formulaire de demande </strong> 
                            de documentation en ligne. Nous vous enverrons toutes les informations nécessaires.</p>
                </div>
            </div>

            <p className="commentTextContact"><strong>Contactez-nous :</strong> si vous avez des questions spécifiques ou si vous préférez une assistance personnelle, n'hésitez pas à nous contacter </p>
            <p><strong>Par e-mail ou par téléphone :</strong> Notre équipe est là pour répondre à toutes vos questions.</p>

            <Link to="/Inscription"><button className="commentButtonContact">Nous contacter</button></Link>

            </div>

            <HomeCadreTestformation />

            <div className="commentFinish">
                <div className="commentContainer">
                    <h3><span>Étape 3 :</span> planification des sessions de formation</h3>    
                    <p>Une fois que vous avez choisi votre formation, nous travaillerons avec vous pour planifier les dates de sessions qui correspondent à la fois à notre calendrier de formation et à vos disponibilités.</p>
                </div>  
                <div className="commentContainer">
                    <h3><span>Étape 4 : </span>choix du financement</h3>
                    <p>Nous comprenons que le financement peut être une préoccupation majeure. Nous offrons une variété d'options de financement, notamment le financement personnel, le Compte Personnel de Formation (CPF), les Organismes Paritaires Collecteurs Agréés (OPCO), et les aides de Pôle Emploi. </p>
                    <p>Si vous choisissez le financement personnel, vous avez également la possibilité de le diviser en plusieurs mensualités sans frais supplémentaires.</p>
                    <Link to="/different-financement"><button>En savoir +</button></Link>
                    <p>Pour en savoir plus sur l'utilisation de votre CPF, consultez notre page dédiée sur "Comment Utiliser son CPF."</p>
                    <Link to="/comment-utiliser-cpf"><button>En savoir +</button></Link>
                </div>
                <div className="commentContainer">
                    <h3><span>Étape 5 :</span> finalisation de l’inscription</h3>    
                    <p>Enfin, une fois que tout est en ordre, nous finaliserons les derniers documents administratifs nécessaires à votre inscription en formation. </p>
                    <p>Une fois cela fait, vous serez officiellement inscrit et prêt à commencer votre voyage vers une carrière passionnante dans le bien-être et l'esthétique.</p>
                    <p>Chez MDS Formations, nous sommes déterminés à vous accompagner à chaque étape de votre inscription en formation. N'hésitez pas à nous contacter si vous avez des questions ou si vous avez besoin d'assistance supplémentaire. Nous sommes là pour vous aider à réaliser vos rêves professionnels.</p>
                    <Link to="/Inscription"><button>Nous contacter</button></Link>
                </div>  
            </div>

            <Accompa />

        </div>
    );
};

export default CommentSinscrire;