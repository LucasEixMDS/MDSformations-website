import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logoMDS.svg";
import menu from "../../../assets/menu.svg";
import close from "../../../assets/close.svg";
import plus from "../../../assets/plus.svg";
import mobile from "../../../assets/mobile.svg";
import loupe from "../../../assets/loupe.svg";
import minus from "../../../assets/minus.svg";
import "./Navbar.scss";
import { finalUrls, menus, slugify, subMenus, submenuTags } from 'utils/routingUtils';

function Navbar() {
    const navRef = useRef();
    const [activeMenu, setActiveMenu] = useState(null);
    const [subMenu, setSubMenu] = useState([]);
	const [currentSubMenuTitle, setCurrentSubMenuTitle] = useState(null);
	const [navigationHistory, setNavigationHistory] = useState([]);

    function generateButtonsForSubmenu(submenuName) {
        const tags = submenuTags[submenuName] || [];
        return tags.map(tag => (
          <button className="tagButton" key={tag}>{tag}</button>
        ));
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

    const navigate = useNavigate();

    const handleBackNavigation = (e) => {
        e.preventDefault();
        
        const updatedHistory = [...navigationHistory];
        updatedHistory.pop(); // Supprime le dernier élément
        
        const lastMenu = updatedHistory[updatedHistory.length - 1];
        
        if (menus[lastMenu]) {
           setActiveMenu(lastMenu);
           setSubMenu(menus[lastMenu]);
           setCurrentSubMenuTitle(null);
        } else if (subMenus[lastMenu]) {
           setActiveMenu(navigationHistory[navigationHistory.length - 2]);
           setSubMenu(subMenus[lastMenu]);
           setCurrentSubMenuTitle(lastMenu);
        } else {
           setActiveMenu(null);
           setSubMenu([]);
           setCurrentSubMenuTitle(null);
        }
        
        setNavigationHistory(updatedHistory);
     };

     const handleMenuClick = (menuName, e) => {
        if (menus[menuName]) {
            e.preventDefault();
            setActiveMenu(menuName);
            setSubMenu(menus[menuName]);
            setCurrentSubMenuTitle(null);
            setNavigationHistory(prev => [...prev, menuName]); // Ajoutez ceci
        } else {
            closeNavbar();
            resetMenuState();
        }
    };

    const handleSubMenuClick = (submenuName, e) => {
        if (subMenus[submenuName]) {
            e.preventDefault();
            setCurrentSubMenuTitle(submenuName);
            setSubMenu(subMenus[submenuName]);
            setNavigationHistory(prev => [...prev, submenuName]); // Ajoutez ceci
        } else {
            e.preventDefault();
            if (finalUrls[submenuName]) {
                closeNavbar();
                resetMenuState();
                navigate(finalUrls[submenuName]);
            } else {
                closeNavbar();
                resetMenuState();
            }
        }
    }; 

    

	const hasSubMenus = menuName => {
        return menus[menuName] || subMenus[menuName];
    }


    return (
        <header className='headerMobile'>
            
            <Link to="/" >
                <span> <img src={logo} alt="" /> </span>
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
                            onClick={handleBackNavigation}
                            style={{ color: hasSubMenus(currentSubMenuTitle || activeMenu) ? '#7874C7' : 'inherit' }}>
                                {currentSubMenuTitle || activeMenu} 
                                <img src={minus} alt="minus" />
                            </Link>
                            
                            {subMenu.map(sub => (
                                <Link 
                                    to={finalUrls[sub] || `/${slugify(sub)}`} 
                                    key={sub} 
                                    onClick={(e) => handleSubMenuClick(sub, e)}
                                    style={{ color: hasSubMenus(sub) && currentSubMenuTitle === sub ? '#7874C7' : 'inherit' }}>
                                        {sub}
                                        {generateButtonsForSubmenu(sub)}   {/* <-- Ajouté ici */}
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
