import React from 'react';

export const goOut = (color = '#afafaf', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 15'>
    <g>
      <line
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        x1='6.5'
        y1='7.5'
        x2='15.5'
        y2='7.5'
      ></line>
      <polyline
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        points='13.5 5.5 15.5 7.5 13.5 9.5'
      ></polyline>
      <path
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.5,4.5v-3a1,1,0,0,0-1-1h-7a1,1,0,0,0-1,1v12a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-3'
      ></path>
    </g>
  </svg>
);
