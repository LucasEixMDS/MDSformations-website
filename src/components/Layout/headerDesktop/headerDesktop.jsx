import './headerDesktop.scss'
import Logo from '../../../assets/logoMDS.svg'; // Supposons que nous avons un fichier Logo.js
import Menu from './Menu'; // Le composant Menu que nous venons de créer
import SearchIcon from '../../../assets/loupe.svg'; // Supposons que nous avons un fichier SearchIcon.js
import PhoneIcon from '../../../assets/mobile.svg'; // Supposons que nous avons un fichier PhoneIcon.js

const Header = () => {
  return (
    <header className='HeaderDesktop'>
      <img src={Logo} alt="Logo du centre de formation" />
      <Menu />
    <img src={SearchIcon} alt="Logo du centre de formation" />
     <img src={PhoneIcon} alt="Logo du centre de formation" />
    </header>
  );
};

export default Header;