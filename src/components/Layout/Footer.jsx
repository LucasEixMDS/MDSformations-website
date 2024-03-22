
import logo from "../../assets/logoMDSblanc.svg"
import mobile from "../../assets/mobileBlanc.svg"
import qualiopi from "../../assets/qualiopi.webp"
import "./Footer.scss";
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import tiktok from '../../assets/toktok.svg'
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="footer">
            

            <div className="footer_website">
                <Link to="/"><img src={logo} alt="" /></Link>
                <div className="footer_social">
                    <a href="https://www.facebook.com/mdsformations"><img src={facebook} alt="logo du reseaux social facebook" /></a>
                    <a href="https://www.linkedin.com/company/mds-formations-pro/"><img src={linkedin} alt="logo du reseaux social linkedin" /></a>
                    <a href="https://www.instagram.com/mdsformations/"><img src={instagram} alt="logo du reseaux social instagram" /></a>
                    <a href="https://www.tiktok.com/@mdsformations"><img src={tiktok} alt="logo du reseaux social tiktok" /></a>
                    
                </div>
                 <Link to="/Inscription" ><button><img src={mobile} alt="boutton contactez-nous" />Contactez-nous</button></Link>       
                </div>
                <div className="footer_desktop">
            <div className="footer_lien">
                <p><strong>Informations</strong></p>
                <Link to="/devenir-modele" >Devenir Modèle</Link>
                <Link to="https://forms.gle/9cC2eGyxh8XY51Sw5" >Inscription Webinaire</Link>
                <Link to="/documentation" >Demande de documentation</Link>
                <Link to="/" >Nos articles</Link>
                <Link to="/handicap" >Accessibilité et handicap</Link>
            </div>
            
            <div className="footer_bar"></div>
            <div className="footer_legal">
                <p><strong>Ressources</strong></p>
                <Link to="/conditions-generales-de-vente" >CGV</Link>
                <Link to="/mentions-legales" >Mentions légales</Link>
                <Link to="/comment-s'inscrire-en-formation" >Conditions d inscription</Link>
                <Link to="/politique-de-protection" >Politique de protection des données</Link>
                <Link to="/" >Les différents financements</Link>
                <Link to="/hebergement" >Hébergement</Link>
            </div>
            </div>
            <div className="footer_bar"></div>
            <div className="footer_info">
            <p><strong>Contact</strong></p>
                <Link to="/" >02 40 96 32 80</Link>
                <Link to="/" >camille.melodiedessens@gmail.com</Link>
                <Link to="/" >33 blanche lande, 44521 Oudon</Link>
                <p><strong>Plateforme</strong></p>
                <Link to="/distanciel" >Plateforme Elearning prothésie</Link>
                <Link to="/distanciel" >Plateforme de cours en ligne</Link>
            </div>
            <div className="footer_entreprise">
                <img src={qualiopi} alt="" />
                <div className="qualiopi">
                <a href="https://mdsformations-website-u5520.vm.elestio.app/qualiopi.pdf" download="certificatQualiopi.pdf">
                    Télécharger le certificat
                </a>
                <p>La certification qualité a été délivrée au titre des catégories suivantes :</p>
                <ul>
                    <li>Actions de formation</li>
                    <li>Actions permettant de valider les acquis de l'expérience</li>
                    <li>actions de formation par apprentissage</li>
                </ul>
                </div>
                <p className='desktop'>Tous droits réservés © 2023</p>
                <p>Organisme de formation MDS formations</p>
                <p>33 Blanche Lande, 44521 Oudon</p>
                <p>SIRET 87855247000022</p>
                <p>NDA 52440882344</p>
                <p>APE 8559A</p>
                <div className="creation">
                <p className='desktop'>Création et réalisation</p>
                <p>Développement web : Lucas EIXARCH</p>
                <p>Web design et UX design : Duane CROIZET</p>
                </div>
            </div>

            
        </div>
    );
};

export default Footer;