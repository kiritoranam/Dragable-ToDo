// src/components/Flag.js
import React from 'react';

const Flag = () => {
  return (
    <div style={{ width: '450px', height: '300px', border: '1px solid black', position: 'relative' }}>
      {/* Saffron stripe */}
      <div style={{ backgroundColor: '#FF9933', width: '100%', height: '33.33%' }}></div>
      {/* White stripe with Ashoka Chakra */}
      <div style={{ backgroundColor: 'white', width: '100%', height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '3px solid #000080',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #000080 0deg, transparent 12deg)',
              transform: 'rotate(45deg)',
            }}
          ></div>
        </div>
      </div>
      {/* Green stripe */}
      <div style={{ backgroundColor: '#138808', width: '100%', height: '33.33%' }}></div>
    </div>
  );
};

export default Flag;
