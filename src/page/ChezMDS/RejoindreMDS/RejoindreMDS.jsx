import Accompa from "components/accompagnement/Accompa";
import "./rejoindreMDS.scss";
import HomeCadreQuestion from '../../../components/inscription/HomeCadreQuestion';

const RejoindreMDS = () => {
    return (
        <div className="rejoindre">
            <div className="rejoindreHeader">
                <h1>Rejoindre l’équipe <br/>
                    MDS Formations</h1>
                <h2>Intégrez notre équipe et partagez nos valeurs</h2>
            </div>

            <div className="rejoindreBlanc">
                <p>Chez MDS Formations, nous sommes constamment à la recherche de professionnels passionnés pour enrichir notre équipe et contribuer à notre mission d'excellence dans la formation professionnelle en bien-être et esthétique. Que vous soyez un formateur indépendant expérimenté ou un individu motivé cherchant à soutenir notre équipe dans des fonctions de support, nous sommes ravis de vous présenter nos opportunités de recrutement.</p>
                <button>Comprendre notre déontologie</button>
                <h3>Devenir <span>formateur indépendant</span></h3>
                <p>Si vous êtes un expert dans le domaine du bien-être, de l'esthétique, de la prothésie ongulaire, de la réflexologie, ou d'autres disciplines connexes, et que vous souhaitez partager votre passion et vos compétences avec les futurs professionnels, nous vous encourageons à devenir formateur indépendant au sein de MDS Formations. En tant que formateur indépendant, vous aurez l'occasion de transmettre votre savoir et d'inspirer la prochaine génération de praticiens. Nous recherchons des formateurs passionnés, créatifs et soucieux de la réussite de nos élèves.</p>
            </div>
            <Accompa />
            <div className="rejoindreGris">
                    <h3>Rejoindre notre <span>équipe de support</span></h3>
                    <p>Pour que notre centre de formation fonctionne de manière fluide et que nos élèves reçoivent le meilleur service possible, nous recrutons également des professionnels pour des rôles de support. Ces fonctions incluent, entre autres, l'administration, la gestion de la relation client, le marketing, la logistique et bien d'autres. Si vous êtes une personne dynamique, organisée et déterminée à contribuer à notre succès, nous serions ravis de vous avoir dans notre équipe de support.</p>
                    <p>Chez MDS Formations, nous valorisons la diversité des compétences et des expériences, et nous croyons en la création d'un environnement inclusif où chaque individu peut s'épanouir. Si vous partagez notre passion pour le bien-être et l'esthétique, notre engagement envers la qualité de la formation et nos valeurs familiales et humaines, nous aimerions vous entendre.</p>
                    <button>Découvrir l'équipe</button>
                    <h3><span>Postulez</span> aujourd'hui</h3>
                    <p>Pour en savoir plus sur nos opportunités de recrutement actuelles, ou pour nous faire part de votre intérêt à rejoindre notre équipe, veuillez nous contacter. Nous sommes impatients de découvrir comment vous pouvez contribuer à l'excellence de MDS Formations et à l'épanouissement de nos élèves. Rejoignez-nous dans notre quête pour former les futurs professionnels du bien-être et de l'esthétique.</p>
                    <button>Nous contacter</button>
            </div>
            <HomeCadreQuestion />   
        </div>
    );
};

export default RejoindreMDS;