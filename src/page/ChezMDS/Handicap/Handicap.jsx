import Accompa from "components/accompagnement/Accompa";
import "./handicap.scss";
import CarousselFormationDesktop from "../../../components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import { Link } from 'react-router-dom';

const Handicap = () => {
    return (
        <div className="handicap">

            <div className="handicapHeader">        
                <h1>Accessibilité et handicap</h1>
                <h2>INotre engagement en faveur de l'Intégration et l’inclusivité</h2>
            </div>
            
        <div className="handicapContainer">

        <p>
        L'égalité des chances et l'accès à l'éducation pour tous, quel que soit son statut, 
        sont des valeurs fondamentales que nous défendons avec détermination. Notre engagement se 
        reflète dans notre démarche visant à rendre nos formations accessibles à tous, notamment 
        aux personnes en situation de handicap. Nous croyons fermement en la capacité de l'éducation à 
        transformer des vies, à favoriser l'intégration sociale et professionnelle, et à ouvrir des 
        portes vers un avenir plus prometteur. 
        Notre objectif est de créer un environnement d'apprentissage inclusif où chaque individu a sa place.
        </p>

        <h3>Adaptation et accessibilité personnalisées</h3>

        <p>Nous comprenons que chaque individu est unique, et nous travaillons activement à nous assurer que toutes nos formations sont adaptées pour répondre aux besoins spécifiques de nos élèves en situation de handicap. Notre équipe est dédiée à l'adaptation des cours et du matériel pédagogique, garantissant une expérience d'apprentissage fluide et gratifiante pour chacun.</p>
        
        <Link to="valeurs-mds"><button>Comprendre nos valeurs</button></Link>

        <h3>Accompagnement personnalisé</h3>

        <p>Lorsque vous choisissez MDS Formations, vous bénéficiez non seulement d'une 
            formation de qualité dans le bien-être et l'esthétique, mais aussi d'un accompagnement sur mesure. 
            Nous collaborons étroitement avec nos élèves en situation de handicap pour identifier leurs 
            besoins spécifiques et proposer des solutions adaptées. Que ce soit en termes de matériel, 
            d'horaires de cours, ou de méthodes d'évaluation, nous sommes là pour vous soutenir.</p>

        <div className="handicapContainerImage">
            <p>Nos référents handicaps pour votre formation</p>
            <div className="handicapImage">

            <div className="handicapImage1" style={{backgroundImage: 'url("https://mdsformations-website-u5520.vm.elestio.app/melodie.webp")'}}>
                <h4>Mélodie <br/>BALOCHE</h4>
            </div>
            <div className="handicapImage1"style={{backgroundImage: 'url("https://mdsformations-website-u5520.vm.elestio.app/lucaseixarch.webp")'}}>
                <h4>Lucas <br/>EIXARCH</h4>
            </div>

            </div>
        </div>
        
        <Link to="/notre-equipe-pedagogique"><button>Découvrir l'équipe</button></Link>

        <h3>Accessibilité numérique et ressources</h3>

        <p>Notre plateforme de formation en ligne est conçue 
            pour être accessible à tous, y compris aux personnes en situation de handicap. 
            Elle est conforme aux normes d'accessibilité, garantissant une navigation fluide et 
            une expérience optimale pour tous nos élèves. De plus, nous mettons à disposition des
             ressources pédagogiques variées pour accompagner 
            les élèves en situation de handicap dans leur apprentissage.</p>
            
            <Link to="/formations-distanciel"><button>Nos formations en ligne</button></Link>

        <h3>Possibilités de prise en charge en formation</h3>

        <p>Nous sommes conscients que le financement de la formation peut être un défi 
            pour certains élèves en situation de handicap. C'est pourquoi nous travaillons en 
            étroite collaboration avec l'Association OETH (Obligation d'Emploi des Travailleurs Handicapés) 
            pour offrir des solutions de financement et faciliter l'accès à nos formations.</p>

            <Link to="/different-financement"><button>Comprendre les différents financements</button></Link>

        <h3>GIHP</h3>

        <p>Le Groupement pour l'Insertion des Personnes Handicapées Physiques (GIHP) est une association qui œuvre pour l'intégration sociale et professionnelle des personnes en situation de handicap. Nous sommes fiers de collaborer avec le GIHP pour soutenir nos élèves en situation de handicap et les aider à atteindre leurs objectifs professionnels.</p>

        <Link to="https://www.gihp-reseau.fr/"><button>En savoir +</button></Link>

        <h3>Rejoignez notre communauté inclusive</h3>
        <p>Chez MDS Formations, nous sommes déterminés à créer une communauté inclusive, où chaque individu a sa place et est encouragé à poursuivre ses rêves, quel que soit son parcours. Si vous êtes en situation de handicap et que vous aspirez à une carrière dans le bien-être et l'esthétique, nous sommes là pour vous accompagner à chaque étape de votre parcours.</p>

        <p>N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques en matière d'accessibilité et d'intégration. Chez MDS Formations, toutes nos formations sont adaptées pour garantir votre réussite, et nous sommes là pour vous aider à concrétiser vos objectifs d'emploi grâce à nos partenariats avec des associations comme l'OETH et le GIHP.</p>

        </div>
        <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
           <Link to="/toutes-nos-formations"><button className="button_webinaire">Toutes nos formations certifiantes</button></Link>
            </div>
        <Accompa />

      
        

        </div>
    );
};

export default Handicap;