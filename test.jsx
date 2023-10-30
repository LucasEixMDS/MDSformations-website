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
        "Nos formations": {
            items: [
                "ongles",
                "visages",
                "corps",
                "tertiaire",
                {
                    label: "👩‍🎓 Les formations diplômantes",
                    url: "/formations/diplomantes",
                    special: true
                },
                {
                    label: "🧑‍💻 Les formations en ligne",
                    url: "/formations/en-ligne",
                    special: true
                },
                {
                    label: "🧑🧑‍💼 Les VAE et VAP",
                    url: "/formations/en-ligne",
                    special: true
                },
                {
                    label: "Toutes les formations",
                    url: "/formations/toutes-les-formations",
                    special: true
                },
                {
                    label: "Trouvez votre formations idéal !",
                    url: "/formations/trouver-votre-formation"
                }
            ],
            url: "/formations"
        },
        
        "Orientation ": ["Quelle formation est faite pour vous ?", "besoin d'être accompagné ?", "Devis & inscription", "Comment s'inscrire en formation ?", "Les différents financements", "réorientation professionnelle", "La VAE et la VAP", "Comment utiliser votre CPF ?", "Paiement en plusieurs mensualités" ],
        "Articles ": ["interviews", "bien-être", "beauté", "esthétique", "Carrière", "Formation professionnel" ],
        "Chez MDS ": ["Accompagnement", "Notre équipe pédagogique", "Hébergement", "Formation à distance", "Accessibilités & handicap", "Devenir modèle", "Rejoindre MDS"]
    };

    const subMenus = { 
        "ongles": {
            items: [
                {
                    name: "prothesie ongulaire en centre",
                    url: "/formations/prothesie-ongulaire-en-centre"
                },
                {
                    name: "prothesie ongulaire en ligne",
                    url: "/formations/prothesie-ongulaire-en-ligne"
                }
            ],
            url: "/formations"
        },
        "visages": {
            items: [
                {
                    name: "maquillage permanent",
                    url: "/formations/maquillage-permanent"
                },
                {
                    name: "extension de cils",
                    url: "/formations/extension-de-cils"
                }
            ],
            url: "/formations"
        },
        "corps": {
            items: [
                {
                    name: "reflexologie",
                    url: "/formations/reflexologie"
                },
                {
                    name: "masseur professionnel",
                    url: "/formations/masseur-professionnel"
                },
                {
                    name: "massage du monde",
                    url: "/formations/massage-du-monde"
                }
            ],
            url: "/formations"
        },
        "tertiaire": {
            items: [
                {
                    name: "SST",
                    url: "/formations/SST"
                },
                {
                    name: "FPA",
                    url: "/formations/FPA"
                },
                {
                    name: "FO",
                    url: "/formations/FO"
                }
            ],
            url: "/formations"
        },
        "Accompagnement": {
            items: [
                {
                    name: "Nos formations certifiantes",
                    url: "/chez-mds/accompagnement/nos-formations-certifiantes"
                },
                {
                    name: "Accompagnement global",
                    url: "/chez-mds/accompagnement/accompagnement-global"
                },
                {
                    name: "Charte qualité",
                    url: "/chez-mds/accompagnement/charte-qualité"
                },
                {
                    name: "Suivi post-formation",
                    url: "/chez-mds/accompagnement/suivi-post-formation"
                },
                {
                    name: "La direction pédagogique",
                    url: "/chez-mds/accompagnement/la-direction-pédagogique"
                },
                {
                    name: "Les valeurs MDS",
                    url: "/chez-mds/accompagnement/les-valeurs-mds"
                }
            ],
            url: "/chez-mds/accompagnement"
        }
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
        e.preventDefault();  // Placez-le au début
    
        if (menus[menuName]) {
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
            <Link to="/">
                <h3><img src={logo} alt="" /></h3>
            </Link>
            <div className="rightMenu">
                <img src={mobile} alt="" />
                <img src={loupe} alt="" />
                <nav ref={navRef}>
                    {!activeMenu && Object.keys(menus).map(menuName => (
                        <Link
                            to={menus[menuName].url || '#'}
                            key={menuName}
                            onClick={(e) => handleMenuClick(menuName, e)}>
                            {menuName}
                            {hasSubMenus(menuName) && <img className='svgplus' src={plus} alt="plus" />}
                        </Link>
                    ))}
    
                    {activeMenu && (
                        <>
                            <Link
                                to={subMenus[currentSubMenuTitle || activeMenu] ? subMenus[currentSubMenuTitle || activeMenu].url : '#'}
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
    
                            {subMenu.map(item => {
                                const isSpecial = item.special;
                                const label = item.label || item;
                                const url = item.url || `/${slugify(label)}`;
    
                                return (
                                    <Link
                                        to={url}
                                        key={label}
                                        onClick={(e) => handleSubMenuClick(label, e)}
                                        style={{ fontWeight: isSpecial ? 'bold' : 'normal', color: hasSubMenus(label) && currentSubMenuTitle === label ? '#7874C7' : 'inherit' }}>
                                        {label}
                                        {!isSpecial && hasSubMenus(label) && (currentSubMenuTitle === label ?
                                            <img src={minus} alt="minus" /> :
                                            <img className='svgplus' src={plus} alt="plus" />)}
                                    </Link>
                                );
                            })}
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
