import './headerDesktop.scss'
import Logo from '../../../assets/logoMDS.svg'; // Supposons que nous avons un fichier Logo.js
import Menu from './Menu'; // Le composant Menu que nous venons de créer
import SearchIcon from '../../../assets/loupe.svg'; // Supposons que nous avons un fichier SearchIcon.js
import PhoneIcon from '../../../assets/mobile.svg'; // Supposons que nous avons un fichier PhoneIcon.js
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='HeaderDesktop'>
      <Link to="/">
      <img src={Logo} alt="Logo du centre de formation d" />
      </Link>
      <Menu />
      <img src={SearchIcon} alt="Logo du centre de formation" />
     <img src={PhoneIcon} alt="Logo du centre de formation" />
    </header>
  );
};

export default Header;