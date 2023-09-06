import React from 'react';

const Item = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      paddingBottom: 0,
      width: 75,
      height: 20,
    }}
  >
    {children}
  </div>
);

export default Item;