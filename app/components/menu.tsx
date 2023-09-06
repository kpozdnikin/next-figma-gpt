import React from 'react';

const Menu = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        paddingBottom: 0,
        width: 490,
        height: 20,
      }}
    >{children}</div>
  );
};

export default Menu;