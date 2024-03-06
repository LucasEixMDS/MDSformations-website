
import { getMenuData } from './menuData'; 
import PropTypes from "prop-types";
import './SubMenu.scss';
import { useEffect, useState } from 'react';
import { finalUrls } from 'utils/routingUtils';
import { Link } from 'react-router-dom';

const SubMenu = ({ title, anchorRef, onClose }) => {
  const menuData = getMenuData(title);

  const [openedSubmenu, setOpenedSubmenu] = useState(null);

  useEffect(() => {
    setOpenedSubmenu(null);
  }, [title]);

  if (!menuData || !menuData.items) {
    return null;
  }

  const left = anchorRef.current ? (anchorRef.current.offsetLeft - 260 - 80) : 0;
  return (
    <div className="sub-menu" style={{ left }} onMouseLeave={onClose}>
      <div className="sub-menu-content">
        <div className="sub-menu-image">
          <img src={menuData.imageUrl} alt={title} />
        </div>
        <div className="sub-menu-items">
          <div className="sub-menu-item selected">
            {title}
          </div>
          {menuData.items.map(item => {
            const selected = openedSubmenu?.label === item.label;
            return (
              <div key={item.label} className={"sub-menu-item button" + (selected ? ' selected' : '')} onClick={() => setOpenedSubmenu(item)}>
                {item.label}
                {selected ? ' -' : ' +'}
              </div>
            )
          })}
        </div>
        <div className='divider' />
        <div className="sub-menu-details">
          {openedSubmenu && openedSubmenu.details.map(detail => {
            return (
            <Link key={detail} className="sub-menu-item button" to={finalUrls[detail]} onClick={onClose}>
              {detail}
            </Link>
          )})}
        </div>
      </div>
    </div>
  );
};

SubMenu.propTypes = {
  title: PropTypes.string.isRequired,
  anchorRef: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SubMenu;
