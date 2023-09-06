import React from 'react';

const HeaderWrap: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        paddingBottom: 0,
        width: 1152,
        height: 41,
      }}
    >{children}</div>
  );
}

export default HeaderWrap;