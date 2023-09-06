import React from 'react';

const Logo = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        paddingBottom: 0,
        width: 111,
        height: 41,
      }}
    >
      {children}
    </div>
  );
};

export default Logo;