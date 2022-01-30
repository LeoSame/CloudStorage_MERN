import React from 'react';

export const tarif = (color = '#afafaf', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 15'>
    <g>
      <rect
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        x='0.5'
        y='0.5'
        width='14'
        height='14'
        rx='1'
      ></rect>
      <polyline
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        points='3.5 7.5 6.5 10.5 11.5 5.5'
      ></polyline>
    </g>
  </svg>
);
