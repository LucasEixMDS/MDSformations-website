import Accompa from "components/accompagnement/Accompa";
import CarousselFormationDesktop from "components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import "./paiementMensualites.scss";
import { Link } from "react-router-dom";
import HomeCadreTestformation from "components/inscription/HomeCadreTestformation";
import { Helmet } from 'react-helmet-async';


const PaiementMensualites = () => {
    return (
        <div className="mensualites">


                <Helmet>
                    <title>Les differents Paiements en plusieurs mensualités</title>
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/paiement-mensualites" />
                </Helmet>
            
            <div className="headerMensualites">
                <h1>Paiement en plusieurs mensualités</h1>
                <h2>Flexibilité pour votre budget de formation</h2>
            </div>


            <div className="mensualitesContain">
                <p>Chez MDS Formations, nous comprenons l'importance de rendre l'éducation et la formation accessibles à tous. C'est pourquoi nous offrons la possibilité de payer nos formations en plusieurs mensualités pour convenir à votre budget. Voici comment fonctionne notre programme de paiement en plusieurs mensualités :</p>

            </div>

            <Accompa />

            <div className="mensualitesContainer">
                <h3>Paiement en plusieurs mensualités : <span>un aperçu</span></h3>
                <p>Le paiement en plusieurs mensualités est une option disponible pour nos stagiaires qui préfèrent étaler le coût de leur formation sur plusieurs mois. Cette option est particulièrement utile pour ceux qui choisissent de financer leur formation personnellement.</p>
                <h3><span>Les conditions </span>du paiement en plusieurs mensualités</h3>

                <ul>
                    <ol><strong>1. Formations de moins de 400 € :</strong> pour les formations dont le coût total est inférieur à 400 €, l'option de paiement en plusieurs mensualités n'est pas disponible. Le paiement doit être effectué en une seule fois lors de l'inscription.</ol>
                    <ol><strong>2. Formations de 400 € à 1000 € :</strong> si le coût total de la formation se situe entre 400 € et 1000 €, vous avez la possibilité de payer en 2 à 3 mensualités sans frais supplémentaires. Cela vous permet de répartir le paiement sur une période plus confortable.</ol>
                    <ol><strong>3. Formations de plus de 1000 € :</strong> pour les formations dont le coût dépasse 1000 €, nous offrons la flexibilité de choisir le nombre de mensualités en fonction de la durée totale de la formation -2 mois. Par exemple, si votre formation dure 12 mois, vous pouvez étaler le paiement sur 10 mensualités maximums, sans frais supplémentaires.</ol>
                </ul>

                <Link to="/comment-s'inscrire-en-formation"><button>Comment s'inscrire en formation ?</button></Link>

            

            </div>
            <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to={"/toutes-nos-formations"}><button className="button_webinaire">Toutes nos formations certifiantes</button> </Link> 
            </div>

            <div className="mensualitesContain">
                <h3><span>Comment</span> ça fonctionne ?</h3>

                <ul>
                    <ol><strong>1. Choisissez votre formation :</strong> commencez par sélectionner la formation qui correspond le mieux à vos besoins et à vos objectifs de carrière.</ol>
                    <ol><strong>2. Déterminez la durée de votre formation :</strong> en fonction de la durée de votre formation, vous pourrez choisir le nombre de mensualités qui vous convient le mieux.</ol>
                    <ol><strong>3. Inscrivez-vous et choisissez l'option de paiement en plusieurs mensualités :</strong>  lors de votre inscription, indiquez que vous souhaitez payer en plusieurs mensualités. Notre équipe vous guidera pour définir le plan de paiement approprié.</ol>
                    <ol><strong>4. Mensualités égales :</strong>  les mensualités seront égales et réparties sur la durée convenue, ce qui facilite la gestion de votre budget.</ol>
                </ul>

                <p>Avec notre option de paiement en plusieurs mensualités, vous pouvez investir dans votre formation tout en maintenant une stabilité financière. C'est notre façon de vous aider à atteindre vos objectifs professionnels sans souci financier.</p>
                <p>Si vous avez des questions sur le paiement en plusieurs mensualités ou si vous souhaitez obtenir des informations spécifiques sur une formation, n'hésitez pas à nous contacter. Nous sommes là pour vous aider à planifier votre parcours de formation en toute tranquillité.</p>

                <Link to="/Inscription"><button>Nous contacter</button></Link>
            </div>

            <HomeCadreTestformation />

        </div>
    );
};

export default PaiementMensualites;