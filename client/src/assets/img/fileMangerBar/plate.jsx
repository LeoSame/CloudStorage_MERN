import React from 'react';

export const plate = (color = '#787e83', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h24v24H0z'></path>
      <path d='M0 0h24v24H0z'></path>
      <rect width='16' height='1' x='4' y='12' fill={color} fillRule='nonzero' rx='0.5'></rect>
      <path
        fill={color}
        fillRule='nonzero'
        d='M15 7.5v10a.5.5 0 1 1-1 0v-10a.5.5 0 1 1 1 0zm-5 0v10a.5.5 0 1 1-1 0v-10a.5.5 0 1 1 1 0z'
      ></path>
      <path stroke={color} d='M5.5 7.5h13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z'></path>
    </g>
  </svg>
);
