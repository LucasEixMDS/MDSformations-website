// SubMenu.js
// SubMenu.jsx
import { getMenuData } from './menuData'; // Assurez-vous que le chemin est correct
import PropTypes from "prop-types";

const SubMenu = ({ title }) => {
  const menuData = getMenuData(title);

  if (!menuData || !menuData.items) {
    return null;
  }

  return (
    <div className="sub-menu">
      <div className="sub-menu-content">
        <div className="menu-image">
          <img src={menuData.imageUrl} alt={title} />
        </div>
        <div className="menu-items">
          {menuData.items.map((item) => (
            <div key={item.label} className="menu-item">
              {item.label}
              <div className="menu-item-details">
                {item.details.map((detail) => (
                  <div key={detail} className="menu-detail">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SubMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubMenu;