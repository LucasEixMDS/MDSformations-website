import Accompa from "components/accompagnement/Accompa";
import "./utiliserCPF.scss";
import { Link } from "react-router-dom";
import HomeCadreTestformation from "components/inscription/HomeCadreTestformation";
import CarousselFormationDesktop from "components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import YouTubeVideo from "./YoutubeVideo";
import { Helmet } from 'react-helmet-async';




const UtiliserCPF = () => {
    return (
        <div className="utiliser">

                <Helmet>
                    <title>Comment utiliser son CPF</title>
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/utiliser-son-cpf" />
                </Helmet>

            <div className="headerUtiliser">
                <h1>Comment utiliser votre CPF <br/>
                    pour votre formation ?</h1>
                <h2>Investissez dans votre avenir professionnel</h2>
            </div>

            <div className="utiliserContain">
                <p>Le Compte Personnel de Formation (CPF) est un puissant outil qui permet à toute personne active de développer ses compétences et de se former pour atteindre ses objectifs professionnels. Chez MDS Formations, nous vous expliquons étape par étape comment utiliser votre CPF pour accéder à nos formations en bien-être et esthétique.</p>
                
                 <Link to="/different-financement"><button>Comprendre tous les financements</button></Link>

                <span className="h3"><span>Qui</span> peut utiliser le CPF ?</span>

                <p>Le CPF est accessible à un large éventail de personnes en activité, y compris :</p>
                <ul>
                    <li>Toutes les personnes en activité de 16 ans et plus (15 ans par dérogation dans le cas de la signature d’un contrat d’apprentissage).</li>
                    <li>Les salariés sous contrat de travail de droit privé, y compris les salariés agricoles.</li>
                    <li>Les personnes à la recherche d’un emploi, qu'elles soient inscrites ou non à Pôle emploi.</li>
                    <li>Les personnes accueillies dans un établissement et service d'aide par le travail (Esat).</li>
                    <li>Les fonctionnaires.</li>
                </ul>
                <p>Le CPF reste ouvert jusqu'à ce que son titulaire ait fait valoir l'ensemble de ses droits à la retraite. En cas de reprise d'une activité professionnelle après la retraite, il est possible de demander la réouverture du compte CPF.</p>
                <Link to="https://www.moncompteformation.gouv.fr/espace-prive/html/#/"><button>Découvrir mes droits CPF</button></Link>
            </div>

            <Accompa />
            
            <div className="utiliserContainer">
                <span className="h3"><span>Comment</span> utiliser votre CPF</span>
                <p>L'utilisation de votre CPF est simple et accessible en ligne. Voici les étapes à suivre :</p>

                <ul>
                    <ol>1. Inscription en ligne : rendez-vous sur le site officiel du gouvernement, Mon Compte Formation, ou utilisez l'application mobile correspondante.</ol>
                    <ol>2. Créez votre identité numérique La Poste : pour utiliser vos droits à la formation, vous devez obligatoirement créer et vérifier votre identité numérique La Poste. Vous avez deux options pour ce faire :</ol>
                        <ul>
                            <li>En ligne sur lidentitenumerique.laposte.fr : Créez votre compte et vérifiez votre identité en ligne ou avec votre facteur lors d'un rendez-vous ultérieur.</li>
                            <li>En bureau de poste : Faites-vous accompagner par un chargé de clientèle de La Poste pour la création de votre identité numérique.</li>
                        </ul>
                    
                </ul>
                <Link to="https://www.solidarite-numerique.fr/tutoriels/creer-mon-identite-numerique-sur-le-site-de-la-poste/"><button>Créer mon identité numérique</button></Link>

                <div className="utiliserVideo">

                    <div className="videoContain">
                    <YouTubeVideo className="video" videoId="qnUF0Xjf0mg" />
                    <p>Chaine Youtube de La Poste : L’identité numérique La Poste, comment ça marche ?</p>
                        </div>
                        <div className="videoContain">
                        <YouTubeVideo className="video" videoId="DLYwaK3aIfI" />
                        <p>Chaine Youtube de La Poste : Comment utiliser L'Identité Numérique La Poste ?</p>
                        </div>
                    
                </div>
                
                <ul>
                    <ol>3. Connectez-vous : retournez sur le site Mon Compte Formation (moncompteformation.gouv.fr). Pour vous identifier, cliquez sur "France Connect+" et sélectionnez "L'Identité Numérique La Poste". Saisissez votre numéro de mobile pour recevoir une notification sur votre smartphone, puis confirmez la demande de connexion en saisissant le code secret à 4 chiffres.</ol>
                    <ol>4. Recherchez et inscrivez-vous à une formation : une fois connecté, consultez vos droits à la formation professionnelle. Vous pouvez ensuite rechercher la formation qui vous intéresse et vous inscrire en ligne.</ol>
                </ul>
                <p>N'oubliez pas qu'il existe un seul site officiel du gouvernement pour accéder à votre CPF, donc soyez vigilants pour éviter les arnaques en ligne.</p>
            </div>

            <div className="utiliserContain">
                <span className="h3"><span>Se former</span> chez MDS formations :</span>
                <p>Si vous souhaitez vous inscrire à l'une de nos formations en bien-être et esthétique en utilisant votre CPF, nous sommes là pour vous accompagner à chaque étape du processus.</p>
                <p>Contactez-nous directement par téléphone au <strong>02 40 96 32 80</strong> ou par e-mail à <strong>camille.melodiedessens@gmail.com</strong>. </p>

                <Link to="/Inscription"><button>Comment s'inscrire</button></Link>

            </div>

            <HomeCadreTestformation />

            <div className="home2">
            <span className="h3">Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</span>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to={"/toutes-nos-formations"}><button className="button_webinaire">Toutes nos formations certifiantes</button> </Link> 
            </div>

        </div>
    );
};

export default UtiliserCPF;