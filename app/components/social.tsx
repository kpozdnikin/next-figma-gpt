import React from 'react';

// TODO - add color!
const Social = ({ children }) => {
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
}

export default Social;