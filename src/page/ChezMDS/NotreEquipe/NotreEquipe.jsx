import "./notreEquipe.scss";
import HomeCadreQuestion from "../../../components/inscription/HomeCadreQuestion";
import CarousselFormationDesktop from "../../../components/carrousels/CarrouselFormation/CarousselFormationDesktop";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotreEquipe = () => {
    return (
        <div className="NotreEquipe">

                <Helmet>
                    <title>L'équipe du centre de formation</title>
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/notre-equipe-pedagogique" />
                </Helmet>   
            
            <div className="equipeHeader">
                <h1>Notre équipe pédagogique</h1>
                <h2>Des experts à votre service</h2>
            </div>

        <div className="notreEquipeContainer">

            <div className="equipeContent">
                <p>Chez MDS Formations, nous croyons que la qualité de l'enseignement est la clé de la réussite de nos étudiants. C'est pourquoi notre équipe pédagogique est composée d'experts chevronnés dans les domaines du bien-être et de l'esthétique. Chacun d'entre eux apporte un ensemble unique de compétences et d'expériences pour offrir une formation de haute qualité.</p>
                <Link to="/Inscription"><button>Nous contacter</button></Link>
            </div>


            <div className="equipe">
                <h3>L'équipe de <span>direction</span></h3>

            <div className="equipeContainer">
            <div className="equipeSubContainer">
                <div className="equipeDiv">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/christiana.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Christiana Eixarch</h4>
                        <p><strong>Directrice</strong></p>
                        <p>Experte en Massage</p>
                        <p className="petit">Thérapeute depuis 20 ans Formatrice depuis 10 ans</p>
                    </div>
                </div>

                <div className="equipeDiv2">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/camille.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Camille Faure</h4>
                        <p><strong>Directrice adjointe</strong></p>
                        <p>Experte en Massage</p>
                        <p className="petit">Thérapeute depuis 10 ans Formatrice depuis 5 ans</p>
                    </div>
                </div>
                </div>
            </div>

            <Link to="/accompagnement-global"><button>Découvrir notre accompagnement</button></Link>

            </div>

            <div className="equipes">
                <h3>L'équipe <span>support</span></h3>

            <div className="equipeContainer">
                <div className="equipeSubContainer">
                <div className="equipeDiv">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/lucas.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Lucas Eixarch</h4>
                        <p><strong>Développeur web</strong></p>
                        <p>Responsable Suntaya Formation</p>
                        <p className="petit">Référent handicap</p>
                    </div>
                </div>

                <div className="equipeDiv2">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/duane.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Duane Croizet</h4>
                        <p><strong>Web Designer</strong></p>
                        <p>Praticien en prothésie ongulaire</p>
                        <p className="petit">Formateur depuis 3 ans</p>
                    </div>
                </div>
                </div>
                <div className="equipeSubContainer">
                <div className="equipeDiv">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/nadege.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Nadège Podevin</h4>
                        <p><strong>Assistant administrative</strong></p>
                        <p>Experte en Téléphonie mobile et Digiforma</p>
                        <p className="petit">Accueil physique et standardiste</p>
                    </div>
                </div>

                <div className="equipeDiv2">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/anthony.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Anthony Alves</h4>
                        <p><strong> Web Design / UX</strong></p>
                        <p></p>
                        <p className="petit">Alternant</p>
                    </div>
                </div>
                </div>
            </div>

            </div>

            <div className="equipe">
                <h3>L'équipe de<span> Formateurs(trices)</span></h3>

            <div className="equipeContainer">
            <div className="equipeSubContainer">
                <div className="equipeDiv">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/aurelien.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Aurélien Cosson</h4>
                        <p><strong>Formateur en Réfléxologie</strong></p>
                        <p>Expert en Réflexologie</p>
                        <p className="petit">Thérapeute depuis 10 ans</p>
                    </div>
                </div>

                <div className="equipeDiv2">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/lolita.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Lolita Sadouni</h4>
                        <p><strong>Formatrice en massage bien-être</strong></p>
                        <p>Experte en massage bien-être</p>
                        <p className="petit">Formatrice depuis 1 ans</p>
                    </div>
                </div>
                </div>
                <div className="equipeSubContainer">
                <div className="equipeDiv">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/carole.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Carole Tessier</h4>
                        <p><strong>Formateur en Réfléxologie</strong></p>
                        <p>Expert en Réflexologie</p>
                        <p className="petit">Thérapeute depuis 10 ans</p>
                    </div>
                </div>

                <div className="equipeDiv2">
                    <div className="equipeImage">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/laure.webp" alt="" />
                    </div>
                    <div className="equipeText">
                        <h4>Laure Gueilhers</h4>
                        <p><strong>Formateur en Réfléxologie</strong></p>
                        <p>Expert en Réflexologie</p>
                        <p className="petit">Thérapeute depuis 10 ans, formtrice depuis 5 ans</p>
                    </div>
                </div>
                </div>
            </div>
            <Link to="/valeurs-de-mdsformations"><button>Découvrir nos valeurs</button></Link>

            </div>



        </div>

        <HomeCadreQuestion />

        <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
           <Link to="/toutes-nos-formations"><button className="button_webinaire">Toutes nos formations certifiantes</button></Link>
            </div>


        </div>
    );
};

export default NotreEquipe;