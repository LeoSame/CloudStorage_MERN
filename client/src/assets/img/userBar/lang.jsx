import React from 'react';

export const lang = (color = '#afafaf', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
    <g>
      <circle stroke={color} fill='none' strokeLinecap='round' strokeLinejoin='round' cx='8' cy='8' r='7.5'></circle>
      <line
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        x1='1.25'
        y1='5.5'
        x2='14.75'
        y2='5.5'
      ></line>
      <line
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        x1='1.25'
        y1='10.5'
        x2='14.75'
        y2='10.5'
      ></line>
      <path
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillRule='evenodd'
        d='M8,.57A8.08,8.08,0,0,0,4.5,7.5a10.11,10.11,0,0,0,3.34,7.93'
      ></path>
      <path
        stroke={color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillRule='evenodd'
        d='M8,.57A8.08,8.08,0,0,1,11.5,7.5a10.11,10.11,0,0,1-3.34,7.93'
      ></path>
    </g>
  </svg>
);
