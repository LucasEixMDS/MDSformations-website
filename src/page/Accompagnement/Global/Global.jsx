import Accompa from "components/accompagnement/Accompa";
import "./global.scss";
import { Link } from "react-router-dom";
import HomeCadreTestformation from "components/inscription/HomeCadreTestformation";
import CarousselFormationDesktop from "components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import { Helmet } from 'react-helmet-async';

const Global = () => {
    return (
        <div className="global">

            <Helmet>
        <title>Accompagnement global des stagiaires</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/accompagnement-global" />
            </Helmet>
            
            <div className="headerGlobal">
                <h1>Accompagnement Global</h1>
                <h2>Votre réussite au cœur <br/>de nos formations</h2>
            </div>

            <div className="globalContainer">
                <p>Chez MDS Formations, notre engagement envers votre réussite est inébranlable. Nous comprenons que la formation professionnelle dans le bien-être et l'esthétique ne se limite pas à la transmission de connaissances, mais à l'accompagnement global de nos étudiants à chaque étape de leur parcours. </p>
                <Link to="/notre-equipe-pedagogique" ><button>Découvrir notre pédagogie</button></Link>
                <p>Voici comment nous vous soutenons pour atteindre vos objectifs :</p>

                <h3>Une équipe pédagogique <span>expertisée et accessible</span></h3>
                <p>Notre équipe pédagogique est composée d'experts chevronnés dans leurs domaines respectifs. Ils apportent une expertise concrète et des années d'expérience professionnelle dans le bien-être et l'esthétique. Plus important encore, ils sont accessibles, attentifs à vos besoins, et dévoués à votre succès. Vous pouvez compter sur eux pour vous guider, répondre à vos questions et vous soutenir tout au long de votre formation.</p>
            </div>

            <Accompa />

            <div className="globalContain">

            <h3>Un environnement d'<span>apprentissage bienveillant</span></h3>
            <p>Chez MDS Formations, nous croyons en la puissance d'un environnement bienveillant pour favoriser l'apprentissage. Notre approche est familiale, et nous encourageons une collaboration positive entre étudiants. Vous vous sentirez soutenu et inspiré par vos pairs tout au long de votre parcours de formation.</p>
            <Link to="/valeurs-de-mdsformations" ><button>Découvrir nos valeurs</button></Link>

 
            </div>

            <div className="globalContainer">
                <h3>Un suivi <span>individuel</span></h3>
                <p>L'accompagnement ne s'arrête pas à la salle de classe. Nous fournissons un suivi individuel pour répondre à vos préoccupations, clarifier des concepts, ou offrir une assistance supplémentaire si nécessaire. Votre réussite est notre priorité, et nous nous engageons à travailler en étroite collaboration avec vous pour vous aider à atteindre vos objectifs.</p>
                <Link to="/suivis-post-formation" ><button>Découvrir notre suivi pédagogique</button></Link>
            </div>

            <HomeCadreTestformation />

            <div className="globalContain">
                <h3>Des opportunités de <span>réseautage et de carrière</span></h3>
                <p>Au-delà de la formation, nous vous offrons des opportunités de réseautage et d'orientation professionnelle. Vous serez exposé à un réseau de professionnels du bien-être et de l'esthétique, ce qui peut favoriser votre entrée sur le marché du travail après votre formation.</p>
                <h4><span>Votre réussite, </span>notre satisfaction</h4>
                <p className="text-end">Au sein de MDS Formations, nous évaluons notre réussite en fonction des accomplissements de nos étudiants. Votre succès est notre source de fierté principale, et nous sommes honorés de vous guider sur le chemin d'une carrière épanouissante dans le domaine du bien-être et de l'esthétique.</p>
            </div>

            <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to="/toutes-nos-formations"><button className="button_webinaire">Toutes nos formations certifiantes</button></Link>
            </div>

        </div>
    );
};

export default Global;