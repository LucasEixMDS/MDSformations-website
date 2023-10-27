import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logoMDS.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import plus from "../../assets/plus.svg";
import mobile from "../../assets/mobile.svg";
import loupe from "../../assets/loupe.svg";
import minus from "../../assets/minus.svg";
import "./Navbar.scss";

function Navbar() {
    const navRef = useRef();
    const [activeMenu, setActiveMenu] = useState(null);
    const [subMenu, setSubMenu] = useState([]);
	const [currentSubMenuTitle, setCurrentSubMenuTitle] = useState(null);
	


    const menus = {
        "Nos formations ": ["ongles", "visages", "corps", "tertiaire"],
        "Orientation ": ["Quelle formation est faite pour vous ?", "besoin d'être accompagné ?", "Devis & inscription", "Comment s'inscrire en formation ?"],
        "Articles ": ["interviews", "bien-être", "beauté", "esthétique", "Formation professionnel"],
        "Chez MDS ": ["Accompagnement", "Notre équipe", "Hébergement", "elearning", "Accessibilités"]
    };

    const subMenus = {
        "ongles": ["prothesie ongulaire en centre", "prothesie ongulaire en ligne"],
        "visages": ["maquillage permanent", "extension de cils"],
        "corps": ["reflexologie", "masseur professionnel", "massage du monde"],
        "tertiaire": ["SST", "FPA", "FO"],
		"Accompagnement" : [ "Nos formations certifiantes", "Accompagnement global", "Charte qualité", "Suivi post-formation", "La direction pédagogique", "Les valeurs MDS" ]  
    };

    const slugify = (str) => {
        return str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    }

    const resetMenuState = () => {
        setActiveMenu(null);
        setSubMenu([]);
        setCurrentSubMenuTitle(null);
    };

    const showNavbar = () => {
        if (!navRef.current.classList.contains("responsive_nav")) {
            resetMenuState(); // Réinitialiser les états si la navbar n'est pas ouverte
        }
        navRef.current.classList.toggle("responsive_nav");
    };
    const closeNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
        // Nous ne réinitialisons plus l'état ici
    };

    const handleMenuClick = (menuName, e) => {
        if (menus[menuName]) {
            e.preventDefault();
            setActiveMenu(menuName);
            setSubMenu(menus[menuName]);
            setCurrentSubMenuTitle(null); // Reset sub-sub-menu title
        } else {
            // Si le menu cliqué n'a pas de sous-menus, fermez la navbar
            // et réinitialisez l'état du menu à ses valeurs par défaut
            closeNavbar();
            resetMenuState();  // Réinitialisation de l'état
        }
    };

    // Cette fonction gère les clics sur les éléments du sous-menu
    const handleSubMenuClick = (submenuName, e) => {
        if (subMenus[submenuName]) {
            e.preventDefault();
            setCurrentSubMenuTitle(submenuName);
            setSubMenu(subMenus[submenuName]);
        } else {
            // Si le sous-menu cliqué n'a pas de sous-sous-menus, fermez la navbar
            // et réinitialisez l'état du menu à ses valeurs par défaut
            closeNavbar();
            resetMenuState();  // Réinitialisation de l'état
        }
    };

	const hasSubMenus = menuName => {
        return menus[menuName] || subMenus[menuName];
    }


    return (
        <header>
            <Link to="/" >
                <h3> <img src={logo} alt="" /> </h3>
            </Link>
            <div className="rightMenu">
                <img src={mobile} alt="" />
                <img src={loupe} alt="" />
                <nav ref={navRef}>
                    {!activeMenu && Object.keys(menus).map((menuName) => (
                        <Link 
                            to={`/${slugify(menuName)}`} 
                            key={menuName} 
                            onClick={(e) => handleMenuClick(menuName, e)}>
                                {menuName} 
                                {hasSubMenus(menuName) && <img className='svgplus' src={plus} alt="plus" />}
                        </Link>
                    ))}
    
                    {activeMenu && (
                        <>
                            <Link 
                                to={`/${slugify(currentSubMenuTitle || activeMenu)}`} 
                                onClick={(e) => { 
                                    e.preventDefault(); 
                                    setActiveMenu(null); 
                                    setSubMenu([]); 
                                    setCurrentSubMenuTitle(null); 
                                }}
                                style={{ color: hasSubMenus(currentSubMenuTitle || activeMenu) ? '#7874C7' : 'inherit' }}>
                                    {currentSubMenuTitle || activeMenu} 
                                    <img src={minus} alt="minus" />
                            </Link>
                            
                            {subMenu.map(sub => (
                                <Link 
                                    to={`/${slugify(sub)}`} 
                                    key={sub} 
                                    onClick={(e) => handleSubMenuClick(sub, e)}
                                    style={{ color: hasSubMenus(sub) && currentSubMenuTitle === sub ? '#7874C7' : 'inherit' }}>
                                        {sub}
                                    {hasSubMenus(sub) && (currentSubMenuTitle === sub ? 
                                        <img src={minus} alt="minus" /> : 
                                        <img className='svgplus' src={plus} alt="plus" />)}
                                </Link>
                            ))}
                        </>
                    )}
    
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <img src={close} alt="" />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <img src={menu} alt="" />
                </button>
            </div>
        </header>
    );
}

export default Navbar;
