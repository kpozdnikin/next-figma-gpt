import React from 'react';

// TODO - add color!
const MenuLabel = ({ children }) => {
  return (
    <span
      style={{
        display: 'flex',
        color: "#ffff",
        flexDirection: 'column',
        backgroundColor: 'inherit',
        paddingBottom: 0,
        height: 20,
      }}
    >
      {children}
    </span>
  );
};

export default MenuLabel;