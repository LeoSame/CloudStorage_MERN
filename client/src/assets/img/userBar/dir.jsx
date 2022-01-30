import React from 'react';

export const dir = (color = '#afafaf', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 13'>
    <path
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14.5.5h-4l-2,2h-7a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h13a1,1,0,0,0,1-1V1.5A1,1,0,0,0,14.5.5Z'
    ></path>
  </svg>
);
