import {  Nav } from 'react-bootstrap';
import logo from "../../assets/logoMDSblanc.svg"
import mobile from "../../assets/mobileBlanc.svg"
import qualiopi from "../../assets/qualiopi.webp"
import "./Footer.scss";
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import tiktok from '../../assets/toktok.svg'



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
            <button><img src={mobile} alt="" />Contactez-nous</button>
            <Nav.Link href="/" >Devenir Modèle</Nav.Link>
            <Nav.Link href="/" >Inscription Webinaire</Nav.Link>
            <Nav.Link href="/" >Quizz Formulaire</Nav.Link>
            <Nav.Link href="/" >Demande de documentation</Nav.Link>
            <Nav.Link href="/" >Nos articles</Nav.Link>
            <Nav.Link href="/" >Accessibilité et handicap</Nav.Link>
            
            </div>
            <div className="footer_bar"></div>
            <div className="footer_legal">
            <Nav.Link href="/" >CGV</Nav.Link>
            <Nav.Link href="/" >Mentions légales</Nav.Link>
            <Nav.Link href="/" >Conditions d inscription</Nav.Link>
            <Nav.Link href="/" >Cookies</Nav.Link>
            <Nav.Link href="/" >Annulation et remboursement</Nav.Link>
            <Nav.Link href="/" >Hébergement</Nav.Link>
            </div>
            <div className="footer_bar"></div>
            <div className="footer_info">
            <Nav.Link href="/" >02 40 96 32 80</Nav.Link>
            <Nav.Link href="/" >camille.melodiedessens@gmail.com</Nav.Link>
            <Nav.Link href="/" >33 blanche lande, 44521 Oudon</Nav.Link>
            <Nav.Link href="/" >Plateforme Elearning prothésie</Nav.Link>
            <Nav.Link href="/" >Plateforme de cours en ligne</Nav.Link>
            </div>
            <div className="footer_entreprise">
            <img src={qualiopi} alt="" />
            <p>Tous droits réservés © 2023</p>
            <p>Organisme de formation MDS formations</p>
            <p>33 Blanche Lande, 44521 Oudon</p>
            <p>SIRET 87855247000022</p>
            <p>NDA 52440882344</p>
            <p>APE 8559A</p>
            <div className="creation">
            <p >Création et réalisation</p>
            <p>Développement web : Lucas EIXARCH</p>
            <p>Web design et UX design : Duane CROIZET</p>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;