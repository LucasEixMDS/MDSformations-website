import "./modele.scss";
import Formulaireinscription from "../../../components/inscription/Formulaireinscription";
import HomeCadreTestformation from '../../../components/inscription/HomeCadreTestformation';
import CarousselFormationDesktop from "../../../components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import { Helmet } from 'react-helmet-async';

const Modele = () => {
    return (
        <div className="modele">

                <Helmet>
                    <title>Devenir modèle en formation</title>
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/devenir-modele" />
                </Helmet>   
            
            <div className="modeleHeader">
                <h1>Devenez modèle dans nos formations</h1>
                <h2>Un échange gagant-gagant</h2>
            </div>

            <div className="modeleTarifs">
                <p className="modeleTextePresentation">
                Avez-vous déjà envisagé de devenir modèle dans le cadre de nos formations professionnelles en bien-être et esthétique ? C'est une opportunité passionnante qui vous permet de bénéficier de soins de haute qualité à des tarifs avantageux tout en contribuant à l'apprentissage de nos élèves.
                </p>

                <h3>Des tarifs <span>Avantageux pour vous</span></h3>
                <p>Nous vous offrons l'opportunité de profiter de divers soins à des tarifs exceptionnellement abordables. C'est l'occasion idéale pour vous chouchouter tout en économisant. </p>
                <p>Voici nos tarifs tout en économisant.</p>
                <ul>
                    <li><strong>Massage bien-être, énergétique :</strong> 20 €</li>
                    <li><strong>Prothésie Ongulaire :</strong> 15 €</li>
                    <li><strong>Extension de cils :</strong> 30 €</li>
                    <li><strong>Teinture ou rehaussement de cils :</strong> 15 €</li>
                    <li><strong>Maquillage permanent :</strong> 50 €</li>
                    <li><strong>Réflexologie :</strong> (plantaire, palmaire, auriculaire, faciale et crânienne) : 15 €</li>
                </ul>
                <p>Le paiement se fera le jour de votre prestation, en espèce ou par chèque.</p>
            </div>

            <div className="modeleInscript">
                <div className="modeleInscriptLeft">
                    <h3>Bénéficiez de <span>soins de qualité</span></h3>
                    <p>En tant que modèle dans nos formations, vous recevrez des soins prodigués par nos élèves sous la supervision attentive de nos formateurs expérimentés. Nous mettons un point d'honneur à offrir des prestations de qualité, garantissant ainsi votre satisfaction.</p>
                    <button>Nos chartes qualités</button>
                    <h3>Contribuez à la <span>formation de futurs professionnels</span></h3>
                    <p>Votre participation en tant que modèle est précieuse pour nos élèves. Elle leur permet de mettre en pratique les compétences acquises au cours de leur formation. En devenant modèle, vous contribuez à leur développement professionnel tout en profitant de soins exceptionnels.</p>
                    
                    <p>Si vous êtes intéressé(e) à devenir modèle dans nos formations, n'hésitez pas à nous contacter. Nous serons ravis de vous accueillir au sein de notre centre de formation pour partager cette expérience enrichissante avec vous.</p>
                    <button>Nous contacter</button>
                </div>
                <div className="modeleInscriptRight">
                    <div className="modeleFormulaire">
                            <Formulaireinscription />
                    </div>
                </div>
            </div>
            <div className="cadreTestFormation">
                <HomeCadreTestformation />
                </div>
                <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <button className="button_webinaire">Toutes nos formations certifiantes</button>
            </div>
        </div>
    );
};

export default Modele;