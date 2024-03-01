import './headerDesktop.scss'
import Logo from '../../../assets/logoMDS.svg'; 
import Menu from './Menu'; 
import SearchIcon from '../../../assets/loupe.svg'; 
import PhoneIcon from '../../../assets/mobile.svg'; 
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