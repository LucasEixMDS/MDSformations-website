import {  Nav } from 'react-bootstrap';
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
                <img src={logo} alt="" />
                <div className="footer_social">
                    <a href=""><img src={facebook} alt="logo du reseaux social facebook" /></a>
                    <a href=""><img src={linkedin} alt="logo du reseaux social linkedin" /></a>
                    <a href=""><img src={instagram} alt="logo du reseaux social instagram" /></a>
                    <a href=""><img src={tiktok} alt="logo du reseaux social tiktok" /></a>
                    
                </div>
                 <Link to="/Inscription" ><button><img src={mobile} alt="" />Contactez-nous</button></Link>       
                </div>
                <div className="footer_desktop">
            <div className="footer_lien">
                <p><strong>Ressources</strong></p>
                <Link to="/devenir-modele" >Devenir Modèle</Link>
                <Link to="https://forms.gle/9cC2eGyxh8XY51Sw5" >Inscription Webinaire</Link>
                <Link to="/documentation" >Demande de documentation</Link>
                <Link to="/" >Nos articles</Link>
                <Link to="/" >Accessibilité et handicap</Link>
            </div>
            
            <div className="footer_bar"></div>
            <div className="footer_legal">
                <p><strong>Ressources</strong></p>
                <Link to="/" >CGV</Link>
                <Link to="/" >Mentions légales</Link>
                <Link to="/" >Conditions d inscription</Link>
                <Link to="/" >Cookies</Link>
                <Link to="/" >Annulation et remboursement</Link>
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
                <Link to="/" >Plateforme Elearning prothésie</Link>
                <Link to="/" >Plateforme de cours en ligne</Link>
            </div>
            <div className="footer_entreprise">
                <img src={qualiopi} alt="" />
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