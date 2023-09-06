import React from 'react';

const HeaderLeft: React.FC = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      paddingBottom: 0,
      width: 641,
      height: 41,
    }}
  >{children}</div>
);

export default HeaderLeft;