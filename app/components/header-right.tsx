import React from 'react';

const HeaderRight: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(0, 0, 0, 0)', paddingBottom: 0, width: 318, height: 20 }}>
      { children }
    </div>
  );
}

export default HeaderRight;