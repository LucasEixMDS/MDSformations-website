import Accompa from "components/accompagnement/Accompa";
import CarousselFormationDesktop from "../../../components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import "./vae.scss";

const Vae = () => {
    return (
        <div className="vae">
            <div className="vaeHeader">
                <h1>La VAE et la VAP</h1>
                <h2>Valorisez votre expérience dans le bien-être et l’esthétique</h2>
            </div>
            <div className="vaePage">
            <p>Chez MDS Formations, nous comprenons que l'apprentissage ne suit pas toujours un chemin traditionnel. C'est pourquoi nous vous proposons deux opportunités précieuses pour mettre en valeur votre expérience et vos compétences dans le domaine du bien-être et de l'esthétique : la Validation des Acquis de l'Expérience (VAE) et la Validation des Acquis Professionnels (VAP).</p>
            <button>Toutes nos formations en VAE et VAP</button>
            <h3><span>La VAE :</span> reconnaissez votre expertise</h3>
            <p>La VAE est un processus qui vous permet de faire reconnaître vos compétences acquises par l'expérience. Si vous travaillez depuis plusieurs années dans le secteur du bien-être et de l'esthétique, que vous avez accumulé des connaissances et des compétences, mais que vous n'avez pas de diplôme pour les valider, la VAE est votre opportunité.</p>
            <p>Nous vous guidons tout au long du processus de VAE, de la constitution de votre dossier de validation à la préparation de l'entretien avec le jury. Une fois que votre expérience est reconnue, vous obtenez un diplôme officiel qui atteste de vos compétences.</p>
            <h3><span>La VAP :</span> valorisez votre parcours professionnel</h3>
            <p>La VAP, quant à elle, vous permet de valoriser vos acquis professionnels. Si vous possédez déjà un diplôme ou une certification dans un domaine connexe, la VAP peut vous aider à réduire la durée de votre formation. Cela signifie que vous pouvez atteindre vos objectifs plus rapidement et avec une formation adaptée à vos besoins.<br/>
            Chez MDS Formations, nous évaluons vos acquis professionnels pour déterminer dans quelle mesure ils correspondent à nos programmes de formation. Ensuite, nous adaptons votre parcours de formation en conséquence.</p>
            <h3>Un chemin personnalisé <span>vers la réussite</span></h3>
            <p>La VAE et la VAP sont des moyens de personnaliser votre parcours de formation. Chez MDS Formations, nous croyons en l'importance de reconnaître et de valoriser l'expertise acquise par l'expérience professionnelle. Avec la VAE et la VAP, vous pouvez obtenir un diplôme reconnu qui témoigne de vos compétences dans le bien-être et l'esthétique, et vous ouvre de nouvelles opportunités professionnelles. N'hésitez pas à nous contacter pour en savoir plus sur ces processus et sur la manière dont nous pouvons vous accompagner dans votre démarche de reconnaissance et de valorisation de votre expérience.</p>
            </div>
            <Accompa />
            <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <button className="button_webinaire">Toutes nos formations certifiantes</button>
            </div>
        </div>
    );
};

export default Vae;