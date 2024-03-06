import { useState } from 'react';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import PhoneIcon from '../../../assets/mobile.svg'; 
import './headerDesktop.scss'

const Menu = () => {
  const [{openedSubmenu, ref}, setOpenedSubmenu] = useState({});

  const createHandleOpen = title => ref => setOpenedSubmenu({openedSubmenu: title, ref});

  const handleClose = () => setOpenedSubmenu({openedSubmenu: null, ref: null});

  return (
    <nav>
      <MenuItem
        title="Nos formations"
        onOpen={createHandleOpen('Nos formations')}
      />
      <MenuItem
        title="Orientation"
        onOpen={createHandleOpen('Orientation')}
      />
      <MenuItem
        title="Accompagnement"
        onOpen={createHandleOpen('Accompagnement')}
      />
      <MenuItem
        title="Chez MDS"
        onOpen={createHandleOpen('Chez MDS')}
      />
      <div className='phone'>
        <img src={PhoneIcon} alt="Logo du centre de formation" />
      </div>
      {openedSubmenu && <SubMenu anchorRef={ref} title={openedSubmenu} onClose={handleClose} />}
    </nav>
  );
};

export default Menu;
