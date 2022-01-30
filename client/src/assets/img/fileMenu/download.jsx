import React from 'react';

export const download = (color = '#787e83', width = 24, height = 24) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fill={color} fillRule='nonzero'>
      <path d='M11 4.5a.5.5 0 1 1 1 0v12a.5.5 0 1 1-1 0v-12z'></path>
      <path d='M14.146 13.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708-.708l3-3z'></path>
      <path d='M8.854 13.146a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3zM19.5 19a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1h15z'></path>
    </g>
  </svg>
);
