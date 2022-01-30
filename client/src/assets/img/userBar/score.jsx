import React from 'react';

export const score = (color = '#afafaf', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 14'>
    <path
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12.5,2.5v-1a1,1,0,0,0-1-1H1.5a1,1,0,0,0-1,1v11a1,1,0,0,0,1,1h13a1,1,0,0,0,1-1v-9a1,1,0,0,0-1-1H.5'
    ></path>
    <circle fill='none' stroke={color} strokeLinecap='round' strokeLinejoin='round' cx='12' cy='8' r='0.5'></circle>
  </svg>
);
