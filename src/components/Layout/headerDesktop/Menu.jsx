import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import './headerDesktop.scss'

const Menu = () => {
  return (
    <nav>
      <MenuItem title="Nos formations">
        <SubMenu title="Nos formations" />
      </MenuItem>
      <MenuItem title="Orientation">
        <SubMenu title="Orientation" />
      </MenuItem>
      <MenuItem title="Articles">
        <SubMenu title="Articles" />
      </MenuItem>
      <MenuItem title="Chez MDS">
        <SubMenu title="Chez MDS"/>
      </MenuItem>
    </nav>
  );
};

export default Menu;