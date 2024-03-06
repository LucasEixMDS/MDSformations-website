import './headerDesktop.scss'
import Logo from '../../../assets/logoMDS.svg'; 
import Menu from './Menu'; 
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='HeaderDesktop'>
      <div className='content'>
        <div className='brand'>
          <Link to="/">
            <img src={Logo} alt="Logo du centre de formation" />
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
