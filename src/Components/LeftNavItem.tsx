import React from 'react';
import PropTypes from 'prop-types';

const LeftNavItem = ({ icon, children }) => {
  return (
    <div className="LeftNavItem">
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{children}</span>
    </div>
  );
};

LeftNavItem.propTypes = {
  icon: PropTypes.element, // Accepts a React element for the icon
  children: PropTypes.node.isRequired, // Text or other children elements
};

export default LeftNavItem;
